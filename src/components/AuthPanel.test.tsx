import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { User } from '@supabase/supabase-js';
import { AuthPanel } from './AuthPanel';

const fakeUser = { email: 'student@example.com' } as User;

describe('AuthPanel', () => {
  it('renders nothing when cloud accounts are disabled', () => {
    const { container } = render(
      <AuthPanel
        enabled={false}
        loading={false}
        user={null}
        syncStatus="idle"
        onSignIn={vi.fn()}
        onSignOut={vi.fn()}
      />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('shows the signed-in email and a sign-out button', async () => {
    const onSignOut = vi.fn();
    render(
      <AuthPanel
        enabled
        loading={false}
        user={fakeUser}
        syncStatus="synced"
        onSignIn={vi.fn()}
        onSignOut={onSignOut}
      />,
    );
    expect(screen.getByText('student@example.com')).toBeInTheDocument();
    expect(screen.getByText(/progress saved to your account/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: /sign out/i }));
    expect(onSignOut).toHaveBeenCalledOnce();
  });

  it('sends a magic link and confirms it on success', async () => {
    const onSignIn = vi.fn().mockResolvedValue({ error: null });
    render(
      <AuthPanel
        enabled
        loading={false}
        user={null}
        syncStatus="idle"
        onSignIn={onSignIn}
        onSignOut={vi.fn()}
      />,
    );
    await userEvent.type(screen.getByLabelText(/save your progress/i), 'me@example.com');
    await userEvent.click(screen.getByRole('button', { name: /email me a link/i }));
    expect(onSignIn).toHaveBeenCalledWith('me@example.com');
    await waitFor(() =>
      expect(screen.getByText(/check your email/i)).toBeInTheDocument(),
    );
  });

  it('surfaces an error message when sign-in fails', async () => {
    const onSignIn = vi.fn().mockResolvedValue({ error: 'Rate limit reached' });
    render(
      <AuthPanel
        enabled
        loading={false}
        user={null}
        syncStatus="idle"
        onSignIn={onSignIn}
        onSignOut={vi.fn()}
      />,
    );
    await userEvent.type(screen.getByLabelText(/save your progress/i), 'me@example.com');
    await userEvent.click(screen.getByRole('button', { name: /email me a link/i }));
    await waitFor(() =>
      expect(screen.getByText(/rate limit reached/i)).toBeInTheDocument(),
    );
  });
});
