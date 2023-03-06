import axios from 'axios'
import requests from '../utils/requests'

export const getNetflixOriginals = axios
  .get(requests.fetchNetflixOriginals)
  .then((res) => res.data.results)

export const getTrendings = axios
  .get(requests.fetchTrending)
  .then((res) => res.data.results)

export const getTopRated = axios
  .get(requests.fetchTopRated)
  .then((res) => res.data.results)

export const getActionMovies = axios
  .get(requests.fetchActionMovies)
  .then((res) => res.data.results)

export const getComedyMovies = axios
  .get(requests.fetchComedyMovies)
  .then((res) => res.data.results)

export const getHorrorMovies = axios
  .get(requests.fetchHorrorMovies)
  .then((res) => res.data.results)

export const getRomanceMovies = axios
  .get(requests.fetchRomanceMovies)
  .then((res) => res.data.results)

export const getDocumentaries = axios
  .get(requests.fetchDocumentaries)
  .then((res) => res.data.results)
