import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Public client values. These are safe to expose in the browser — Row-Level
// Security is what actually protects the data. They come from env vars so no
// values ever live in the repo. See .env.example / WORKFLOW.md.
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

/**
 * True only when both env vars are set. When false (e.g. local tests, or before
 * Vercel env vars are configured) the game still works fully — auth and cloud
 * sync just stay switched off instead of crashing.
 */
export const isSupabaseConfigured = Boolean(url && anonKey);

/** The shared Supabase client, or null when it isn't configured. */
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url as string, anonKey as string)
  : null;
