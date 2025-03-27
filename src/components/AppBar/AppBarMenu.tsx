import { Link as RouterLink } from 'react-router'
import { Box, IconButton, MenuItem } from '@mui/material'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import routes from '../../routes'

function AppBarMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton onClick={handleOpenNavMenu} color="inherit">
        <MenuIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {Object.values(routes).map((route) => (
          <MenuItem
            key={route.name}
            component={RouterLink}
            to={route.href}
            onClick={handleCloseNavMenu}
          >
            <Typography textAlign="center">{route.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default AppBarMenu
