import { useEffect, useState, type ChangeEvent } from 'react';
import { AppHeader } from '../../components/AppHeader';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import {
  ACTIVITY_LABELS,
  blankActivity,
  createLesson,
  fetchActivities,
  replaceActivities,
  toActivityInput,
  updateLesson,
  uploadAttachment,
  validateUploadFile,
  type ActivityInput,
  type ActivityType,
  type LessonInput,
  type LessonStatus,
  type WeeklyLesson,
} from '../../lib/weekly';

interface LessonEditorScreenProps {
  lesson: WeeklyLesson | null; // null = create
  userId: string;
  xp: number;
  onDone: () => void;
  onCancel: () => void;
}

const ACTIVITY_TYPES: ActivityType[] = ['multiple_choice', 'true_false', 'revision_card'];

/** Create or edit a weekly lesson, its activities and an optional attachment. */
export function LessonEditorScreen({
  lesson,
  userId,
  xp,
  onDone,
  onCancel,
}: LessonEditorScreenProps) {
  const editing = lesson !== null;
  const [weekNumber, setWeekNumber] = useState(String(lesson?.week_number ?? 1));
  const [unitName, setUnitName] = useState(lesson?.unit_name ?? '');
  const [topicTitle, setTopicTitle] = useState(lesson?.topic_title ?? '');
  const [summary, setSummary] = useState(lesson?.summary ?? '');
  const [dateStudied, setDateStudied] = useState(lesson?.date_studied ?? '');
  const [outcomes, setOutcomes] = useState(lesson?.learning_outcomes ?? '');
  const attachmentPath = lesson?.attachment_path ?? null;
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const [activities, setActivities] = useState<ActivityInput[]>([]);
  const [loadingActivities, setLoadingActivities] = useState(editing);
  const [confirmRemove, setConfirmRemove] = useState<number | null>(null);

  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (!lesson) return;
    let cancelled = false;
    fetchActivities(lesson.id).then(({ data }) => {
      if (cancelled) return;
      setActivities((data ?? []).map(toActivityInput));
      setLoadingActivities(false);
    });
    return () => {
      cancelled = true;
    };
  }, [lesson]);

  function pickFile(e: ChangeEvent<HTMLInputElement>) {
    const chosen = e.target.files?.[0] ?? null;
    setFileError(null);
    if (!chosen) {
      setFile(null);
      return;
    }
    const check = validateUploadFile(chosen);
    if (!check.ok) {
      setFile(null);
      setFileError(check.error);
      return;
    }
    setFile(chosen);
  }

  // ---- activity editing ----
  function addActivity(type: ActivityType) {
    setActivities((list) => [...list, blankActivity(type, list.length)]);
  }
  function patchActivity(i: number, patch: Partial<ActivityInput>) {
    setActivities((list) => list.map((a, idx) => (idx === i ? { ...a, ...patch } : a)));
  }
  function removeActivity(i: number) {
    setActivities((list) => list.filter((_, idx) => idx !== i));
    setConfirmRemove(null);
  }
  function setOptionText(i: number, optId: string, text: string) {
    patchActivity(i, {
      options: activities[i].options.map((o) => (o.id === optId ? { ...o, text } : o)),
    });
  }
  function addOption(i: number) {
    const opts = activities[i].options;
    const nextId = String.fromCharCode(97 + opts.length); // a, b, c, ...
    patchActivity(i, { options: [...opts, { id: nextId, text: '' }] });
  }
  function removeOption(i: number, optId: string) {
    const a = activities[i];
    const opts = a.options.filter((o) => o.id !== optId);
    patchActivity(i, {
      options: opts,
      correct_answer: a.correct_answer === optId ? (opts[0]?.id ?? null) : a.correct_answer,
    });
  }

  function validate(): string | null {
    if (!weekNumber.trim() || Number.isNaN(Number(weekNumber))) return 'Enter a week number.';
    if (!unitName.trim()) return 'Enter the unit or subject name.';
    if (!topicTitle.trim()) return 'Enter a topic title.';
    for (const [i, a] of activities.entries()) {
      const n = i + 1;
      if (!a.content.trim()) return `Activity ${n}: add the question or revision content.`;
      if (a.activity_type === 'multiple_choice') {
        const filled = a.options.filter((o) => o.text.trim());
        if (filled.length < 2) return `Activity ${n}: add at least two answer options.`;
        if (!a.correct_answer || !a.options.some((o) => o.id === a.correct_answer && o.text.trim()))
          return `Activity ${n}: choose the correct answer.`;
      }
      if (a.activity_type === 'true_false' && !a.correct_answer)
        return `Activity ${n}: choose True or False.`;
    }
    return null;
  }

  async function save(status: LessonStatus) {
    const problem = validate();
    if (problem) {
      setFormError(problem);
      return;
    }
    setFormError(null);
    setSaving(true);

    const input: LessonInput = {
      week_number: Number(weekNumber),
      unit_name: unitName.trim(),
      topic_title: topicTitle.trim(),
      summary: summary.trim(),
      date_studied: dateStudied || null,
      learning_outcomes: outcomes.trim(),
      attachment_path: attachmentPath,
      status,
    };

    // Create or update the lesson to obtain an id.
    const saved = editing ? await updateLesson(lesson.id, input) : await createLesson(input);
    if (saved.error || !saved.data) {
      setSaving(false);
      setFormError('The lesson could not be saved. Please try again.');
      return;
    }
    const lessonId = saved.data.id;

    // Optional attachment: upload, then store its path.
    if (file) {
      const up = await uploadAttachment(userId, lessonId, file);
      if (up.error || !up.data) {
        setSaving(false);
        setFormError(up.error ?? 'Upload failed. Please try again.');
        return;
      }
      const withFile = await updateLesson(lessonId, { ...input, attachment_path: up.data });
      if (withFile.error) {
        setSaving(false);
        setFormError('The attachment could not be saved. Please try again.');
        return;
      }
    }

    const activitiesSaved = await replaceActivities(lessonId, activities);
    setSaving(false);
    if (activitiesSaved.error) {
      setFormError('The activities could not be saved. Please try again.');
      return;
    }
    onDone();
  }

  return (
    <div className="screen">
      <AppHeader xp={xp} onBack={onCancel} />
      <main className="admin">
        <h2 className="admin__heading">{editing ? 'Edit weekly lesson' : 'New weekly lesson'}</h2>

        <div className="form-grid">
          <label className="field">
            <span className="field__label">Week number</span>
            <input
              className="field__input"
              type="number"
              min={1}
              value={weekNumber}
              onChange={(e) => setWeekNumber(e.target.value)}
            />
          </label>
          <label className="field">
            <span className="field__label">Unit or subject</span>
            <input
              className="field__input"
              type="text"
              value={unitName}
              onChange={(e) => setUnitName(e.target.value)}
            />
          </label>
        </div>

        <label className="field">
          <span className="field__label">Topic title</span>
          <input
            className="field__input"
            type="text"
            value={topicTitle}
            onChange={(e) => setTopicTitle(e.target.value)}
          />
        </label>

        <label className="field">
          <span className="field__label">Short lesson summary</span>
          <textarea
            className="field__input field__textarea"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </label>

        <div className="form-grid">
          <label className="field">
            <span className="field__label">Date studied</span>
            <input
              className="field__input"
              type="date"
              value={dateStudied ?? ''}
              onChange={(e) => setDateStudied(e.target.value)}
            />
          </label>
        </div>

        <label className="field">
          <span className="field__label">Learning outcomes</span>
          <textarea
            className="field__input field__textarea"
            value={outcomes}
            onChange={(e) => setOutcomes(e.target.value)}
          />
        </label>

        <label className="field">
          <span className="field__label">Optional PDF or image (PDF, PNG, JPG, JPEG · max 10 MB)</span>
          <input
            className="field__input"
            type="file"
            accept=".pdf,.png,.jpg,.jpeg,application/pdf,image/png,image/jpeg"
            onChange={pickFile}
          />
        </label>
        {attachmentPath && !file && (
          <p className="weekly__note">Current attachment saved. Choose a new file to replace it.</p>
        )}
        {file && <p className="weekly__note">Selected: {file.name}</p>}
        {fileError && <p className="weekly__note weekly__note--error">{fileError}</p>}

        <h3 className="admin__subheading">Activities</h3>
        {loadingActivities ? (
          <p className="weekly__note">Loading activities…</p>
        ) : (
          <>
            {activities.length === 0 && (
              <p className="weekly__note">No activities yet. Add one below.</p>
            )}
            {activities.map((activity, i) => (
              <ActivityEditor
                key={i}
                index={i}
                activity={activity}
                onPatch={(patch) => patchActivity(i, patch)}
                onSetOptionText={(optId, text) => setOptionText(i, optId, text)}
                onAddOption={() => addOption(i)}
                onRemoveOption={(optId) => removeOption(i, optId)}
                onRemove={() => setConfirmRemove(i)}
              />
            ))}
            <div className="admin__add-row">
              {ACTIVITY_TYPES.map((type) => (
                <Button key={type} variant="secondary" onClick={() => addActivity(type)}>
                  ＋ {ACTIVITY_LABELS[type]}
                </Button>
              ))}
            </div>
          </>
        )}

        {formError && <p className="weekly__note weekly__note--error">{formError}</p>}

        <div className="admin__save-row">
          <Button variant="ghost" onClick={onCancel} disabled={saving}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={() => save('draft')} disabled={saving}>
            {saving ? 'Saving…' : 'Save draft'}
          </Button>
          <Button variant="primary" onClick={() => save('published')} disabled={saving}>
            {saving ? 'Saving…' : 'Publish'}
          </Button>
        </div>
      </main>

      {confirmRemove !== null && (
        <Modal title="Remove this activity?" onClose={() => setConfirmRemove(null)}>
          <p className="modal__text">This activity will be removed from the lesson.</p>
          <div className="modal__actions">
            <Button variant="ghost" onClick={() => setConfirmRemove(null)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => removeActivity(confirmRemove)}>
              Yes, remove
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

interface ActivityEditorProps {
  index: number;
  activity: ActivityInput;
  onPatch: (patch: Partial<ActivityInput>) => void;
  onSetOptionText: (optId: string, text: string) => void;
  onAddOption: () => void;
  onRemoveOption: (optId: string) => void;
  onRemove: () => void;
}

function ActivityEditor({
  index,
  activity,
  onPatch,
  onSetOptionText,
  onAddOption,
  onRemoveOption,
  onRemove,
}: ActivityEditorProps) {
  function changeType(type: ActivityType) {
    onPatch(blankActivity(type, activity.display_order));
  }

  return (
    <fieldset className="activity-editor">
      <legend className="activity-editor__legend">Activity {index + 1}</legend>

      <label className="field">
        <span className="field__label">Activity type</span>
        <select
          className="field__input"
          value={activity.activity_type}
          onChange={(e) => changeType(e.target.value as ActivityType)}
        >
          {ACTIVITY_TYPES.map((type) => (
            <option key={type} value={type}>
              {ACTIVITY_LABELS[type]}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span className="field__label">
          {activity.activity_type === 'revision_card' ? 'Revision content' : 'Question'}
        </span>
        <textarea
          className="field__input field__textarea"
          value={activity.content}
          onChange={(e) => onPatch({ content: e.target.value })}
        />
      </label>

      {activity.activity_type === 'multiple_choice' && (
        <div className="field">
          <span className="field__label">Answer options (select the correct one)</span>
          {activity.options.map((opt) => (
            <div key={opt.id} className="option-row">
              <input
                type="radio"
                name={`correct-${index}`}
                checked={activity.correct_answer === opt.id}
                onChange={() => onPatch({ correct_answer: opt.id })}
                aria-label={`Mark option ${opt.id} correct`}
              />
              <input
                className="field__input"
                type="text"
                value={opt.text}
                placeholder={`Option ${opt.id.toUpperCase()}`}
                onChange={(e) => onSetOptionText(opt.id, e.target.value)}
              />
              {activity.options.length > 2 && (
                <Button variant="ghost" onClick={() => onRemoveOption(opt.id)}>
                  ✕
                </Button>
              )}
            </div>
          ))}
          <Button variant="ghost" onClick={onAddOption}>
            ＋ Add option
          </Button>
        </div>
      )}

      {activity.activity_type === 'true_false' && (
        <label className="field">
          <span className="field__label">Correct answer</span>
          <select
            className="field__input"
            value={activity.correct_answer ?? 'true'}
            onChange={(e) => onPatch({ correct_answer: e.target.value })}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </label>
      )}

      <label className="field">
        <span className="field__label">
          {activity.activity_type === 'revision_card' ? 'Answer / explanation' : 'Explanation'}
        </span>
        <textarea
          className="field__input field__textarea"
          value={activity.explanation}
          onChange={(e) => onPatch({ explanation: e.target.value })}
        />
      </label>

      <div className="form-grid">
        <label className="field">
          <span className="field__label">XP value</span>
          <input
            className="field__input"
            type="number"
            min={0}
            value={String(activity.xp_value)}
            onChange={(e) => onPatch({ xp_value: Math.max(0, Number(e.target.value) || 0) })}
          />
        </label>
      </div>

      <Button variant="ghost" className="activity-editor__remove" onClick={onRemove}>
        Remove activity
      </Button>
    </fieldset>
  );
}
