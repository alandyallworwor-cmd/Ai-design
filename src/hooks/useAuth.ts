import { useCallback, useEffect, useState } from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { isSupabaseConfigured, supabase } from '../lib/supabase';

interface AuthState {
  /** Whether cloud accounts are available at all (env vars present). */
  enabled: boolean;
  /** True until the initial session check finishes. */
  loading: boolean;
  session: Session | null;
  user: User | null;
}

/**
 * Tracks the signed-in Supabase user and exposes magic-link sign-in / sign-out.
 * When Supabase isn't configured it reports `enabled: false` and the UI simply
 * hides the account features — the game itself keeps working.
 */
export function useAuth() {
  const [state, setState] = useState<AuthState>({
    enabled: isSupabaseConfigured,
    loading: isSupabaseConfigured,
    session: null,
    user: null,
  });

  useEffect(() => {
    if (!supabase) return;

    // Read any existing session on load...
    supabase.auth.getSession().then(({ data }) => {
      setState((s) => ({
        ...s,
        loading: false,
        session: data.session,
        user: data.session?.user ?? null,
      }));
    });

    // ...then keep in sync with sign-in / sign-out events.
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setState((s) => ({
        ...s,
        loading: false,
        session,
        user: session?.user ?? null,
      }));
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  /** Email the player a one-tap magic sign-in link. */
  const signInWithEmail = useCallback(async (email: string) => {
    if (!supabase) return { error: 'Cloud sign-in is not available right now.' };
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin },
    });
    return { error: error?.message ?? null };
  }, []);

  const signOut = useCallback(async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
  }, []);

  return { ...state, signInWithEmail, signOut };
}
