import { IStoreItem } from "./IStoreItem";

export interface ICartItem extends IStoreItem {
  cartCount: number
}