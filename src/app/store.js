import { configureStore } from '@reduxjs/toolkit'
import term_Reducer from '../features/featureStore'

export const store = configureStore({
  reducer: {data:term_Reducer,}
})