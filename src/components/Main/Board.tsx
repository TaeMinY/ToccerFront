import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { authStoreContext } from "../../stores/auth"

function Text() {
  return (
    <>
      <Notice>
        <NoticeBox>공지</NoticeBox>
        <NoticeText>토트넘 PL 19 ~ 20 우승 실패 확정</NoticeText>
      </Notice>
      {[1, 2, 3, 4, 5, 6, 85, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].splice(1, 8).map((data, index) => {
        return (
          <BoradText key={index}>
            <img src={require("../../assets/ico.gif")} alt="점" width="3px" height="3px;" style={{ backgroundColor: "black", marginRight: "10px" }} />
            <BoradTitle>게시판테스트</BoradTitle>
          </BoradText>
        )
      })}
    </>
  )
}
interface props {
  expansion: boolean
}
const Board = observer(({ expansion }: props) => {
  const authStore = useContext(authStoreContext)
  const history = useHistory()
  function HistoryWrite() {
    history.push("/write")
  }
  useEffect(() => {
    const authStore = useContext(authStoreContext)
    authStore.token(localStorage.getItem("token"))
  }, [])
  return (
    <Wrap>
      <TitleWrap>
        <Title expansion={expansion}>게시판</Title>
        <div style={{ display: "flex" }}>
          {authStore.tokenState === true ? <TitleCreate onClick={HistoryWrite}>글쓰기</TitleCreate> : ""}
          <TitleView expansion={expansion}>더보기</TitleView>
        </div>
      </TitleWrap>
      <TitleLine>
        <TextWrap>
          <Text></Text>
        </TextWrap>
      </TitleLine>
    </Wrap>
  )
})

export default Board

const Wrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 980px;
  height: 370px;
  flex-direction: column;
  overflow-y: hidden;
  @media only screen and (max-width: 1445px) {
    min-width: 100%;
  }
`
const Title = styled.div`
  font-size: ${(props: props) => (props.expansion === true ? "28px" : "20px")};
  margin-top: ${(props: props) => (props.expansion === true ? "10px" : "0px")};
  margin-bottom: ${(props: props) => (props.expansion === true ? "10px" : "0px")};
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
  justify-content: space-between;
`
const TitleCreate = styled.div`
  font-size: 12px;
  border-radius: 5px;
  border: 1px solid #0f204b;
  width: 62px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 9.5px;
  cursor: pointer;
  font-weight: 800;
  margin-left: 5px;
`

const TitleView = styled.div`
  font-size: 12px;
  border-radius: 5px;
  border: 1px solid #0f204b;
  width: 62px;
  height: 27px;
  display: ${(props: props) => (props.expansion === true ? "none" : "flex")};
  color: white;
  justify-content: center;
  align-items: center;
  padding: 5px 9.5px;
  cursor: pointer;
  font-weight: 800;
  margin-left: 5px;
  background-color: #0f204b;
`
const TextWrap = styled.div`
  width: 100%;
  height: 100%;
`
const Notice = styled.div`
  width: 100%;
  height: 36px;
  padding: 5px 10px;
  background-color: #f2f2f2;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid #f4efff;
`
const NoticeBox = styled.div`
  height: 22px;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffc6c9;
  color: #ff4e59;
  background-color: #ffe3e4;
  font-weight: 800;
  font-size: 11px;
  border-radius: 3px;
`
const NoticeText = styled.div`
  font-size: 13px;
  color: #ff4e59;
  font-weight: 800;
  margin-left: 10px;
`
const BoradText = styled.div`
  width: 100%;
  height: 36px;
  padding: 5px 10px;
  background-color: white;
  box-sizing: border-box;
  font-size: 13px;
  display: flex;
  align-items: center;
  border-bottom: 0.2px solid #f4efff;
`
const BoradTitle = styled.div``
