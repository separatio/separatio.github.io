import { useEffect } from 'react'
import type { Dictionary } from './types'
import type { Lang } from './useI18n'

/** No-op when the tag is absent — index.html owns the markup, not this hook. */
function setMetaContent(selector: string, content: string): void {
  const meta = document.querySelector(selector)
  if (meta) meta.setAttribute('content', content)
}

/**
 * Keeps <html lang>, <title> and the description/OG/Twitter meta tags in sync
 * with the active language. Zero dependencies — the static tags in index.html
 * stay as the English default for crawlers that don't run JS.
 */
export function useDocumentHead(lang: Lang, t: Dictionary): void {
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.head.title

    setMetaContent('meta[name="description"]', t.head.description)
    setMetaContent('meta[property="og:title"]', t.head.title)
    setMetaContent('meta[property="og:description"]', t.head.description)
    setMetaContent('meta[name="twitter:title"]', t.head.title)
    setMetaContent('meta[name="twitter:description"]', t.head.description)
  }, [lang, t])
}
