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

export const building: BuildingCard[] = [
  {
    kind: 'named',
    index: '01',
    name: 'Flowy',
    href: 'https://github.com/sqaoss/flowy',
    tag: 'OPEN SOURCE · APACHE 2.0',
    description:
      'Project management for AI coding agents — an open-source CLI (Apache 2.0) paired with a closed-source SaaS server. Deliberate split licensing: open for adoption, protected where it counts.',
  },
  {
    kind: 'quiet',
    index: '02',
    label: 'REGULATED SAAS',
    sentence:
      'An early-stage multi-tenant SaaS in a regulated European market (pre-launch).',
  },
  {
    kind: 'quiet',
    index: '03',
    label: 'AGENT INFRASTRUCTURE',
    sentence:
      'A self-hosted multi-agent Claude orchestrator running on personal infrastructure, paired to Discord.',
  },
  {
    kind: 'quiet',
    index: '04',
    label: 'AI CHIEF OF STAFF',
    sentence:
      'A family-facing AI Chief of Staff bot covering calendar, finance, and household context.',
  },
]
