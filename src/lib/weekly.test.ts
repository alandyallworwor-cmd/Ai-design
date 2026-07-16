import { describe, expect, it } from 'vitest';
import {
  blankActivity,
  isActivityCorrect,
  optionsFor,
  sortLessonsForStudents,
  validateUploadFile,
  type WeeklyActivity,
  type WeeklyLesson,
} from './weekly';

const lesson = (over: Partial<WeeklyLesson>): WeeklyLesson => ({
  id: 'l',
  week_number: 1,
  unit_name: 'ICTICT313',
  topic_title: 'Topic',
  summary: '',
  date_studied: null,
  learning_outcomes: '',
  attachment_path: null,
  status: 'published',
  published_at: '2026-07-01T00:00:00Z',
  created_at: '',
  updated_at: '',
  ...over,
});

describe('validateUploadFile', () => {
  it('accepts pdf, png, jpg and jpeg', () => {
    for (const name of ['notes.pdf', 'scan.PNG', 'photo.jpg', 'photo.jpeg']) {
      expect(validateUploadFile({ name, type: '', size: 1000 }).ok).toBe(true);
    }
  });

  it('rejects unsupported extensions', () => {
    const r = validateUploadFile({ name: 'malware.exe', type: '', size: 1000 });
    expect(r.ok).toBe(false);
  });

  it('rejects a mismatched MIME type', () => {
    const r = validateUploadFile({ name: 'notes.pdf', type: 'application/x-msdownload', size: 10 });
    expect(r.ok).toBe(false);
  });

  it('rejects files over 10 MB', () => {
    const r = validateUploadFile({ name: 'big.pdf', type: 'application/pdf', size: 11 * 1024 * 1024 });
    expect(r.ok).toBe(false);
  });
});

describe('isActivityCorrect', () => {
  it('checks multiple-choice answers against the correct id', () => {
    const a = { activity_type: 'multiple_choice' as const, correct_answer: 'b' };
    expect(isActivityCorrect(a, 'b')).toBe(true);
    expect(isActivityCorrect(a, 'a')).toBe(false);
    expect(isActivityCorrect(a, null)).toBe(false);
  });

  it('checks true/false answers', () => {
    const a = { activity_type: 'true_false' as const, correct_answer: 'false' };
    expect(isActivityCorrect(a, 'false')).toBe(true);
    expect(isActivityCorrect(a, 'true')).toBe(false);
  });

  it('always counts a revision card as correct (self-graded)', () => {
    const a = { activity_type: 'revision_card' as const, correct_answer: null };
    expect(isActivityCorrect(a, null)).toBe(true);
  });
});

describe('optionsFor', () => {
  it('returns implicit True/False options', () => {
    const a = { activity_type: 'true_false', options: [] } as unknown as WeeklyActivity;
    expect(optionsFor(a).map((o) => o.id)).toEqual(['true', 'false']);
  });

  it('returns the stored options for multiple choice', () => {
    const a = {
      activity_type: 'multiple_choice',
      options: [{ id: 'a', text: 'One' }],
    } as unknown as WeeklyActivity;
    expect(optionsFor(a)).toHaveLength(1);
  });
});

describe('blankActivity', () => {
  it('gives multiple choice two starter options and a default correct id', () => {
    const a = blankActivity('multiple_choice', 0);
    expect(a.options).toHaveLength(2);
    expect(a.correct_answer).toBe('a');
  });

  it('defaults true/false to true and revision card to no answer', () => {
    expect(blankActivity('true_false', 1).correct_answer).toBe('true');
    expect(blankActivity('revision_card', 2).correct_answer).toBeNull();
  });
});

describe('sortLessonsForStudents', () => {
  it('orders by week number descending (latest first)', () => {
    const sorted = sortLessonsForStudents([
      lesson({ id: 'w1', week_number: 1 }),
      lesson({ id: 'w3', week_number: 3 }),
      lesson({ id: 'w2', week_number: 2 }),
    ]);
    expect(sorted.map((l) => l.id)).toEqual(['w3', 'w2', 'w1']);
  });
});
