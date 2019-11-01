import { AppActionsEnum } from "./app.enum";
import { IProductProps } from "../cart/cart.types";
import { ITranslations } from "./app.types";

export interface IAppActions {
  type: AppActionsEnum;
}

export interface IInitProductDataAction extends IAppActions {
  type: AppActionsEnum.INIT_PRODUCT_DATA,
}

export interface IInitProductDataActionSuccess extends IAppActions {
  type: AppActionsEnum.INIT_PRODUCT_DATA_SUCCESS,
  payload: IProductProps[]
}

export interface IInitProductDataActionFailed extends IAppActions {
  type: AppActionsEnum.INIT_PRODUCT_DATA_FAILED,
}

export interface IInitTranslationsAction extends IAppActions {
  type: AppActionsEnum.INIT_TRANSLATIONS,
}

export interface IInitTranslationsSuccessAction extends IAppActions {
  type: AppActionsEnum.INIT_TRANSLATIONS_SUCCESS,
  payload: ITranslations,
}

export interface IInitTranslationsFailedAction extends IAppActions {
  type: AppActionsEnum.INIT_TRANSLATIONS_FALIED,
}

export type IAppAction =
  IInitProductDataAction |
  IInitProductDataActionSuccess |
  IInitProductDataActionFailed |
  IInitTranslationsAction |
  IInitTranslationsSuccessAction |
  IInitTranslationsFailedAction
