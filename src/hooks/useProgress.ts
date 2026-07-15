import { useCallback, useEffect, useState } from 'react';
import type { MissionResult, Progress } from '../types';

// Where we store progress in the browser. The "-v1" makes it easy to change
// the shape later without breaking older saves.
const STORAGE_KEY = 'it-quest-progress-v1';

const EMPTY_PROGRESS: Progress = { xp: 0, completed: {} };

/** Read saved progress from localStorage, falling back to a fresh empty state. */
function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_PROGRESS;
    const parsed = JSON.parse(raw) as Progress;
    // Basic safety check so a corrupted value never crashes the game.
    if (typeof parsed.xp !== 'number' || typeof parsed.completed !== 'object') {
      return EMPTY_PROGRESS;
    }
    return parsed;
  } catch {
    // If anything goes wrong reading storage, just start fresh.
    return EMPTY_PROGRESS;
  }
}

/**
 * Manages the player's progress (XP and completed missions) and keeps it
 * saved in localStorage so it survives a page refresh.
 */
export function useProgress() {
  const [progress, setProgress] = useState<Progress>(loadProgress);

  // Save to localStorage whenever progress changes.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Storage can fail (e.g. private mode). The game still works this session.
    }
  }, [progress]);

  /**
   * Record the result of a finished mission. We keep the player's BEST result
   * for that mission and add XP only for their new correct answers this run.
   */
  const completeMission = useCallback(
    (missionId: string, result: MissionResult) => {
      setProgress((prev) => {
        const previous = prev.completed[missionId];
        const bestStars = Math.max(previous?.stars ?? 0, result.stars);
        // XP is 10 points per correct answer; only award the improvement.
        const previousCorrect = previous?.correct ?? 0;
        const gained = Math.max(0, result.correct - previousCorrect) * 10;
        return {
          xp: prev.xp + gained,
          completed: {
            ...prev.completed,
            [missionId]: {
              stars: bestStars,
              correct: Math.max(previousCorrect, result.correct),
              total: result.total,
            },
          },
        };
      });
    },
    [],
  );

  /** Wipe all progress and start over. */
  const resetProgress = useCallback(() => {
    setProgress(EMPTY_PROGRESS);
  }, []);

  return { progress, completeMission, resetProgress };
}
