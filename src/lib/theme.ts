// Light / dark theme handling. The chosen theme is applied as a `data-theme`
// attribute on <html>, which the CSS uses to pick the right colour variables.
// It is remembered in localStorage; with nothing saved, we follow the device's
// system preference.

const THEME_KEY = 'it-quest-theme';

export type Theme = 'light' | 'dark';

/** The device's current colour-scheme preference (defaults to light). */
function systemTheme(): Theme {
  try {
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  } catch {
    return 'light';
  }
}

/** The theme to use: the saved choice, or the system preference. */
export function getTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // Ignore storage failures and fall back to the system preference.
  }
  return systemTheme();
}

/** Apply a theme to the document (no persistence). */
export function applyTheme(theme: Theme): void {
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = theme;
  }
}

/** Choose a theme, remember it, and apply it. */
export function setTheme(theme: Theme): void {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Ignore storage failures; the theme still applies for this session.
  }
  applyTheme(theme);
}

/** Apply the resolved theme as early as possible (called on module load). */
export function initTheme(): void {
  applyTheme(getTheme());
}

initTheme();
