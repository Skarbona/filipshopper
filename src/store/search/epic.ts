import * as searchActions from './actions'
import { IProductProps } from "../cart/cart.types";
import { EpicType } from "../store";


export const setSearchProducts = (products: IProductProps[]): EpicType => dispatch => {
  if (products) {
    dispatch(searchActions.setSearchProductsAction(products));
    dispatch(searchActions.setSearchingStatusAction(true));
  } else {
    dispatch(searchActions.setSearchingStatusAction(false));
  }
};
