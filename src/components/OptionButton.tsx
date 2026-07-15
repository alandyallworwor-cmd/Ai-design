type State = 'idle' | 'correct' | 'wrong' | 'reveal';

interface OptionButtonProps {
  text: string;
  /** Visual state after the player has answered. */
  state: State;
  disabled?: boolean;
  onClick: () => void;
}

// A small icon shown on each option once the answer is revealed.
const ICON: Record<State, string> = {
  idle: '',
  correct: '✓',
  wrong: '✕',
  reveal: '✓',
};

/**
 * One answer choice in a multiple-choice question.
 * After answering it turns green (correct) or red (wrong), and the correct
 * option is always highlighted so the player learns the right answer.
 */
export function OptionButton({
  text,
  state,
  disabled,
  onClick,
}: OptionButtonProps) {
  return (
    <button
      className={`option option--${state}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="option__text">{text}</span>
      {ICON[state] && (
        <span className="option__icon" aria-hidden="true">
          {ICON[state]}
        </span>
      )}
    </button>
  );
}
