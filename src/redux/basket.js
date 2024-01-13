import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, { payload }) => {
      state.count = state.count + payload

      
    },
    removeToBasket: (state, { payload }) => {
      state.count = state.count - payload
    },
   
  }
})
export const { addToBasket, removeToBasket} = basketSlice.actions

export const getBasket = state => state.basket.count

