import { SearchActionsEnum } from "./search.enum";
import { IProductProps } from "../cart/cart.types";

export interface ISearchActions {
  type: SearchActionsEnum;
}

export interface ISetSearchProductsAction extends ISearchActions {
  type: SearchActionsEnum.SET_SEARCH_PRODUCTS,
  payload: IProductProps[]
}

export interface ISetSearchingStatusAction extends ISearchActions {
  type: SearchActionsEnum.SET_SEARCHING_STATUS
  payload: boolean
}


export type ISearchAction =
  ISetSearchProductsAction |
  ISetSearchingStatusAction
  

