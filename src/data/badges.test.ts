import { describe, expect, it } from 'vitest';
import { earnedBadgeIds } from './badges';
import { missions } from './missions';
import type { MissionResult, Progress } from '../types';

/** Build a Progress object, filling in the required fields. */
function makeProgress(overrides: Partial<Progress> = {}): Progress {
  return { xp: 0, completed: {}, bestStreak: 0, badges: [], ...overrides };
}

const result = (r: Partial<MissionResult> = {}): MissionResult => ({
  stars: 1,
  correct: 1,
  total: 1,
  ...r,
});

describe('earnedBadgeIds', () => {
  it('awards nothing for empty progress', () => {
    expect(earnedBadgeIds(makeProgress())).toEqual([]);
  });

  it('awards "rookie" after the first mission', () => {
    const progress = makeProgress({ completed: { plan: result() } });
    expect(earnedBadgeIds(progress)).toContain('rookie');
  });

  it('awards "perfect" for a 3-star mission', () => {
    const progress = makeProgress({ completed: { plan: result({ stars: 3 }) } });
    expect(earnedBadgeIds(progress)).toContain('perfect');
  });

  it('awards "streak" when the best streak reaches 5', () => {
    expect(earnedBadgeIds(makeProgress({ bestStreak: 5 }))).toContain('streak');
    expect(earnedBadgeIds(makeProgress({ bestStreak: 4 }))).not.toContain('streak');
  });

  it('awards "speed" when a bonus was earned', () => {
    const progress = makeProgress({
      completed: { time: result({ bonusXp: 3 }) },
    });
    expect(earnedBadgeIds(progress)).toContain('speed');
  });

  it('awards "scholar" at 100 XP', () => {
    expect(earnedBadgeIds(makeProgress({ xp: 100 }))).toContain('scholar');
    expect(earnedBadgeIds(makeProgress({ xp: 99 }))).not.toContain('scholar');
  });

  it('awards a week badge only when every mission in that week is done', () => {
    const week1 = missions.filter((m) => m.week === 1);
    const completed: Progress['completed'] = {};
    // Finish all but one Week 1 mission: no badge yet.
    for (const m of week1.slice(0, -1)) completed[m.id] = result();
    expect(earnedBadgeIds(makeProgress({ completed }))).not.toContain('week1');
    // Finish the last one: badge earned.
    completed[week1[week1.length - 1].id] = result();
    expect(earnedBadgeIds(makeProgress({ completed }))).toContain('week1');
  });

  it('awards "graduate" only when every mission is complete', () => {
    const completed: Progress['completed'] = {};
    for (const m of missions) completed[m.id] = result();
    expect(earnedBadgeIds(makeProgress({ completed }))).toContain('graduate');
  });
});
