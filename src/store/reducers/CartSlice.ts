import { createSlice } from "@reduxjs/toolkit";

interface CartState {
}

const initialState: CartState = {
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  }
})

export default cartSlice.reducer;