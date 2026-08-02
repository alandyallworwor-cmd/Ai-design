import { useEffect, useState } from 'react';
import { AppHeader } from '../components/AppHeader';
import { Button } from '../components/Button';
import { fetchPublishedLessons, sortLessonsForStudents, type WeeklyLesson } from '../lib/weekly';

interface WeeklyWeeksScreenProps {
  xp: number;
  onBack: () => void;
  onPlay: (lesson: WeeklyLesson) => void;
}

type Load = 'loading' | 'ready' | 'error';

/** Student view: the published weekly lessons, newest highlighted. */
export function WeeklyWeeksScreen({ xp, onBack, onPlay }: WeeklyWeeksScreenProps) {
  const [state, setState] = useState<Load>('loading');
  const [lessons, setLessons] = useState<WeeklyLesson[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetchPublishedLessons().then(({ data, error }) => {
      if (cancelled) return;
      if (error) {
        setState('error');
        return;
      }
      setLessons(sortLessonsForStudents(data ?? []));
      setState('ready');
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="screen">
      <AppHeader xp={xp} onBack={onBack} />
      <main className="map">
        <h2 className="map__heading">Weekly study</h2>

        {state === 'loading' && <p className="weekly__note">Loading this week’s lessons…</p>}

        {state === 'error' && (
          <p className="weekly__note weekly__note--error">
            We couldn’t load the weekly lessons right now. Please try again soon.
          </p>
        )}

        {state === 'ready' && lessons.length === 0 && (
          <p className="weekly__note">
            No weekly lessons have been published yet. Check back soon!
          </p>
        )}

        {state === 'ready' && lessons.length > 0 && (
          <div className="weekly__list">
            {lessons.map((lesson, i) => (
              <article
                key={lesson.id}
                className={`weekly-card${i === 0 ? ' weekly-card--latest' : ''}`}
              >
                {i === 0 && <span className="weekly-card__badge">Latest week</span>}
                <h3 className="weekly-card__title">
                  Week {lesson.week_number}: {lesson.topic_title}
                </h3>
                <p className="weekly-card__unit">{lesson.unit_name}</p>
                {lesson.summary && <p className="weekly-card__summary">{lesson.summary}</p>}
                <Button variant="primary" onClick={() => onPlay(lesson)}>
                  Start Week {lesson.week_number}
                </Button>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
