import { authEndpoints, movieEndpoints } from './endpoints'

const API_KEY = import.meta.env.VITE_PUBLIC_API_KEY
const BASE_URL = import.meta.env.VITE_API
const END_POINT = import.meta.env.VITE_REST_API

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`
}

const authRequests = {
  register: `${END_POINT}${authEndpoints.register}`,
  login: `${END_POINT}${authEndpoints.login}`
}

const movieRequests = {
  getMovies: `${END_POINT}${movieEndpoints.movies}`,
  getTopRated: `${END_POINT}${movieEndpoints.topRated}`,
  getWatched: `${END_POINT}${movieEndpoints.watched}`,
  getRecommended: `${END_POINT}${movieEndpoints.recommended}`,
  postTracking: `${END_POINT}${movieEndpoints.tracking}`
}

export { requests, authRequests, movieRequests }
