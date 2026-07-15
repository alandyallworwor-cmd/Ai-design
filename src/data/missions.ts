import type { Mission } from '../types';

// Phase 1 missions.
// Every question and explanation below comes from the Week 1 Work Skills notes
// (BSBXTW301 Teamwork and ICTICT313 Privacy / Notifiable Data Breaches).
// Nothing here is invented outside those notes.

export const missions: Mission[] = [
  {
    id: 'plan',
    title: 'Plan the Project',
    subtitle: 'Pick the right goals, people and habits for a good IT team.',
    icon: '🧭',
    questions: [
      {
        kind: 'select',
        id: 'plan-goals',
        prompt:
          'Your new team is starting an IT project. What does a good team need FIRST?',
        choices: [
          { id: 'a', text: 'Clear goals everyone understands' },
          { id: 'b', text: 'The newest computers' },
          { id: 'c', text: 'One person to do all the work' },
          { id: 'd', text: 'No meetings at all' },
        ],
        correctId: 'a',
        explanation:
          'Good teamwork starts with clear goals, so everyone knows what the team is trying to achieve.',
      },
      {
        kind: 'select',
        id: 'plan-people',
        prompt:
          'Who works together on an IT team to deliver services and fix issues?',
        choices: [
          { id: 'a', text: 'Only one manager' },
          {
            id: 'b',
            text: 'Technicians, developers, support staff and managers',
          },
          { id: 'c', text: 'Only people with the exact same skills' },
          { id: 'd', text: 'Customers only' },
        ],
        correctId: 'b',
        explanation:
          'In IT, teamwork brings together technicians, developers, support staff and managers who collaborate to deliver services and solve problems.',
      },
      {
        kind: 'select',
        id: 'plan-shared',
        prompt: 'What does "shared responsibility" mean in a team?',
        choices: [
          { id: 'a', text: 'Only the boss is responsible' },
          { id: 'b', text: 'Successes and failures are owned by everyone' },
          { id: 'c', text: 'Nobody is responsible' },
          { id: 'd', text: 'Each person hides their mistakes' },
        ],
        correctId: 'b',
        explanation:
          'Shared responsibility means the whole team owns both successes and failures together, not just one person.',
      },
      {
        kind: 'select',
        id: 'plan-comms',
        prompt: 'Which habit keeps a team informed and aligned each day?',
        choices: [
          { id: 'a', text: 'Regular communication, like a daily stand-up' },
          { id: 'b', text: 'Waiting until the project ends to talk' },
          { id: 'c', text: 'Emailing only when something breaks' },
          { id: 'd', text: 'Keeping information to yourself' },
        ],
        correctId: 'a',
        explanation:
          'Regular communication, such as daily or weekly stand-up meetings, keeps everyone informed, aligned and able to spot issues early.',
      },
    ],
  },
  {
    id: 'organise',
    title: 'Organise the Work',
    subtitle: 'Tap the steps in the correct order to organise the work.',
    icon: '🗂️',
    questions: [
      {
        kind: 'order',
        id: 'organise-breach',
        prompt:
          'A data breach happens. Tap the steps in the correct order for a Notifiable Data Breach (NDB).',
        items: [
          { id: 's1', text: 'You notice a data breach has happened' },
          { id: 's2', text: 'Report the breach promptly to your team' },
          { id: 's3', text: 'Check if it is likely to cause serious harm' },
          { id: 's4', text: 'Notify the affected people and the OAIC' },
        ],
        correctOrder: ['s1', 's2', 's3', 's4'],
        explanation:
          'Under the NDB scheme, ICT staff report breaches promptly, then the organisation must notify affected people and the OAIC when serious harm is likely.',
      },
      {
        kind: 'order',
        id: 'organise-outage',
        prompt:
          'A network outage happens. Tap the steps a support team takes to solve it together.',
        items: [
          { id: 'o1', text: 'A network outage is reported' },
          { id: 'o2', text: 'Team members share logs and observations' },
          { id: 'o3', text: 'They discuss possible solutions together' },
          { id: 'o4', text: 'They fix the problem and restore the service' },
        ],
        correctOrder: ['o1', 'o2', 'o3', 'o4'],
        explanation:
          'This is collaboration: the team diagnoses the outage by sharing logs and observations, discussing solutions together, then restoring the service.',
      },
    ],
  },
];

/** Find a mission by its id (used by the mission screen). */
export function getMission(id: string): Mission | undefined {
  return missions.find((m) => m.id === id);
}
