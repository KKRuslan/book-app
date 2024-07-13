import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './books/reducer'
import filterReducder from './slices/filterSlice'

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducder,
  },
})

export default store