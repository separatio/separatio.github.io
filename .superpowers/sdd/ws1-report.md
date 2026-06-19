# WS1 — Blueprint Design-System Foundation + Primitives — Report

Branch: `feat/blueprint-revamp`. Scope: WS1 only (CSS design system + shared
primitives). No MUI removal, no pages, no nav, no routing changes.

## Font mapping (woff2 filename → family / weight / subset)

**Source of truth:** `business-card/assets/fonts-lib.css` (the canonical
Google-subset @font-face declarations), lines 339–423. Each opaque-hashed
woff2 was matched to its declared `font-family`, `font-weight`,
`font-stretch`, and `unicode-range`, then copied (via `cp`) into
`public/fonts/` under a clear name.

| Original (business-card/assets/lib/…)                                          | Renamed (public/fonts/…)         | Family        | Weight | Subset     | Size |
| ------------------------------------------------------------------------------ | -------------------------------- | ------------- | ------ | ---------- | ---- |
| `ibm-plex-mono--F63fjptAgt5VM-kVkqdyU8n1i8q131nj-o.woff2`                       | `ibm-plex-mono-400-latin.woff2`     | IBM Plex Mono | 400 | latin     | 10k |
| `ibm-plex-mono--F63fjptAgt5VM-kVkqdyU8n1iEq131nj-otFQ.woff2`                    | `ibm-plex-mono-400-latin-ext.woff2` | IBM Plex Mono | 400 | latin-ext | 8.9k |
| `ibm-plex-mono--F6qfjptAgt5VM-kVkqdyU8n3twJwlBFgsAXHNk.woff2`                   | `ibm-plex-mono-500-latin.woff2`     | IBM Plex Mono | 500 | latin     | 10k |
| `ibm-plex-mono--F6qfjptAgt5VM-kVkqdyU8n3twJwl5FgsAXHNlYzg.woff2`                | `ibm-plex-mono-500-latin-ext.woff2` | IBM Plex Mono | 500 | latin-ext | 8.8k |
| `ibm-plex-sans-zYXzKVElMYYaJe8bpLHnCwDKr932-G7dytD-Dmu1syxeKYbSB4Zh.woff2`      | `ibm-plex-sans-400-latin.woff2`     | IBM Plex Sans | 400 (stretch 100%) | latin     | 40k |
| `ibm-plex-sans-zYXzKVElMYYaJe8bpLHnCwDKr932-G7dytD-Dmu1syxQKYbSB4ZhRNU.woff2`   | `ibm-plex-sans-400-latin-ext.woff2` | IBM Plex Sans | 400 (stretch 100%) | latin-ext | 26k |

The `latin` (U+0000-00FF…) face is the larger file; `latin-ext`
(U+0100-02BA…) the smaller — consistent with the original file sizes, a sanity
check that the latin/latin-ext assignment is correct.

### latin-ext unicode-range (covers ă = U+0103)

```
U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304,
U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB,
U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF
```

`U+0103` (ă, used in "Rădulescu") falls inside `U+0100-02BA`. ✓ Confirmed.
Copied verbatim from the business-card declarations.

## Files created

- `public/fonts/` — 6 woff2 (renamed copies, listed above).
- `src/styles/tokens.css` — all design-system custom properties on `:root`.
- `src/styles/fonts.css` — 6 `@font-face` blocks (family × weight × subset),
  `font-display: swap`, correct weight/style/stretch + unicode-range.
- `src/styles/global.css` — reset, document-level gradient, selection, focus,
  reduced-motion, type-role utility classes (`.eyebrow`, `.display`, `.label`).
- `src/components/GridField.tsx` + `.module.css`
- `src/components/CornerMarks.tsx` + `.module.css`
- `src/components/EyebrowRule.tsx` + `.module.css`
- `src/components/Button.tsx` + `.module.css`
- `src/main.tsx` — added 3 stylesheet imports at top (tokens → fonts → global).

## Tokens defined (tokens.css `:root`)

