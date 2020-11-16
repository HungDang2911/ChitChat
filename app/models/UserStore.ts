import { Instance, types, flow } from "mobx-state-tree"
import { login, register } from "../services/api/authAPI"
import { withEnvironment } from "./extensions/with-environment"

export const UserStoreModel = types
  .model()
  .props({
    _id: types.string,
    username: types.string,
    accessToken: types.string,
    refreshToken: types.string,
  })
  .extend(withEnvironment) // ** IMPORTANT! **
  .actions((self) => ({
    login: flow(function * (account) {
      const { accessToken, refreshToken } = (yield login(account)).data
      console.tron.log(accessToken, refreshToken)
      self.accessToken = accessToken
      self.refreshToken = refreshToken
    }),
    register: async function (account) {
      await register(account)
    },
  }))

export const defaults = {
  _id: "",
  username: "",
  accessToken: "",
  refreshToken: "",
}
export const createUserStoreModel = () => types.optional(UserStoreModel, defaults as any)

export type UserStore = Instance<typeof UserStoreModel>
