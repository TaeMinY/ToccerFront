import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './pages';
import { createGlobalStyle } from "styled-components"
import './App.css';
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
`
const App = () => {
  return (
    <>
    <GlobalStyle></GlobalStyle>
    <Route exact path="/" component={Home} />
  </>
  );
}

export default App;
