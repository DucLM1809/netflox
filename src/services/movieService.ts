import { axiosGet, axiosPost } from '../configs/axios'
import { movieRequests } from '../constants/requests'

const getMovies = () =>
  axiosGet(movieRequests.getMovies).then((res) => res.data)
const getTopRated = () =>
  axiosGet(movieRequests.getTopRated).then((res) => res.data)
const getWatched = () =>
  axiosGet(movieRequests.getWatched).then((res) => res.data)
const getRecommended = () =>
  axiosGet(movieRequests.getRecommended).then((res) => res.data)
const postTracking = (movie_id: string) =>
  axiosPost(movieRequests.postTracking, {}, { movie_id }).then(
    (res) => res.data
  )

const MovieService = {
  getMovies,
  getTopRated,
  getWatched,
  getRecommended,
  postTracking
}

export default MovieService
