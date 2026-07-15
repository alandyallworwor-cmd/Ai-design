import { useState } from 'react';
import { AppHeader } from '../components/AppHeader';
import { Button } from '../components/Button';
import { FeedbackBanner } from '../components/FeedbackBanner';
import { OptionButton } from '../components/OptionButton';
import { OrderingList } from '../components/OrderingList';
import { ProgressBar } from '../components/ProgressBar';
import type { Mission, MissionResult, Question } from '../types';

interface MissionScreenProps {
  mission: Mission;
  /** The player's current total XP, shown in the top bar. */
  xp: number;
  onFinish: (result: MissionResult) => void;
  onExit: () => void;
}

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
  onFinish,
  onExit,
}: MissionScreenProps) {
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const question: Question = mission.questions[index];
  const isLast = index === mission.questions.length - 1;

  /** Record whether the current answer was right (only counts the first try). */
  function markAnswer(correct: boolean) {
    setAnswered(true);
    setWasCorrect(correct);
    if (correct) setCorrectCount((c) => c + 1);
  }

  function handleSelect(choiceId: string) {
    if (answered || question.kind !== 'select') return;
    setSelectedId(choiceId);
    markAnswer(choiceId === question.correctId);
  }

  function handleCheckOrder(orderedIds: string[]) {
    if (question.kind !== 'order') return;
    markAnswer(sameOrder(orderedIds, question.correctOrder));
  }

  function handleNext() {
    if (isLast) {
      const result: MissionResult = {
        correct: correctCount,
        total: mission.questions.length,
        stars: starsFor(correctCount, mission.questions.length),
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
          <h2 className="complete__title">Mission complete!</h2>
          <p className="complete__score">
            You got {correctCount} of {total} correct.
          </p>
          <p className="complete__stars" aria-label={`${stars} of 3 stars`}>
            {[1, 2, 3].map((n) => (
              <span key={n}>{n <= stars ? '★' : '☆'}</span>
            ))}
          </p>
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
