import React, { useState } from "react"
import styled from "styled-components"
import Swiper from "react-id-swiper"
import Board from "../Main/Board"
function Main() {
  return (
    <Wrap>
      <div>
        <Board expansion={true}></Board>
      </div>
    </Wrap>
  )
}

export default Main

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
