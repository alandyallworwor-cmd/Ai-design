import type { SyncStatus } from '../hooks/useCloudSync';

interface SyncIndicatorProps {
  status: SyncStatus;
}

// Friendly copy only — no database or Supabase error details are ever shown.
const LABELS: Record<SyncStatus, { icon: string; text: string } | null> = {
  idle: null,
  loading: { icon: '⏳', text: 'Loading your saved progress…' },
  syncing: { icon: '🔄', text: 'Saving your progress…' },
  synced: { icon: '✅', text: 'Progress saved to your account' },
  offline: { icon: '📴', text: "You're offline — progress is saved on this device" },
  error: { icon: '⚠️', text: "Couldn't sync just now — we'll try again" },
};

/** Small, calm status pill shown while signed in. Renders nothing when idle. */
export function SyncIndicator({ status }: SyncIndicatorProps) {
  const label = LABELS[status];
  if (!label) return null;
  return (
    <p className={`sync-indicator sync-indicator--${status}`} role="status" aria-live="polite">
      <span aria-hidden="true">{label.icon}</span> {label.text}
    </p>
  );
}
