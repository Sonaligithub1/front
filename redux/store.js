import { configureStore } from '@reduxjs/toolkit'
import cartreducer from './reducers/cartreducer'
export const store = configureStore({
    reducer: {
        cart:cartreducer,
    },
  })