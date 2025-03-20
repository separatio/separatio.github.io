import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createTheme, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

const theme = createTheme({
  fontFamily: 'system-ui, Helvetica, Arial, sans-serif',
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} forceColorScheme="dark">
      <App />
    </MantineProvider>
  </StrictMode>
)
