import { Routes, Route } from 'react-router'
import GridField from './components/GridField'
import Nav from './components/Nav/Nav'
import { useHashScroll } from './hooks/useHashScroll'
import LandingPage from './pages/Landing.page'
import WritingPage from './pages/Writing.page'
import PostPage from './pages/Post.page'
import NotFound from './pages/NotFound'

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
    <>
      <GridField />
      <Nav />
      <main>
        <AppRoutes />
      </main>
    </>
  )
}

export default App
