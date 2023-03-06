import { Movie } from '../../vite-env'

interface Props {
  movie: Movie
  // When using firebase
  // movie: Movie | DocumentData;
}

function Thumbnail({ movie }: Props) {
  // const [showModal, setShowModal] = useRecoilState(modalState)
  // const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  return (
    <div
      className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'
      // onClick={() => {
      //   setCurrentMovie(movie)
      //   setShowModal(true)
      // }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className='rounded-sm object-cover md:rounded'
      />
    </div>
  )
}

export default Thumbnail
