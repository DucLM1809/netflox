import Cookies from 'js-cookie'
import { COOKIES_ITEMS } from '../constants/common'

export const useAuth = () => {
  const accessToken = localStorage.getItem(COOKIES_ITEMS.ACCESS_TOKEN)
  return !!accessToken
}
