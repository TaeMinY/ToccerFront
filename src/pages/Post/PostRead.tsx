import React from "react"
import { Helmet } from "react-helmet"
import Header from "../../components/Header"
import PostReadWrap from "../../components/Post/PostRead"
function Post() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon2x.png" />
        <meta name="description" content="UniFarm" />
        <link rel="apple-touch-icon" href="/favicon2x.png" />
        <title>{"토트넘"}</title>
      </Helmet>
      <Header></Header>
      <PostReadWrap></PostReadWrap>
    </>
  )
}

export default Post
