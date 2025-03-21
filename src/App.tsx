import CssBaseline from '@mui/material/CssBaseline'
import ResponsiveAppBar from './components/ResponsiveAppBar'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useState } from 'react'
import HomePage from './pages/Home.page'
import ContactPage from './pages/Contact.page'
import BlogPage from './pages/Blog.page'
import ProjectsPage from './pages/ProjectsPage'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: ['"Roboto Mono", monospace'].join(','),
  },
})

function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  const renderPage = () => {
    switch (currentPage) {
      case 'Contact':
        return <ContactPage />
      case 'Blog':
        return <BlogPage />
      case 'Projects':
        return <ProjectsPage />
      default:
        return <HomePage />
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ResponsiveAppBar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </ThemeProvider>
  )
}

export default App
