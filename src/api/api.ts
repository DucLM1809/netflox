import axios from 'axios'
import { axiosGet, axiosPost } from '../configs/axios'
import { IUserRegister } from '../interfaces/IUser'
import { postRequests, requests } from '../utils/requests'

// GET
export const getNetflixOriginals = axiosGet(
  requests.fetchNetflixOriginals
).then((res) => res.data.results)

export const getTrendings = axiosGet(requests.fetchTrending).then(
  (res) => res.data.results
)

export const getTopRated = axiosGet(requests.fetchTopRated).then(
  (res) => res.data.results
)

export const getActionMovies = axiosGet(requests.fetchActionMovies).then(
  (res) => res.data.results
)

export const getComedyMovies = axiosGet(requests.fetchComedyMovies).then(
  (res) => res.data.results
)

export const getHorrorMovies = axiosGet(requests.fetchHorrorMovies).then(
  (res) => res.data.results
)

export const getRomanceMovies = axiosGet(requests.fetchRomanceMovies).then(
  (res) => res.data.results
)

export const getDocumentaries = axiosGet(requests.fetchDocumentaries).then(
  (res) => res.data.results
)

// POST
export const registerUser = (data: IUserRegister) =>
  axiosPost(postRequests.register, { ...data }).then((res) => res.data)
