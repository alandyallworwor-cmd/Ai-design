# IT Quest: Plan, Build, Test

A simple, mobile-first learning game for **Work Skills** (ICTICT313, BSBXTW301 &
ICTSAS305). You play a new junior IT worker and complete short missions to learn
about **teamwork, privacy, IP, ethics, time management, Agile, meetings,
communication and doing IT work the right way**.

All learning content comes from the supplied Week 1, Week 2 and Week 3 study
notes.

## Tech

- React 18 + TypeScript
- Vite (dev server + build)
- Vitest + Testing Library (tests)
- No backend, no database, no login — progress is saved in the browser
  (`localStorage`).

## Run it

```bash
npm install       # install dependencies (first time only)
npm run dev        # start the dev server, then open the shown URL
```

Other useful commands:

```bash
npm run build       # production build into dist/
npm run preview     # preview the production build
npm run lint        # check code style
npm run type-check  # check TypeScript types
npm test            # run the tests once
```

## What's included

- **Welcome** screen and **mode select** (Study or Challenge)
- **Seventeen missions**, grouped into **Week 1**, **Week 2** and **Week 3**, all built from the notes:
  - **Week 1**
    1. Plan the Project (teamwork)
    2. Organise the Work (ordering: data-breach response, outage fix)
    3. Phase 1 Check (policies, privacy law, ACS ethics)
    4. Phase 2 Check (spot the IP / privacy mistake)
    5. Test the Project (troubleshoot: pick the right fix)
    6. IT Terms Challenge (match terms to meanings)
  - **Week 2**
    7. Policies & Procedures (policy vs procedure, AUP, AI ethics)
    8. Team Structures (hierarchical, cross-functional, self-managed)
    9. Goals & Getting Work Done (SMART goals, action plans, work challenges)
    10. Help the Client (service desk tiers, resolve/escalate steps, feedback loops)
    11. Week 2 Terms Challenge (match terms to meanings)
  - **Week 3**
    12. Manage Your Time (prioritisation, Eisenhower Matrix, time-blocking)
    13. Agile & Scrum (Agile, Scrum roles, sprints, stand-ups, workflow order)
    14. Run a Meeting (formal meetings, agenda vs minutes, stages, follow-up)
    15. Communicate Well (active listening, clarity, conflict, giving/receiving feedback)
    16. Ethics & Privacy Principles (the 7 principles and policy frameworks)
    17. Week 3 Terms Challenge (match terms to meanings)
- **Study Mode** (relaxed, no score) and **Challenge Mode** (XP + stars, saved)
- Instant feedback with a plain-English explanation on every answer
- **Glossary** of IT terms
- **Final results** screen with **revision recommendations**
- Reset progress with a confirmation dialog
- Progress saved in `localStorage` (survives refresh)
- Accessible and mobile-first (large tap targets, keyboard support, focus
  rings, reduced-motion support)

## Ideas for a future Phase 3

- Sound effects and richer animations
- More question types and a timed challenge
- Track best streaks and badges
- Content for later weeks as more notes are released

## Project layout

```
src/
  components/   reusable UI pieces (Button, ProgressBar, OptionButton, ...)
  screens/      full screens (Welcome, MissionMap, Mission)
  data/         mission questions taken from the study notes
  hooks/        useProgress (localStorage saving)
  types.ts      shared types
```
