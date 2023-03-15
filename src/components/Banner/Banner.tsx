import React, { useEffect, useState } from 'react'
import { Movie } from '../../vite-env'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/solid'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { setCurrentMovie, setShowModal } from '../../features/Home/home.slice'
import { IMovies } from '../../interfaces/IMovie'

interface Props {
  topRated: IMovies[]
}

const Banner = ({ topRated }: Props) => {
  const [movie, setMovie] = useState<IMovies | null>(null)

  const dispatch = useAppDispatch()

  useEffect(() => {
    setMovie(topRated[Math.floor(Math.random() * topRated.length)])
  }, [topRated])

  return (
    <>
      <div className='absolute top-0 left-0 h-[95vh] w-screen -z-10'>
        <img className='object-cover w-full ' src={movie?.backgroundUrl} />
      </div>
      <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
        {movie?.title}
      </h1>
      <p className='max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
        {movie?.description}
      </p>
      <div className='flex space-x-3'>
        <button className='bannerButton bg-white text-black'>
          <FaPlay className='h-4 w-4 text-black md:h-7 md:w-7' /> Play
        </button>
        <button
          className='bannerButton bg-[gray]/70'
          onClick={() => {
            dispatch(setCurrentMovie(movie))
            dispatch(setShowModal(true))
          }}
        >
          More Info <InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8' />
        </button>
      </div>
    </>
  )
}

export default Banner
