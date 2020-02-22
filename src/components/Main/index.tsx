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
          <SwiperItem>
            <img src={require("../../assets/swiper__one.png")} alt="swiper1" width="100%" height="100%" style={{ objectFit: "contain" }} />
            <SwiperText>토트넘 일정 변경</SwiperText>
            <SwiperShadow></SwiperShadow>
          </SwiperItem>
          <SwiperItem>
            <img src={require("../../assets/swiper__two.png")} alt="swiper1" width="100%" height="100%" style={{ objectFit: "contain" }} />
            <SwiperText>2월 22일 토트넘VS첼시</SwiperText>
            <SwiperShadow></SwiperShadow>
          </SwiperItem>
          <SwiperItem>
            <img src={require("../../assets/swiper__three.png")} alt="swiper1" width="100%" height="100%" style={{ objectFit: "contain" }} />
            <SwiperText>토트넘 챔스 16강 0:1 패배</SwiperText>
            <SwiperShadow></SwiperShadow>
          </SwiperItem>
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
const SwiperItem = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgba(0, 0, 0);
`
const SwiperShadow = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const SwiperText = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0;
  right: 0;
  font-size: 36px;
  z-index: 100;
  text-align: center;
  color: white;
  word-break: keep-all;
  font-family: "NanumSRB";
`
