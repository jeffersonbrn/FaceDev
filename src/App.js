import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuestRoute from "./routes/GuestRoute";
import { Provider } from "react-redux";

import Home from "./pages/home";
import SignIn from "./pages/signin";
import "./mock";
import store from './store/index'

function App() {
  return (
    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <GuestRoute path="/signin" element={<SignIn></SignIn>} />
            <Route path="/*" element={<h1>Page not Found - Erro 404!</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
