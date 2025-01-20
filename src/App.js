import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import UserDetail from './components/UserDetail'
import {ThemeProvider} from './context/ThemeContext' // Import
import {Container, AppBar, Toolbar, Typography, Switch} from '@mui/material'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'
import {CssBaseline} from '@mui/material'

function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AppBar position='static'>
            <Toolbar>
              <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                User Directory
              </Typography>
              <Switch checked={darkMode} onChange={toggleDarkMode} />
            </Toolbar>
          </AppBar>
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/user/:userId' element={<UserDetail />} />
            </Routes>
          </Container>
        </Router>
      </MuiThemeProvider>
    </ThemeProvider>
  )
}

export default App
