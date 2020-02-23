import React, { useContext, useEffect } from "react"
import styled from "styled-components"

import { observer } from "mobx-react-lite"
import { authStoreContext } from "../stores/auth"
import { useHistory } from "react-router-dom"
import SignIn from "./SignIn/Index"
const Header = observer(() => {
  const history = useHistory()
  const authStore = useContext(authStoreContext)
  function openModal() {
    authStore.state = true
  }
  function Toccer() {
    history.push("/")
  }
  function out() {
    localStorage.removeItem("token")
    token()
  }
  function token(): any {
    authStore.token(localStorage.getItem("token"))
  }
  useEffect(() => {
    const authStore = useContext(authStoreContext)
    authStore.token(localStorage.getItem("token"))
  }, [])
  return (
    <Wrap>
      <div>
        <HeaderLeft>
          <Title onClick={Toccer}>Toccer</Title>
          <Menu>
            <li>커뮤니티</li>
            <li>경기</li>
          </Menu>
        </HeaderLeft>
        <HeaderRight>{authStore.tokenState === true ? <Button onClick={out}>로그아웃</Button> : <Button onClick={openModal}>로그인</Button>}</HeaderRight>
        <SignIn></SignIn>
      </div>
    </Wrap>
  )
})

export default Header

const Wrap = styled.div`
  width: 100%;
  height: 60px;
  background-color: #0f204b;
  padding: 0% 5%;
  position: sticky;
  z-index: 1000;
  top: 0px;
  & > div {
    max-width: 1300px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0% auto;
  }
`
const Title = styled.div`
  width: 60px;
  color: white;
  font-size: 20px;
  cursor: pointer;
`
const Menu = styled.ul`
  display: flex;
  color: white;
  list-style: none;
  cursor: pointer;

  & > li {
    width: 80px;
    margin: 0 4px;
    text-align: center;
  }
`
const Button = styled.div`
  width: 78px;
  height: 34px;
  color: #0f204b;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
`
const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const HeaderRight = styled.div``
