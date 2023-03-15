import { axiosDelete, axiosPost } from '../configs/axios'
import { IToken, IUser } from '../interfaces/IUser'
import { authRequests } from '../constants/requests'
import TokenService from './tokenService'
import { LOCAL_STORAGE_ITEMS } from '../constants/common'

const registerUser = (data: IUser) =>
  axiosPost(authRequests.register, { ...data }).then((res) => res.data)

const loginUser = (data: IUser) =>
  axiosPost(authRequests.login, { ...data }).then((res) => {
    const dataRes: IToken = res.data
    TokenService.setAccessToken(dataRes.accessToken)
  })

const logoutUser = () =>
  axiosDelete(authRequests.login).then(() =>
    localStorage.removeItem(LOCAL_STORAGE_ITEMS.ACCESS_TOKEN)
  )

const AuthService = { registerUser, loginUser, logoutUser }

export default AuthService
