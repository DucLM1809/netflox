import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import homeSlice from '../features/Home/home.slice'

export const store = configureStore({
  reducer: {
    home: homeSlice
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
