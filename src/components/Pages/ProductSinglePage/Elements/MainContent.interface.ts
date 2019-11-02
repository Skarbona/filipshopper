import { IProductProps } from "../../../../store/cart/cart.types";
import { ITranslations } from "../../../../store/app/app.types";
import * as cartEpics from "../../../../store/cart/epic";

export interface IMainContentProps {
  buttons: ITranslations['buttons'],
  currency: ITranslations['currency']['short'],
  product: IProductProps,
  addItemToCart: typeof cartEpics.addItemToCart,
}