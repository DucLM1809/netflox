import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
import Loading from '../../components/Loading/Loading'
import ModalMovie from '../../components/Modal/ModalMovie'
import Row from '../../components/Row/Row'
import { useAppSelector } from '../../hooks/useAppSelector'
import { selectShowModal } from './home.slice'
import MovieService from '../../services/movieService'

const Home = () => {
  const showModal = useAppSelector(selectShowModal)

  const {
    isLoading: isLoadingTopRated,
    error: errorTopRated,
    data: dataTopRated
  } = useQuery('topRated', () => MovieService.getTopRated())

  const {
    isLoading: isLoadingRecommended,
    error: errorRecommended,
    data: dataRecommended
  } = useQuery('recommended', () => MovieService.getRecommended())

  const {
    isLoading: isLoadingHistory,
    error: errorHistory,
    data: dataHistory,
    refetch: refetchHistory
  } = useQuery('watched', () => MovieService.getWatched())

  if (isLoadingTopRated || isLoadingRecommended || isLoadingHistory)
    return <Loading />

  if (errorTopRated || errorRecommended || errorHistory) return <>Error...</>

  useEffect(() => {
    !showModal && refetchHistory()
  }, [showModal])

  return (
    <div className='relative h-screen bg-gradient-to-b lg:h-[140vh] '>
      <Header />
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        <Banner topRated={dataTopRated} />
        <section className='md:space-y-24'>
          {dataHistory?.length > 0 && (
            <Row title='History' movies={dataHistory} />
          )}
          <Row title='Recommended' movies={dataRecommended} />
          <Row title='Top Rated' movies={dataTopRated} />
        </section>
      </main>
      {showModal && <ModalMovie />}
    </div>
  )
}

export default Home
