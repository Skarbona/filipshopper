import { ICartStore } from "./cart/cart.types";

export interface IAppStore {
  cart: ICartStore;
}