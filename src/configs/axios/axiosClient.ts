import axios from 'axios'
import { authEndpoints } from '../../constants/endpoints'
import TokenService from '../../services/tokenService'
import AxiosPut from './axiosPut'
import getToken from './token'

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API}`,
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
    Pragma: 'no-cache'
  }
})

axiosClient.interceptors.request.use(
  (config: any) => {
    const token = getToken()
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
          const rs = await AxiosPut(authEndpoints.login, {
            refreshToken: TokenService.getRefreshToken()
          })

          const { accessToken } = rs.data
          TokenService.updateAccessToken(accessToken)

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
