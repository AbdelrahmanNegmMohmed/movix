import { createSlice } from '@reduxjs/toolkit'



export const homeSlice = createSlice({
  name: 'home',
  initialState:{
    url:{},
    genres:{},

  },
  reducers: {
    gitApiConfigration :(state, action)=>{
        state.url = action.payload

    },
    getGeneas :(state, action)=>{
        state.genres = action.payload;

    },
  },
})

export const { gitApiConfigration, getGeneas} = homeSlice.actions;

export default homeSlice.reducer