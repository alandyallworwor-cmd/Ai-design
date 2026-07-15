# IT Quest: Plan, Build, Test

A simple, mobile-first learning game for **Week 1 Work Skills** (ICTICT313 &
BSBXTW301). You play a new junior IT worker and complete short missions to learn
about **teamwork, privacy, IP, ethics and doing IT work the right way**.

All learning content comes from the supplied Week 1 study notes.

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
- **Six missions**, all built from the Week 1 notes:
  1. Plan the Project (teamwork)
  2. Organise the Work (ordering: data-breach response, outage fix)
  3. Phase 1 Check (policies, privacy law, ACS ethics)
  4. Phase 2 Check (spot the IP / privacy mistake)
  5. Test the Project (troubleshoot: pick the right fix)
  6. IT Terms Challenge (match terms to meanings)
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
- Content for the third unit (ICTSAS305) once notes are available

## Project layout

```
src/
  components/   reusable UI pieces (Button, ProgressBar, OptionButton, ...)
  screens/      full screens (Welcome, MissionMap, Mission)
  data/         mission questions taken from the study notes
  hooks/        useProgress (localStorage saving)
  types.ts      shared types
```
