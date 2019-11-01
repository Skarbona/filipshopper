import { CartActionsEnum } from "./cart.enum";
import { IProductProps } from "./cart.types";
import {
  IAddItemToCartAction,
  IRemoveItemFromCartAction,
  IClearCartAction,
  IDecreaseItemFromCartAction
} from "./cart.interface";
import { ActionCreator } from "redux";

export const addItemToCartAction: ActionCreator<IAddItemToCartAction>
  = (product: IProductProps, total: number, counter: number) => ({
  type: CartActionsEnum.ADD_ITEM_TO_CART,
  payload: {
    product,
    total,
    counter
  }
});

export const removeItemFromCartAction: ActionCreator<IRemoveItemFromCartAction>
  = (productID: string, total: number, counter: number) => ({
  type: CartActionsEnum.REMOVE_ITEM_FROM_CART,
  payload: {
    counter,
    productID,
    total
  }
});

export const decreaseItemFromCartAction: ActionCreator<IDecreaseItemFromCartAction>
  = (product: IProductProps, total: number, counter: number) => ({
  type: CartActionsEnum.DECREASE_ITEM_FROM_CART,
  payload: {
    product,
    total,
    counter
  }
});

export const clearCartAction: ActionCreator<IClearCartAction>
  = () => ({
  type: CartActionsEnum.CLEAR_CART
});
