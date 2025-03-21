import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from './components/Appbar';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <div>test</div>
    </ThemeProvider>
  )
}

export default App
