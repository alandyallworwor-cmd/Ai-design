import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ResultsScreen } from './ResultsScreen';
import { missions } from '../data/missions';
import type { Progress } from '../types';

/** Build a progress object where every mission has the given star count. */
function progressWithStars(stars: number): Progress {
  const completed: Progress['completed'] = {};
  for (const m of missions) {
    completed[m.id] = { stars, correct: 1, total: 1 };
  }
  return { xp: 120, completed };
}

describe('ResultsScreen', () => {
  it('recommends revising missions scored under 3 stars', () => {
    // Only the first mission is perfect; the rest need revision.
    const progress = progressWithStars(1);
    progress.completed[missions[0].id] = { stars: 3, correct: 1, total: 1 };

    render(<ResultsScreen progress={progress} onBack={vi.fn()} />);

    expect(screen.getByRole('heading', { name: /topics to revise/i })).toBeInTheDocument();
    // The perfect mission's topic should NOT be listed.
    expect(screen.queryByText(missions[0].topic)).not.toBeInTheDocument();
    // A missed mission's topic SHOULD be listed.
    expect(screen.getByText(missions[1].topic)).toBeInTheDocument();
  });

  it('congratulates the player when every mission has 3 stars', () => {
    render(<ResultsScreen progress={progressWithStars(3)} onBack={vi.fn()} />);
    expect(screen.getByText(/mastered/i)).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /topics to revise/i })).not.toBeInTheDocument();
  });
});
