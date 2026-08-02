import { useState } from 'react';
import { AppHeader } from '../components/AppHeader';
import { Button } from '../components/Button';
import { BADGES } from '../data/badges';
import { missions } from '../data/missions';
import { buildShareText, shareResults } from '../lib/shareResults';
import type { Progress } from '../types';

interface ResultsScreenProps {
  progress: Progress;
  onBack: () => void;
}

/**
 * The final results screen. Shows the player's total score and, importantly,
 * which topics they should revise (any mission not yet finished with 3 stars).
 */
export function ResultsScreen({ progress, onBack }: ResultsScreenProps) {
  const totalStars = missions.reduce(
    (sum, m) => sum + (progress.completed[m.id]?.stars ?? 0),
    0,
  );
  const maxStars = missions.length * 3;

  // Share state: a status message, plus the summary text to show if neither
  // the share sheet nor the clipboard is available.
  const [shareMsg, setShareMsg] = useState<string | null>(null);
  const [fallbackText, setFallbackText] = useState<string | null>(null);

  async function handleShare() {
    const outcome = await shareResults(progress);
    if (outcome === 'shared') {
      setShareMsg('Shared! 🎉');
      setFallbackText(null);
    } else if (outcome === 'copied') {
      setShareMsg('Copied to clipboard! 📋');
      setFallbackText(null);
    } else {
      setShareMsg('Copy your results below:');
      setFallbackText(buildShareText(progress));
    }
  }

  // A topic needs revising if the mission is unfinished or scored under 3 stars.
  const toRevise = missions.filter(
    (m) => (progress.completed[m.id]?.stars ?? 0) < 3,
  );

  return (
    <div className="screen">
      <AppHeader xp={progress.xp} onBack={onBack} />
      <main className="results">
        <div className="results__icon" aria-hidden="true">
          🏅
        </div>
        <h2 className="results__title">Your results</h2>

        <div className="results__scores">
          <div className="results__score">
            <span className="results__score-value">{progress.xp}</span>
            <span className="results__score-label">Total XP</span>
          </div>
          <div className="results__score">
            <span className="results__score-value">
              {totalStars}/{maxStars}
            </span>
            <span className="results__score-label">Stars earned</span>
          </div>
          <div className="results__score">
            <span className="results__score-value">🔥 {progress.bestStreak}</span>
            <span className="results__score-label">Best streak</span>
          </div>
        </div>

        <section className="results__badges">
          <h3 className="results__badges-title">
            Badges · {progress.badges.length}/{BADGES.length}
          </h3>
          <ul className="badge-grid">
            {BADGES.map((badge) => {
              const earned = progress.badges.includes(badge.id);
              return (
                <li
                  key={badge.id}
                  className={`badge badge--tile ${earned ? '' : 'badge--locked'}`.trim()}
                  title={badge.description}
                >
                  <span className="badge__icon" aria-hidden="true">
                    {earned ? badge.icon : '🔒'}
                  </span>
                  <span className="badge__name">{badge.name}</span>
                  <span className="badge__desc">{badge.description}</span>
                </li>
              );
            })}
          </ul>
        </section>

        {toRevise.length === 0 ? (
          <p className="results__perfect">
            🎉 Amazing! You earned 3 stars on every mission. You have mastered
            every topic in the course.
          </p>
        ) : (
          <section className="results__revise">
            <h3 className="results__revise-title">Topics to revise</h3>
            <ul className="results__revise-list">
              {toRevise.map((m) => (
                <li key={m.id} className="results__revise-item">
                  <span aria-hidden="true">{m.icon}</span> {m.topic}
                </li>
              ))}
            </ul>
            <p className="results__revise-tip">
              Tip: replay these missions, or use Study Mode and the glossary to
              go over them without score pressure.
            </p>
          </section>
        )}

        <div className="results__actions">
          <Button variant="secondary" onClick={handleShare}>
            📤 Share my results
          </Button>
          <Button variant="primary" onClick={onBack}>
            Back to missions
          </Button>
        </div>

        {shareMsg && (
          <div className="results__share" role="status">
            <p className="results__share-msg">{shareMsg}</p>
            {fallbackText && (
              <pre className="results__share-text">{fallbackText}</pre>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
