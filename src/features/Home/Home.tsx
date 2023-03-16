import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
import Loading from '../../components/Loading/Loading'
import ModalMovie from '../../components/Modal/ModalMovie'
import Row from '../../components/Row/Row'
import { useAppSelector } from '../../hooks/useAppSelector'
import {
  selectIsRefetchAfterTracking,
  selectIsRefetchMovies,
  selectSelectGenre,
  selectShowModal,
  setIsRefetchAfterTracking,
  setIsRefetchMovies
} from './home.slice'
import MovieService from '../../services/movieService'
import { useDispatch } from 'react-redux'

const Home = () => {
  const showModal = useAppSelector(selectShowModal)
  const isRefetchAfterTracking = useAppSelector(selectIsRefetchAfterTracking)
  const isRefetchMovies = useAppSelector(selectIsRefetchMovies)
  const selectGenre = useAppSelector(selectSelectGenre)
  const dispatch = useDispatch()

  const {
    isLoading: isLoadingMovies,
    error: errorMovies,
    data: dataMovies
  } = useQuery('movies', () => MovieService.getMovies([selectGenre]), {
    refetchInterval: isRefetchMovies ? 100 : 0,
    onSettled: () => dispatch(setIsRefetchMovies(false))
  })

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
    data: dataHistory
  } = useQuery('watched', () => MovieService.getWatched(), {
    refetchInterval: isRefetchAfterTracking ? 100 : 0,
    onSettled: () => dispatch(setIsRefetchAfterTracking(false))
  })

  if (isLoadingTopRated || isLoadingRecommended || isLoadingHistory)
    return <Loading />

  if (errorTopRated || errorRecommended || errorHistory) return <>Error...</>

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
