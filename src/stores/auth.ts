import { observable, action } from "mobx"
import { createContext } from "react"
import Axios from "../libs/axios"
class authStore {
  @observable count: number = 2

  @action signUp = async (id: string, pwd: string, pwd2: string, username: string, email: string, profile: object, terms: boolean) => {
    await Axios.Post("/", { id, pwd, pwd2, username, email, profile, terms })
  }
}

export const authStoreContext = createContext(new authStore())
