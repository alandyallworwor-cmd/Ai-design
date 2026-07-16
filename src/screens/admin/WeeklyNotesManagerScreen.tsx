import { useCallback, useEffect, useState } from 'react';
import { AppHeader } from '../../components/AppHeader';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import {
  deleteLesson,
  fetchAllLessons,
  updateLesson,
  type LessonInput,
  type WeeklyLesson,
} from '../../lib/weekly';

interface WeeklyNotesManagerScreenProps {
  xp: number;
  onBack: () => void;
  onCreate: () => void;
  onEdit: (lesson: WeeklyLesson) => void;
}

type Load = 'loading' | 'ready' | 'error';

function toInput(lesson: WeeklyLesson, status: LessonInput['status']): LessonInput {
  return {
    week_number: lesson.week_number,
    unit_name: lesson.unit_name,
    topic_title: lesson.topic_title,
    summary: lesson.summary,
    date_studied: lesson.date_studied,
    learning_outcomes: lesson.learning_outcomes,
    attachment_path: lesson.attachment_path,
    status,
  };
}

/** Admin home: view, create, publish/unpublish and delete weekly lessons. */
export function WeeklyNotesManagerScreen({
  xp,
  onBack,
  onCreate,
  onEdit,
}: WeeklyNotesManagerScreenProps) {
  const [state, setState] = useState<Load>('loading');
  const [lessons, setLessons] = useState<WeeklyLesson[]>([]);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<WeeklyLesson | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(() => {
    setState('loading');
    fetchAllLessons().then(({ data, error }) => {
      if (error) {
        setState('error');
        return;
      }
      setLessons(data ?? []);
      setState('ready');
    });
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function togglePublish(lesson: WeeklyLesson) {
    setBusyId(lesson.id);
    setError(null);
    const nextStatus = lesson.status === 'published' ? 'draft' : 'published';
    const { error } = await updateLesson(lesson.id, toInput(lesson, nextStatus));
    setBusyId(null);
    if (error) {
      setError('That change could not be saved. Please try again.');
      return;
    }
    load();
  }

  async function doDelete(lesson: WeeklyLesson) {
    setConfirmDelete(null);
    setBusyId(lesson.id);
    setError(null);
    const { error } = await deleteLesson(lesson.id);
    setBusyId(null);
    if (error) {
      setError('That lesson could not be deleted. Please try again.');
      return;
    }
    load();
  }

  return (
    <div className="screen">
      <AppHeader xp={xp} onBack={onBack} />
      <main className="admin">
        <h2 className="admin__heading">Weekly Notes Manager</h2>
        <p className="admin__intro">Create weekly study lessons and publish them to the game.</p>

        <Button variant="primary" className="admin__new" onClick={onCreate}>
          ＋ New weekly lesson
        </Button>

        {error && <p className="weekly__note weekly__note--error">{error}</p>}

        {state === 'loading' && <p className="weekly__note">Loading lessons…</p>}
        {state === 'error' && (
          <p className="weekly__note weekly__note--error">
            We couldn’t load your lessons right now. Please try again soon.
          </p>
        )}
        {state === 'ready' && lessons.length === 0 && (
          <p className="weekly__note">No lessons yet. Create your first weekly lesson above.</p>
        )}

        {state === 'ready' && lessons.length > 0 && (
          <div className="admin__list">
            {lessons.map((lesson) => (
              <article key={lesson.id} className="admin-lesson">
                <div className="admin-lesson__head">
                  <h3 className="admin-lesson__title">
                    Week {lesson.week_number}: {lesson.topic_title}
                  </h3>
                  <span className={`admin-lesson__status admin-lesson__status--${lesson.status}`}>
                    {lesson.status === 'published' ? 'Published' : 'Draft'}
                  </span>
                </div>
                <p className="admin-lesson__unit">{lesson.unit_name}</p>
                <div className="admin-lesson__actions">
                  <Button
                    variant="secondary"
                    onClick={() => onEdit(lesson)}
                    disabled={busyId === lesson.id}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => togglePublish(lesson)}
                    disabled={busyId === lesson.id}
                  >
                    {lesson.status === 'published' ? 'Unpublish' : 'Publish'}
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setConfirmDelete(lesson)}
                    disabled={busyId === lesson.id}
                  >
                    Delete
                  </Button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {confirmDelete && (
        <Modal title="Delete this lesson?" onClose={() => setConfirmDelete(null)}>
          <p className="modal__text">
            This will permanently delete “Week {confirmDelete.week_number}:{' '}
            {confirmDelete.topic_title}” and its activities. This cannot be undone.
          </p>
          <div className="modal__actions">
            <Button variant="ghost" onClick={() => setConfirmDelete(null)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => doDelete(confirmDelete)}>
              Yes, delete
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}
