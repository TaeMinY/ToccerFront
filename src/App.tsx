import React from "react"
import { Route } from "react-router-dom"
import { Home, SignUp } from "./pages"
import { createGlobalStyle } from "styled-components"
import "./App.css"
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "NanumSR";
  src: url(${require("./assets/fonts/NanumSquareR.ttf")}) format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "NanumSB";
  src: url(${require("./assets/fonts/NanumSquareB.ttf")}) format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "NanumSRB";
  src: url(${require("./assets/fonts/NanumSquareRoundB.ttf")}) format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "ProductSansM";
  src: url(${require("./assets/fonts/ProductSans-Black.ttf")}) format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "ProductSansR";
  src: url(${require("./assets/fonts/ProductSans-Medium.ttf")}) format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "NanumSEB";
  src: url(${require("./assets/fonts/NanumSquareEB.ttf")}) format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "NotoSansBlack";
  src: url(${require("./assets/fonts/NotoSans-Black.ttf")}) format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "NotoSansBlod";
  src: url(${require("./assets/fonts/NotoSans-Bold.ttf")}) format("truetype");
  font-display: swap;
}
  html,body{
    margin:0;
    padding:0;
  }
  *{
    box-sizing:border-box;
    font-family:"ProductSansR";
  }
a{
   text-decoration:none;
}
.ReactModal__Overlay {
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  background-color:rgba(0, 0, 0, 0.2) !important;
}

.ReactModal__Overlay--after-open{
    opacity: 1;
}

.ReactModal__Overlay--before-close{
    opacity: 0;
}
`
const App = () => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
    </>
  )
}

export default App
