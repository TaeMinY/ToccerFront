import React from "react"
import styled from "styled-components"
import Input from "../Form/Input"
function Chat() {
  return (
    <Wrap>
      <TitleWrap>
        <Title>채팅</Title>
      </TitleWrap>
      <TitleLine>
        <Input></Input>
        <Button>전송</Button>
      </TitleLine>
    </Wrap>
  )
}

export default Chat

const Wrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 300px;
  height: 370px;
  margin-left: 20px;
  @media only screen and (max-width: 1445px) {
    margin-left: 0px !important;
  }
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
  height: 100%;
  border-top: 1.5px solid black;
  margin-top: 5px;
  background: rgb(248, 248, 248);
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`
const TitleWrap = styled.div`
  display: flex;
  min-height: 28px;
  justify-content: space-between;
`
const Button = styled.div`
  width: 100px;
  border-radius: 4px;
  height: 41px;
  border: solid 1px #cecece;
  background-color: #0f204b;
  color: white;
  font-family: "NanumSRB";
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`
