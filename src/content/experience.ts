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

export const experience: ExperienceEntry[] = [
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
