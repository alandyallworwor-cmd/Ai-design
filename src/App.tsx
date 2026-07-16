import { useState } from 'react';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { ModeSelectScreen } from './screens/ModeSelectScreen';
import { MissionMapScreen } from './screens/MissionMapScreen';
import { MissionScreen } from './screens/MissionScreen';
import { GlossaryScreen } from './screens/GlossaryScreen';
import { ResultsScreen } from './screens/ResultsScreen';
import { WeeklyWeeksScreen } from './screens/WeeklyWeeksScreen';
import { WeeklyPlayScreen } from './screens/WeeklyPlayScreen';
import { WeeklyNotesManagerScreen } from './screens/admin/WeeklyNotesManagerScreen';
import { LessonEditorScreen } from './screens/admin/LessonEditorScreen';
import { getMission } from './data/missions';
import { useProgress } from './hooks/useProgress';
import { useAuth } from './hooks/useAuth';
import { useCloudSync } from './hooks/useCloudSync';
import { useAdmin } from './hooks/useAdmin';
import type { GameMode, MissionResult } from './types';
import type { WeeklyLesson } from './lib/weekly';

// The places the player can be. Keeping this as a small union means we never
// need a routing library for such a simple game.
type Screen =
  | { name: 'welcome' }
  | { name: 'mode' }
  | { name: 'map' }
  | { name: 'mission'; missionId: string }
  | { name: 'glossary' }
  | { name: 'results' }
  | { name: 'weeklyList' }
  | { name: 'weeklyPlay'; lesson: WeeklyLesson }
  | { name: 'admin' }
  | { name: 'adminLesson'; lesson: WeeklyLesson | null };

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'welcome' });
  const [mode, setMode] = useState<GameMode>('challenge');
  const { progress, completeMission, resetProgress, replaceProgress } = useProgress();
  const auth = useAuth();
  const { status: syncStatus } = useCloudSync({
    user: auth.user,
    progress,
    replaceProgress,
  });
  const { isAdmin } = useAdmin(auth.user);

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

  function finishWeek(lessonId: string, result: MissionResult) {
    // Weekly activities always save XP/progress (and sync when signed in).
    completeMission(`week-${lessonId}`, result);
    setScreen({ name: 'weeklyList' });
  }

  switch (screen.name) {
    case 'welcome':
      return (
        <WelcomeScreen
          onStart={() => setScreen({ name: 'mode' })}
          auth={auth}
          syncStatus={syncStatus}
        />
      );

    case 'mode':
      return (
        <ModeSelectScreen
          onChoose={chooseMode}
          onGlossary={() => setScreen({ name: 'glossary' })}
          onWeekly={() => setScreen({ name: 'weeklyList' })}
          isAdmin={isAdmin}
          onAdmin={() => setScreen({ name: 'admin' })}
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

    case 'weeklyList':
      return (
        <WeeklyWeeksScreen
          xp={progress.xp}
          onBack={() => setScreen({ name: 'mode' })}
          onPlay={(lesson) => setScreen({ name: 'weeklyPlay', lesson })}
        />
      );

    case 'weeklyPlay':
      return (
        <WeeklyPlayScreen
          lesson={screen.lesson}
          xp={progress.xp}
          onFinish={finishWeek}
          onExit={() => setScreen({ name: 'weeklyList' })}
        />
      );

    case 'admin':
      // Guard: only admins reach the manager; RLS is the real enforcement.
      if (!isAdmin) {
        setScreen({ name: 'mode' });
        return null;
      }
      return (
        <WeeklyNotesManagerScreen
          xp={progress.xp}
          onBack={() => setScreen({ name: 'mode' })}
          onCreate={() => setScreen({ name: 'adminLesson', lesson: null })}
          onEdit={(lesson) => setScreen({ name: 'adminLesson', lesson })}
        />
      );

    case 'adminLesson':
      if (!isAdmin || !auth.user) {
        setScreen({ name: 'mode' });
        return null;
      }
      return (
        <LessonEditorScreen
          lesson={screen.lesson}
          userId={auth.user.id}
          xp={progress.xp}
          onDone={() => setScreen({ name: 'admin' })}
          onCancel={() => setScreen({ name: 'admin' })}
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
