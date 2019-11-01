import { IProductProps } from "./cart.types";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

import * as cartActions from "./actions";
import { IStore } from "../store.interface";

export const addItemToCart = (
  product: IProductProps,
  countBy = 1
): ThunkAction<void, IStore, null, Action<string>> => (dispatch, getState) => {

  const cart = getState().cart;

  const total = cart.total + countBy * product.price;
  const counter = cart.counter + countBy;

  const productObject = {
    ...product,
    amount: cart.products && cart.products[product.id] ?
      cart.products[product.id].amount + countBy :
      countBy
  };

  dispatch(cartActions.addItemToCartAction(productObject, total, counter));

};

export const removeItem = (
  product: IProductProps,
  countBy = 1
): ThunkAction<void, IStore, null, Action<string>> => (dispatch, getState) => {

  const cart = getState().cart;

  const counter = cart.counter - countBy;
  const total = cart.total - countBy * product.price;

  if (cart.products[product.id] && cart.products[product.id].amount > 1) {
    const productObject = {
      ...cart.products[product.id],
      amount: cart.products[product.id].amount - countBy
    };
    dispatch(cartActions.decreaseItemFromCartAction(productObject, total, counter));
  } else {
    dispatch(cartActions.removeItemFromCartAction(product.id, total, counter));

  }

};