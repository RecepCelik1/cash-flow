import { configureStore } from '@reduxjs/toolkit'
import  consequenceSlice  from './slice'

export const store = configureStore({
  reducer: {
    consequenceSlice : consequenceSlice,
  },
})