import { LOCAL_STORAGE_ITEM } from '../constants/common'

export const useAuth = () => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_ITEM.ACCESS_TOKEN)
  return !!accessToken
}
