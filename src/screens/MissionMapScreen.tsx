import { useState } from 'react';
import { AppHeader } from '../components/AppHeader';
import { Button } from '../components/Button';
import { MissionCard } from '../components/MissionCard';
import { Modal } from '../components/Modal';
import { BADGES, getBadge } from '../data/badges';
import { missions } from '../data/missions';
import type { GameMode, Progress } from '../types';

interface MissionMapScreenProps {
  progress: Progress;
  mode: GameMode;
  onStartMission: (missionId: string) => void;
  onReset: () => void;
  onOpenGlossary: () => void;
  onOpenResults: () => void;
  onChangeMode: () => void;
}

// Section headings for the map. Weeks 1-3 are study weeks; 4 is revision.
const SECTIONS = [
  { week: 1, label: 'Week 1' },
  { week: 2, label: 'Week 2' },
  { week: 3, label: 'Week 3' },
  { week: 4, label: 'Exam Revision' },
] as const;

// A short, friendly label for the current play mode.
const MODE_LABEL: Record<GameMode, string> = {
  challenge: '🏆 Challenge Mode',
  timed: '⏱️ Timed Mode',
  study: '📖 Study Mode',
};

/** The mission-selection screen: shows every mission and overall progress. */
export function MissionMapScreen({
  progress,
  mode,
  onStartMission,
  onReset,
  onOpenGlossary,
  onOpenResults,
  onChangeMode,
}: MissionMapScreenProps) {
  const [confirmReset, setConfirmReset] = useState(false);
  // Count only the built-in missions so weekly-lesson completions (stored under
  // separate keys) never distort the "X of N" mission tally.
  const doneCount = missions.filter((m) => progress.completed[m.id]).length;
  const allDone = doneCount === missions.length;
  // The first mission the player has not finished yet, for the Continue button.
  const nextMission = missions.find((m) => !progress.completed[m.id]);

  function handleConfirmReset() {
    onReset();
    setConfirmReset(false);
  }

  return (
    <div className="screen">
      <AppHeader xp={progress.xp} />
      <main className="map">
        <h2 className="map__heading">Your missions</h2>
        <p className="map__summary">
          {MODE_LABEL[mode]} · {doneCount} of {missions.length} completed
        </p>

        {/* At-a-glance stats so progress feels rewarding. */}
        <div className="map__stats">
          <div className="map__stat">
            <span className="map__stat-value">⭐ {progress.xp}</span>
            <span className="map__stat-label">XP</span>
          </div>
          <div className="map__stat">
            <span className="map__stat-value">🔥 {progress.bestStreak}</span>
            <span className="map__stat-label">Best streak</span>
          </div>
          <div className="map__stat">
            <span className="map__stat-value">
              🏅 {progress.badges.length}/{BADGES.length}
            </span>
            <span className="map__stat-label">Badges</span>
          </div>
        </div>

        {progress.badges.length > 0 && (
          <ul className="badge-row map__badges" aria-label="Badges earned">
            {progress.badges.map((id) => {
              const badge = getBadge(id);
              if (!badge) return null;
              return (
                <li key={id} className="badge badge--chip" title={`${badge.name}: ${badge.description}`}>
                  <span className="badge__icon" aria-hidden="true">
                    {badge.icon}
                  </span>
                  <span className="badge__name">{badge.name}</span>
                </li>
              );
            })}
          </ul>
        )}

        {nextMission && doneCount > 0 && (
          <Button
            variant="primary"
            className="map__continue"
            onClick={() => onStartMission(nextMission.id)}
          >
            ▶️ Continue: {nextMission.title}
          </Button>
        )}

        <div className="map__toolbar">
          <Button variant="secondary" onClick={onOpenGlossary}>
            📕 Glossary
          </Button>
          <Button variant="secondary" onClick={onChangeMode}>
            🔀 Change mode
          </Button>
          {doneCount > 0 && !allDone && (
            <Button variant="secondary" onClick={onOpenResults}>
              🏅 Results
            </Button>
          )}
        </div>

        {/* Missions are grouped by section so the map stays easy to scan. */}
        {SECTIONS.map(({ week, label }) => (
          <section key={week} className="map__week">
            <h3 className="map__week-title">{label}</h3>
            <div className="map__list">
              {missions
                .filter((mission) => mission.week === week)
                .map((mission) => (
                  <MissionCard
                    key={mission.id}
                    mission={mission}
                    result={progress.completed[mission.id]}
                    onStart={() => onStartMission(mission.id)}
                  />
                ))}
            </div>
          </section>
        ))}

        {allDone && (
          <Button
            variant="primary"
            className="map__results"
            onClick={onOpenResults}
          >
            🏅 See my final results
          </Button>
        )}

        {doneCount > 0 && (
          <Button
            variant="ghost"
            className="map__reset"
            onClick={() => setConfirmReset(true)}
          >
            Reset progress
          </Button>
        )}
      </main>

      {confirmReset && (
        <Modal title="Reset progress?" onClose={() => setConfirmReset(false)}>
          <p className="modal__text">
            This will erase your XP and stars for every mission. This cannot be
            undone.
          </p>
          <div className="modal__actions">
            <Button variant="ghost" onClick={() => setConfirmReset(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleConfirmReset}>
              Yes, reset
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}
