import { useState } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import type { User } from '@supabase/supabase-js';
import type { Progress } from '../types';
import { useCloudSync } from './useCloudSync';

// Controllable fake Supabase client.
const state = vi.hoisted(() => ({
  cloudRows: [] as Array<Record<string, unknown>>,
  upserted: [] as Array<Record<string, unknown>[]>,
  selectError: null as unknown,
  upsertError: null as unknown,
}));

vi.mock('../lib/supabase', () => ({
  isSupabaseConfigured: true,
  supabase: {
    from: () => ({
      select: () => ({
        eq: () =>
          Promise.resolve({ data: state.cloudRows, error: state.selectError }),
      }),
      upsert: (rows: Record<string, unknown>[]) => {
        state.upserted.push(rows);
        return Promise.resolve({ error: state.upsertError });
      },
    }),
  },
}));

const fakeUser = { id: 'user-1', email: 'a@b.com' } as User;

/** Harness so `replaceProgress` actually updates the progress fed to the hook. */
function useHarness(user: User | null, initial: Progress) {
  const [progress, setProgress] = useState(initial);
  const { status } = useCloudSync({ user, progress, replaceProgress: setProgress });
  return { status, progress };
}

beforeEach(() => {
  state.cloudRows = [];
  state.upserted = [];
  state.selectError = null;
  state.upsertError = null;
  vi.spyOn(navigator, 'onLine', 'get').mockReturnValue(true);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('useCloudSync', () => {
  it('is idle and non-destructive when signed out', async () => {
    const local: Progress = {
      xp: 40,
      completed: { m1: { stars: 3, correct: 4, total: 4 } },
    };
    const { result } = renderHook(() => useHarness(null, local));
    expect(result.current.status).toBe('idle');
    expect(state.upserted).toHaveLength(0); // nothing pushed, nothing deleted
    expect(result.current.progress).toEqual(local); // local untouched
  });

  it('merges local + cloud on first sign-in, then pushes and reports synced', async () => {
    state.cloudRows = [{ mission_id: 'm2', stars: 2, correct: 3, total: 5 }];
    const local: Progress = {
      xp: 40,
      completed: { m1: { stars: 3, correct: 4, total: 4 } },
    };
    const { result } = renderHook(() => useHarness(fakeUser, local));

    await waitFor(() => expect(result.current.status).toBe('synced'));

    // Local now holds the union of both devices, XP recomputed (no double count).
    expect(Object.keys(result.current.progress.completed).sort()).toEqual(['m1', 'm2']);
    expect(result.current.progress.xp).toBe(70);
    // The merged state was pushed up.
    const lastPush = state.upserted[state.upserted.length - 1];
    expect(lastPush.map((r: Record<string, unknown>) => r.mission_id).sort()).toEqual([
      'm1',
      'm2',
    ]);
  });

  it('goes offline (not error) and pushes nothing when connection is down', async () => {
    vi.spyOn(navigator, 'onLine', 'get').mockReturnValue(false);
    const local: Progress = {
      xp: 40,
      completed: { m1: { stars: 3, correct: 4, total: 4 } },
    };
    const { result } = renderHook(() => useHarness(fakeUser, local));

    await waitFor(() => expect(result.current.status).toBe('offline'));
    expect(state.upserted).toHaveLength(0);
    expect(result.current.progress).toEqual(local); // nothing lost
  });

  it('returns to idle on sign-out without deleting progress', async () => {
    const local: Progress = {
      xp: 40,
      completed: { m1: { stars: 3, correct: 4, total: 4 } },
    };
    const { result, rerender } = renderHook(
      ({ user }: { user: User | null }) => useHarness(user, local),
      { initialProps: { user: fakeUser as User | null } },
    );
    await waitFor(() => expect(result.current.status).toBe('synced'));

    rerender({ user: null });
    expect(result.current.status).toBe('idle');
    expect(result.current.progress.completed.m1).toEqual({ stars: 3, correct: 4, total: 4 });
  });
});
