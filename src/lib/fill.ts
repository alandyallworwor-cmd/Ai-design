import type { FillQuestion } from '../types';

/** Normalise an answer for comparison: trim surrounding spaces and lower-case. */
export function normalise(value: string): string {
  return value.trim().toLowerCase();
}

/** True if the typed answer matches any of the question's accepted answers. */
export function isFillCorrect(question: FillQuestion, value: string): boolean {
  const guess = normalise(value);
  return (
    guess.length > 0 &&
    question.acceptedAnswers.some((a) => normalise(a) === guess)
  );
}
