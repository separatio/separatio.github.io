import CssBaseline from '@mui/material/CssBaseline'
import ResponsiveAppBar from './components/AppBar/ResponsiveAppBar'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import HomePage from './pages/Home.page'
import ContactPage from './pages/Contact.page'
import BlogPage from './pages/Blog.page'
import ProjectsPage from './pages/ProjectsPage'

import { Route, Routes } from 'react-router'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: ['"Roboto Mono", monospace'].join(','),
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route element={<ResponsiveAppBar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
