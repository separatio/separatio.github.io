import { Routes, Route } from 'react-router'
import GridField from './components/GridField'
import Nav from './components/Nav/Nav'
import Footer from './sections/Footer'
import { useHashScroll } from './hooks/useHashScroll'
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

function App() {
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
