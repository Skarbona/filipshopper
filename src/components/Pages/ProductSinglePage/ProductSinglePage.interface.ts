import * as cartEpics from "../../../store/cart/epic";
import { ITranslations } from "../../../store/app/app.types";
import { IProductProps } from "../../../store/cart/cart.types";

export interface IProductSinglePageStoreProps {
  buttons: ITranslations['buttons'];
  currency: ITranslations['currency']['short']
  product: IProductProps
}

export interface IProductSinglePageDispatchProps {
  addItemToCart: typeof cartEpics.addItemToCart
}

export interface IProductSinglePageOwnProps {
  match: {
    params: {
      id: string
    }
  }
}

export type IProductSinglePageProps =
  IProductSinglePageStoreProps
  & IProductSinglePageDispatchProps
  & IProductSinglePageOwnProps