import { Api } from "."

export const searchUser = (username: string) => {
  return Api.post(`/users/search`, {}, { params: { username } })
}

export const getOneUserByUsername = (username: string) => {
  return Api.post(`/users/username`, { username })
}

export const editProfile = (user) => {
  return Api.post(`/users/edit`, user)
}
