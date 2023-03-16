const authEndpoints = {
  register: '/auth/users',
  login: '/auth/users/tokens'
}

const movieEndpoints = {
  movies: '/movies',
  topRated: '/movies/top_rated',
  watched: '/movies/watched',
  recommended: '/movies/recommended',
  tracking: '/movies/tracking',
  genres: '/movies/genres'
}

export { authEndpoints, movieEndpoints }
