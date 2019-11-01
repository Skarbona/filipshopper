import { IProduct } from "../../../../store/cart/cart.types";
import * as cartEpics from "../../../../store/cart/epic";
import { ITranslations } from "../../../../store/app/app.types";

export interface ITableProducts {
  products: IProduct
  currency: ITranslations['currency'];
  addItemToCart: typeof cartEpics.addItemToCart
  removeItemFromCart: typeof cartEpics.removeItem
}