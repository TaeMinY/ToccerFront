import React, { useState } from "react"
import styled from "styled-components"
import Modal from "react-modal"

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
    transition: "0.2s"
  }
}
function Header() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  function openModal() {
    setModalIsOpen(true)
  }
  function closeModal() {
    setModalIsOpen(false)
  }
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
          <Button onClick={openModal}>로그인</Button>
        </HeaderRight>
        <Modal closeTimeoutMS={200} appElement={document.getElementById("root") as HTMLElement} isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
          <ModalTitle>로그인</ModalTitle>
          <input type="text" />
        </Modal>
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
  width: 164px;
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
const ModalTitle = styled.div`
  font-size: 30px;
  color: #0f204b;
`