- **Navy:** `--navy-100 #102a4e`, `--navy-200 #0c2040`, `--navy-300 #0a1a32`,
  `--bg-gradient` (radial gradient verbatim).
- **Gold:** `--gold #c9a24e`, `--gold-rgb 201, 162, 78`.
- **Text:** `--text-primary #f6f4ef`, `--text-secondary #d7dce4`,
  `--text-tertiary #eceff3`.
- **Grid/marks:** `--grid-line rgba(gold, 0.05)`, `--grid-size 20px`,
  `--corner-tick rgba(gold, 0.75)`.
- **Rule:** `--rule-color var(--gold)`, `--rule-opacity 0.55`,
  `--rule-thickness 1px`.
- **Fonts:** `--font-mono` ('IBM Plex Mono', ui-monospace, …),
  `--font-sans` ('IBM Plex Sans', system-ui, …).
- **Type scale (rem, 1.25 major-third):** `--text-xs 0.64`, `--text-sm 0.8`,
  `--text-base 1`, `--text-md 1.25`, `--text-lg 1.563`, `--text-xl 1.953`,
  `--text-2xl 2.441`, `--text-display clamp(2.75rem, 1.6rem + 5.75vw, 6rem)`.
- **Leading:** tight 1.05, snug 1.25, normal 1.6.
- **Tracking:** wide 0.18em (eyebrows/labels), snug -0.01em (display).
- **Spacing:** `--space-3xs`…`--space-3xl` (0.25rem → 9rem).
- **Reading:** `--reading-max 68ch`.
- **Easing/duration:** `--ease-out`, `--ease-in-out`, `--ease-standard`;
  `--duration-fast 150ms`, `--duration-base 280ms`, `--duration-slow 600ms`.

## Primitive prop signatures

- `GridField()` — no props. Fixed full-viewport plate (gradient + grid),
  `aria-hidden`, `z-index: -1`, `pointer-events: none`.
- `CornerMarks()` — no props. Four L-ticks pinned to nearest positioned
  ancestor's corners; `aria-hidden`.
- `EyebrowRule({ label: string })` — gold mono uppercase eyebrow over a gold
  hairline (`var(--rule-color)` @ `var(--rule-opacity)` = 0.55).
- `Button(props: AnchorProps | LinkProps)` — discriminated union:
  - `AnchorProps`: `{ href: string; download?: boolean | string; to?: never;
    children; className? }` → renders `<a>`.
  - `LinkProps`: `{ to: To; href?: never; download?: never; children;
    className? }` → renders react-router `<Link>` (imported from `react-router`).
  - Gold 1px border, mono uppercase label, transparent fill, faint gold-wash
    hover; transition disabled under `prefers-reduced-motion`.

## Verification

- `pnpm build` (tsc -b strict + vite build): **PASS** — 11553 modules,
  built clean. New primitives are unused by App (expected) and still
  type-check under `noUnusedLocals`/`noUnusedParameters`.
- `pnpm lint` (eslint): **PASS** — exit 0, no warnings.
- `pnpm format` (prettier): all `src/**` files conform after formatting.

## Notes / concerns

- Project uses **ESLint + Prettier** (not Biome) — Prettier config:
  single quotes, no semicolons, `trailingComma: es5`, 2-space. Matched.
- Husky pre-commit runs `pnpm lint` + `pnpm format` over the whole repo
  (no lint-staged). `pnpm format` (`-w`) will add one cosmetic blank line to
  the tracked, pre-existing `.superpowers/sdd/progress.md` (WS ledger) in the
  working tree during commit; since it is unstaged it will NOT enter this
  commit, but it may surface as a stray unstaged diff afterward. Left
  untouched intentionally. The empty `src/assets/.keep` triggers a non-fatal
  prettier "no parser" error (pre-existing placeholder); harmless.
- CSS Modules work out of the box with Vite — no config or ambient `.d.ts`
  needed (`vite/client` already declares `*.module.css`).
