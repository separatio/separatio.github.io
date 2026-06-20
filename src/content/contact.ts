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

export const contact: ContactRow[] = [
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
