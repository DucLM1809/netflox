export const LOCAL_STORAGE_ITEM = Object.freeze({
  ACCESS_TOKEN: 'accessToken'
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
    { path: PATH.NOT_FOUND, element: 'NotFoundPage' },
    { path: PATH.FORBIDDEN, element: 'ForbiddenPage' }
  ]
})
