import { Api } from "."

export const getAllConversations = () => {
  return Api.get(`/conversations`)
}
