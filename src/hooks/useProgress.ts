import { useCallback, useEffect, useState } from 'react';
import type { MissionResult, Progress } from '../types';
import { earnedBadgeIds } from '../data/badges';

// Where we store progress in the browser. The "-v1" makes it easy to change
// the shape later without breaking older saves.
const STORAGE_KEY = 'it-quest-progress-v1';

const EMPTY_PROGRESS: Progress = {
  xp: 0,
  completed: {},
  bestStreak: 0,
  badges: [],
};

/** Read saved progress from localStorage, falling back to a fresh empty state. */
function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<Progress>;
    // Basic safety check so a corrupted value never crashes the game.
    if (typeof parsed.xp !== 'number' || typeof parsed.completed !== 'object') {
      return EMPTY_PROGRESS;
    }
    // Fill in fields that older saves may not have had.
    return {
      xp: parsed.xp,
      completed: parsed.completed ?? {},
      bestStreak: parsed.bestStreak ?? 0,
      badges: parsed.badges ?? [],
    };
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
   * for that mission and add XP only for the improvement over what was already
   * earned, so replaying a mission can never farm the same XP twice.
   *
   * XP for a run is 10 per correct answer plus any timed-mode speed bonus.
   */
  const completeMission = useCallback(
    (missionId: string, result: MissionResult) => {
      setProgress((prev) => {
        const previous = prev.completed[missionId];
        const bestStars = Math.max(previous?.stars ?? 0, result.stars);
        // XP already granted for this mission (older saves may predate
        // xpAwarded, so fall back to the base value from their correct count).
        const previousXp =
          previous?.xpAwarded ?? (previous ? previous.correct * 10 : 0);
        const runXp = result.correct * 10 + (result.bonusXp ?? 0);
        const awardedXp = Math.max(previousXp, runXp);
        const gained = awardedXp - previousXp;
        const bestStreak = Math.max(prev.bestStreak, result.runStreak ?? 0);

        // Build the updated progress first, then recompute badges from it so
        // achievements always reflect the true, saved state.
        const next: Progress = {
          ...prev,
          xp: prev.xp + gained,
          bestStreak,
          completed: {
            ...prev.completed,
            [missionId]: {
              stars: bestStars,
              correct: Math.max(previous?.correct ?? 0, result.correct),
              total: result.total,
              xpAwarded: awardedXp,
              // Keep the best speed bonus so the "Speed Demon" badge sticks.
              bonusXp: Math.max(previous?.bonusXp ?? 0, result.bonusXp ?? 0),
            },
          },
        };
        return { ...next, badges: earnedBadgeIds(next) };
      });
    },
    [],
  );

  /** Wipe all progress and start over. */
  const resetProgress = useCallback(() => {
    setProgress(EMPTY_PROGRESS);
  }, []);

  /**
   * Replace the whole progress state (used by cloud sync after merging local
   * and cloud data). The localStorage effect saves it like any other change.
   */
  const replaceProgress = useCallback((next: Progress) => {
    setProgress(next);
  }, []);

  return { progress, completeMission, resetProgress, replaceProgress };
}
