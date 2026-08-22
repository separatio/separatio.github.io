import type { en } from './en'

/**
 * "What I'm building" cards.
 *
 * The type is a discriminated union enforcing the public-privacy guardrail at
 * the structural level: only a `named` card carries a project `name` + outbound
 * `href` (Flowy is the single project allowed to be named/linked publicly).
 * A `quiet` card has no `name` and no `href` field at all — only a mono `label`
 * and the approved sentence. There is no way to attach a name or link to a quiet
 * card without changing this type.
 */

type NamedCard = {
  kind: 'named'
  index: string
  /** Project name — public. */
  name: string
  /** Outbound link — opened in a new tab with rel="noreferrer". */
  href: string
  /** Small license/status tag, e.g. "OPEN SOURCE · APACHE 2.0". */
  tag: string
  description: string
}

type QuietCard = {
  kind: 'quiet'
  index: string
  /** Mono category label — never a project name. */
  label: string
  /** Approved, guardrail-safe sentence. */
  sentence: string
}

export type BuildingCard = NamedCard | QuietCard

/**
 * Experience timeline, newest first. Date ranges are rendered verbatim — the
 * SportyGroup/Circle and Hopin/Toptal overlaps are intentional per the source CV
 * and must not be "corrected".
 */

export type ExperienceEntry = {
  /** Verbatim date range, e.g. "Jul 2023 – Nov 2025". */
  dates: string
  /** Role, optionally with company appended for the timeline line. */
  role: string
  company?: string
  /** One accomplishment line (sans). */
  accomplishment: string
}

/**
 * Contact rows — mono gold label + value, echoing the business card's
 * `LABEL  value` rows. A row is either a link (mail/url) or plain text (loc).
 */

type LinkRow = {
  label: string
  value: string
  href: string
  /** External rows open in a new tab with rel="noreferrer". */
  external?: boolean
}

type TextRow = {
  label: string
  value: string
  href?: never
}

export type ContactRow = LinkRow | TextRow

/**
 * The dictionary contract. English is the source of truth: `en` is declared
 * without `as const` so every property widens to `string`, which is what makes
 * `ro` assignable. Adding a key to `en` makes `ro` fail the build until it is
 * translated.
 */
export type Dictionary = typeof en
