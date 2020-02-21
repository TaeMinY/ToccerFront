import React, { useState } from "react"
import styled from "styled-components"
import Swiper from "react-id-swiper"

function Main() {
  const params = {
    autoplay: {
      delay: 2500,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false
    }
  }
  return (
    <Wrap>
      <div>
        <Swiper {...params}>
          <div>Slide #1</div>
          <div>Slide #2</div>
          <div>Slide #3</div>
          <div>Slide #4</div>
          <div>Slide #5</div>
        </Swiper>
      </div>
    </Wrap>
  )
}

export default Main

const Wrap = styled.div`
  width: 100%;
  padding: 0% 5%;
  height: 500px;
  & > div {
    max-width: 1300px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0% auto;
  }
`
