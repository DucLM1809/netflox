import axiosClient from './axiosClient'

const AxiosPost = async (url: string, data: any) => {
  try {
    const response = await axiosClient.post(url, data)
    return Promise.resolve(response)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default AxiosPost
