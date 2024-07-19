import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './slices/booksSlice'
import filterReducder from './slices/filterSlice'
import errorReducder from './slices/errorSlice'

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducder,
    error: errorReducder,
  },
})

export default store
