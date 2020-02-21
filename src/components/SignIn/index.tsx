import React, { useState, useContext } from "react"
import Modal from "react-modal"
import Input from "../Form/Input"
import styled from "styled-components"
import { observer } from "mobx-react-lite"

import { authStoreContext } from "../../stores/auth"
import { useHistory } from "react-router-dom"

const index = observer(() => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "500px",
      width: "90%",
      transition: "0.2s",
      padding: "1.2em 1.8em 2.4em 1.8em"
    }
  }

  const history = useHistory()
  const authStore = useContext(authStoreContext)

  function closeModal() {
    authStore.state = false
  }
  function SignUp() {
    history.push("/signup")
    authStore.state = false
  }
  return (
    <>
      <Modal closeTimeoutMS={200} appElement={document.getElementById("root") as HTMLElement} isOpen={authStore.state} onRequestClose={closeModal} style={customStyles} contentLabel="Signin Modal">
        <ModalTitle>로그인</ModalTitle>
        <X src={require("../../assets/xIcon.png")} alt="x" width="24px" height="24px" onClick={closeModal} />
        <Input type="text" placeholder="이메일" style={{ margin: "7px 0px" }} />
        <Input type="password" placeholder="비밀번호" style={{ margin: "7px 0px" }} />
        <ModalLoginButton>로그인</ModalLoginButton>
        <ModalSignUpButton onClick={SignUp}>회원가입</ModalSignUpButton>
        <SnsLine>
          <Line></Line>
          <SnsStart>SNS로 시작하기</SnsStart>
          <Line></Line>
        </SnsLine>
      </Modal>
    </>
  )
})

export default index
const ModalTitle = styled.div`
  font-size: 30px;
  color: #0f204b;
  font-family: "NanumSB";
  margin: 0.6em 0 1.2em 0;
`
const X = styled.img`
  position: absolute;
  top: 2.1em;
  right: 1.8em;
`
const ModalLoginButton = styled.div`
  width: 100%;
  height: 41px;
  background-color: #0f204b;
  border: 1px solid #0f204b;
  border-radius: 4px;
  margin: 20px 0px 0px 0px;
  transition: 0.7s;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalSignUpButton = styled.div`
  width: 100%;
  height: 41px;
  background-color: white;
  border: 1px solid #0f204b;
  border-radius: 4px;
  margin: 7px 0px 0px 0px;
  transition: 0.7s;
  color: #0f204b;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Line = styled.div`
  height: 1px;
  width: 33%;
  background-color: #0f204b;
`
const SnsLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.6em 0em;
`
const SnsStart = styled.div`
  font-family: "NanumSB";
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  width: fit-content;
  color: #494949;
  word-break: keep-all;
`
