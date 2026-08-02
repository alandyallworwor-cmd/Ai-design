import { useEffect, useMemo, useRef, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import type { Progress } from '../types';
import { supabase } from '../lib/supabase';
import {
  mergeProgress,
  progressToRows,
  rowsToProgress,
} from '../lib/progressSync';

/** Friendly, user-facing sync states. No database details are ever surfaced. */
export type SyncStatus =
  | 'idle' // signed out / cloud not configured — nothing to sync
  | 'loading' // fetching cloud progress on first sign-in
  | 'syncing' // pushing local changes up
  | 'synced' // everything is up to date
  | 'offline' // no connection; changes are kept locally and retried later
  | 'error'; // a sync attempt failed; will retry

/** A stable signature of the meaningful progress (used to skip redundant pushes). */
function signature(progress: Progress): string {
  return JSON.stringify(
    Object.keys(progress.completed)
      .sort()
      .map((id) => [id, progress.completed[id]]),
  );
}

interface UseCloudSyncArgs {
  user: User | null;
  progress: Progress;
  replaceProgress: (next: Progress) => void;
}

/**
 * Keeps the signed-in user's progress in sync with Supabase.
 *
 * - First sign-in: pull cloud progress, merge with local (best-of, never
 *   destructive), apply the merge locally, then push it up.
 * - Later local changes: push up (the server-side guard keeps the best, so
 *   out-of-order pushes from two devices can't cause a regression).
 * - Offline / errors: changes stay in localStorage and are re-pushed when the
 *   connection returns. Sign-out stops syncing without deleting anything.
 */
export function useCloudSync({ user, progress, replaceProgress }: UseCloudSyncArgs) {
  const [status, setStatus] = useState<SyncStatus>('idle');

  // Refs so async work always reads the latest values without re-subscribing.
  const progressRef = useRef(progress);
  progressRef.current = progress;
  const syncedUserRef = useRef<string | null>(null);
  const lastPushedSigRef = useRef<string | null>(null);
  const replaceRef = useRef(replaceProgress);
  replaceRef.current = replaceProgress;

  // Re-run the sync effect when connectivity returns.
  const [netTick, setNetTick] = useState(0);
  useEffect(() => {
    const online = () => setNetTick((t) => t + 1);
    const offline = () => setStatus('offline');
    window.addEventListener('online', online);
    window.addEventListener('offline', offline);
    return () => {
      window.removeEventListener('online', online);
      window.removeEventListener('offline', offline);
    };
  }, []);

  const sig = useMemo(() => signature(progress), [progress]);

  useEffect(() => {
    // Signed out or cloud not configured: idle, and forget the initialised user
    // so a future sign-in merges cleanly. Nothing local or remote is deleted.
    if (!supabase || !user) {
      syncedUserRef.current = null;
      lastPushedSigRef.current = null;
      setStatus('idle');
      return;
    }

    const client = supabase;
    const userId = user.id;
    let cancelled = false;

    const pushCurrent = async () => {
      const current = progressRef.current;
      const currentSig = signature(current);
      if (lastPushedSigRef.current === currentSig) {
        setStatus('synced');
        return;
      }
      if (!navigator.onLine) {
        setStatus('offline');
        return;
      }
      const rows = progressToRows(userId, current);
      if (rows.length === 0) {
        lastPushedSigRef.current = currentSig;
        setStatus('synced');
        return;
      }
      setStatus('syncing');
      try {
        const { error } = await client
          .from('progress')
          .upsert(rows, { onConflict: 'user_id,mission_id' });
        if (cancelled) return;
        if (error) {
          setStatus(navigator.onLine ? 'error' : 'offline');
          return;
        }
        lastPushedSigRef.current = currentSig;
        setStatus('synced');
      } catch {
        if (!cancelled) setStatus(navigator.onLine ? 'error' : 'offline');
      }
    };

    const run = async () => {
      // One-time merge on first sign-in for this user.
      if (syncedUserRef.current !== userId) {
        if (!navigator.onLine) {
          setStatus('offline');
          return;
        }
        setStatus('loading');
        try {
          const { data, error } = await client
            .from('progress')
            .select('mission_id, stars, correct, total')
            .eq('user_id', userId);
          if (cancelled) return;
          if (error) {
            setStatus(navigator.onLine ? 'error' : 'offline');
            return;
          }
          const merged = mergeProgress(progressRef.current, rowsToProgress(data ?? []));
          syncedUserRef.current = userId;
          lastPushedSigRef.current = null;
          // Applying the merge re-runs this effect (progress changes); the push
          // then happens on that run. If nothing changed, push right now.
          if (signature(merged) !== signature(progressRef.current)) {
            replaceRef.current(merged);
            return;
          }
        } catch {
          if (!cancelled) setStatus(navigator.onLine ? 'error' : 'offline');
          return;
        }
      }
      await pushCurrent();
    };

    void run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id, sig, netTick]);

  return { status };
}
