# IT Quest: Plan, Build, Test

A simple, mobile-first learning game for **Work Skills** (ICTICT313, BSBXTW301 &
ICTSAS305). You play a new junior IT worker and complete short missions to learn
about **teamwork, privacy, IP, ethics, time management, Agile, meetings,
communication and doing IT work the right way**.

All learning content comes from the supplied Week 1, Week 2 and Week 3 study
notes.

> **Development & deployment are 100% browser-based.** Nothing is installed
> locally — see [`WORKFLOW.md`](./WORKFLOW.md). Coding and testing happen in
> Claude Code Web, GitHub is the source of truth, and Vercel hosts the app
> (preview deployments for branches, production from `main`).

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

- **Welcome** screen and **mode select** (Study, Challenge or Timed)
- **Eighteen missions**, grouped into **Week 1**, **Week 2**, **Week 3** and a final **Exam Revision** section, all built from the notes:
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
  - **Exam Revision**
    18. Exam Revision (mixed quiz across all three weeks, for AT/quiz prep)
- **Three ways to play:**
  - **Study Mode** — relaxed, nothing scored or saved
  - **Challenge Mode** — earn XP + stars, progress saved
  - **Timed Mode** — a countdown on every question; fast correct answers earn
    bonus XP, and progress is saved
- **9 achievement badges** (First Steps, Perfectionist, On Fire, Speed Demon,
  the three weekly badges, Century and Graduate), earned automatically as you
  play and shown on the map, the results screen and a "new badge!" reveal
- **Streak tracking** — a live "🔥 N in a row" counter, with your best streak
  saved and shown in your stats
- **Keyboard shortcuts** — press `1`–`4` to pick an answer and `Enter` to move
  on (handy in Timed Mode)
- A **stats strip** (XP, best streak, badges) and a **Continue** button that
  jumps to your next unfinished mission
- **Four question types**: multiple-choice, put-in-order, term matching and
  **fill-in-the-blank** (type the missing word)
- **Sound effects** for correct/wrong answers, mission completion and badge
  unlocks, with a **mute toggle** in the header (remembered between visits)
- **Light and dark themes** — follows your device by default, with a header
  toggle that's remembered between visits
- Instant feedback with a plain-English explanation on every answer
- **Glossary** of IT terms
- **Final results** screen with **badges**, **revision recommendations** and a
  **Share** button (native share sheet, with a copy-to-clipboard fallback)
- Reset progress with a confirmation dialog
- Progress saved in `localStorage` (survives refresh)
- Accessible and mobile-first (large tap targets, keyboard support, focus
  rings that move to each new screen's heading, reduced-motion support)

## Ideas for a future phase

- Richer animations and a drag-and-drop question type
- A daily challenge and a downloadable results image
- Content for later weeks as more notes are released

## Project layout

```
src/
  components/   reusable UI pieces (Button, OptionButton, FillBlank, SoundToggle, ...)
  screens/      full screens (Welcome, MissionMap, Mission, Results, ...)
  data/         missions, glossary and badge definitions from the study notes
  hooks/        useProgress (localStorage saving)
  lib/          sound effects, fill-answer checking, results sharing
  types.ts      shared types
```
