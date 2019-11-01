import { IProductProps } from "../cart/cart.types";

export interface IAppStore  {
  translations: ITranslations,
  products: IProductProps[],
  error: boolean,
}

export interface ITranslations {
  buttons: {
    addToCart: string,
    seeMore: string,
  },
  currency: {
    full: string,
    short: string,
  },
  cartTitles:  string[],
  messages: {
    cart: {
      emptyCart: string,
      total: string,
    },
    general: {
      backShop: string,
    }
  }
}