import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { postStoreContext } from "../../stores/post"
import { useParams } from "react-router-dom"
interface RouteParams {
  id: string
}
const PostWrite = observer(() => {
  const postStore: any = useContext(postStoreContext)
  const params = useParams<RouteParams>()
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  useEffect(() => {
    postStore.Find(params.id).then((result: any) => {
      console.log(result.data.data)
      setTitle(result.data.data.title)
      setText(result.data.data.text)
    })
  }, [])

  return (
    <>
      <Wrap>
        <div>
          <TitleWrap>
            <Title>{title}</Title>
          </TitleWrap>
          <TitleLine>{text}</TitleLine>
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
