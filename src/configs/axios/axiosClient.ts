import axios from 'axios'
import { authEndpoints } from '../../constants/endpoints'
import TokenService from '../../services/tokenService'
import AxiosPut from './axiosPut'

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API}`,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

axiosClient.interceptors.request.use(
  (config: any) => {
    const token = TokenService.getAccessToken()

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  (res) => {
    return res
  },
  async (err) => {
    const originalConfig = err.config

    if (originalConfig.url !== authEndpoints.login && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true

        try {
          const rs = await AxiosPut(authEndpoints.login, {})

          const { access_token } = rs.data
          TokenService.updateAccessToken(access_token)

          return axiosClient(originalConfig)
        } catch (_error) {
          return Promise.reject(_error)
        }
      }
    }

    return Promise.reject(err)
  }
)

export default axiosClient
