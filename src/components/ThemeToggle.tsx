import { useState } from 'react';
import { getTheme, setTheme, type Theme } from '../lib/theme';

/**
 * A small button that switches between the light and dark themes. Like the
 * sound toggle, it is self-contained: the theme lives in the theme module and
 * localStorage, so the button works wherever it is placed.
 */
export function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>(getTheme());

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    setThemeState(next);
  }

  const dark = theme === 'dark';
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Light theme' : 'Dark theme'}
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
