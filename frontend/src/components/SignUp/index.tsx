import React from "react"
import styled from "styled-components"
const SignUp = () => {
  return (
    <Wrap>
      <div>
        <Title>회원가입</Title>
      </div>
    </Wrap>
  )
}

export default SignUp

const Wrap = styled.div`
  width: 100%;
  padding: 0% 5%;
  & > div {
    max-width: 1300px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0% auto;
  }
`
const Title = styled.div`
  width: 100%;
  font-size: 36px;
  margin-top: 2em;
  font-family: "NanumSB";
`
