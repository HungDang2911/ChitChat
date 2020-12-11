import { createFriendStoreModel } from "./../FriendStore"
import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { createUserStoreModel } from "../UserStore"
import { createConversationStoreModel } from "../ConversationStore"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  userStore: createUserStoreModel(),
  friendStore: createFriendStoreModel(),
  conversationStore: createConversationStoreModel()
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
