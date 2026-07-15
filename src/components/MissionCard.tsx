import type { Mission, MissionResult } from '../types';

interface MissionCardProps {
  mission: Mission;
  /** The saved result if the player has finished this mission before. */
  result?: MissionResult;
  onStart: () => void;
}

/** Shows up to 3 stars, filled based on how well the mission was done. */
function Stars({ stars }: { stars: number }) {
  return (
    <span className="mission-card__stars" aria-label={`${stars} of 3 stars`}>
      {[1, 2, 3].map((n) => (
        <span key={n} aria-hidden="true">
          {n <= stars ? '★' : '☆'}
        </span>
      ))}
    </span>
  );
}

/** A tappable card on the mission map that opens one mission. */
export function MissionCard({ mission, result, onStart }: MissionCardProps) {
  const done = result !== undefined;
  return (
    <button className="mission-card" onClick={onStart}>
      <span className="mission-card__icon" aria-hidden="true">
        {mission.icon}
      </span>
      <span className="mission-card__body">
        <span className="mission-card__title">{mission.title}</span>
        <span className="mission-card__subtitle">{mission.subtitle}</span>
        {done && <Stars stars={result.stars} />}
      </span>
      <span className="mission-card__go" aria-hidden="true">
        {done ? 'Replay' : 'Start'}
      </span>
    </button>
  );
}
