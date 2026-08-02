// Achievements the player can earn. Badges are a light, motivating reward on
// top of XP and stars — they are derived purely from saved progress, so they
// stay correct even if progress is edited or loaded from an older save.

import type { Progress } from '../types';
import { missions } from './missions';

export interface Badge {
  id: string;
  icon: string;
  name: string;
  /** Short, plain-English description of how to earn it. */
  description: string;
}

export const BADGES: Badge[] = [
  {
    id: 'rookie',
    icon: '🌱',
    name: 'First Steps',
    description: 'Finish your first mission.',
  },
  {
    id: 'perfect',
    icon: '💯',
    name: 'Perfectionist',
    description: 'Earn 3 stars on any mission.',
  },
  {
    id: 'streak',
    icon: '🔥',
    name: 'On Fire',
    description: 'Answer 5 questions correctly in a row.',
  },
  {
    id: 'speed',
    icon: '🚀',
    name: 'Speed Demon',
    description: 'Earn a speed bonus in Timed Mode.',
  },
  {
    id: 'week1',
    icon: '1️⃣',
    name: 'Week 1 Complete',
    description: 'Finish every Week 1 mission.',
  },
  {
    id: 'week2',
    icon: '2️⃣',
    name: 'Week 2 Complete',
    description: 'Finish every Week 2 mission.',
  },
  {
    id: 'week3',
    icon: '3️⃣',
    name: 'Week 3 Complete',
    description: 'Finish every Week 3 mission.',
  },
  {
    id: 'scholar',
    icon: '📚',
    name: 'Century',
    description: 'Reach 100 XP.',
  },
  {
    id: 'graduate',
    icon: '🎓',
    name: 'Graduate',
    description: 'Complete every mission in the game.',
  },
];

/** Look up a badge by id (used when displaying earned badges). */
export function getBadge(id: string): Badge | undefined {
  return BADGES.find((b) => b.id === id);
}

/** True when every mission in the given week has a saved result. */
function weekComplete(progress: Progress, week: number): boolean {
  const inWeek = missions.filter((m) => m.week === week);
  return (
    inWeek.length > 0 &&
    inWeek.every((m) => progress.completed[m.id] !== undefined)
  );
}

/**
 * Work out every badge the player has earned from their current progress.
 * This is a pure function of saved state, so it can be recomputed at any time.
 */
export function earnedBadgeIds(progress: Progress): string[] {
  const results = Object.values(progress.completed);
  const doneCount = results.length;
  const earned = new Set<string>();

  if (doneCount >= 1) earned.add('rookie');
  if (results.some((r) => r.stars === 3)) earned.add('perfect');
  if ((progress.bestStreak ?? 0) >= 5) earned.add('streak');
  if (results.some((r) => (r.bonusXp ?? 0) > 0)) earned.add('speed');
  if (weekComplete(progress, 1)) earned.add('week1');
  if (weekComplete(progress, 2)) earned.add('week2');
  if (weekComplete(progress, 3)) earned.add('week3');
  if (progress.xp >= 100) earned.add('scholar');
  if (doneCount === missions.length) earned.add('graduate');

  // Return in the canonical BADGES order so displays stay stable.
  return BADGES.filter((b) => earned.has(b.id)).map((b) => b.id);
}
