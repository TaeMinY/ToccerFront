import { observable, action } from "mobx"
import { createContext } from "react"
import Axios from "../libs/axios"
class authStore {
  @observable state: boolean = false

  @action signUp: any = async (id: string, pwd: string, pwd2: string, username: string, email: string, terms: boolean, profile__expansion: string) => {
    var turn: any
    await Axios.Post("/account/signup", { id, pwd, pwd2, username, email, terms, profile__expansion })
      .then((result: any) => {
        turn = result
      })
      .catch((err: any) => {
        console.log(err)
      })
    return turn
  }
  @action profile: any = async (profile: any) => {
    var turn: any
    await Axios.Post("/account/profile", profile)
      .then((result: any) => {
        turn = result
      })
      .catch((err: any) => {
        console.log(err)
      })
    return turn
  }
}
//아이디 중복 해결하기
export const authStoreContext = createContext(new authStore())