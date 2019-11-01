import { IAppStore } from "./app.types";

export const appInitialState: IAppStore = {
  translations: {
    buttons: {
      addToCart: "",
      seeMore: ""
    },
    currency: {
      full: "",
      short: ""
    },
    cartTitles: [],
    messages: {
      cart: {
        emptyCart: "",
        total: ""
      },
      general: {
        backShop: ""
      }
    }
  },
  products: [],
  error: false
};