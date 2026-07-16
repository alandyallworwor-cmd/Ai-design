import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

type User = ReturnType<typeof userEvent.setup>;

/** Go from the welcome screen through mode select into the mission map. */
async function startGame(user: User, mode: 'Challenge' | 'Study' = 'Challenge') {
  render(<App />);
  await user.click(screen.getByRole('button', { name: /start playing/i }));
  await user.click(screen.getByRole('button', { name: new RegExp(`${mode} Mode`, 'i') }));
}

/** Answer the four "Plan the Project" questions correctly. */
async function completePlanMission(user: User) {
  await user.click(screen.getByRole('button', { name: /plan the project/i }));
  const answers = [
    /clear goals everyone understands/i,
    /technicians, developers, support staff and managers/i,
    /successes and failures are owned by everyone/i,
    /regular communication, like a daily stand-up/i,
  ];
  for (const answer of answers) {
    await user.click(screen.getByRole('button', { name: answer }));
    await user.click(screen.getByRole('button', { name: /next question|see results/i }));
  }
}

describe('IT Quest app flow', () => {
  it('shows the welcome screen first', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /it quest/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /start playing/i })).toBeInTheDocument();
  });

  it('goes welcome -> mode select -> mission map', async () => {
    const user = userEvent.setup();
    await startGame(user);
    expect(screen.getByRole('heading', { name: /your missions/i })).toBeInTheDocument();
    expect(screen.getByText(/challenge mode/i)).toBeInTheDocument();
  });

  it('starts a mission and shows the first question', async () => {
    const user = userEvent.setup();
    await startGame(user);
    await user.click(screen.getByRole('button', { name: /plan the project/i }));
    expect(screen.getByText(/question 1 of/i)).toBeInTheDocument();
    expect(screen.getByText(/what does a good team need first/i)).toBeInTheDocument();
  });

  it('shows correct feedback for the right answer', async () => {
    const user = userEvent.setup();
    await startGame(user);
    await user.click(screen.getByRole('button', { name: /plan the project/i }));
    await user.click(screen.getByRole('button', { name: /clear goals everyone understands/i }));
    const feedback = screen.getByRole('status');
    expect(within(feedback).getByText(/correct/i)).toBeInTheDocument();
    expect(within(feedback).getByText(/good teamwork starts with clear goals/i)).toBeInTheDocument();
  });

  it('shows a helpful explanation for a wrong answer', async () => {
    const user = userEvent.setup();
    await startGame(user);
    await user.click(screen.getByRole('button', { name: /plan the project/i }));
    await user.click(screen.getByRole('button', { name: /the newest computers/i }));
    const feedback = screen.getByRole('status');
    expect(within(feedback).getByText(/not quite/i)).toBeInTheDocument();
    expect(within(feedback).getByText(/clear goals/i)).toBeInTheDocument();
  });

  it('completes a mission, updates XP and saves progress (challenge mode)', async () => {
    const user = userEvent.setup();
    await startGame(user, 'Challenge');
    await completePlanMission(user);

    expect(screen.getByRole('heading', { name: /mission complete/i })).toBeInTheDocument();
    expect(screen.getByText(/you got 4 of 4 correct/i)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /back to missions/i }));
    expect(screen.getByLabelText(/40 experience points/i)).toBeInTheDocument();
    expect(screen.getByText(/1 of 6 completed/i)).toBeInTheDocument();
  });

  it('does NOT save score in study mode', async () => {
    const user = userEvent.setup();
    await startGame(user, 'Study');
    await completePlanMission(user);

    // Study mode shows a relaxed "practice" message and no saved score.
    expect(screen.getByRole('heading', { name: /practice complete/i })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /back to missions/i }));
    expect(screen.getByLabelText(/0 experience points/i)).toBeInTheDocument();
    expect(screen.getByText(/0 of 6 completed/i)).toBeInTheDocument();
  });

  it('lets the player order the steps correctly', async () => {
    const user = userEvent.setup();
    await startGame(user);
    await user.click(screen.getByRole('button', { name: /organise the work/i }));

    await user.click(screen.getByRole('button', { name: /you notice a data breach/i }));
    await user.click(screen.getByRole('button', { name: /report the breach promptly/i }));
    await user.click(screen.getByRole('button', { name: /check if it is likely to cause serious harm/i }));
    await user.click(screen.getByRole('button', { name: /notify the affected people/i }));
    await user.click(screen.getByRole('button', { name: /check order/i }));

    expect(within(screen.getByRole('status')).getByText(/correct/i)).toBeInTheDocument();
  });

  it('lets the player match IT terms to meanings', async () => {
    const user = userEvent.setup();
    await startGame(user);
    await user.click(screen.getByRole('button', { name: /it terms challenge/i }));

    // Match all five IP pairs (tap the term, then its meaning).
    const pairs: [RegExp, RegExp][] = [
      [/^Copyright$/i, /protects original works/i],
      [/^Trademark$/i, /brand names, logos/i],
      [/^Patent$/i, /an invention or how something works/i],
      [/^Trade Secret$/i, /confidential information like algorithms/i],
      [/^Industrial Design$/i, /how a product looks/i],
    ];
    for (const [term, meaning] of pairs) {
      await user.click(screen.getByRole('button', { name: term }));
      await user.click(screen.getByRole('button', { name: meaning }));
    }

    // Once all pairs are matched, feedback and a Next button appear.
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next question/i })).toBeInTheDocument();
  });

  it('opens weekly study and shows a friendly empty state (no cloud configured)', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /start playing/i }));
    await user.click(screen.getByRole('button', { name: /weekly study/i }));
    expect(
      await screen.findByRole('heading', { name: /weekly study/i }),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/no weekly lessons have been published yet/i),
    ).toBeInTheDocument();
  });

  it('does not show the admin manager to a signed-out user', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /start playing/i }));
    expect(
      screen.queryByRole('button', { name: /weekly notes manager/i }),
    ).not.toBeInTheDocument();
  });

  it('opens the glossary from the mission map', async () => {
    const user = userEvent.setup();
    await startGame(user);
    await user.click(screen.getByRole('button', { name: /glossary/i }));
    expect(screen.getByRole('heading', { name: /^glossary$/i })).toBeInTheDocument();
    expect(screen.getByText(/creations of the mind that are legally protected/i)).toBeInTheDocument();
  });

  it('asks for confirmation before resetting progress', async () => {
    const user = userEvent.setup();
    await startGame(user, 'Challenge');
    await completePlanMission(user);
    await user.click(screen.getByRole('button', { name: /back to missions/i }));

    // Clicking reset opens a confirmation dialog rather than resetting straight away.
    await user.click(screen.getByRole('button', { name: /reset progress/i }));
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(screen.getByLabelText(/40 experience points/i)).toBeInTheDocument();

    // Confirming clears everything.
    await user.click(within(dialog).getByRole('button', { name: /yes, reset/i }));
    expect(screen.getByLabelText(/0 experience points/i)).toBeInTheDocument();
    expect(screen.queryByText(/1 of 6 completed/i)).not.toBeInTheDocument();
  });
});
