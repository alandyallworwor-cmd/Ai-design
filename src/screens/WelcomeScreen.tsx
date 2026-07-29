import { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { AuthPanel } from '../components/AuthPanel';
import type { useAuth } from '../hooks/useAuth';
import type { SyncStatus } from '../hooks/useCloudSync';

interface WelcomeScreenProps {
  onStart: () => void;
  auth: ReturnType<typeof useAuth>;
  syncStatus: SyncStatus;
}

// How many taps on the badge reveal the hidden sign-in box.
const TAPS_TO_REVEAL = 5;

/** The first screen: a catchy title and a short, friendly explanation. */
export function WelcomeScreen({ onStart, auth, syncStatus }: WelcomeScreenProps) {
  // The sign-in box is hidden from students. It is revealed only for the admin:
  // by tapping the laptop badge a few times, or by opening the page with a
  // "#login" hash in the address bar (handy to bookmark).
  const [revealed, setRevealed] = useState(false);
  const [taps, setTaps] = useState(0);

  useEffect(() => {
    if (window.location.hash.toLowerCase() === '#login') setRevealed(true);
  }, []);

  function tapBadge() {
    setTaps((count) => {
      const next = count + 1;
      if (next >= TAPS_TO_REVEAL) setRevealed(true);
      return next;
    });
  }

  // Always show the panel once signed in, so the admin can see their account
  // and sign out; otherwise only show it after the secret reveal.
  const showLogin = revealed || auth.user !== null;

  return (
    <main className="screen welcome">
      {/* The badge doubles as a hidden trigger for the admin sign-in. */}
      <div className="welcome__badge" aria-hidden="true" onClick={tapBadge}>
        💻
      </div>
      <h1 className="welcome__title">IT Quest</h1>
      <p className="welcome__tagline">Plan · Build · Test</p>
      <p className="welcome__intro">
        You are a new junior IT worker. Complete short missions to learn about
        teamwork, privacy, and doing IT work the right way. Answer questions,
        earn XP, and learn from every try.
      </p>
      <Button variant="primary" className="welcome__start" onClick={onStart}>
        Start playing
      </Button>
      {showLogin && (
        <AuthPanel
          enabled={auth.enabled}
          loading={auth.loading}
          user={auth.user}
          syncStatus={syncStatus}
          onSignIn={auth.signInWithEmail}
          onSignOut={auth.signOut}
        />
      )}
      <p className="welcome__note">Based on your Week 1 &amp; 2 Work Skills notes.</p>
    </main>
  );
}
