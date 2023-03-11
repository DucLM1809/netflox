import { LOCAL_STORAGE_ITEMS } from '../constants/common'

const getAccessToken = () => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_ITEMS.ACCESS_TOKEN)
  return accessToken
}

const updateAccessToken = (token: string) => {
  localStorage.setItem(LOCAL_STORAGE_ITEMS.ACCESS_TOKEN, token)
}

const setAccessToken = (token: string) => {
  localStorage.setItem(LOCAL_STORAGE_ITEMS.ACCESS_TOKEN, token)
}

const TokenService = {
  getAccessToken,
  updateAccessToken,
  setAccessToken
}

export default TokenService
