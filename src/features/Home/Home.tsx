import React from 'react'
import { useQuery } from 'react-query'
import {
  getActionMovies,
  getComedyMovies,
  getDocumentaries,
  getHorrorMovies,
  getNetflixOriginals,
  getRomanceMovies,
  getTopRated,
  getTrendings
} from '../../api/api'
import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
import ModalMovie from '../../components/Modal/ModalMovie'
import Row from '../../components/Row/Row'
import { useAppSelector } from '../../hooks/useAppSelector'
import { selectShowModal } from './home.slice'

const Home = () => {
  const showModal = useAppSelector(selectShowModal)

  const {
    isLoading: isLoadingNetflixOriginal,
    error: errorLoadingNetflixOriginal,
    data: netflixOriginals
  } = useQuery('netflixOriginals', () => getNetflixOriginals)

  const {
    isLoading: isLoadingTrending,
    error: errorTrending,
    data: trendingNow
  } = useQuery('trendingNow', () => getTrendings)

  const {
    isLoading: isLoadingTopRated,
    error: errorTopRated,
    data: topRated
  } = useQuery('topRated', () => getTopRated)

  const {
    isLoading: isLoadingActionMovies,
    error: errorActionMovies,
    data: actionMovies
  } = useQuery('actionMovies', () => getActionMovies)

  const {
    isLoading: isLoadingComedyMovies,
    error: errorComedyMovies,
    data: comedyMovies
  } = useQuery('comedyMovies', () => getComedyMovies)

  const {
    isLoading: isLoadingHorrorMovies,
    error: errorHorrorMovies,
    data: horrorMovies
  } = useQuery('horrorMovies', () => getHorrorMovies)

  const {
    isLoading: isLoadingRomanceMovies,
    error: errorRomanceMovies,
    data: romanceMovies
  } = useQuery('romanceMovies', () => getRomanceMovies)

  const {
    isLoading: isLoadingDocumentaries,
    error: errorDocumentaries,
    data: documentaries
  } = useQuery('documentaries', () => getDocumentaries)

  if (
    isLoadingActionMovies ||
    isLoadingComedyMovies ||
    isLoadingHorrorMovies ||
    isLoadingRomanceMovies ||
    isLoadingDocumentaries ||
    isLoadingTopRated ||
    isLoadingTrending ||
    isLoadingNetflixOriginal
  )
    return <>Loading...</>

  if (
    errorActionMovies ||
    errorComedyMovies ||
    errorHorrorMovies ||
    errorRomanceMovies ||
    errorDocumentaries ||
    errorTopRated ||
    errorTrending ||
    errorLoadingNetflixOriginal
  )
    return <>Error...</>

  return (
    <div className='relative h-screen bg-gradient-to-b lg:h-[140vh] '>
      <Header />
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        <Banner netflixOriginals={netflixOriginals} />
        <section className='md:space-y-24'>
          <Row title='Trending Now' movies={trendingNow} />
          <Row title='Top Rated' movies={topRated} />
          <Row title='Action Thrillers' movies={actionMovies} />
          {/* My List */}

          <Row title='Comedies' movies={comedyMovies} />
          <Row title='Scary Movies' movies={horrorMovies} />
          <Row title='Romance Movies' movies={romanceMovies} />
          <Row title='Documentaries' movies={documentaries} />
        </section>
      </main>
      {showModal && <ModalMovie />}
    </div>
  )
}

export default Home
