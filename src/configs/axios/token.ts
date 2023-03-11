import Cookies from 'js-cookie'
import { COOKIES_ITEMS } from '../../constants/common'

export default function getToken() {
  const token = Cookies.get(COOKIES_ITEMS.ACCESS_TOKEN)
  return !!token
}
