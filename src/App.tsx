import { Routes, Route, Navigate, useLocation } from 'react-router'
import GridField from './components/GridField'
import Nav from './components/Nav/Nav'
import Footer from './sections/Footer'
import { useHashScroll } from './hooks/useHashScroll'
import {
  useI18n,
  readStoredLang,
  detectPreferredLang,
  langFromPathname,
} from './i18n/useI18n'
import { useDocumentHead } from './i18n/useDocumentHead'
import LandingPage from './pages/Landing.page'
import WritingPage from './pages/Writing.page'
import PostPage from './pages/Post.page'
import NotFound from './pages/NotFound'
import styles from './App.module.css'

function AppRoutes() {
  useHashScroll()

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/writing" element={<WritingPage />} />
      <Route path="/writing/:slug" element={<PostPage />} />
      <Route path="/ro" element={<LandingPage />} />
      <Route path="/ro/writing" element={<WritingPage />} />
      <Route path="/ro/writing/:slug" element={<PostPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

/**
 * Where a visitor on the English tree should be sent instead, or null to stay put.
 *
 * Derived during render rather than from an effect, deliberately. `App` is a child
 * of `BrowserRouter`, and React runs child layout effects before parent ones, so a
 * `navigate()` call from here would fire before the router has subscribed to
 * history — the URL would change while the rendered route did not.
 *
 * Being a pure function of the location also makes it self-terminating: once the
 * pathname is under /ro this returns null, so there is no redirect loop and no
 * need for a latch. Rendering `<Navigate>` in place of the shell means the English
 * page never paints, so there is no flash either.
 *
 * One-way by design: EN -> RO only. A stored 'en' both keeps a deliberately opened
 * /ro link from bouncing back and stops detection from firing on later visits.
 */
function romanianRedirect(
  pathname: string,
  search: string,
  hash: string
): string | null {
  if (langFromPathname(pathname) === 'ro') return null
  if ((readStoredLang() ?? detectPreferredLang()) !== 'ro') return null

  // '/' has no segment to carry over — path('/') is '/ro', not '/ro/'.
  const rest = pathname === '/' ? '' : pathname
  return `/ro${rest}${search}${hash}`
}

function App() {
  const { lang, t } = useI18n()
  const { pathname, search, hash } = useLocation()
  const redirectTo = romanianRedirect(pathname, search, hash)

  useDocumentHead(lang, t)

  if (redirectTo) return <Navigate to={redirectTo} replace />

  return (
    <div className={styles.shell}>
      <GridField />
      <Nav />
      <main className={styles.main}>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
