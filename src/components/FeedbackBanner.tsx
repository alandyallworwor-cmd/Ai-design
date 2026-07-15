interface FeedbackBannerProps {
  correct: boolean;
  /** The plain-English explanation shown to help the player learn. */
  explanation: string;
}

/**
 * The feedback shown after every answer. It says whether the answer was right
 * and always gives a short explanation, so wrong answers still teach something.
 */
export function FeedbackBanner({ correct, explanation }: FeedbackBannerProps) {
  return (
    <div
      className={`feedback feedback--${correct ? 'correct' : 'wrong'}`}
      role="status"
    >
      <p className="feedback__title">
        {correct ? '✓ Correct!' : '✕ Not quite'}
      </p>
      <p className="feedback__text">{explanation}</p>
    </div>
  );
}
