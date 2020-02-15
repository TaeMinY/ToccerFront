import { observable, action } from "mobx"
import { createContext } from "react"
class authStore {
  @observable count: number = 2

  @action countUp = (): number => {
    this.count = 9
    return this.count
  }
}

export const authStoreContext = createContext(new authStore())
