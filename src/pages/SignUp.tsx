import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import SignUpWrap from "../components/SignUp/index"
function SignUp() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon2x.png" />
        <meta name="description" content="UniFarm" />
        <link rel="apple-touch-icon" href="/favicon2x.png" />
        <title>{"토트넘 - 회원가입"}</title>
      </Helmet>
      <Header></Header>
      <SignUpWrap></SignUpWrap>
    </>
  )
}

export default SignUp
