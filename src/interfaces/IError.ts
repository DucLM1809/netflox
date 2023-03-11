export interface IApiError {
  message: string
  description: string
  statusCode: string | number
  response: IResponse
}

interface IResponse {
  data: { detail: string }
}
