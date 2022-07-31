
import { configureStore } from '@reduxjs/toolkit'
import movies from './movies'
import users from './users'



const store = configureStore({
  reducer: {
    movies,
    users
  },
})

export default store
