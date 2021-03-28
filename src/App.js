import React from 'react'
import Home from './pages/home'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'

function App() {
  return(
    <ThemeProvider theme={theme}>
      <Home></Home>
    </ThemeProvider>
  )
}

export default App;
