import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { IMovies } from '../../interfaces/IMovie'

interface HomeState {
  showModal: boolean
  currentMovie: IMovies | null
}

const initialState: HomeState = {
  showModal: false,
  currentMovie: null
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
    }
  }
})

export const { setShowModal, setCurrentMovie } = homeSlice.actions

export const selectShowModal = (state: RootState) => state.home.showModal
export const selectCurrentMovie = (state: RootState) => state.home.currentMovie

export default homeSlice.reducer
