import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { postStoreContext } from "../../stores/post"
import { commentStoreContext } from "../../stores/comment"
import { useParams } from "react-router-dom"
import Input from "../Form/Input"
import { toast } from "react-toastify"
interface RouteParams {
  id: string
}
const PostWrite = observer(() => {
  const postStore: any = useContext(postStoreContext)
  const commentStore: any = useContext(commentStoreContext)
  const params = useParams<RouteParams>()
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [chat, setChat] = useState("")
  useEffect(() => {
    postStore.Find(params.id).then((result: any) => {
      console.log(result.data.data)
      setTitle(result.data.data.title)
      setText(result.data.data.text)
    })
  }, [])
  function signUpEnter(e: any) {
    if (e.key === "Enter") {
      commit()
    }
  }
  function commit() {
    commentStore.Create(params.id, chat, localStorage.getItem("token")).then((result: any) => {
      // if (result.data.state === true) {
      //   toast("댓글을 정상적으로 작성하셨습니다")
      // } else {
      //   toast(result.data.result)
      // }
    })
  }
  return (
    <>
      <Wrap>
        <div>
          <TitleWrap>
            <Title>{title}</Title>
          </TitleWrap>
          <TitleLine>{text}</TitleLine>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginTop: "300px" }}>
            <Input
              type="text"
              placeholder="댓글"
              style={{ margin: "7px 0px" }}
              value={chat}
              onChange={e => {
                setChat(e.target.value)
              }}
              onClick={commit}
              onKeyPress={signUpEnter}
            />
            <Button>전송</Button>
          </div>
        </div>
      </Wrap>
    </>
  )
})

export default PostWrite
const Title = styled.div`
  font-size: 28px;
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
  padding: 30px 0px 30px 0px;
  display: flex;
`
const TitleWrap = styled.div`
  display: flex;
  min-height: 28px;
  width: 100%;
  justify-content: flex-start;
`
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
      margin: 55px 0px 0px 0px;
    }
  }
`
const Button = styled.div`
  width: 100px;
  height: 41px;
  background-color: #0f204b;
  color: white;
  font-family: "NanumSRB";
  font-size: 15px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`
