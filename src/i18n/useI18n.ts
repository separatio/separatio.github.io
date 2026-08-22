import { useCallback } from 'react'
import { useLocation } from 'react-router'
import { en } from './en'
import { ro } from './ro'
import type { Dictionary } from './types'

export type Lang = 'en' | 'ro'

/** localStorage key holding the visitor's last explicit language choice. */
export const LANG_STORAGE_KEY = 'lang'

const DICTIONARIES: Record<Lang, Dictionary> = { en, ro }

function isLang(value: unknown): value is Lang {
  return value === 'en' || value === 'ro'
}

/** Safari private mode throws on localStorage access — never let that break render. */
export function readStoredLang(): Lang | null {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY)
    return isLang(stored) ? stored : null
  } catch {
    return null
  }
}

export function storeLang(lang: Lang): void {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang)
  } catch {
    // Storage unavailable — the choice simply doesn't persist across visits.
  }
}

/**
 * First browser language whose primary subtag is `ro` or `en` wins. Order
 * matters: a visitor with ['en-US', 'ro-RO'] gets English, not Romanian.
 */
export function detectPreferredLang(): Lang {
  const tags =
    typeof navigator === 'undefined'
      ? []
      : (navigator.languages ?? [navigator.language])

  for (const tag of tags) {
    const primary = tag.toLowerCase().split('-')[0]
    if (primary === 'ro') return 'ro'
    if (primary === 'en') return 'en'
  }

  return 'en'
}

/** The URL is the single source of truth for language — no context, no provider. */
export function langFromPathname(pathname: string): Lang {
  return pathname === '/ro' || pathname.startsWith('/ro/') ? 'ro' : 'en'
}

/** Strip any `/ro` prefix, then re-apply it for Romanian. Never trailing-slashes. */
function toLangPathname(pathname: string, lang: Lang): string {
  let bare = pathname
  if (pathname === '/ro') bare = '/'
  else if (pathname.startsWith('/ro/')) bare = pathname.slice(3)

  if (lang === 'en') return bare
  return bare === '/' ? '/ro' : `/ro${bare}`
}

export function useI18n(): {
  lang: Lang
  t: Dictionary
  path: (to: string) => string
  otherLang: Lang
  otherHref: string
} {
  const { pathname, search, hash } = useLocation()
  const lang = langFromPathname(pathname)
  const otherLang: Lang = lang === 'en' ? 'ro' : 'en'

  const path = useCallback(
    (to: string) => {
      if (lang === 'en') return to
      return to === '/' ? '/ro' : `/ro${to}`
    },
    [lang]
  )

  return {
    lang,
    t: DICTIONARIES[lang],
    path,
    otherLang,
    otherHref: `${toLangPathname(pathname, otherLang)}${search}${hash}`,
  }
}
