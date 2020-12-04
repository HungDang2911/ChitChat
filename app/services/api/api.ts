import axios from "axios"
import * as Config from "./apiConfig"

axios.interceptors.request.use(
  (config) => {
    // Request headers
    config.headers["Content-Type"] = "application/json"

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error)
  },
)

export class Api {
  private static getFullUrl(url: string) {
    return Config.API_URL + url
  }

  static post(url: string, data: any = {}, config: any = {}) {
    return axios.post(Api.getFullUrl(url), JSON.stringify(data), config)
  }

  static put(url: string, data: any = {}) {
    return axios.put(Api.getFullUrl(url), JSON.stringify(data))
  }

  static patch(url: string, data: any = {}) {
    return axios.patch(Api.getFullUrl(url), JSON.stringify(data))
  }

  static get(url: string, config: any = {}) {
    return axios.get(Api.getFullUrl(url), config)
  }

  static delete(url: string) {
    return axios.delete(Api.getFullUrl(url))
  }
}
