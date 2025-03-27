import { Link as RouterLink, To } from 'react-router'
// import Link from '@mui/material/Link'
import { Button } from '@mui/material'

type AppBarButtonProps = {
  href: To
  name: string
}

function AppBarButton({ href, name }: AppBarButtonProps) {
  return (
    <Button
      component={RouterLink}
      to={href}
      sx={{ my: 2, color: 'white', display: 'block', textAlign: 'center' }}
    >
      {name}
    </Button>
  )
}

export default AppBarButton
