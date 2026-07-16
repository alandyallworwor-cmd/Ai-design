import { supabase } from './supabase';

// ---- Types -----------------------------------------------------------------

export type ActivityType = 'multiple_choice' | 'true_false' | 'revision_card';
export type LessonStatus = 'draft' | 'published';

export interface ActivityOption {
  id: string;
  text: string;
}

export interface WeeklyActivity {
  id: string;
  lesson_id: string;
  activity_type: ActivityType;
  content: string;
  options: ActivityOption[];
  correct_answer: string | null;
  explanation: string;
  xp_value: number;
  display_order: number;
}

export interface WeeklyLesson {
  id: string;
  week_number: number;
  unit_name: string;
  topic_title: string;
  summary: string;
  date_studied: string | null;
  learning_outcomes: string;
  attachment_path: string | null;
  status: LessonStatus;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

/** The editable fields of a lesson (everything the admin form controls). */
export type LessonInput = Pick<
  WeeklyLesson,
  | 'week_number'
  | 'unit_name'
  | 'topic_title'
  | 'summary'
  | 'date_studied'
  | 'learning_outcomes'
  | 'attachment_path'
  | 'status'
>;

export type ActivityInput = Pick<
  WeeklyActivity,
  | 'activity_type'
  | 'content'
  | 'options'
  | 'correct_answer'
  | 'explanation'
  | 'xp_value'
  | 'display_order'
>;

/** Friendly result wrapper — never carries raw Supabase/database error text. */
export type Result<T> = { data: T; error: null } | { data: null; error: string };

const GENERIC_ERROR = 'Something went wrong. Please try again.';

// ---- Pure helpers (unit-tested) -------------------------------------------

export const ACTIVITY_LABELS: Record<ActivityType, string> = {
  multiple_choice: 'Multiple choice',
  true_false: 'True or false',
  revision_card: 'Revision card',
};

export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024; // 10 MB
const ALLOWED_EXT = /\.(pdf|png|jpe?g)$/i;
const ALLOWED_TYPES = ['application/pdf', 'image/png', 'image/jpeg'];

/** Validate an optional attachment before upload. Type + size only (MVP). */
export function validateUploadFile(file: {
  name: string;
  type: string;
  size: number;
}): { ok: true } | { ok: false; error: string } {
  if (!ALLOWED_EXT.test(file.name)) {
    return { ok: false, error: 'Please choose a PDF, PNG, JPG or JPEG file.' };
  }
  // Some browsers report an empty MIME type; the extension check above still gates it.
  if (file.type && !ALLOWED_TYPES.includes(file.type)) {
    return { ok: false, error: 'That file type is not supported.' };
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    return { ok: false, error: 'That file is too large (maximum 10 MB).' };
  }
  return { ok: true };
}

/** Whether a student's answer to an activity is correct. Revision cards self-grade. */
export function isActivityCorrect(
  activity: Pick<WeeklyActivity, 'activity_type' | 'correct_answer'>,
  answer: string | null,
): boolean {
  if (activity.activity_type === 'revision_card') return true;
  return answer != null && answer === activity.correct_answer;
}

/** The options a student is shown for an activity (True/False is implicit). */
export function optionsFor(activity: WeeklyActivity): ActivityOption[] {
  if (activity.activity_type === 'true_false') {
    return [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ];
  }
  return activity.options;
}

/** A blank activity for the editor, with sensible defaults per type. */
export function blankActivity(type: ActivityType, order: number): ActivityInput {
  return {
    activity_type: type,
    content: '',
    options:
      type === 'multiple_choice'
        ? [
            { id: 'a', text: '' },
            { id: 'b', text: '' },
          ]
        : [],
    correct_answer: type === 'true_false' ? 'true' : type === 'multiple_choice' ? 'a' : null,
    explanation: '',
    xp_value: 10,
    display_order: order,
  };
}

/** Turn a fetched activity into a saveable input (drops server-owned fields). */
export function toActivityInput(a: WeeklyActivity): ActivityInput {
  return {
    activity_type: a.activity_type,
    content: a.content,
    options: a.options,
    correct_answer: a.correct_answer,
    explanation: a.explanation,
    xp_value: a.xp_value,
    display_order: a.display_order,
  };
}

/** Sort lessons newest-week-first; the first item is the "latest" to highlight. */
export function sortLessonsForStudents(lessons: WeeklyLesson[]): WeeklyLesson[] {
  return [...lessons].sort((a, b) => {
    if (b.week_number !== a.week_number) return b.week_number - a.week_number;
    return (b.published_at ?? '').localeCompare(a.published_at ?? '');
  });
}

// ---- Data access (thin Supabase wrappers) ---------------------------------

const LESSON_COLUMNS =
  'id, week_number, unit_name, topic_title, summary, date_studied, learning_outcomes, attachment_path, status, published_at, created_at, updated_at';
const ACTIVITY_COLUMNS =
  'id, lesson_id, activity_type, content, options, correct_answer, explanation, xp_value, display_order';

/** Published lessons for the student game (draft lessons are never returned). */
export async function fetchPublishedLessons(): Promise<Result<WeeklyLesson[]>> {
  if (!supabase) return { data: [], error: null };
  try {
    const { data, error } = await supabase
      .from('weekly_lessons')
      .select(LESSON_COLUMNS)
      .eq('status', 'published')
      .order('week_number', { ascending: false });
    if (error) return { data: null, error: GENERIC_ERROR };
    return { data: (data ?? []) as WeeklyLesson[], error: null };
  } catch {
    return { data: null, error: GENERIC_ERROR };
  }
}

/** All lessons (admin only — RLS enforces this). */
export async function fetchAllLessons(): Promise<Result<WeeklyLesson[]>> {
  if (!supabase) return { data: [], error: null };
  try {
    const { data, error } = await supabase
      .from('weekly_lessons')
      .select(LESSON_COLUMNS)
      .order('week_number', { ascending: false });
    if (error) return { data: null, error: GENERIC_ERROR };
    return { data: (data ?? []) as WeeklyLesson[], error: null };
  } catch {
    return { data: null, error: GENERIC_ERROR };
  }
}

export async function fetchActivities(lessonId: string): Promise<Result<WeeklyActivity[]>> {
  if (!supabase) return { data: [], error: null };
  try {
    const { data, error } = await supabase
      .from('weekly_activities')
      .select(ACTIVITY_COLUMNS)
      .eq('lesson_id', lessonId)
      .order('display_order', { ascending: true });
    if (error) return { data: null, error: GENERIC_ERROR };
    return { data: (data ?? []) as WeeklyActivity[], error: null };
  } catch {
    return { data: null, error: GENERIC_ERROR };
  }
}

export async function createLesson(input: LessonInput): Promise<Result<WeeklyLesson>> {
  if (!supabase) return { data: null, error: GENERIC_ERROR };
  try {
    const { data, error } = await supabase
      .from('weekly_lessons')
      .insert(withPublishedAt(input))
      .select(LESSON_COLUMNS)
      .single();
    if (error || !data) return { data: null, error: GENERIC_ERROR };
    return { data: data as WeeklyLesson, error: null };
  } catch {
    return { data: null, error: GENERIC_ERROR };
  }
}

export async function updateLesson(
  id: string,
  input: LessonInput,
): Promise<Result<WeeklyLesson>> {
  if (!supabase) return { data: null, error: GENERIC_ERROR };
  try {
    const { data, error } = await supabase
      .from('weekly_lessons')
      .update(withPublishedAt(input))
      .eq('id', id)
      .select(LESSON_COLUMNS)
      .single();
    if (error || !data) return { data: null, error: GENERIC_ERROR };
    return { data: data as WeeklyLesson, error: null };
  } catch {
    return { data: null, error: GENERIC_ERROR };
  }
}

export async function deleteLesson(id: string): Promise<Result<true>> {
  if (!supabase) return { data: null, error: GENERIC_ERROR };
  try {
    const { error } = await supabase.from('weekly_lessons').delete().eq('id', id);
    if (error) return { data: null, error: GENERIC_ERROR };
    return { data: true, error: null };
  } catch {
    return { data: null, error: GENERIC_ERROR };
  }
}

/** Replace a lesson's activities with the given list (simple MVP save). */
export async function replaceActivities(
  lessonId: string,
  activities: ActivityInput[],
): Promise<Result<true>> {
  if (!supabase) return { data: null, error: GENERIC_ERROR };
  try {
    const del = await supabase.from('weekly_activities').delete().eq('lesson_id', lessonId);
    if (del.error) return { data: null, error: GENERIC_ERROR };
    if (activities.length === 0) return { data: true, error: null };
    const rows = activities.map((a, i) => ({ ...a, lesson_id: lessonId, display_order: i }));
    const { error } = await supabase.from('weekly_activities').insert(rows);
    if (error) return { data: null, error: GENERIC_ERROR };
    return { data: true, error: null };
  } catch {
    return { data: null, error: GENERIC_ERROR };
  }
}

/** Upload an optional attachment into the user's protected storage folder. */
export async function uploadAttachment(
  userId: string,
  lessonId: string,
  file: File,
): Promise<Result<string>> {
  if (!supabase) return { data: null, error: GENERIC_ERROR };
  const check = validateUploadFile(file);
  if (!check.ok) return { data: null, error: check.error };
  const ext = file.name.split('.').pop()?.toLowerCase() ?? 'bin';
  const path = `${userId}/${lessonId}/attachment.${ext}`;
  try {
    const { error } = await supabase.storage
      .from('weekly-notes')
      .upload(path, file, { upsert: true, contentType: file.type || undefined });
    if (error) return { data: null, error: 'Upload failed. Please try again.' };
    return { data: path, error: null };
  } catch {
    return { data: null, error: 'Upload failed. Please try again.' };
  }
}

function withPublishedAt(input: LessonInput) {
  return {
    ...input,
    published_at: input.status === 'published' ? new Date().toISOString() : null,
  };
}
