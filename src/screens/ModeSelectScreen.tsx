import { Button } from '../components/Button';
import type { GameMode } from '../types';

interface ModeSelectScreenProps {
  onChoose: (mode: GameMode) => void;
  onGlossary: () => void;
  onWeekly: () => void;
  isAdmin: boolean;
  onAdmin: () => void;
}

/** Lets the player pick Challenge or Study mode before the mission map. */
export function ModeSelectScreen({
  onChoose,
  onGlossary,
  onWeekly,
  isAdmin,
  onAdmin,
}: ModeSelectScreenProps) {
  return (
    <main className="screen mode-select">
      <h1 className="mode-select__title">Choose how to play</h1>

      <button className="mode-card" onClick={() => onChoose('challenge')}>
        <span className="mode-card__icon" aria-hidden="true">
          🏆
        </span>
        <span className="mode-card__name">Challenge Mode</span>
        <span className="mode-card__desc">
          Answers are scored. Earn XP and stars, and your progress is saved.
        </span>
      </button>

      <button className="mode-card" onClick={() => onChoose('study')}>
        <span className="mode-card__icon" aria-hidden="true">
          📖
        </span>
        <span className="mode-card__name">Study Mode</span>
        <span className="mode-card__desc">
          Relaxed practice with no score pressure. Learn at your own pace.
        </span>
      </button>

      <Button variant="ghost" className="mode-select__glossary" onClick={onGlossary}>
        📕 Open the glossary
      </Button>

      <Button variant="ghost" className="mode-select__weekly" onClick={onWeekly}>
        📅 Weekly study
      </Button>

      {isAdmin && (
        <Button variant="ghost" className="mode-select__admin" onClick={onAdmin}>
          🔐 Weekly Notes Manager
        </Button>
      )}
    </main>
  );
}
