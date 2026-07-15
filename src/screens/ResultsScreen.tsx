import { AppHeader } from '../components/AppHeader';
import { Button } from '../components/Button';
import { missions } from '../data/missions';
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
        </div>

        {toRevise.length === 0 ? (
          <p className="results__perfect">
            🎉 Amazing! You earned 3 stars on every mission. You have mastered
            all the Week 1 topics.
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

        <Button variant="primary" onClick={onBack}>
          Back to missions
        </Button>
      </main>
    </div>
  );
}
