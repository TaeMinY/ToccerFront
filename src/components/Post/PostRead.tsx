import React, { useState, useContext } from "react"
import { postStoreContext } from "../../stores/post"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
const PostWrite = () => {
  const history = useHistory()
  const postStore: any = useContext(postStoreContext)
  return (
    <>
      <Wrap>
        <div>
          <TitleWrap>
            <Title>게시판 등록</Title>
          </TitleWrap>
          <TitleLine>aa</TitleLine>
        </div>
      </Wrap>
    </>
  )
}

export default PostWrite
const Title = styled.div`
  font-size: 28px;
  font-family: "NanumSRB";
  display: flex;
  justify-content: center;
  align-items: center;
`

const TitleLine = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1.5px solid black;
  margin-top: 5px;
  display: flex;
`
const TitleWrap = styled.div`
  display: flex;
  min-height: 28px;
  width: 100%;
  justify-content: flex-start;
`
const Wrap = styled.div`
  width: 100%;
  padding: 0% 5%;
  & > div {
    max-width: 1300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0px auto;
    & > *:nth-child(1) {
      margin: 55px 0px 0px 0px;
    }
  }
`