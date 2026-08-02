// Builds a short, friendly summary of the player's results and shares it using
// the Web Share API where available, falling back to the clipboard. Everything
// degrades gracefully so it is safe to call anywhere.

import { BADGES, getBadge } from '../data/badges';
import { missions } from '../data/missions';
import type { Progress } from '../types';

/** Build the plain-text results summary that gets shared or copied. */
export function buildShareText(progress: Progress): string {
  const totalStars = missions.reduce(
    (sum, m) => sum + (progress.completed[m.id]?.stars ?? 0),
    0,
  );
  const maxStars = missions.length * 3;
  const doneCount = Object.keys(progress.completed).length;
  const badgeIcons = progress.badges
    .map((id) => getBadge(id)?.icon ?? '')
    .join('');

  return [
    '🎓 IT Quest — my results',
    `✅ ${doneCount}/${missions.length} missions · ⭐ ${progress.xp} XP · 🌟 ${totalStars}/${maxStars} stars`,
    `🔥 Best streak: ${progress.bestStreak} · 🏅 Badges ${progress.badges.length}/${BADGES.length} ${badgeIcons}`.trim(),
    'Learning IT Work Skills: ICTICT313, BSBXTW301 & ICTSAS305',
  ].join('\n');
}

export type ShareOutcome = 'shared' | 'copied' | 'unsupported';

/**
 * Share the results. Tries the native share sheet first, then the clipboard.
 * Returns what actually happened so the UI can show the right message.
 */
export async function shareResults(progress: Progress): Promise<ShareOutcome> {
  const text = buildShareText(progress);
  const nav = typeof navigator !== 'undefined' ? navigator : undefined;

  if (nav && typeof nav.share === 'function') {
    try {
      await nav.share({ title: 'IT Quest results', text });
      return 'shared';
    } catch (err) {
      // If the user cancelled the share sheet, treat it as done (don't copy).
      if (err instanceof DOMException && err.name === 'AbortError') {
        return 'shared';
      }
      // Otherwise fall through and try the clipboard instead.
    }
  }

  if (nav?.clipboard && typeof nav.clipboard.writeText === 'function') {
    try {
      await nav.clipboard.writeText(text);
      return 'copied';
    } catch {
      return 'unsupported';
    }
  }

  return 'unsupported';
}
