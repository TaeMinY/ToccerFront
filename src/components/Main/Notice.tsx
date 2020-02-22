import React, { useState } from "react"
import styled from "styled-components"
function Notice() {
  return (
    <Wrap>
      <TitleWrap>
        <Title>공지사항</Title>
        <TitleView>더보기</TitleView>
      </TitleWrap>
      <TitleLine></TitleLine>
    </Wrap>
  )
}

export default Notice

const Wrap = styled.div`
  width: 100%;
  height: 300px;
`
const Title = styled.div`
  font-size: 20px;
  font-family: "NanumSRB";
  display: flex;
  justify-content: center;
  align-items: center;
`

const TitleLine = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: black;
  margin-top: 5px;
`
const TitleWrap = styled.div`
  display: flex;
  height: 28px;
  justify-content: space-between;
`
const TitleView = styled.div`
  font-size: 12px;
  border-radius: 5px;
  border: 1px solid #0f204b;
  width: 62px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 9.5px;
  transition: 0.2s;
  &:hover {
    background-color: #0f204b;
    color: white;
  }
`
