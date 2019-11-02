import * as cartEpics from "../../../../store/cart/epic";
import { ITranslations } from "../../../../store/app/app.types";
import { IProductProps } from "../../../../store/cart/cart.types";

export interface IProductListSingleItemStoreProps {
  buttons: ITranslations['buttons'];
  currency: ITranslations['currency']['short'];
}

export interface IProductListSingleItemDispatchProps {
  addItemToCart: typeof cartEpics.addItemToCart
}

export interface IProductListSingleItemOwnProps {
  product: IProductProps
}

export type IProductListSingleItemProps =
  IProductListSingleItemStoreProps
  & IProductListSingleItemDispatchProps
  & IProductListSingleItemOwnProps