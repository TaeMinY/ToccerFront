import React, { useContext, useState } from "react"
import styled from "styled-components"
import SignUpTerms from "./SignUpTerms"
import Input from "../Form/Input"
import upload from "../../assets/upload.svg"
import { authStoreContext } from "../../stores/auth"
import { toast } from "react-toastify"
import { useHistory } from "react-router-dom"

const SignUp = () => {
  const history = useHistory()
  const authStore = useContext(authStoreContext)
  function signUp() {
    const image: HTMLInputElement = document.getElementById("bin") as HTMLInputElement
    console.log(image.value)
    const pathpoint = image.value.lastIndexOf(".")
    const filepoint = image.value.substring(pathpoint + 1, image.value.length)
    const filetype: string = filepoint.toLocaleLowerCase()
    authStore.signUp(id, pwd, pwd2, username, email, terms, filetype).then((result: any) => {
      console.log(result)
      if (result.data.state === true) {
        //성공
        const fd: FormData = new FormData()
        fd.append("name", result.data.profileText)
        fd.append("ex", filetype)
        fd.append("bin", image.files![0])
        authStore.profile(fd).then((result: any) => {
          if (result.data.state) {
            toast("회원가입에 성공하셨습니다.", { autoClose: 6000 })
            history.push("/")
          }
        })
      } else {
        //실패
        toast.error(result.data.result, { autoClose: 5000 })
      }
    })
  }
  function myImage() {
    const image: HTMLInputElement = document.getElementById("bin") as HTMLInputElement
    const image_section: HTMLImageElement = document.getElementById("image_section") as HTMLImageElement
    if (image.files![0]) {
      var reader = new FileReader()
      reader.onload = function(e?: any) {
        image_section.src = e.target.result
      }
      reader.readAsDataURL(image.files![0])
    }
  }
  function signUpEnter(e: any) {
    if (e.key === "Enter") {
      signUp()
    }
  }
  const [id, setId] = useState("")
  const [pwd, setPwd] = useState("")
  const [pwd2, setPwd2] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [terms, setTerms] = useState(false)

  return (
    <Wrap>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Title>회원가입</Title>
        <Terms>
          <SignUpTerms></SignUpTerms>
        </Terms>
        <Label>
          <ButtonTerms
            type="checkbox"
            id="button"
            checked={terms}
            onChange={() => {
              setTerms(!terms)
            }}
          />
          개인정보 처리 방침 및 커뮤니티 약관 동의
        </Label>
        <Input
          type="text"
          placeholder="아이디 ( 4 ~ 15 )"
          style={{ margin: "7px 0px" }}
          value={id}
          onChange={e => {
            setId(e.target.value)
          }}
          onKeyPress={signUpEnter}
        />
        <div style={{ width: "100%", display: "flex", boxSizing: "border-box" }}>
          <Input
            type="password"
            placeholder="비밀번호 ( 6 ~ 15 )"
            style={{ margin: "7px 3px 7px 0px" }}
            value={pwd}
            onChange={e => {
              setPwd(e.target.value)
            }}
            onKeyPress={signUpEnter}
          />
          <Input
            type="password"
            placeholder="비밀번호 확인"
            style={{ margin: "7px 0px 7px 3px" }}
            value={pwd2}
            onChange={e => {
              setPwd2(e.target.value)
            }}
            onKeyPress={signUpEnter}
          />
        </div>
        <Input
          type="text"
          placeholder="닉네임 ( 2 ~ 12 )"
          style={{ margin: "7px 0px" }}
          value={username}
          onChange={e => {
            setUsername(e.target.value)
          }}
          onKeyPress={signUpEnter}
        />
        <Input
          type="text"
          placeholder="이메일"
          style={{ margin: "7px 0px" }}
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
          onKeyPress={signUpEnter}
        />
        <label style={{ display: "flex", flexDirection: "column", width: "200px", margin: "15px 0px 0px 0px" }}>
          <img src={upload} alt="프로필" style={{ borderRadius: "20px", objectFit: "cover" }} width="100px" height="100px" id="image_section" />
          <input
            type="file"
            id="bin"
            accept="image/gif,image/jpeg,image/png"
            onChange={e => {
              myImage()
            }}
            onKeyPress={signUpEnter}
            style={{ display: "none" }}
          />
        </label>
        <Button onClick={signUp}>회원가입</Button>
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
  max-height: 300px;
  height: 300px;
  overflow-y: auto;
  background-color: rgb(248, 248, 248);
  box-sizing: border-box;
  padding: 10px 15px;
`
const ButtonTerms = styled.input`
  width: 18px;
  height: 18px;
  border-radius: 30px;
`
const Label = styled.label`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 4px;
  margin-bottom: 10px;
`
const Button = styled.div`
  width: 100%;
  height: 40px;
  margin: 25px 0px 70px 0px;
  border-radius: 20px;
  background-color: #0f204b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`
