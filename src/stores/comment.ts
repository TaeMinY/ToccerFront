import { action, observable } from "mobx"
import { createContext } from "react"

import Axios from "../libs/axios"
class commentStore {
  @observable Lists: any = { adminLists: [], basicLists: [] }

  @action Create: any = async (post_id: string, text: string, token: string) => {
    var turn: any
    await Axios.Post("/comment/create", { post_id, text, token })
      .then((result: any) => {
        turn = result
      })
      .catch((err: any) => {})
    return turn
  }
  @action Find: any = async (post_id: string) => {
    var turn: any
    await Axios.Post("/comment/find", { post_id })
      .then((result: any) => {
        turn = result
      })
      .catch((err: any) => {})
    return turn
  }
}
export const commentStoreContext = createContext(new commentStore())
