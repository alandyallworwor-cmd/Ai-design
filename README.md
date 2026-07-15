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

## Phase status

- **Phase 1 (done):** Welcome screen, mission map, progress saving, two
  missions ("Plan the Project" and "Organise the Work"), instant feedback with
  explanations, mobile styling.
- **Phase 2 (planned):** more missions (Phase checks, testing/troubleshooting,
  IT terms matching), Study & Challenge modes, glossary, final results and
  revision screen, reset confirmation.

## Project layout

```
src/
  components/   reusable UI pieces (Button, ProgressBar, OptionButton, ...)
  screens/      full screens (Welcome, MissionMap, Mission)
  data/         mission questions taken from the study notes
  hooks/        useProgress (localStorage saving)
  types.ts      shared types
```
