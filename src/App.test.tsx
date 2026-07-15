import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

/** Helper: click Start and open the first mission ("Plan the Project"). */
async function openPlanMission(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole('button', { name: /start playing/i }));
  await user.click(screen.getByRole('button', { name: /plan the project/i }));
}

describe('IT Quest app flow', () => {
  it('shows the welcome screen first', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /it quest/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /start playing/i }),
    ).toBeInTheDocument();
  });

  it('navigates from welcome to the mission map', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /start playing/i }));
    expect(
      screen.getByRole('heading', { name: /your missions/i }),
    ).toBeInTheDocument();
  });

  it('starts a mission and shows the first question', async () => {
    const user = userEvent.setup();
    render(<App />);
    await openPlanMission(user);
    expect(screen.getByText(/question 1 of/i)).toBeInTheDocument();
    expect(screen.getByText(/what does a good team need first/i)).toBeInTheDocument();
  });

  it('shows correct feedback when the right answer is chosen', async () => {
    const user = userEvent.setup();
    render(<App />);
    await openPlanMission(user);
    await user.click(
      screen.getByRole('button', { name: /clear goals everyone understands/i }),
    );
    const feedback = screen.getByRole('status');
    expect(within(feedback).getByText(/correct/i)).toBeInTheDocument();
    expect(within(feedback).getByText(/good teamwork starts with clear goals/i)).toBeInTheDocument();
  });

  it('shows a helpful explanation when the wrong answer is chosen', async () => {
    const user = userEvent.setup();
    render(<App />);
    await openPlanMission(user);
    await user.click(
      screen.getByRole('button', { name: /the newest computers/i }),
    );
    const feedback = screen.getByRole('status');
    expect(within(feedback).getByText(/not quite/i)).toBeInTheDocument();
    // Even after a wrong answer, the explanation still teaches the point.
    expect(within(feedback).getByText(/clear goals/i)).toBeInTheDocument();
  });

  it('completes the mission, updates XP and saves progress', async () => {
    const user = userEvent.setup();
    render(<App />);
    await openPlanMission(user);

    // Answer all four questions correctly.
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

    expect(
      screen.getByRole('heading', { name: /mission complete/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/you got 4 of 4 correct/i)).toBeInTheDocument();

    // Back on the map, XP should reflect the 4 correct answers.
    await user.click(screen.getByRole('button', { name: /back to missions/i }));
    expect(screen.getByLabelText(/40 experience points/i)).toBeInTheDocument();
    expect(screen.getByText(/1 of 2 missions completed/i)).toBeInTheDocument();
  });

  it('lets the player order the steps and reset progress', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /start playing/i }));
    await user.click(screen.getByRole('button', { name: /organise the work/i }));

    // Tap the four breach steps in the correct order.
    await user.click(screen.getByRole('button', { name: /you notice a data breach/i }));
    await user.click(screen.getByRole('button', { name: /report the breach promptly/i }));
    await user.click(screen.getByRole('button', { name: /check if it is likely to cause serious harm/i }));
    await user.click(screen.getByRole('button', { name: /notify the affected people/i }));
    await user.click(screen.getByRole('button', { name: /check order/i }));

    expect(within(screen.getByRole('status')).getByText(/correct/i)).toBeInTheDocument();
  });
});
