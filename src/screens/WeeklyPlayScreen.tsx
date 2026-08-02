import { useEffect, useState } from 'react';
import { AppHeader } from '../components/AppHeader';
import { Button } from '../components/Button';
import { FeedbackBanner } from '../components/FeedbackBanner';
import { OptionButton } from '../components/OptionButton';
import { ProgressBar } from '../components/ProgressBar';
import {
  fetchActivities,
  isActivityCorrect,
  optionsFor,
  type WeeklyActivity,
  type WeeklyLesson,
} from '../lib/weekly';
import type { MissionResult } from '../types';

interface WeeklyPlayScreenProps {
  lesson: WeeklyLesson;
  xp: number;
  onFinish: (lessonId: string, result: MissionResult) => void;
  onExit: () => void;
}

type Load = 'loading' | 'ready' | 'error';

function starsFor(correct: number, total: number): number {
  if (total === 0 || correct === total) return 3;
  if (correct / total >= 0.5) return 2;
  return 1;
}

/** Student plays one published week's activities; scoring feeds normal XP/progress. */
export function WeeklyPlayScreen({ lesson, xp, onFinish, onExit }: WeeklyPlayScreenProps) {
  const [state, setState] = useState<Load>('loading');
  const [activities, setActivities] = useState<WeeklyActivity[]>([]);
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    fetchActivities(lesson.id).then(({ data, error }) => {
      if (cancelled) return;
      if (error) {
        setState('error');
        return;
      }
      setActivities(data ?? []);
      setState('ready');
    });
    return () => {
      cancelled = true;
    };
  }, [lesson.id]);

  if (state === 'loading') {
    return (
      <div className="screen">
        <AppHeader xp={xp} onBack={onExit} />
        <main className="map">
          <p className="weekly__note">Loading this week’s activities…</p>
        </main>
      </div>
    );
  }

  if (state === 'error') {
    return (
      <div className="screen">
        <AppHeader xp={xp} onBack={onExit} />
        <main className="map">
          <p className="weekly__note weekly__note--error">
            We couldn’t load this week right now. Please try again soon.
          </p>
          <Button variant="primary" onClick={onExit}>
            Back
          </Button>
        </main>
      </div>
    );
  }

  if (activities.length === 0) {
    return (
      <div className="screen">
        <AppHeader xp={xp} onBack={onExit} />
        <main className="map">
          <h2 className="map__heading">
            Week {lesson.week_number}: {lesson.topic_title}
          </h2>
          <p className="weekly__note">This week has no activities yet. Check back soon!</p>
          <Button variant="primary" onClick={onExit}>
            Back
          </Button>
        </main>
      </div>
    );
  }

  const activity = activities[index];
  const isCard = activity.activity_type === 'revision_card';
  const isLast = index === activities.length - 1;
  const showFeedback = answered || (isCard && revealed);

  function answer(optionId: string) {
    if (answered || isCard) return;
    setSelectedId(optionId);
    setAnswered(true);
    if (isActivityCorrect(activity, optionId)) setCorrectCount((c) => c + 1);
  }

  function revealCard() {
    if (revealed) return;
    setRevealed(true);
    setCorrectCount((c) => c + 1); // revision cards always count
  }

  function next() {
    if (isLast) {
      const total = activities.length;
      const correct = correctCount;
      onFinish(lesson.id, { stars: starsFor(correct, total), correct, total });
      return;
    }
    setIndex((i) => i + 1);
    setAnswered(false);
    setSelectedId(null);
    setRevealed(false);
  }

  function optionState(optionId: string) {
    if (!answered) return 'idle' as const;
    if (optionId === activity.correct_answer) return 'correct' as const;
    if (optionId === selectedId) return 'wrong' as const;
    return 'idle' as const;
  }

  return (
    <div className="screen">
      <AppHeader xp={xp} onBack={onExit} />
      <main className="mission">
        <ProgressBar current={index + 1} total={activities.length} />
        <p className="mission__count">
          Activity {index + 1} of {activities.length}
        </p>
        <h2 className="mission__prompt">{activity.content}</h2>

        {!isCard && (
          <div className="mission__options">
            {optionsFor(activity).map((opt) => (
              <OptionButton
                key={opt.id}
                text={opt.text}
                state={optionState(opt.id)}
                disabled={answered}
                onClick={() => answer(opt.id)}
              />
            ))}
          </div>
        )}

        {isCard && !revealed && (
          <Button variant="primary" onClick={revealCard}>
            Show answer
          </Button>
        )}

        {showFeedback && (
          <FeedbackBanner
            correct={isCard || isActivityCorrect(activity, selectedId)}
            explanation={
              isCard
                ? activity.explanation || 'Great — keep this one in mind!'
                : activity.explanation
            }
          />
        )}

        {showFeedback && (
          <Button variant="primary" className="mission__next" onClick={next}>
            {isLast ? 'Finish week' : 'Next activity'}
          </Button>
        )}
      </main>
    </div>
  );
}
