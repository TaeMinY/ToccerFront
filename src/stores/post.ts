import { action, observable } from "mobx"
import { createContext } from "react"

import Axios from "../libs/axios"
class postStore {
  @observable Lists: any = { adminLists: [], basicLists: [] }

  @action Upload: any = async (title: string, text: string, token: string, type: string) => {
    var turn: any
    console.log(type)
    await Axios.Post("/post/create", { title, text, token, type })
      .then((result: any) => {
        turn = result
      })
      .catch((err: any) => {})
    return turn
  }
  @action FindAll: any = async () => {
    var admin: any = []
    await Axios.Post("/post/findall", {})
      .then((result: any) => {
        console.log("모두요청", result.data.data)
        result.data.data.forEach((element: any) => {
          console.log("dd")
          if (element.type === "admin") {
            admin.push(element)
          } else {
            this.Lists.basicLists.push(element)
          }
        })
      })
      .catch((err: any) => {})
    this.Lists.adminLists = admin
  }
  @action Find: any = async (_id: string) => {
    var turn: any
    await Axios.Post("/post/findone", { _id: _id })
      .then((result: any) => {
        turn = result
      })
      .catch((err: any) => {})
    return turn
  }
}
export const postStoreContext = createContext(new postStore())
