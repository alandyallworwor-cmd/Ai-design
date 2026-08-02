import { useEffect, useState } from 'react';
import { AppHeader } from '../components/AppHeader';
import { Button } from '../components/Button';
import { FeedbackBanner } from '../components/FeedbackBanner';
import { MatchingBoard } from '../components/MatchingBoard';
import { OptionButton } from '../components/OptionButton';
import { OrderingList } from '../components/OrderingList';
import { ProgressBar } from '../components/ProgressBar';
import type { GameMode, Mission, MissionResult, Question } from '../types';

interface MissionScreenProps {
  mission: Mission;
  /** The player's current total XP, shown in the top bar. */
  xp: number;
  /** Study mode is relaxed; challenge and timed modes are scored. */
  mode: GameMode;
  onFinish: (result: MissionResult) => void;
  onExit: () => void;
}

/** How many seconds the player gets per question in Timed Mode. */
const TIMED_SECONDS = 20;
/** The most speed-bonus XP a single fast, correct answer can earn. */
const MAX_BONUS = 5;

/** Turn a correct/total score into 1-3 stars. */
function starsFor(correct: number, total: number): number {
  if (correct === total) return 3;
  if (correct / total >= 0.5) return 2;
  return 1;
}

/** Compare two arrays of ids for an exact match (used by ordering questions). */
function sameOrder(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((id, i) => id === b[i]);
}

export function MissionScreen({
  mission,
  xp,
  mode,
  onFinish,
  onExit,
}: MissionScreenProps) {
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  // Timed Mode only: seconds left on the current question and bonus XP so far.
  const [timeLeft, setTimeLeft] = useState(TIMED_SECONDS);
  const [bonusXp, setBonusXp] = useState(0);

  const question: Question = mission.questions[index];
  const isLast = index === mission.questions.length - 1;
  const isTimed = mode === 'timed';
  const isScored = mode !== 'study';

  /** Record whether the current answer was right (only counts the first try). */
  function markAnswer(correct: boolean) {
    setAnswered(true);
    setWasCorrect(correct);
    if (correct) {
      setCorrectCount((c) => c + 1);
      // Faster correct answers earn more bonus XP in Timed Mode.
      if (isTimed) {
        const bonus = Math.max(1, Math.round((MAX_BONUS * timeLeft) / TIMED_SECONDS));
        setBonusXp((b) => b + bonus);
      }
    }
  }

  // Timed Mode countdown: tick once a second, and mark the question wrong if
  // time runs out before the player answers.
  useEffect(() => {
    if (!isTimed || answered || finished) return;
    if (timeLeft <= 0) {
      markAnswer(false);
      return;
    }
    const timer = window.setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => window.clearTimeout(timer);
    // markAnswer is intentionally omitted: it is recreated each render and we
    // only want this effect to re-run when the timer or answered state changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimed, answered, finished, timeLeft]);

  function handleSelect(choiceId: string) {
    if (answered || question.kind !== 'select') return;
    setSelectedId(choiceId);
    markAnswer(choiceId === question.correctId);
  }

  function handleCheckOrder(orderedIds: string[]) {
    if (question.kind !== 'order') return;
    markAnswer(sameOrder(orderedIds, question.correctOrder));
  }

  function handleMatchComplete(perfect: boolean) {
    if (question.kind !== 'match') return;
    // A matching round counts as correct when finished with no wrong taps.
    markAnswer(perfect);
  }

  function handleNext() {
    if (isLast) {
      const result: MissionResult = {
        correct: correctCount,
        total: mission.questions.length,
        stars: starsFor(correctCount, mission.questions.length),
        bonusXp: isTimed ? bonusXp : undefined,
      };
      onFinish(result);
      setFinished(true);
      return;
    }
    // Move to the next question and reset the per-question state.
    setIndex((i) => i + 1);
    setAnswered(false);
    setWasCorrect(false);
    setSelectedId(null);
    setTimeLeft(TIMED_SECONDS);
  }

  // ---- Completion summary ----------------------------------------------
  if (finished) {
    const total = mission.questions.length;
    const stars = starsFor(correctCount, total);
    return (
      <div className="screen">
        <AppHeader xp={xp} onBack={onExit} />
        <main className="complete">
          <div className="complete__icon" aria-hidden="true">
            🎉
          </div>
          <h2 className="complete__title">
            {mode === 'study' ? 'Practice complete!' : 'Mission complete!'}
          </h2>
          <p className="complete__score">
            You got {correctCount} of {total} correct.
          </p>
          {/* Stars are a scored reward, so only show them in scored modes. */}
          {isScored && (
            <p className="complete__stars" aria-label={`${stars} of 3 stars`}>
              {[1, 2, 3].map((n) => (
                <span key={n}>{n <= stars ? '★' : '☆'}</span>
              ))}
            </p>
          )}
          {isTimed && bonusXp > 0 && (
            <p className="complete__bonus">⚡ Speed bonus: +{bonusXp} XP</p>
          )}
          <Button variant="primary" onClick={onExit}>
            Back to missions
          </Button>
        </main>
      </div>
    );
  }

  // ---- Active question --------------------------------------------------
  return (
    <div className="screen">
      <AppHeader xp={xp} onBack={onExit} />
      <main className="mission">
        <ProgressBar current={index} total={mission.questions.length} />
        <p className="mission__step">
          Question {index + 1} of {mission.questions.length}
        </p>
        <h2 className="mission__title">{mission.title}</h2>
        {mode === 'study' && (
          <p className="mission__mode-tag">📖 Study Mode · no score pressure</p>
        )}
        {isTimed && (
          <div
            className={`mission__timer ${
              !answered && timeLeft <= 5 ? 'mission__timer--low' : ''
            }`.trim()}
          >
            <div
              className="mission__timer-bar"
              style={{ width: `${(Math.max(0, timeLeft) / TIMED_SECONDS) * 100}%` }}
              aria-hidden="true"
            />
            <span
              className="mission__timer-label"
              role="timer"
              aria-label={`${Math.max(0, timeLeft)} seconds left`}
            >
              ⏱️ {Math.max(0, timeLeft)}s
            </span>
          </div>
        )}
        <p className="mission__prompt">{question.prompt}</p>

        {question.kind === 'select' && (
          <div className="mission__options">
            {question.choices.map((choice) => {
              let state: 'idle' | 'correct' | 'wrong' = 'idle';
              if (answered) {
                if (choice.id === question.correctId) state = 'correct';
                else if (choice.id === selectedId) state = 'wrong';
              }
              return (
                <OptionButton
                  key={choice.id}
                  text={choice.text}
                  state={state}
                  disabled={answered}
                  onClick={() => handleSelect(choice.id)}
                />
              );
            })}
          </div>
        )}

        {question.kind === 'order' && (
          <OrderingList
            items={question.items}
            correctOrder={question.correctOrder}
            answered={answered}
            onCheck={handleCheckOrder}
          />
        )}

        {question.kind === 'match' && (
          <MatchingBoard
            pairs={question.pairs}
            answered={answered}
            onComplete={handleMatchComplete}
          />
        )}

        {answered && (
          <>
            <FeedbackBanner
              correct={wasCorrect}
              explanation={question.explanation}
            />
            <Button variant="primary" className="mission__next" onClick={handleNext}>
              {isLast ? 'See results' : 'Next question'}
            </Button>
          </>
        )}
      </main>
    </div>
  );
}
