
import { configureStore } from '@reduxjs/toolkit'
import movies from './movies'
import users from './users'
import person from './person'



const store = configureStore({
  reducer: {
    movies,
    users,
    person
  },
})

export default store
