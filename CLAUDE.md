# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal site + blog for Alex Rădulescu. Vite + React 19 + TypeScript SPA, deployed to GitHub Pages.

## Commands

Package manager is **pnpm** (not npm/node) — use `pnpm`/`pnpm dlx`.

- `pnpm dev` — local dev server
- `pnpm build` — `tsc` typecheck + Vite build to `dist/`
- `pnpm lint` / `pnpm format` — ESLint / Prettier (both run on pre-commit via Husky)

## Deploy

CI auto-deploys on push to **`master`** (the default branch — the README's "push to `main`" is stale). Do NOT run `pnpm deploy` manually; it's superseded by the GitHub Actions workflow.

## Writing posts

Posts live in `src/writing/posts/*.md`, parsed at build time via `import.meta.glob`. Frontmatter:

```markdown
---
title: COMPILE / DREAM
date: 2026-06-20      # ISO date
slug: compile-dream  # URL becomes /writing/<slug>
summary: One-line blurb shown in the post list   # optional
draft: true          # optional — hides from the published list
---
```

`src/writing/loadPosts.ts` is a deliberately hand-rolled frontmatter parser — do NOT add `gray-matter` (it pulls Node deps that break the browser Vite build). `allPosts` is sorted newest-first and excludes drafts.

## Style

Prettier: no semicolons, single quotes, 2-space indent, ES5 trailing commas. TypeScript strict.
