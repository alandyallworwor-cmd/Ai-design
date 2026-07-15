import { AppHeader } from '../components/AppHeader';
import { Button } from '../components/Button';
import { MissionCard } from '../components/MissionCard';
import { missions } from '../data/missions';
import type { Progress } from '../types';

interface MissionMapScreenProps {
  progress: Progress;
  onStartMission: (missionId: string) => void;
  onReset: () => void;
}

/** The mission-selection screen: shows every mission and overall progress. */
export function MissionMapScreen({
  progress,
  onStartMission,
  onReset,
}: MissionMapScreenProps) {
  const doneCount = Object.keys(progress.completed).length;

  return (
    <div className="screen">
      <AppHeader xp={progress.xp} />
      <main className="map">
        <h2 className="map__heading">Your missions</h2>
        <p className="map__summary">
          {doneCount} of {missions.length} missions completed
        </p>

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

        {doneCount > 0 && (
          <Button
            variant="ghost"
            className="map__reset"
            onClick={onReset}
          >
            Reset progress
          </Button>
        )}
      </main>
    </div>
  );
}
