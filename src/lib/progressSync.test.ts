import { describe, expect, it } from 'vitest';
import type { Progress } from '../types';
import {
  deriveXp,
  mergeProgress,
  progressToRows,
  rowsToProgress,
  type ProgressRow,
} from './progressSync';

const empty: Progress = { xp: 0, completed: {} };

function make(completed: Progress['completed']): Progress {
  return { xp: deriveXp(completed), completed };
}

describe('deriveXp', () => {
  it('is 10 points per correct answer across missions', () => {
    expect(
      deriveXp({
        m1: { stars: 3, correct: 4, total: 4 },
        m2: { stars: 1, correct: 2, total: 5 },
      }),
    ).toBe(60);
  });
});

describe('mergeProgress', () => {
  it('keeps the better result per mission and recomputes XP', () => {
    const local = make({ m1: { stars: 2, correct: 3, total: 4 } });
    const cloud = make({ m1: { stars: 3, correct: 4, total: 4 } });
    const merged = mergeProgress(local, cloud);
    expect(merged.completed.m1).toEqual({ stars: 3, correct: 4, total: 4 });
    expect(merged.xp).toBe(40);
  });

  it('unions missions from both sides (two devices)', () => {
    const deviceA = make({ m1: { stars: 3, correct: 4, total: 4 } });
    const deviceB = make({ m2: { stars: 2, correct: 3, total: 5 } });
    const merged = mergeProgress(deviceA, deviceB);
    expect(Object.keys(merged.completed).sort()).toEqual(['m1', 'm2']);
    expect(merged.xp).toBe(70); // (4 + 3) * 10
  });

  it('never lets empty cloud wipe local progress', () => {
    const local = make({ m1: { stars: 3, correct: 4, total: 4 } });
    expect(mergeProgress(local, empty)).toEqual(local);
  });

  it('never lets older/worse data overwrite better progress', () => {
    const better = make({ m1: { stars: 3, correct: 4, total: 4 } });
    const worse = make({ m1: { stars: 1, correct: 1, total: 4 } });
    expect(mergeProgress(better, worse).completed.m1).toEqual({
      stars: 3,
      correct: 4,
      total: 4,
    });
  });

  it('is commutative', () => {
    const a = make({ m1: { stars: 2, correct: 3, total: 4 } });
    const b = make({ m1: { stars: 3, correct: 2, total: 4 }, m2: { stars: 1, correct: 1, total: 2 } });
    expect(mergeProgress(a, b)).toEqual(mergeProgress(b, a));
  });

  it('is idempotent — re-merging never double-counts XP', () => {
    const a = make({ m1: { stars: 3, correct: 4, total: 4 } });
    const b = make({ m1: { stars: 2, correct: 4, total: 4 }, m2: { stars: 2, correct: 3, total: 5 } });
    const once = mergeProgress(a, b);
    const twice = mergeProgress(once, b);
    expect(twice).toEqual(once);
    expect(twice.xp).toBe(70);
  });
});

describe('row conversion round-trips', () => {
  it('rowsToProgress derives XP and keeps results', () => {
    const rows: ProgressRow[] = [
      { user_id: 'u1', mission_id: 'm1', stars: 3, correct: 4, total: 4 },
      { user_id: 'u1', mission_id: 'm2', stars: 1, correct: 2, total: 5 },
    ];
    const progress = rowsToProgress(rows);
    expect(progress.xp).toBe(60);
    expect(progress.completed.m2).toEqual({ stars: 1, correct: 2, total: 5 });
  });

  it('progressToRows then rowsToProgress is a faithful round-trip', () => {
    const progress = make({
      m1: { stars: 3, correct: 4, total: 4 },
      m2: { stars: 1, correct: 2, total: 5 },
    });
    const rows = progressToRows('u1', progress);
    expect(rows).toHaveLength(2);
    expect(rows.every((r) => r.user_id === 'u1')).toBe(true);
    expect(rowsToProgress(rows)).toEqual(progress);
  });
});
