export type Page = {
  name: 'Home' | 'Blog' | 'Contact' | 'Projects'
  href: '/' | '/blog' | '/contact' | '/projects'
}

export const pages: Page[] = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Projects', href: '/projects' },
]
