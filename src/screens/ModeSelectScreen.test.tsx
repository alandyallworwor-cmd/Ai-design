import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ModeSelectScreen } from './ModeSelectScreen';

const noop = () => {};

describe('ModeSelectScreen', () => {
  it('always offers Weekly study, and hides the admin link for non-admins', () => {
    render(
      <ModeSelectScreen
        onChoose={noop}
        onGlossary={noop}
        onWeekly={vi.fn()}
        isAdmin={false}
        onAdmin={noop}
      />,
    );
    expect(screen.getByRole('button', { name: /weekly study/i })).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /weekly notes manager/i }),
    ).not.toBeInTheDocument();
  });

  it('shows the Weekly Notes Manager link for admins', () => {
    render(
      <ModeSelectScreen
        onChoose={noop}
        onGlossary={noop}
        onWeekly={noop}
        isAdmin
        onAdmin={noop}
      />,
    );
    expect(
      screen.getByRole('button', { name: /weekly notes manager/i }),
    ).toBeInTheDocument();
  });
});
