import { createSlice } from "@reduxjs/toolkit";
import { IStoreItem } from "../../models/IStoreItem";

interface StoreState {
  products: IStoreItem[]
}

const initialState: StoreState = {
  products: [
    {
      id: 1,
      img: '',
      title: 'Apple BYZ S852I',
      price: 2927,
      rate: 4.7,
      oldPrice: 3527
    },
    {
      id: 2,
      img: '',
      title: 'Apple EarPods',
      price: 2327,
      rate: 4.5,
    },
    {
      id: 3,
      img: '',
      title: 'Apple EarPods',
      price: 2327,
      rate: 4.5,
    },
  ]
}

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
  }
})

export default storeSlice.reducer;