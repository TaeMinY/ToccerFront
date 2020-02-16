import React from "react"
import styled from "styled-components"
import SignUpTerms from "./SignUpTerms"
import ServiceTerms from "./ServiceTerms"
const SignUp = () => {
  return (
    <Wrap>
      <div>
        <Title>회원가입</Title>
        <Terms>
          <SignUpTerms></SignUpTerms>
          <ServiceTerms></ServiceTerms>
        </Terms>
      </div>
    </Wrap>
  )
}

export default SignUp

const Wrap = styled.div`
  width: 100%;
  padding: 0% 5%;
  & > div {
    max-width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0% auto;
    flex-direction: column;
  }
`
const Title = styled.div`
  width: 100%;
  font-size: 28px;
  margin-top: 2em;
  font-family: "NanumSB";
  margin-bottom: 1em;
`
const Terms = styled.div`
  max-width: 100%;
  width: 100%;
  max-height: 350px;
  height: 350px;
  overflow-y: auto;
  background-color: rgb(248, 248, 248);
`
