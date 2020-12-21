import { Instance, types } from "mobx-state-tree"
import { withEnvironment } from "./extensions/with-environment"

export const defaults = {
  chatScreenParams: {
    conversationId: "",
  },
}

export const NavigationStoreModel = types
  .model()
  .props({
    chatScreenParams: types.model({
      conversationId: types.string,
    }),
  })
  .extend(withEnvironment) // ** IMPORTANT! **
  .actions((self) => ({
    setChatScreenParams: function (params) {
      self.chatScreenParams = { ...self.chatScreenParams, ...params }
    },
  }))
export const createNavigationStoreModel = () =>
  types.optional(NavigationStoreModel, defaults as any)

export type NavigationStore = Instance<typeof NavigationStoreModel>
