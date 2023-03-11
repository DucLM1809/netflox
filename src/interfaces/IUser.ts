export interface IUserRegister {
  email: string
  password: string
  confirmPassword: string
}

export interface IUser {
  email: string
  password: string
}

export interface IToken {
  access_token: string
  refresh_token: string
}
