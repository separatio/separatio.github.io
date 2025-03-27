import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import { Link as RouterLink } from 'react-router'
import { Flaky } from '@mui/icons-material'
import AppBarButton from './AppBarButton'
import AppBarMenu from './AppBarMenu'
import { Outlet } from 'react-router'
import routes from '../../routes'

function ResponsiveAppBar() {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              component={RouterLink}
              to="/"
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            >
              <Flaky />
            </IconButton>

            <AppBarMenu />

            <IconButton
              component={RouterLink}
              to="/"
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            >
              <Flaky />
            </IconButton>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {Object.values(routes).map((route) => (
                <AppBarButton
                  key={route.name}
                  href={route.href}
                  name={route.name}
                />
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  )
}
export default ResponsiveAppBar
