import type { BuildingCard, ContactRow, ExperienceEntry } from './types'

const buildingCards: BuildingCard[] = [
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

const experienceEntries: ExperienceEntry[] = [
  {
    dates: 'Dec 2025 – Present',
    role: 'Builder & Operator',
    accomplishment:
      'Shipping multi-tenant SaaS and multi-agent infrastructure end to end, with Claude Code as the execution layer.',
  },
  {
    dates: 'Jul 2023 – Nov 2025',
    role: 'Senior QA Automation Engineer',
    company: 'SportyGroup',
    accomplishment:
      'Built a cross-team technical-initiatives framework and led AI-augmented test debugging across all QA frameworks.',
  },
  {
    dates: 'May 2023 – Mar 2024',
    role: 'Senior QA Automation Engineer',
    company: 'Circle.so',
    accomplishment:
      'Built React Native test infrastructure from zero; an accessibility-id locator strategy made iOS extension near-free.',
  },
  {
    dates: 'Feb 2017 – Feb 2023',
    role: 'Senior QA Engineer / QA Lead',
    company: 'Toptal',
    accomplishment:
      'Led a core frontend-extraction QA effort; cut Picasso test runs 15→3 min and built company-wide visual testing.',
  },
  {
    dates: 'Feb 2021 – May 2021',
    role: 'Senior QA Engineer',
    company: 'Hopin',
    accomplishment:
      'Startup-pace release-candidate coordination; expanded the TestCafe framework and coached engineers on test performance.',
  },
  {
    dates: 'Apr 2013 – Jan 2017',
    role: 'Earlier QA roles',
    company: 'Gameloft · Ortnec · Rebelmouse · PitechPlus',
    accomplishment:
      'Built and ran E2E frameworks (Selenium / Capybara / Codeception), load testing, and Jenkins CI/CD.',
  },
]

const contactRows: ContactRow[] = [
  {
    label: 'MAIL',
    value: 'alex.radulescu@pm.me',
    href: 'mailto:alex.radulescu@pm.me',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/separatio',
    href: 'https://linkedin.com/in/separatio',
    external: true,
  },
  {
    label: 'GITHUB',
    value: 'github.com/separatio',
    href: 'https://github.com/separatio',
    external: true,
  },
  {
    label: 'LOC',
    value: 'Oradea, Romania',
  },
]

/**
 * English copy — the source of truth for the dictionary shape.
 *
 * Deliberately NOT `as const`: every string must widen to `string` so that
 * `ro: Dictionary` is assignable. Pinning literals here would make the Romanian
 * dictionary un-assignable.
 */
export const en = {
  dateLocale: 'en-GB',

  nav: {
    about: 'ABOUT',
    building: 'BUILDING',
    experience: 'EXPERIENCE',
    contact: 'CONTACT',
    writing: 'WRITING',
    primaryLabel: 'Primary navigation',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
  },

  langSwitch: {
    label: 'Language',
  },

  head: {
    title: 'Alex Rădulescu — AI-First Builder & Operator',
    description:
      'Alex Rădulescu — AI-first builder & operator. 12+ years in software quality, building SaaS and agent infrastructure with Claude Code.',
  },

  hero: {
    eyebrow: 'SQA & AUTOMATION SRL',
    headline: 'AI-FIRST BUILDER & OPERATOR',
    name: 'Alex Rădulescu',
    meta: '12+ yrs in software quality · Building SaaS + agent infrastructure with Claude Code',
    tagline: 'More than software.',
    downloadCv: 'Download CV',
    readWriting: 'Read the writing',
  },

  about: {
    eyebrow: 'ABOUT',
    body: "I'm a builder and operator with 12+ years in software quality, and I treat quality as defect prevention rather than test execution — designing systems so the bug never ships, not just catching it afterward. Today I build and run multi-tenant SaaS, multi-agent orchestrators, and family-facing AI tooling end to end, with Claude Code as my execution layer. I move best where the path is unclear: high agency, full ownership, and a bias toward shipping. More than software — I care about the system the software lives in.",
    principles: [
      'Quality as defect prevention',
      'High agency, full ownership',
      'Productive when the path is unclear',
    ],
  },

  building: {
    eyebrow: "WHAT I'M BUILDING",
    github: 'GITHUB ↗',
    cards: buildingCards,
  },

  experience: {
    eyebrow: 'EXPERIENCE',
    downloadCv: 'Download CV',
    entries: experienceEntries,
  },

  contact: {
    eyebrow: 'CONTACT',
    /**
     * Empty on purpose. The Romanian page opens the contact section with a
     * line of copy; the English page does not. `Dictionary = typeof en` forces
     * the key to exist here, and Contact.tsx skips the paragraph when it is
     * blank — so the English section renders exactly as before.
     */
    intro: '',
    rows: contactRows,
  },

  footer: {
    line: 'ALEX RĂDULESCU · MORE THAN SOFTWARE · © 2026',
  },

  writing: {
    eyebrow: 'WRITING',
    empty: 'Nothing published yet. Check back soon.',
    englishNote: 'In English',
  },

  post: {
    notFoundTitle: 'Post not found',
    /** Bare prefix — the page renders `{noPostAt} /{slug}`. */
    noPostAt: 'No post at',
    noSlug: 'No slug provided.',
    backToWriting: 'Back to writing',
  },

  notFound: {
    message: "This page doesn't exist.",
    backHome: 'Back home',
  },
}
