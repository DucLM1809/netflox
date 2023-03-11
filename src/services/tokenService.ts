import Cookies from 'js-cookie'
import { COOKIES_ITEMS } from '../constants/common'

const getRefreshToken = () => {
  const refreshToken = localStorage.getItem(COOKIES_ITEMS.REFRESH_TOKEN)
  return refreshToken
}

const getAccessToken = () => {
  const accessToken = localStorage.getItem(COOKIES_ITEMS.ACCESS_TOKEN)
  return accessToken
}

const updateAccessToken = (token: string) => {
  localStorage.setItem(COOKIES_ITEMS.ACCESS_TOKEN, token)
}

const setAccessToken = (token: string) => {
  localStorage.setItem(COOKIES_ITEMS.ACCESS_TOKEN, token)
}

const setRefreshToken = (token: string) => {
  localStorage.setItem(COOKIES_ITEMS.REFRESH_TOKEN, token)
}

const TokenService = {
  getRefreshToken,
  getAccessToken,
  updateAccessToken,
  setAccessToken,
  setRefreshToken
}

export default TokenService
