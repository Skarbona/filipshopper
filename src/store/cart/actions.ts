import { CartActionsEnum } from "./cart.enum";
import { IProductProps } from "./cart.types";
import {
  IAddItemToCartAction,
  IRemoveItemFromCartAction,
  IClearCartAction,
  IDecreaseItemFromCartAction
} from "./cart.interface";

export const addItemToCartAction = (product: IProductProps, total: number, counter: number): IAddItemToCartAction => ({
  type: CartActionsEnum.ADD_ITEM_TO_CART,
  payload: {
    product,
    total,
    counter
  }
});

export const removeItemFromCartAction = (productID: string, total: number, counter: number): IRemoveItemFromCartAction => ({
  type: CartActionsEnum.REMOVE_ITEM_FROM_CART,
  payload: {
    counter,
    productID,
    total
  }
});

export const decreaseItemFromCartAction = (product: IProductProps, total: number, counter: number): IDecreaseItemFromCartAction => ({
  type: CartActionsEnum.DECREASE_ITEM_FROM_CART,
  payload: {
    product,
    total,
    counter
  }
});

export const clearCartAction = (): IClearCartAction => ({
  type: CartActionsEnum.CLEAR_CART
});
