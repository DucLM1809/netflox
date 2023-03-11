import { Suspense } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import Loading from './components/Loading/Loading'
import Toast from './components/Toast/Toast'
import { PrivateRoutes, PublicRoutes } from './routes/Router'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {PublicRoutes}
          {PrivateRoutes}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
