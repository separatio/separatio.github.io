/* Loads markdown posts at build time via Vite's import.meta.glob.
   Intentionally uses a hand-rolled frontmatter parser instead of gray-matter:
   gray-matter imports Node's Buffer/process and throws at runtime in a browser
   Vite build. The hand-roller is ~15 lines, zero deps, guaranteed browser-safe. */

export type Post = {
  title: string
  date: string
  slug: string
  summary: string
  draft?: boolean
  content: string
}

/* ── Hand-rolled frontmatter splitter ───────────────────────────────────── */

type FrontmatterResult = {
  data: Record<string, string | boolean>
  content: string
}

function parseFrontmatter(raw: string): FrontmatterResult {
  const FENCE = '---'
  if (!raw.startsWith(FENCE + '\n')) {
    return { data: {}, content: raw }
  }

  const end = raw.indexOf('\n' + FENCE, FENCE.length)
  if (end === -1) {
    return { data: {}, content: raw }
  }

  const yamlBlock = raw.slice(FENCE.length + 1, end)
  const content = raw.slice(end + FENCE.length + 2) // skip '\n---\n'

  const data: Record<string, string | boolean> = {}
  for (const line of yamlBlock.split('\n')) {
    const colon = line.indexOf(':')
    if (colon === -1) continue
    const key = line.slice(0, colon).trim()
    const val = line
      .slice(colon + 1)
      .trim()
      .replace(/^['"]|['"]$/g, '')
    // Coerce 'true'/'false' to boolean
    if (val === 'true') data[key] = true
    else if (val === 'false') data[key] = false
    else data[key] = val
  }

  return { data, content }
}

/* ── Load all posts ─────────────────────────────────────────────────────── */

// import.meta.glob with eager:true returns Record<string, unknown>.
// We narrow to string in parsePost via typeof guards.
const rawFiles: Record<string, unknown> = import.meta.glob('./posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function parsePost(raw: unknown): Post | null {
  if (typeof raw !== 'string') return null
  const { data, content } = parseFrontmatter(raw)

  const title = typeof data.title === 'string' ? data.title : ''
  const date = typeof data.date === 'string' ? data.date : ''
  const slug = typeof data.slug === 'string' ? data.slug : ''
  const summary = typeof data.summary === 'string' ? data.summary : ''
  const draft = data.draft === true

  if (!title || !date || !slug) return null

  return { title, date, slug, summary, draft, content }
}

export const allPosts: Post[] = Object.values(rawFiles)
  .map(parsePost)
  .filter((p): p is Post => p !== null && !p.draft)
  .sort((a, b) => b.date.localeCompare(a.date)) // newest first

/* ── Single-post lookup ─────────────────────────────────────────────────── */

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug)
}
