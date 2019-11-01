import { SearchActionsEnum } from "./search.enum";
import { IProductProps } from "../cart/cart.types";
import { ISetSearchingStatusAction, ISetSearchProductsAction } from "./search.interface";
import { ActionCreator } from "redux";

export const setSearchProductsAction: ActionCreator<ISetSearchProductsAction>
  = (products: IProductProps[]) => ({
  type: SearchActionsEnum.SET_SEARCH_PRODUCTS,
  payload: products
});

export const setSearchingStatusAction: ActionCreator<ISetSearchingStatusAction>
  = (status: boolean) => ({
  type: SearchActionsEnum.SET_SEARCHING_STATUS,
  payload: status
});
