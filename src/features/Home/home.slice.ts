import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { IMovies } from '../../interfaces/IMovie'

interface HomeState {
  showModal: boolean
  currentMovie: IMovies | null
  isRefetchAfterTracking: boolean
  selectGenre: string
  isRefetchMovies: boolean
  searchText: string
}

const initialState: HomeState = {
  showModal: false,
  currentMovie: null,
  isRefetchAfterTracking: false,
  selectGenre: '',
  isRefetchMovies: false,
  searchText: ''
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload
    },
    setCurrentMovie: (state, action) => {
      state.currentMovie = action.payload
    },
    setIsRefetchAfterTracking: (state, action) => {
      state.isRefetchAfterTracking = action.payload
    },
    setSelectGenre: (state, action) => {
      state.selectGenre = action.payload
    },
    setIsRefetchMovies: (state, action) => {
      state.isRefetchMovies = action.payload
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload
    }
  }
})

export const {
  setShowModal,
  setCurrentMovie,
  setIsRefetchAfterTracking,
  setSelectGenre,
  setIsRefetchMovies,
  setSearchText
} = homeSlice.actions

export const selectShowModal = (state: RootState) => state.home.showModal
export const selectCurrentMovie = (state: RootState) => state.home.currentMovie
export const selectIsRefetchAfterTracking = (state: RootState) =>
  state.home.isRefetchAfterTracking
export const selectSelectGenre = (state: RootState) => state.home.selectGenre
export const selectIsRefetchMovies = (state: RootState) =>
  state.home.isRefetchMovies
export const selectSearchText = (state: RootState) => state.home.searchText

export default homeSlice.reducer
