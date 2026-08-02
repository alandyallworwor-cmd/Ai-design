// Tiny sound-effect helper built on the Web Audio API. It synthesises short
// tones on the fly, so there are no audio files to ship and nothing to load.
// Everything degrades gracefully: if the browser has no Web Audio support
// (or we are running in a test environment), the play functions do nothing.

const MUTED_KEY = 'it-quest-muted';

let muted = readMuted();
let context: AudioContext | null = null;

function readMuted(): boolean {
  try {
    return localStorage.getItem(MUTED_KEY) === '1';
  } catch {
    return false;
  }
}

/** Whether sound effects are currently muted. */
export function isMuted(): boolean {
  return muted;
}

/** Turn sound effects on or off, remembering the choice for next time. */
export function setMuted(value: boolean): void {
  muted = value;
  try {
    localStorage.setItem(MUTED_KEY, value ? '1' : '0');
  } catch {
    // Ignore storage failures (e.g. private mode); the session still works.
  }
}

/** Lazily create (and reuse) a single AudioContext. Returns null if unsupported. */
function getContext(): AudioContext | null {
  if (muted) return null;
  if (context) return context;
  const Ctor =
    typeof window !== 'undefined'
      ? window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext
      : undefined;
  if (!Ctor) return null;
  try {
    context = new Ctor();
  } catch {
    return null;
  }
  return context;
}

/** Play a single tone. `delay` lets us schedule little melodies. */
function tone(
  freq: number,
  start: number,
  duration: number,
  type: OscillatorType = 'sine',
  peak = 0.15,
): void {
  const ctx = getContext();
  if (!ctx) return;
  const t0 = ctx.currentTime + start;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  // A quick fade in and out avoids clicks and keeps the sound pleasant.
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(peak, t0 + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t0);
  osc.stop(t0 + duration + 0.02);
}

/** A bright two-note "ding" for a correct answer. */
export function playCorrect(): void {
  tone(660, 0, 0.12, 'sine');
  tone(880, 0.09, 0.16, 'sine');
}

/** A soft low "buzz" for a wrong answer (never harsh). */
export function playWrong(): void {
  tone(200, 0, 0.22, 'triangle', 0.12);
}

/** A little rising fanfare when a mission is completed. */
export function playComplete(): void {
  tone(523, 0, 0.14, 'sine');
  tone(659, 0.12, 0.14, 'sine');
  tone(784, 0.24, 0.14, 'sine');
  tone(1047, 0.36, 0.24, 'sine');
}

/** A sparkly flourish when a badge is unlocked. */
export function playBadge(): void {
  tone(880, 0, 0.1, 'triangle');
  tone(1175, 0.1, 0.1, 'triangle');
  tone(1568, 0.2, 0.2, 'triangle');
}
