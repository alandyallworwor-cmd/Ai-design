# Browser-Only Workflow

This project is developed and deployed entirely in the browser and the cloud.
Nothing needs to be installed on a personal computer — no Node.js, npm, Docker,
Git, or the Supabase CLI.

## Roles

| Tool | What it's for |
| --- | --- |
| **Claude Code Web** | Planning, coding, running tests/lint/build, commits, branches, and pull requests — all in Claude's cloud environment. |
| **GitHub** | Single source of truth for every project file. |
| **GitHub Codespaces** | Only when a browser-based terminal or a manual preview is needed. |
| **Vercel** | Online hosting. Connected directly to the GitHub repo. |
| **Supabase** | Backend, database, authentication, and weekly-note file storage (added in Phase 3). |

## Branch → deployment flow

1. Work happens on a feature branch (for example
   `claude/browser-only-workflow-css3gi`).
2. Every push to a feature branch gets a **Vercel preview deployment** with its
   own URL — use it to review changes in the browser.
3. Open a pull request into `main` when the change is ready.
4. Merging into `main` publishes the **production** deployment.

No custom domain is required for the first release; Vercel's free `*.vercel.app`
URL is used.

## Connecting Vercel to GitHub (one-time, in the browser)

1. Sign in at [vercel.com](https://vercel.com) with the GitHub account.
2. **Add New… → Project**, then import this repository.
3. Vercel auto-detects **Vite** (config is pinned in `vercel.json`):
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Production tracks `main`; every other branch gets a preview URL.

## Secrets and environment variables

- Set all secrets in **Vercel → Project → Settings → Environment Variables**
  and **Supabase → Project Settings**.
- **Never** put secret keys in source code, commits, screenshots, or prompts.
- Client-exposed Vite variables must be prefixed `VITE_` and may only hold
  **public** values (e.g. the Supabase project URL and the anon/publishable key).
  Service-role keys and other secrets stay server-side only.

## Cost guardrails

- Vercel Hobby and Supabase Free plans are sufficient for a small personal
  study app; stay within them.
- Any change that could introduce a charge (leaving a free tier, a paid add-on,
  a custom domain) will be flagged for approval **before** it's made.

## Commands (run by Claude in the cloud, not on your machine)

```bash
npm install       # install dependencies
npm run dev       # local dev server (used inside Codespaces/cloud only)
npm run build     # production build into dist/
npm run test      # run the test suite
npm run lint      # check code style
npm run type-check# check TypeScript types
```
