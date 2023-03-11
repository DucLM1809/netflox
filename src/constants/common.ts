export const COOKIES_ITEMS = Object.freeze({
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token'
})

export const PATH = Object.freeze({
  LOGIN: '/login',
  SIGNUP: '/signup',
  HOME: '/',
  NOT_FOUND: '*',
  FORBIDDEN: '/forbidden'
})

export const ROLE = Object.freeze({
  ADMIN: 'ADMIN',
  ALL: 'ALL'
})

export const ROUTES = Object.freeze({
  PRIVATE: [
    {
      path: PATH.HOME,
      element: 'HomePage',
      permission: [ROLE.ALL]
    }
  ],
  PUBLIC: [
    { path: PATH.LOGIN, element: 'LoginPage' },
    { path: PATH.SIGNUP, element: 'SignupPage' },
    { path: PATH.NOT_FOUND, element: 'NotFoundPage' },
    { path: PATH.FORBIDDEN, element: 'ForbiddenPage' }
  ]
})

export const baseUrl = 'https://image.tmdb.org/t/p/original/'
