import { configureStore } from '@reduxjs/toolkit'
import  homeSlice  from './HmoeSlice';

export const store = configureStore({
  reducer: {
    home:homeSlice,
  },
})