import { useState, type FormEvent } from 'react';
import type { User } from '@supabase/supabase-js';
import { Button } from './Button';
import { SyncIndicator } from './SyncIndicator';
import type { SyncStatus } from '../hooks/useCloudSync';

interface AuthPanelProps {
  enabled: boolean;
  loading: boolean;
  user: User | null;
  syncStatus: SyncStatus;
  onSignIn: (email: string) => Promise<{ error: string | null }>;
  onSignOut: () => void;
}

/**
 * Compact account box shown on the Welcome screen. Signed-out players get a
 * magic-link form; signed-in players see who they are and can sign out.
 * Renders nothing when cloud accounts aren't configured.
 */
export function AuthPanel({
  enabled,
  loading,
  user,
  syncStatus,
  onSignIn,
  onSignOut,
}: AuthPanelProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [message, setMessage] = useState('');

  if (!enabled || loading) return null;

  if (user) {
    return (
      <div className="auth-panel">
        <p className="auth-panel__who">
          Signed in as <strong>{user.email}</strong> · progress saves to your account.
        </p>
        <SyncIndicator status={syncStatus} />
        <Button variant="ghost" className="auth-panel__signout" onClick={onSignOut}>
          Sign out
        </Button>
      </div>
    );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('sending');
    const { error } = await onSignIn(email.trim());
    if (error) {
      setStatus('error');
      setMessage(error);
    } else {
      setStatus('sent');
      setMessage('Check your email for a sign-in link.');
    }
  }

  return (
    <form className="auth-panel" onSubmit={handleSubmit}>
      <label className="auth-panel__label" htmlFor="auth-email">
        Save your progress across devices (optional)
      </label>
      <div className="auth-panel__row">
        <input
          id="auth-email"
          className="auth-panel__input"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'sending'}
          required
        />
        <Button
          type="submit"
          variant="secondary"
          className="auth-panel__send"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Email me a link'}
        </Button>
      </div>
      {message && (
        <p
          className={`auth-panel__msg auth-panel__msg--${status}`}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </form>
  );
}
