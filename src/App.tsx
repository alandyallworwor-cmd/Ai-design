import { useState } from 'react';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { MissionMapScreen } from './screens/MissionMapScreen';
import { MissionScreen } from './screens/MissionScreen';
import { getMission } from './data/missions';
import { useProgress } from './hooks/useProgress';
import type { MissionResult } from './types';

// The three places the player can be. Keeping this as a small union means we
// never need a routing library for such a simple game.
type Screen =
  | { name: 'welcome' }
  | { name: 'map' }
  | { name: 'mission'; missionId: string };

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'welcome' });
  const { progress, completeMission, resetProgress } = useProgress();

  function startMission(missionId: string) {
    setScreen({ name: 'mission', missionId });
  }

  function finishMission(missionId: string, result: MissionResult) {
    completeMission(missionId, result);
  }

  if (screen.name === 'welcome') {
    return <WelcomeScreen onStart={() => setScreen({ name: 'map' })} />;
  }

  if (screen.name === 'mission') {
    const mission = getMission(screen.missionId);
    // If a mission id is ever missing, quietly send the player back to the map
    // instead of showing a technical error.
    if (!mission) {
      setScreen({ name: 'map' });
      return null;
    }
    return (
      <MissionScreen
        mission={mission}
        xp={progress.xp}
        onFinish={(result) => finishMission(mission.id, result)}
        onExit={() => setScreen({ name: 'map' })}
      />
    );
  }

  return (
    <MissionMapScreen
      progress={progress}
      onStartMission={startMission}
      onReset={resetProgress}
    />
  );
}
