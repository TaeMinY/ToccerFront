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
          <img src={require("../../assets/swiper__one.png")} alt="swiper1" width="100%" height="100%" style={{ objectFit: "cover" }} />
          <img src={require("../../assets/swiper__one.png")} alt="swiper1" width="100%" height="100%" style={{ objectFit: "cover" }} />
          <img src={require("../../assets/swiper__one.png")} alt="swiper1" width="100%" height="100%" style={{ objectFit: "cover" }} />
          <img src={require("../../assets/swiper__one.png")} alt="swiper1" width="100%" height="100%" style={{ objectFit: "cover" }} />
          <img src={require("../../assets/swiper__one.png")} alt="swiper1" width="100%" height="100%" style={{ objectFit: "cover" }} />
        </Swiper>
        <div>dd</div>
        <div>dd</div>

        <div>dd</div>
      </div>
    </Wrap>
  )
}

export default Main

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
      margin: 55px 0px;
      height: 500px;
    }
  }
`
