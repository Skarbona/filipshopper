import { IProductProps } from "../cart/cart.types";

export interface ISearchStore {
  products: IProductProps[],
  searching: boolean;
}