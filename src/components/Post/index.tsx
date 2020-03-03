import React from "react"
import styled from "styled-components"
import PostWrap from "../Main/Post"
function Post() {
  return (
    <Wrap>
      <div>
        <PostWrap expansion={true}></PostWrap>
      </div>
    </Wrap>
  )
}

export default Post

const Wrap = styled.div`
  width: 100%;
  padding: 0% 5%;
  height: 10000px;
  & > div {
    max-width: 1300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0px auto;
    & > *:nth-child(1) {
      margin: 55px 0px;
      height: 500px;
    }
  }
`
