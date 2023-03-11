import { Navigate, Route, useLocation } from 'react-router-dom'
import { PATH, ROUTES } from '../constants/common'
import { useAuth } from '../hooks/useAuth'
import { lazy } from 'react'

interface Props {
  children: JSX.Element
  permission: string[]
  route?: Route
}

interface Route {
  path: '/'
  element: string
  permission: string[]
}

const RequireAuth = ({ children, permission, route }: Props) => {
  const isAuth = useAuth()
  const location = useLocation()

  if (isAuth) {
    return <Navigate to={PATH.LOGIN} state={{ from: location }} replace />
  }

  return children
}

export const PublicRoutes = ROUTES.PUBLIC.map((route) => {
  const Component = lazy(() => import(`../pages/${route.element}.tsx`))
  return <Route {...route} element={<Component />} key={route.element} />
})

export const PrivateRoutes: any = ROUTES.PRIVATE.map((route) => {
  let Component = lazy(() => import(`../pages/${route.element}.tsx`))
  return (
    <Route
      {...route}
      element={
        <RequireAuth permission={route.permission} route={route}>
          <Component />
        </RequireAuth>
      }
      key={route.element}
    />
  )
})
