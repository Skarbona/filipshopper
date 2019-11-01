import { ICartStore } from "./cart.types";

export const cartInitialState: ICartStore = {
  total: 0,
  counter: 0,
  products: {},
};