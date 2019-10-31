import { CartActionsEnum } from "./cart.enum";
import { IProductProps } from "./cart.types";

export interface ICartActions {
  type: CartActionsEnum;
}

export interface IAddItemToCartAction extends ICartActions {
  type: CartActionsEnum.ADD_ITEM_TO_CART,
  payload: {
    product: IProductProps,
    total: number,
    counter: number,
  }
}

export interface IDecreaseItemFromCartAction extends ICartActions {
  type: CartActionsEnum.DECREASE_ITEM_FROM_CART,
  payload: {
    product: IProductProps,
    total: number,
    counter: number,
  }
}

export interface IRemoveItemFromCartAction extends ICartActions {
  type: CartActionsEnum.REMOVE_ITEM_FROM_CART,
  payload: {
    productID: string,
    total: number,
    counter: number,
  }
}

export interface IClearCartAction extends ICartActions {
  type: CartActionsEnum.CLEAR_CART
}


export type ICartAction =
  IAddItemToCartAction |
  IRemoveItemFromCartAction |
  IDecreaseItemFromCartAction |
  IClearCartAction

