import { useState } from 'react';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { ModeSelectScreen } from './screens/ModeSelectScreen';
import { MissionMapScreen } from './screens/MissionMapScreen';
import { MissionScreen } from './screens/MissionScreen';
import { GlossaryScreen } from './screens/GlossaryScreen';
import { ResultsScreen } from './screens/ResultsScreen';
import { getMission } from './data/missions';
import { useProgress } from './hooks/useProgress';
import type { GameMode, MissionResult } from './types';

// The places the player can be. Keeping this as a small union means we never
// need a routing library for such a simple game.
type Screen =
  | { name: 'welcome' }
  | { name: 'mode' }
  | { name: 'map' }
  | { name: 'mission'; missionId: string }
  | { name: 'glossary' }
  | { name: 'results' };

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'welcome' });
  const [mode, setMode] = useState<GameMode>('challenge');
  const { progress, completeMission, resetProgress } = useProgress();

  function chooseMode(chosen: GameMode) {
    setMode(chosen);
    setScreen({ name: 'map' });
  }

  function finishMission(missionId: string, result: MissionResult) {
    // Only Challenge Mode saves progress; Study Mode is relaxed practice.
    if (mode === 'challenge') {
      completeMission(missionId, result);
    }
  }

  switch (screen.name) {
    case 'welcome':
      return <WelcomeScreen onStart={() => setScreen({ name: 'mode' })} />;

    case 'mode':
      return (
        <ModeSelectScreen
          onChoose={chooseMode}
          onGlossary={() => setScreen({ name: 'glossary' })}
        />
      );

    case 'glossary':
      return (
        <GlossaryScreen
          xp={progress.xp}
          onBack={() => setScreen({ name: 'map' })}
        />
      );

    case 'results':
      return (
        <ResultsScreen
          progress={progress}
          onBack={() => setScreen({ name: 'map' })}
        />
      );

    case 'mission': {
      const mission = getMission(screen.missionId);
      // If a mission id is ever missing, quietly send the player back to the
      // map instead of showing a technical error.
      if (!mission) {
        setScreen({ name: 'map' });
        return null;
      }
      return (
        <MissionScreen
          mission={mission}
          xp={progress.xp}
          mode={mode}
          onFinish={(result) => finishMission(mission.id, result)}
          onExit={() => setScreen({ name: 'map' })}
        />
      );
    }

    case 'map':
    default:
      return (
        <MissionMapScreen
          progress={progress}
          mode={mode}
          onStartMission={(missionId) => setScreen({ name: 'mission', missionId })}
          onReset={resetProgress}
          onOpenGlossary={() => setScreen({ name: 'glossary' })}
          onOpenResults={() => setScreen({ name: 'results' })}
          onChangeMode={() => setScreen({ name: 'mode' })}
        />
      );
  }
}
