import { Api } from "."

export const searchUser = (username: string) => {
  return Api.post(`/users/search`, {}, { params: { username } })
}
