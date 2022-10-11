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
    },
    increaseItemCount(state, { payload: { id } }: PayloadAction<{ id: number }>) {
      state.count++;
      const item = state.products.find(product => product.id === id);
      if(item) item.cartCount++;
    },
    decreaseItemCount(state, { payload: { id } }: PayloadAction<{ id: number }>) {
      state.count--;
      const item = state.products.find(product => product.id === id);
      if(item) item.cartCount--;
    },
    removeItem(state, { payload: { id } }: PayloadAction<{ id: number }>) {
      state.count = 0;
      state.products = state.products.filter(product => product.id !== id);
    },
  }
})

export default cartSlice.reducer;