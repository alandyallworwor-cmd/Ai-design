import { useState } from 'react';
import { AppHeader } from '../components/AppHeader';
import { Button } from '../components/Button';
import { MissionCard } from '../components/MissionCard';
import { Modal } from '../components/Modal';
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
          {mode === 'study' ? '📖 Study Mode' : '🏆 Challenge Mode'} ·{' '}
          {doneCount} of {missions.length} completed
        </p>

        <div className="map__toolbar">
          <Button variant="secondary" onClick={onOpenGlossary}>
            📕 Glossary
          </Button>
          <Button variant="secondary" onClick={onChangeMode}>
            🔀 Change mode
          </Button>
        </div>

        <div className="map__list">
          {missions.map((mission) => (
            <MissionCard
              key={mission.id}
              mission={mission}
              result={progress.completed[mission.id]}
              onStart={() => onStartMission(mission.id)}
            />
          ))}
        </div>

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
