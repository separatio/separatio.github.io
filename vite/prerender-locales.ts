import type { Plugin } from 'vite'
import { ro } from '../src/i18n/ro'

const SITE = 'https://separatio.github.io'

/**
 * Trailing slash on purpose. Once dist/ro/index.html exists GitHub Pages serves
 * it at /ro/ and answers a bare /ro with a 301 to /ro/. So /ro/ is the URL that
 * is actually served, and the only one canonical/og:url/hreflang should name —
 * pointing crawlers at /ro would spend a redirect on every unfurl.
 */
const RO_URL = `${SITE}/ro/`

/**
 * The share card has the headline and tagline baked into the pixels, so /ro
 * needs its own or every Romanian unfurl shows English positioning. Absolute,
 * like the English one — scrapers do not resolve relative image URLs.
 * Rendered from tools/og/og-card.html; see the regeneration note there.
 */
const RO_IMAGE = `${SITE}/og-ro.png`

const META_TAG = /<meta\b[^>]*>/g
const LINK_TAG = /<link\b[^>]*>/g

/** index.html writes `&amp;` by hand; injected copy has to match it. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * Every edit below throws when it matches nothing, so a renamed or dropped tag
 * fails the build instead of shipping a Romanian page wearing English metadata.
 */
function replaceOnce(
  html: string,
  what: string,
  pattern: RegExp | string,
  replacement: string
): string {
  const out = html.replace(pattern, () => replacement)
  if (out === html) throw new Error(`prerender-locales: ${what} not found`)
  return out
}

/** Rewrites one attribute on every `tag` the `selector` matches. */
function setAttr(
  html: string,
  tag: RegExp,
  selector: RegExp,
  attr: 'content' | 'href',
  value: string
): string {
  const replacement = `${attr}="${escapeHtml(value)}"`
  const attrPattern = new RegExp(`${attr}="[^"]*"`)
  let matched = false

  const out = html.replace(tag, (found) => {
    if (!selector.test(found)) return found
    matched = true
    return found.replace(attrPattern, () => replacement)
  })

  if (!matched) {
    throw new Error(`prerender-locales: no tag matched ${selector.source}`)
  }
  return out
}

/**
 * Head-only transform: language, title, description/OG/Twitter copy, the share
 * image, og:url and canonical. Asset tags, font preloads, hreflang alternates
 * and the spa-github-pages shim are absolute or locale-agnostic and stay
 * byte-identical.
 *
 * The image is rewritten here and NOT in useDocumentHead: that hook only syncs
 * copy, because the tags it would fix are read by scrapers, and scrapers never
 * run the app. og:url and canonical are locale-specific for the same reason.
 */
function toRomanian(html: string): string {
  const { title, description } = ro.head

  let out = replaceOnce(
    html,
    '<html lang>',
    '<html lang="en">',
    '<html lang="ro">'
  )
  out = replaceOnce(
    out,
    '<title>',
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(title)}</title>`
  )

  out = setAttr(out, META_TAG, /name="description"/, 'content', description)
  out = setAttr(out, META_TAG, /property="og:title"/, 'content', title)
  out = setAttr(
    out,
    META_TAG,
    /property="og:description"/,
    'content',
    description
  )
  out = setAttr(out, META_TAG, /property="og:url"/, 'content', RO_URL)
  out = setAttr(out, META_TAG, /property="og:image"/, 'content', RO_IMAGE)
  out = setAttr(out, META_TAG, /name="twitter:title"/, 'content', title)
  out = setAttr(
    out,
    META_TAG,
    /name="twitter:description"/,
    'content',
    description
  )
  out = setAttr(out, META_TAG, /name="twitter:image"/, 'content', RO_IMAGE)
  out = setAttr(out, LINK_TAG, /rel="canonical"/, 'href', RO_URL)

  return out
}

/**
 * Bakes the Romanian head into a static dist/ro/index.html. The head is applied
 * client-side too (see src/i18n/useDocumentHead.ts), but social-card scrapers
 * never run the app — they read whatever GitHub Pages hands them.
 */
export function prerenderLocales(): Plugin {
  return {
    name: 'prerender-locales',
    apply: 'build',
    // `post` puts this after vite:build-html, so index.html is already in the
    // bundle with its asset tags injected. Emitting through Rollup rather than
    // writing with node:fs keeps the step dependency-free: this repo has no
    // @types/node, so a bare `import 'node:fs'` would not type-check.
    enforce: 'post',
    generateBundle(_options, bundle) {
      const html = bundle['index.html']
      if (!html || html.type !== 'asset' || typeof html.source !== 'string') {
        throw new Error('prerender-locales: index.html missing from the bundle')
      }

      this.emitFile({
        type: 'asset',
        fileName: 'ro/index.html',
        source: toRomanian(html.source),
      })
    },
  }
}
