import { ThunkAction } from "redux-thunk";
import { IStore } from "../store.interface";
import { Action } from "redux";

import * as searchActions from './actions'
import { IProductProps } from "../cart/cart.types";


export const setSearchProducts = (products: IProductProps[]): ThunkAction<void, IStore, null, Action<string>> => dispatch => {
  if (products) {
    dispatch(searchActions.setSearchProductsAction(products));
    dispatch(searchActions.setSearchingStatusAction(true));
  } else {
    dispatch(searchActions.setSearchingStatusAction(false));
  }
};
