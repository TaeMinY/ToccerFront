import React from "react"
import { Route } from "react-router-dom"
import { Home, SignUp } from "./pages"
import { createGlobalStyle } from "styled-components"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "swiper/css/swiper.css"

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
  z-index:10000000;
  transition: opacity 200ms ease-in-out;
  background-color:rgba(0, 0, 0, 0.2) !important;
}

.ReactModal__Overlay--after-open{
    opacity: 1;
}

.ReactModal__Overlay--before-close{
    opacity: 0;
}
.Toastify__toast-container {
  width: 320px;
}
.Toastify__toast-container--top-right{
  margin-top:70px
}
.Toastify__toast--default {
    background: #ffffff;
    color: #0f204b;
 }
  .Toastify__toast--info {
    background: #3498db;
 }
  .Toastify__toast--success {
    background: #07bc0c;
 }
  .Toastify__toast--warning {
    background: #f1c40f;
 }
  .Toastify__toast--error {
    background: #e74c3c;
 }
 .Toastify__progress-bar--default{
   background: #0f204b;
 }
 .swiper-container{
   height:100%;
   width:100%;
 }
 .swiper-slide{
   width:100% !important;
 }
 .swiper-scrollbar-drag{
   background-color :#007aff;
 }
 
`
const App = () => {
  return (
    <>
      <ToastContainer closeOnClick={false} position="top-right" />
      <GlobalStyle></GlobalStyle>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
    </>
  )
}

export default App
