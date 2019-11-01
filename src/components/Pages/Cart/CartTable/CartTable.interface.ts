import { ICartStore, IProduct } from "../../../../store/cart/cart.types";
import { ITranslations } from "../../../../store/app/app.types";
import * as cartEpics from "../../../../store/cart/epic";

export interface ICartTableOwnProps { }

export interface ICartTableStoreProps {
  cartProducts: IProduct
  cartTotal: ICartStore['total'],
  translations: ITranslations,
}

export interface ICartTableDispatchProps {
  addItemToCart: typeof cartEpics.addItemToCart,
  removeItemFromCart: typeof cartEpics.removeItem,
}

export type ICartTableProps = ICartTableStoreProps & ICartTableDispatchProps & ICartTableOwnProps;