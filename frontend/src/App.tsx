import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./pages";
import { createGlobalStyle } from "styled-components";
import "./App.css";
const GlobalStyle = createGlobalStyle`
  html,body{
    margin:0;
    padding:0;
  }
  *{
    box-sizing:border-box;
  }
  a{
    text-decoration:none;
  }
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
}

.ReactModal__Overlay--after-open{
    opacity: 1;
}

.ReactModal__Overlay--before-close{
    opacity: 0;
}
`;
const App = () => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Route exact path="/" component={Home} />
    </>
  );
};

export default App;
