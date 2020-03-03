import React from "react"
import styled from "styled-components"
import Input from "../Form/Input"
function PostWrite() {
  return (
    <>
      <Wrap>
        <div>
          <TitleWrap>
            <Title>게시판 등록</Title>
          </TitleWrap>
          <TitleLine></TitleLine>
          <Input
            type="text"
            placeholder="제목 ( 4 ~ 20 )"
            style={{ margin: "21px 0px 7px 0px" }}
            // value={id}
            // onChange={e => {
            //   setId(e.target.value)
            // }}
          />
          <InputText
            rows={25}
            placeholder="내용"
            style={{ margin: "7px 0px" }}
            // value={id}
            // onChange={e => {
            //   setId(e.target.value)
            // }}
          />
          <Button>등록</Button>
        </div>
      </Wrap>
    </>
  )
}

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
    max-width: 800px;
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
const InputText = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  padding: 8px 10px;
  border-radius: 4px;
  border: solid 1px #cecece;
  resize: none;
`
const Button = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #cecece;
  margin-top: 7px;
  margin-bottom: 50px;
  background-color: #0f204b;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "NanumSRB";
`
