import {
  ThumbUpIcon,
  VolumeUpIcon,
  XIcon,
  PlusIcon,
  VolumeOffIcon
} from '@heroicons/react/outline'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import MuiModal from '@mui/material/Modal'
import { FaPlay } from 'react-icons/fa'
import { useAppSelector } from '../../hooks/useAppSelector'
import {
  selectCurrentMovie,
  selectShowModal,
  setShowModal
} from '../../features/Home/home.slice'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useMutation } from 'react-query'
import MovieService from '../../services/movieService'
import Loading from '../Loading/Loading'

const ModalMovie = () => {
  const showModal = useAppSelector(selectShowModal)
  const [muted, setMuted] = useState(false)
  const movie = useAppSelector(selectCurrentMovie)
  const dispatch = useAppDispatch()

  // MUTATE
  const { mutate, isError, isSuccess, isLoading } = useMutation({
    mutationKey: 'tracking',
    mutationFn: (variables: string) => MovieService.postTracking(variables),
    onSuccess: () => {
      handleClose()
    }
  })

  const handleClose = () => {
    dispatch(setShowModal(false))
  }

  const handleWatchMovie = () => {
    mutate(movie?.id?.toString() || '')
  }

  isLoading && <Loading />

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className='fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-sm scrollbar-hide'
    >
      <>
        <button
          onClick={handleClose}
          className='modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]'
        >
          <XIcon className='h-6 w-6 text-white' />
        </button>

        <div className='relative pt-[56.25%]'>
          <ReactPlayer
            url={movie?.trailerUrl}
            width='100%'
            height='100%'
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
            muted={muted}
          />
          <div className='absolute bottom-10 flex w-full items-center justify-between px-10'>
            <div className='flex space-x-2'>
              <button
                className='flex items-center gap-x-2 rounded bg-white px-8 font-bold text-black transition hover:bg-[#e6e6e6]'
                onClick={handleWatchMovie}
              >
                <FaPlay className='h-7 w-7 text-black' />
                Play
              </button>

              <button className='modalButton'>
                <PlusIcon className='h-7 w-7 text-white' />
              </button>

              <button className='modalButton'>
                <ThumbUpIcon className='h-7 w-7 text-white' />
              </button>
            </div>

            <button className='modalButton' onClick={() => setMuted(!muted)}>
              {muted ? (
                <VolumeOffIcon className='h-6 w-6 text-white' />
              ) : (
                <VolumeUpIcon className='h-6 w-6 text-white' />
              )}
            </button>
          </div>
        </div>

        <div className='flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8'>
          <div className='space-y-6 text-lg'>
            <div className='flex items-center space-x-2 text-sm'>
              <p className='font-semibold text-green-400'>
                {movie!.voteAverage * 10}% Match
              </p>
              <p className='font-light text-white'>{movie?.releaseDate}</p>
              <div className='flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs text-white'>
                HD
              </div>
            </div>

            <div className='flex flex-col gap-x-10 gap-y-4 font-light md:flex-row'>
              <p className='w-5/6 text-white'>{movie?.description}</p>
              <div className='flex flex-col space-y-3 text-sm'>
                <div>
                  <span className='text-[gray]'>Genres: </span>
                  <span className='text-white'>{movie?.genres.join(', ')}</span>
                </div>

                <div>
                  <span className='text-[gray]'>Original language: </span>
                  <span className='text-white'>{movie?.originalLanguage}</span>
                </div>

                <div>
                  <span className='text-[gray]'>Total votes: </span>
                  <span className='text-white'>{movie?.voteAverage}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  )
}

export default ModalMovie
