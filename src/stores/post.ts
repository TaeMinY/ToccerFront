import { action } from "mobx"
import { createContext } from "react"
import Axios from "../libs/axios"
class postStore {
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
}
export const postStoreContext = createContext(new postStore())
