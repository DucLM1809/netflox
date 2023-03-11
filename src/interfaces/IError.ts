export interface IApiError {
  response: IResponse
}

interface IResponse {
  detail: {
    msg: string
    type: string
  }[]
}
