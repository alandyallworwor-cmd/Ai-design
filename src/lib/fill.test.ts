import { describe, expect, it } from 'vitest';
import { isFillCorrect } from './fill';
import type { FillQuestion } from '../types';

const question: FillQuestion = {
  kind: 'fill',
  id: 'q',
  prompt: 'The privacy regulator acronym is ___.',
  acceptedAnswers: ['OAIC', 'Office of the Australian Information Commissioner'],
  explanation: '',
};

describe('isFillCorrect', () => {
  it('matches ignoring case and surrounding spaces', () => {
    expect(isFillCorrect(question, 'OAIC')).toBe(true);
    expect(isFillCorrect(question, '  oaic ')).toBe(true);
    expect(isFillCorrect(question, 'Oaic')).toBe(true);
  });

  it('matches any of the accepted answers', () => {
    expect(
      isFillCorrect(question, 'office of the australian information commissioner'),
    ).toBe(true);
  });

  it('rejects wrong or empty answers', () => {
    expect(isFillCorrect(question, 'ACMA')).toBe(false);
    expect(isFillCorrect(question, '')).toBe(false);
    expect(isFillCorrect(question, '   ')).toBe(false);
  });
});
