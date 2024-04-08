import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'

export function NavBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box textAlign="center" sx={{ flexGrow: 1 }}>
                <Button href='/lista' color="inherit">Lista</Button>
            </Box>
            <Box textAlign="center" sx={{ flexGrow: 1 }}>
                <Button href='/cadastro' color="inherit" >Login</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
