export interface IMovies {
  id: number
  title: string
  originalName: string
  description: string
  releaseDate: string
  backgroundUrl: string
  trailerUrl: string
  voteAverage: number
  genres: string[]
  originalLanguage: string
}

export interface IGenres {
  id: number
  name: string
}

export interface IFilter {
  genre?: string
  search?: string
}
