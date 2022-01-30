import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setProducts: (state, {payload}) => {
      state.products.push(payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProducts } = appSlice.actions

export const productsSelector = state=> state.app.products

export default appSlice.reducer