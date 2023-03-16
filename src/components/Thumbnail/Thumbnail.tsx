import { setCurrentMovie, setShowModal } from '../../features/Home/home.slice'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { IMovies } from '../../interfaces/IMovie'

interface Props {
  movie: IMovies
}

function Thumbnail({ movie }: Props) {
  const dispatch = useAppDispatch()

  return (
    <div
      className='relative h-28 max-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'
      onClick={() => {
        dispatch(setCurrentMovie(movie))
        dispatch(setShowModal(true))
      }}
    >
      <img
        src={`${movie.backgroundUrl}`}
        className='rounded-sm object-cover md:rounded'
      />
    </div>
  )
}

export default Thumbnail
