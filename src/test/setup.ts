// Adds custom jest-dom matchers (e.g. toBeInTheDocument) to Vitest's expect,
// and clears localStorage between tests so saved progress never leaks across cases.
import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';

afterEach(() => {
  localStorage.clear();
});
