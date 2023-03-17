import { useQuery } from 'react-query'
import { axiosGet, axiosPost } from '../configs/axios'
import { movieRequests } from '../constants/requests'
import { IFilter } from '../interfaces/IMovie'

const postMovies = (data: IFilter) =>
  axiosPost(
    movieRequests.getMovies,
    { genres: [data.genre] },
    { search: data.search }
  ).then((res) => res.data)

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

const getGenres = () =>
  axiosGet(movieRequests.getGenres).then((res) => res.data)

const MovieService = {
  postMovies,
  getTopRated,
  getWatched,
  getRecommended,
  postTracking,
  getGenres
}

export default MovieService
