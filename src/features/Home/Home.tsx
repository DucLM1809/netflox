import React, { useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
import Loading from '../../components/Loading/Loading'
import ModalMovie from '../../components/Modal/ModalMovie'
import Row from '../../components/Row/Row'
import { useAppSelector } from '../../hooks/useAppSelector'
import {
  selectIsRefetchAfterTracking,
  selectIsRefetchMovies,
  selectSearchText,
  selectSelectGenre,
  selectShowModal,
  setIsRefetchAfterTracking,
  setIsRefetchMovies
} from './home.slice'
import MovieService from '../../services/movieService'
import { useDispatch } from 'react-redux'
import { IFilter } from '../../interfaces/IMovie'

const Home = () => {
  const showModal = useAppSelector(selectShowModal)
  const isRefetchAfterTracking = useAppSelector(selectIsRefetchAfterTracking)
  const isRefetchMovies = useAppSelector(selectIsRefetchMovies)
  const selectGenre = useAppSelector(selectSelectGenre)
  const searchText = useAppSelector(selectSearchText)
  const dispatch = useDispatch()

  // MUTATE
  const {
    mutate,
    isLoading: isLoadingDataMovies,
    data: dataMovies
  } = useMutation({
    mutationKey: 'logout',
    mutationFn: (variables: IFilter) => MovieService.postMovies(variables)
  })

  useEffect(() => {
    mutate({ genre: selectGenre, search: searchText })
  }, [selectGenre, searchText])

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

  if (
    isLoadingTopRated ||
    isLoadingRecommended ||
    isLoadingHistory ||
    isLoadingDataMovies
  )
    return <Loading />

  if (errorTopRated || errorRecommended || errorHistory) return <>Error...</>

  return (
    <div className='relative h-screen bg-gradient-to-b lg:h-[140vh] '>
      <Header />
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        <Banner topRated={dataTopRated} />
        <section className='md:space-y-24'>
          {dataMovies?.length > 0 && <Row title='Movies' movies={dataMovies} />}
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
