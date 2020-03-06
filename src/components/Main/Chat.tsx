import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import Input from "../Form/Input"
import { authStoreContext } from "../../stores/auth"
import { observer } from "mobx-react-lite"
import * as io from "socket.io-client"
const client = io.connect("http://localhost:4000")

const Chat = observer(() => {
  const [chatTest, setChatTest] = useState("")
  const [chatList, setChatList] = useState<object[]>([])
  var List: any = []
  useEffect(() => {
    client.on("sendClient", (result: any) => {
      List.push(result)
      setChatList(List)
      console.log(result)
    })
  }, [])
  const authStore: any = useContext(authStoreContext)
  function socketChat() {
    if (localStorage.getItem("token")) {
      authStore
        .token(localStorage.getItem("token"))
        .then((result: any) => {
          console.log(result)
          client.emit("SendServer", { name: result.username, text: chatTest })
          setChatTest("")
        })
        .catch((err: any) => {
          console.log(err)
        })
    } else {
      console.log("없요")
      client.emit("SendServer", { name: "익명", text: chatTest })
    }
  }
  return (
    <Wrap>
      <TitleWrap>
        <Title>채팅</Title>
      </TitleWrap>
      <TitleLine>
        <div>
          {chatList.map((data: any, index: number) => {
            return (
              <ChatList key={index}>
                {data.name} : {data.text}
              </ChatList>
            )
          })}
        </div>
        <div style={{ width: "100%", display: "flex", position: "absolute", bottom: "0px" }}>
          <Input
            value={chatTest}
            onChange={e => {
              setChatTest(e.target.value)
            }}
          ></Input>
          <Button
            onClick={() => {
              socketChat()
            }}
          >
            전송
          </Button>
        </div>
      </TitleLine>
    </Wrap>
  )
})

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
  align-items: flex-start;
  flex-direction: column;
  position: relative;
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
const ChatList = styled.div``
