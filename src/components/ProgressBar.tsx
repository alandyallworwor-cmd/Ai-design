interface ProgressBarProps {
  /** How many steps are done. */
  current: number;
  /** Total number of steps. */
  total: number;
  /** Optional label read by screen readers. */
  label?: string;
}

/** A simple, accessible progress bar shown at the top of a mission. */
export function ProgressBar({
  current,
  total,
  label = 'Mission progress',
}: ProgressBarProps) {
  const safeTotal = Math.max(total, 1);
  const percent = Math.min(100, Math.round((current / safeTotal) * 100));

  return (
    <div
      className="progress"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={current}
    >
      <div className="progress__fill" style={{ width: `${percent}%` }} />
    </div>
  );
}
