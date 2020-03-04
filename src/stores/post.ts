import { action, observable } from "mobx"
import { createContext } from "react"

import Axios from "../libs/axios"
class postStore {
  @observable lists: any = []

  @action Upload: any = async (title: string, text: string, token: string) => {
    var turn: any
    await Axios.Post("/post/create", { title, text, token })
      .then((result: any) => {
        turn = result
      })
      .catch((err: any) => {
        console.log(err)
      })
    return turn
  }
  @action FindAll: any = async (title: string, text: string, token: string) => {
    await Axios.Post("/post/findall", { title, text, token })
      .then((result: any) => {
        this.lists = result.data.data
      })
      .catch((err: any) => {})
  }
}
export const postStoreContext = createContext(new postStore())
