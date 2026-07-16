import { Button } from '../components/Button';
import { AuthPanel } from '../components/AuthPanel';
import type { useAuth } from '../hooks/useAuth';

interface WelcomeScreenProps {
  onStart: () => void;
  auth: ReturnType<typeof useAuth>;
}

/** The first screen: a catchy title and a short, friendly explanation. */
export function WelcomeScreen({ onStart, auth }: WelcomeScreenProps) {
  return (
    <main className="screen welcome">
      <div className="welcome__badge" aria-hidden="true">
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
      <AuthPanel
        enabled={auth.enabled}
        loading={auth.loading}
        user={auth.user}
        onSignIn={auth.signInWithEmail}
        onSignOut={auth.signOut}
      />
      <p className="welcome__note">Based on your Week 1 Work Skills notes.</p>
    </main>
  );
}
