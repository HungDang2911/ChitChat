import { GeneralApiProblem } from "./api-problem"

export interface Token {
  accessToken: string,
  refreshToken: string
}

export type loginResult = { kind: "ok"; token: Token } | GeneralApiProblem

// export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
// export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem
