import loaderReducer from '../features/loader'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    loader : loaderReducer,
  },
})