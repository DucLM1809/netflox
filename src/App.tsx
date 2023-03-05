import { Suspense } from 'react'
import { Layout } from 'antd'
import { BrowserRouter, Routes } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './routes/Router'

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Layout>
            <>{'Loading...'}</>
          </Layout>
        }
      >
        <Layout>
          <Routes>
            {PublicRoutes}
            {PrivateRoutes}
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
