import { useEffect, useMemo, useRef, useState } from 'react';
import type { MatchPair } from '../types';

interface MatchingBoardProps {
  pairs: MatchPair[];
  /** True once every pair has been matched. */
  answered: boolean;
  /** Called when all pairs are matched. `perfect` is true if no wrong taps. */
  onComplete: (perfect: boolean) => void;
}

/** Shuffle a copy of an array (used so terms and meanings appear mixed up). */
function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Term-matching activity. The player taps a term on the left, then taps its
 * meaning on the right. Correct pairs lock in green; wrong taps flash red.
 * Everything is a real button, so it works with touch and the keyboard.
 */
export function MatchingBoard({ pairs, answered, onComplete }: MatchingBoardProps) {
  // Shuffle once so the two columns do not line up.
  const terms = useMemo(() => shuffle(pairs), [pairs]);
  const meanings = useMemo(() => shuffle(pairs), [pairs]);

  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [wrongId, setWrongId] = useState<string | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const completed = useRef(false);

  // Tell the parent once, as soon as every pair is matched.
  useEffect(() => {
    if (matched.length === pairs.length && !completed.current) {
      completed.current = true;
      onComplete(mistakes === 0);
    }
  }, [matched, pairs.length, mistakes, onComplete]);

  function pickTerm(id: string) {
    if (answered || matched.includes(id)) return;
    setSelectedTerm(id);
  }

  function pickMeaning(id: string) {
    if (answered || selectedTerm === null || matched.includes(id)) return;
    if (id === selectedTerm) {
      // Correct match.
      setMatched((prev) => [...prev, id]);
      setSelectedTerm(null);
    } else {
      // Wrong match: count it and flash the meaning red briefly.
      setMistakes((m) => m + 1);
      setWrongId(id);
      setSelectedTerm(null);
      window.setTimeout(() => setWrongId(null), 500);
    }
  }

  return (
    <div className="match">
      <div className="match__col">
        {terms.map((pair) => {
          const isMatched = matched.includes(pair.id);
          const isSelected = selectedTerm === pair.id;
          return (
            <button
              key={pair.id}
              className={`match__term ${isMatched ? 'match--done' : ''} ${
                isSelected ? 'match--selected' : ''
              }`.trim()}
              onClick={() => pickTerm(pair.id)}
              disabled={answered || isMatched}
              aria-pressed={isSelected}
            >
              {pair.term}
            </button>
          );
        })}
      </div>
      <div className="match__col">
        {meanings.map((pair) => {
          const isMatched = matched.includes(pair.id);
          const isWrong = wrongId === pair.id;
          return (
            <button
              key={pair.id}
              className={`match__meaning ${isMatched ? 'match--done' : ''} ${
                isWrong ? 'match--wrong' : ''
              }`.trim()}
              onClick={() => pickMeaning(pair.id)}
              disabled={answered || isMatched}
            >
              {pair.meaning}
            </button>
          );
        })}
      </div>
    </div>
  );
}
