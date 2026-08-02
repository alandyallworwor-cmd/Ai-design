import { useEffect, useRef, useState } from 'react';
import { AppHeader } from '../components/AppHeader';
import { Button } from '../components/Button';
import { FeedbackBanner } from '../components/FeedbackBanner';
import { FillBlank } from '../components/FillBlank';
import { MatchingBoard } from '../components/MatchingBoard';
import { OptionButton } from '../components/OptionButton';
import { OrderingList } from '../components/OrderingList';
import { ProgressBar } from '../components/ProgressBar';
import { getBadge } from '../data/badges';
import { playBadge, playComplete, playCorrect, playWrong } from '../lib/sound';
import type { GameMode, Mission, MissionResult, Question } from '../types';

interface MissionScreenProps {
  mission: Mission;
  /** The player's current total XP, shown in the top bar. */
  xp: number;
  /** Study mode is relaxed; challenge and timed modes are scored. */
  mode: GameMode;
  /** Badges the player had earned before this mission (for a "new!" reveal). */
  earnedBadges: string[];
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
  earnedBadges,
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
  // Current run of consecutive correct answers, and the best it reached.
  const [streak, setStreak] = useState(0);
  const bestStreakRef = useRef(0);
  // The badges the player already had when this mission started, captured once
  // so the completion screen can highlight any that are brand new.
  const badgesBefore = useRef(earnedBadges);

  const question: Question = mission.questions[index];
  const isLast = index === mission.questions.length - 1;
  const isTimed = mode === 'timed';
  const isScored = mode !== 'study';
  // Badges earned during this mission (present only once finished).
  const newBadges =
    finished && isScored
      ? earnedBadges.filter((id) => !badgesBefore.current.includes(id))
      : [];

  /** Record whether the current answer was right (only counts the first try). */
  function markAnswer(correct: boolean) {
    setAnswered(true);
    setWasCorrect(correct);
    if (correct) playCorrect();
    else playWrong();
    // Update the running streak (reset to zero on a wrong answer).
    const nextStreak = correct ? streak + 1 : 0;
    setStreak(nextStreak);
    bestStreakRef.current = Math.max(bestStreakRef.current, nextStreak);
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

  // Keyboard shortcuts: press 1-9 to pick an answer, Enter to move on. This
  // makes play faster (especially in Timed Mode) and helps keyboard users.
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (finished) return;
      if (!answered && question.kind === 'select') {
        const n = Number.parseInt(event.key, 10);
        if (n >= 1 && n <= question.choices.length) {
          event.preventDefault();
          handleSelect(question.choices[n - 1].id);
        }
      } else if (answered && event.key === 'Enter') {
        event.preventDefault();
        handleNext();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // Re-bind when the question or answered state changes so the handler always
    // sees current values; the handlers themselves are stable enough here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answered, finished, index]);

  function handleCheckOrder(orderedIds: string[]) {
    if (question.kind !== 'order') return;
    markAnswer(sameOrder(orderedIds, question.correctOrder));
  }

  function handleMatchComplete(perfect: boolean) {
    if (question.kind !== 'match') return;
    // A matching round counts as correct when finished with no wrong taps.
    markAnswer(perfect);
  }

  function handleFillCheck(correct: boolean) {
    if (question.kind !== 'fill') return;
    markAnswer(correct);
  }

  // Play a celebratory sound when the mission is finished, and a second
  // sparkle shortly after if any new badges were unlocked.
  const badgeSoundPlayed = useRef(false);
  useEffect(() => {
    if (!finished) return;
    playComplete();
  }, [finished]);
  useEffect(() => {
    if (finished && newBadges.length > 0 && !badgeSoundPlayed.current) {
      badgeSoundPlayed.current = true;
      const id = window.setTimeout(() => playBadge(), 550);
      return () => window.clearTimeout(id);
    }
  }, [finished, newBadges.length]);

  function handleNext() {
    if (isLast) {
      const result: MissionResult = {
        correct: correctCount,
        total: mission.questions.length,
        stars: starsFor(correctCount, mission.questions.length),
        bonusXp: isTimed ? bonusXp : undefined,
        runStreak: bestStreakRef.current,
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
          {isScored && bestStreakRef.current >= 2 && (
            <p className="complete__streak">
              🔥 Best streak this run: {bestStreakRef.current} in a row
            </p>
          )}
          {newBadges.length > 0 && (
            <section className="complete__badges" aria-label="New badges earned">
              <h3 className="complete__badges-title">New badge{newBadges.length > 1 ? 's' : ''} unlocked!</h3>
              <ul className="badge-row">
                {newBadges.map((id) => {
                  const badge = getBadge(id);
                  if (!badge) return null;
                  return (
                    <li key={id} className="badge" title={badge.description}>
                      <span className="badge__icon" aria-hidden="true">
                        {badge.icon}
                      </span>
                      <span className="badge__name">{badge.name}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
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
        {isScored && streak >= 2 && !answered && (
          <p className="mission__streak" role="status">
            🔥 {streak} in a row!
          </p>
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
            {question.choices.map((choice, i) => {
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
                  hint={i + 1}
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

        {question.kind === 'fill' && (
          <FillBlank
            question={question}
            answered={answered}
            onCheck={handleFillCheck}
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
