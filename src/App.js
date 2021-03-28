import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
import Home from './pages/home'
import SingIn from './pages/signin'

function App() {
  return(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}  />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
