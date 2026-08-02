import { useState } from 'react';
import { isMuted, playCorrect, setMuted } from '../lib/sound';

/**
 * A small speaker button that turns sound effects on or off. It is
 * self-contained: the mute state lives in the sound module (and localStorage),
 * so the button works anywhere it is placed without any wiring.
 */
export function SoundToggle() {
  const [muted, setMutedState] = useState(isMuted());

  function toggle() {
    const next = !muted;
    setMuted(next);
    setMutedState(next);
    // Give a little audible confirmation when turning sound back on.
    if (!next) playCorrect();
  }

  return (
    <button
      type="button"
      className="sound-toggle"
      onClick={toggle}
      aria-pressed={!muted}
      aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
      title={muted ? 'Sound off' : 'Sound on'}
    >
      {muted ? '🔇' : '🔊'}
    </button>
  );
}
