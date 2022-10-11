import { IStoreItem } from './../../models/IStoreItem';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from '../../models/ICartItem';


interface CartState {
  count: number,
  products: ICartItem[]
}

const initialState: CartState = {
  count: 0,
  products: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload: { item } }: PayloadAction<{ item: IStoreItem }>) {
      state.count++;
      const storeItem = state.products.find(product => product.id === item.id);
      if(storeItem) {
        storeItem.cartCount++;
      } else {
        state.products.push({ ...item, cartCount: 1 })
      }
    }
  }
})

export default cartSlice.reducer;