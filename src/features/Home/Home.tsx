import React from 'react'
import { useQuery } from 'react-query'
import { getNetFlixOriginals } from '../../api/api'
import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'

const Home = () => {
  const { isLoading, error, data, isFetching } = useQuery(
    'netflixOriginals',
    () => getNetFlixOriginals
  )

  if (isLoading) return <>Loading...</>

  return (
    <div className='relative h-screen bg-gradient-to-b lg:h-[140vh] overflow-hidden'>
      <Header />
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        <Banner netflixOriginals={data} />
      </main>
    </div>
  )
}

export default Home
