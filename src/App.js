import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
import Home from './pages/home'
import SignIn from './pages/signin'

function App() {
  return(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}  />
          <Route path="/signin" element={<SignIn></SignIn>}  />
          <Route path="/*" element={<h1>Page not Found - Erro 404!</h1>}  />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
