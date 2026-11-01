# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal site + blog for Alex Rădulescu. Vite + React 19 + TypeScript SPA, deployed to GitHub Pages.

## Commands

Package manager is **bun** 1.4.4 (never npm, npx, pnpm or yarn) — use `bun run`/`bunx`. Always `bun run build`: a bare `bun build` is bun's own bundler, not this script.

- `bun run dev` — local dev server
- `bun run build` — `tsc` typecheck + Vite build to `dist/`
- `bun run lint` / `bun run format` — ESLint / Prettier (both run on pre-commit via Husky)

**Node stays for the build, on purpose.** `bun run` follows the tools' `#!/usr/bin/env node` shebangs, so Vite runs on Node 24 (`.nvmrc`, `deploy.yml`). With `bun --bun`, or with no Node on PATH, Vite stringifies its preload helper from bun's transpiled source, so the JS bundle gets different bytes and a new hash. Taking the deploy off Node changes what the live site serves, so make that its own deliberate change.

`package.json` holds the settings that used to be in `pnpm-workspace.yaml`:

- `trustedDependencies` — packages allowed to run install scripts.
- `overrides` — GHSA-4fh9-h7wg-q85m (unsanitized class attribute), reached transitively via react-markdown, which is already on its latest release, so no direct bump clears it. The `@<13.2.1` selector only touches vulnerable versions, so it lapses on its own once the tree moves past 13.2.1. Bun 1.4.4 honors the selector.

## Deploy

CI auto-deploys on push to **`master`** (the default branch — the README's "push to `main`" is stale). Do NOT run `bun run deploy` manually; it's superseded by the GitHub Actions workflow.

## Writing posts

Posts live in `src/writing/posts/*.md`, parsed at build time via `import.meta.glob`. Frontmatter:

```markdown
---
title: COMPILE / DREAM
date: 2026-06-20 # ISO date
slug: compile-dream # URL becomes /writing/<slug>
summary: One-line blurb shown in the post list # optional
draft: true # optional — hides from the published list
---
```

`src/writing/loadPosts.ts` is a deliberately hand-rolled frontmatter parser — do NOT add `gray-matter` (it pulls Node deps that break the browser Vite build). `allPosts` is sorted newest-first and excludes drafts.

## Style

Prettier: no semicolons, single quotes, 2-space indent, ES5 trailing commas. TypeScript strict.
