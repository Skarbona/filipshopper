import { ActionCreator } from "redux";

import { AppActionsEnum } from "./app.enum";
import {
  IInitProductDataAction,
  IInitProductDataActionFailed,
  IInitProductDataActionSuccess,
  IInitTranslationsAction,
  IInitTranslationsSuccessAction,
  IInitTranslationsFailedAction
} from "./app.interface";
import { IProductProps } from "../cart/cart.types";
import { ITranslations } from "./app.types";

export const initProductDataAction: ActionCreator<IInitProductDataAction>
  = () => ({
  type: AppActionsEnum.INIT_PRODUCT_DATA
});

export const initProductDataSuccessAction: ActionCreator<IInitProductDataActionSuccess>
  = (data: IProductProps[]) => ({
  type: AppActionsEnum.INIT_PRODUCT_DATA_SUCCESS,
  payload: data
});

export const initProductDataFailedAction: ActionCreator<IInitProductDataActionFailed>
  = () => ({
  type: AppActionsEnum.INIT_PRODUCT_DATA_FAILED
});

export const initTranslationsAction: ActionCreator<IInitTranslationsAction>
  = () => ({
  type: AppActionsEnum.INIT_TRANSLATIONS
});

export const initTranslationsSuccessAction: ActionCreator<IInitTranslationsSuccessAction>
  = (data: ITranslations) => ({
  type: AppActionsEnum.INIT_TRANSLATIONS_SUCCESS,
  payload: data
});

export const initTranslationsFailedAction: ActionCreator<IInitTranslationsFailedAction>
  = () => ({
  type: AppActionsEnum.INIT_TRANSLATIONS_FALIED
});
