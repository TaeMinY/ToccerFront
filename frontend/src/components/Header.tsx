import React from "react"
import styled from "styled-components"
function Header() {
  return (
    <Wrap>
      <div>
        <HeaderLeft>
          <Title>토트넘 홋스퍼 FC</Title>
          <Menu>
            <li>커뮤니티</li>
            <li>경기</li>
          </Menu>
        </HeaderLeft>
        <HeaderRight>
          <Button>로그인</Button>
        </HeaderRight>
      </div>
    </Wrap>
  )
}

export default Header

const Wrap = styled.div`
  width: 100%;
  height: 70px;
  background-color: #0f204b;
  padding: 0% 5%;
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
  width: 154px;
  color: white;
  font-size: 20px;
`
const Menu = styled.ul`
  display: flex;
  color: white;
  list-style: none;
  & > li {
    width: 80px;
    margin: 0 5px;
    text-align: center;
  }
`
const Button = styled.div`
  width: 78px;
  height: 38px;
  color: #0f204b;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
`
const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const HeaderRight = styled.div``
