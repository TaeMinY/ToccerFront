import React, { useState } from "react"
import styled from "styled-components"
function Notice() {
  return (
    <Wrap>
      <Title>공지사항</Title>
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
  font-size: 18px;
  font-family: "NanumSRB";
`

const TitleLine = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: black;
  margin-top: 5px;
`
