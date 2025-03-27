import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'

import { Flaky } from '@mui/icons-material'
import AppBarButton from './AppBarButton'
import AppBarMenu from './AppBarMenu'
import { pages } from '../../pages/pages'
import { Outlet } from 'react-router'

function ResponsiveAppBar() {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
              <Flaky />
            </IconButton>

            <AppBarMenu />

            <IconButton sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
              <Flaky />
            </IconButton>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <AppBarButton
                  key={page.name}
                  href={page.href}
                  name={page.name}
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
