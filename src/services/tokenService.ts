import Cookies from 'js-cookie'
import { COOKIES_ITEMS } from '../constants/common'

const getRefreshToken = () => {
  const refreshToken = Cookies.get(COOKIES_ITEMS.REFRESH_TOKEN)
  return refreshToken
}

const getAccessToken = () => {
  const accessToken = Cookies.get(COOKIES_ITEMS.ACCESS_TOKEN)
  return accessToken
}

const updateAccessToken = (token: string) => {
  Cookies.set(COOKIES_ITEMS.ACCESS_TOKEN, token)
}

const setAccessToken = (token: string) => {
  Cookies.set(COOKIES_ITEMS.ACCESS_TOKEN, token)
}

const setRefreshToken = (token: string) => {
  Cookies.set(COOKIES_ITEMS.REFRESH_TOKEN, token)
}

const TokenService = {
  getRefreshToken,
  getAccessToken,
  updateAccessToken,
  setAccessToken,
  setRefreshToken
}

export default TokenService
