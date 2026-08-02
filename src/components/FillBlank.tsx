import { useState } from 'react';
import type { FillQuestion } from '../types';
import { isFillCorrect } from '../lib/fill';
import { Button } from './Button';

interface FillBlankProps {
  question: FillQuestion;
  /** True once the player has submitted their answer. */
  answered: boolean;
  /** Called with whether the typed answer matched an accepted answer. */
  onCheck: (correct: boolean) => void;
}

/**
 * "Type the missing word" activity. A single text box the player fills in, then
 * submits. After answering, it shows whether they were right and reveals the
 * expected answer so a wrong guess still teaches.
 */
export function FillBlank({ question, answered, onCheck }: FillBlankProps) {
  const [value, setValue] = useState('');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (answered || value.trim().length === 0) return;
    onCheck(isFillCorrect(question, value));
  }

  return (
    <form className="fill" onSubmit={handleSubmit}>
      <input
        type="text"
        className="fill__input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={answered}
        placeholder="Type your answer…"
        aria-label="Your answer"
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
      />
      {question.hint && !answered && (
        <p className="fill__hint">💡 {question.hint}</p>
      )}
      {answered ? (
        <p className="fill__answer">
          Accepted answer: <strong>{question.acceptedAnswers[0]}</strong>
        </p>
      ) : (
        <Button
          type="submit"
          variant="primary"
          disabled={value.trim().length === 0}
        >
          Check answer
        </Button>
      )}
    </form>
  );
}
