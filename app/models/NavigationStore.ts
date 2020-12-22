import { Instance, types } from "mobx-state-tree"
import { withEnvironment } from "./extensions/with-environment"

export const defaults = {
  chatScreenParams: {
    conversationId: "",
  },
  profileScreenParams: {
    isCurrentUser: true,
    user: null,
  },
}

const Info = types.model({
  _id: types.string,
  fullName: types.string,
  avatar: types.maybeNull(types.string),
  username: types.string,
})

const Friend = types.model({
  chatted: types.boolean,
  info: Info,
})

export const NavigationStoreModel = types
  .model()
  .props({
    chatScreenParams: types.model({
      conversationId: types.string,
    }),
    profileScreenParams: types.model({
      isCurrentUser: types.boolean,
      user: types.maybeNull(Friend),
    }),
  })
  .extend(withEnvironment) // ** IMPORTANT! **
  .actions((self) => ({
    setChatScreenParams: function (params) {
      self.chatScreenParams = { ...self.chatScreenParams, ...params }
    },
    setProfileScreenParams: function (params) {
      console.log(params)
      self.profileScreenParams = { ...self.profileScreenParams, ...params }
    },
  }))
export const createNavigationStoreModel = () =>
  types.optional(NavigationStoreModel, defaults as any)

export type NavigationStore = Instance<typeof NavigationStoreModel>
