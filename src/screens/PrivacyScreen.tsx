import type { CSSProperties } from 'react';
import { AppHeader } from '../components/AppHeader';
import { Button } from '../components/Button';

interface PrivacyScreenProps {
  xp: number;
  onBack: () => void;
}

// A paragraph style that reads well without needing extra CSS.
const para: CSSProperties = {
  lineHeight: 1.6,
  margin: '0 0 0.7rem',
  color: '#334155',
};

/** A plain-English privacy policy, shown inside the app. */
export function PrivacyScreen({ xp, onBack }: PrivacyScreenProps) {
  return (
    <div className="screen">
      <AppHeader xp={xp} onBack={onBack} />
      <main className="glossary">
        <h2 className="glossary__heading">Privacy Policy</h2>
        <p className="glossary__intro">
          Last updated: July 2026. IT Quest is a student learning game for IT
          Work Skills study. This is a plain-English summary of what the app
          collects and how it is used — it is a starting template, not formal
          legal advice.
        </p>

        <section className="glossary__group">
          <h3 className="glossary__group-title">What this app collects</h3>
          <p style={para}>
            <strong>Your email</strong> — only if you choose to sign in. It is
            used to send you a one-time sign-in link and to save your progress
            to your account. There are no passwords: sign-in uses a magic link.
          </p>
          <p style={para}>
            <strong>Your learning progress</strong> — which missions and weekly
            lessons you complete, and your XP and stars.
          </p>
          <p style={para}>
            <strong>Admins only</strong> — the weekly lesson content they create
            and any files (PDF or image) they choose to upload.
          </p>
          <p style={para}>
            The app does <strong>not</strong> collect your name, location or
            payment details, and it does not show ads.
          </p>
        </section>

        <section className="glossary__group">
          <h3 className="glossary__group-title">How it is used</h3>
          <p style={para}>
            To run the game, save your progress across sessions and devices,
            let you sign in, and (for admins) manage weekly lessons. Your
            information is never sold or used for advertising.
          </p>
        </section>

        <section className="glossary__group">
          <h3 className="glossary__group-title">Where it is stored</h3>
          <p style={para}>
            In your browser using local storage (your progress). If you sign in,
            your email and progress are also stored in <strong>Supabase</strong>
            {' '}(a cloud database and sign-in service), along with any lesson
            files an admin uploads.
          </p>
          <p style={para}>
            The app is hosted on <strong>Vercel</strong>, which may keep basic
            technical logs (such as device type and the time of a request) to
            run the service.
          </p>
        </section>

        <section className="glossary__group">
          <h3 className="glossary__group-title">Cookies and local storage</h3>
          <p style={para}>
            The app uses your browser&rsquo;s local storage to remember your
            progress. If you sign in, a secure sign-in token is also kept in
            your browser so you stay logged in. The app does not use advertising
            or tracking cookies.
          </p>
        </section>

        <section className="glossary__group">
          <h3 className="glossary__group-title">Your choices</h3>
          <p style={para}>
            You can play without signing in — your progress then stays only on
            your device. You can reset your progress at any time using the
            in-app reset option, and sign out to remove the sign-in token from
            your browser. To request deletion of your account data, contact the
            site administrator.
          </p>
        </section>

        <section className="glossary__group">
          <h3 className="glossary__group-title">Changes and contact</h3>
          <p style={para}>
            This policy may be updated; the &ldquo;last updated&rdquo; date
            above shows the latest version. For any privacy questions or a
            data-deletion request, contact the site administrator.
          </p>
        </section>

        <Button variant="primary" onClick={onBack}>
          Back
        </Button>
      </main>
    </div>
  );
}
