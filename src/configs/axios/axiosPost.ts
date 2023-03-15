import axiosClient from './axiosClient'

const AxiosPost = async (url: string, data: any, params = {}) => {
  try {
    console.log(url)

    const response = await axiosClient.post(url, data, { params })
    return Promise.resolve(response)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default AxiosPost
