import type { MissionResult, Progress } from '../types';

/**
 * One row of the Supabase `progress` table. XP is not stored — it is always
 * derived from the completed missions so it can never drift or double-count.
 */
export interface ProgressRow {
  user_id: string;
  mission_id: string;
  stars: number;
  correct: number;
  total: number;
  updated_at?: string;
}

/** XP is a pure function of progress: 10 points per correct answer, best kept. */
export function deriveXp(completed: Progress['completed']): number {
  return Object.values(completed).reduce((sum, r) => sum + r.correct * 10, 0);
}

/** Keep the better of two results for the same mission (monotonic, never worse). */
function bestResult(a: MissionResult, b: MissionResult): MissionResult {
  return {
    stars: Math.max(a.stars, b.stars),
    correct: Math.max(a.correct, b.correct),
    total: Math.max(a.total, b.total),
  };
}

/**
 * Merge two progress snapshots. For every mission we keep the best result from
 * either side; XP is recomputed from the merged missions. The merge is
 * commutative and idempotent, so running it on every sign-in / reconnect is
 * safe: empty or older data can never overwrite better progress, and XP is
 * never double-counted.
 */
export function mergeProgress(a: Progress, b: Progress): Progress {
  const completed: Progress['completed'] = {};
  const ids = new Set([...Object.keys(a.completed), ...Object.keys(b.completed)]);
  for (const id of ids) {
    const ra = a.completed[id];
    const rb = b.completed[id];
    if (ra && rb) completed[id] = bestResult(ra, rb);
    else completed[id] = ra ?? rb;
  }
  return { xp: deriveXp(completed), completed };
}

/** A progress row as read back from Supabase (user_id is implied by the query). */
export type ProgressRowRead = Omit<ProgressRow, 'user_id' | 'updated_at'>;

/** Turn Supabase rows into the app's Progress shape (XP derived). */
export function rowsToProgress(rows: ProgressRowRead[]): Progress {
  const completed: Progress['completed'] = {};
  for (const row of rows) {
    completed[row.mission_id] = {
      stars: row.stars,
      correct: row.correct,
      total: row.total,
    };
  }
  return { xp: deriveXp(completed), completed };
}

/** Turn the app's Progress into upsertable Supabase rows for a given user. */
export function progressToRows(userId: string, progress: Progress): ProgressRow[] {
  return Object.entries(progress.completed).map(([mission_id, r]) => ({
    user_id: userId,
    mission_id,
    stars: r.stars,
    correct: r.correct,
    total: r.total,
  }));
}
