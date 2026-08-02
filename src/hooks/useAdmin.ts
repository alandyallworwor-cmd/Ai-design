import { useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

/**
 * Reports whether the signed-in user is an administrator, by reading the
 * client-safe `is_admin` flag on their own profile row (RLS lets a user read
 * only their own profile). This flag is for UI gating only — the real security
 * boundary is the Supabase RLS on the weekly tables, which re-checks admin
 * status server-side on every write.
 */
export function useAdmin(user: User | null) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!supabase || !user) {
      setIsAdmin(false);
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    supabase
      .from('profiles')
      .select('is_admin')
      .eq('id', user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (cancelled) return;
        setIsAdmin(Boolean(data?.is_admin));
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [user?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  return { isAdmin, loading };
}
