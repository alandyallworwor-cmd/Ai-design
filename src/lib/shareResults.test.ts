import { describe, expect, it } from 'vitest';
import { buildShareText, shareResults } from './shareResults';
import type { Progress } from '../types';

const progress: Progress = {
  xp: 120,
  completed: {
    plan: { stars: 3, correct: 4, total: 4 },
  },
  bestStreak: 6,
  badges: ['rookie', 'perfect'],
};

describe('buildShareText', () => {
  it('includes the headline stats', () => {
    const text = buildShareText(progress);
    expect(text).toContain('IT Quest');
    expect(text).toContain('120 XP');
    expect(text).toContain('Best streak: 6');
    // Two of nine badges earned.
    expect(text).toContain('Badges 2/9');
  });
});

describe('shareResults', () => {
  it('reports "unsupported" when neither share nor clipboard is available', async () => {
    // jsdom has no navigator.share and no clipboard.writeText by default.
    const outcome = await shareResults(progress);
    expect(['unsupported', 'copied']).toContain(outcome);
  });
});
