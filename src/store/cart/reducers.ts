import { cartInitialState } from "./initialState";
import { ICartStore } from "./cart.types";
import { CartActionsEnum } from "./cart.enum";
import { ICartAction } from "./cart.interface";
import { Reducer } from "redux";

const reducer: Reducer<ICartStore, ICartAction> = (state = cartInitialState, action: ICartAction) => {

  switch (action.type) {

    case CartActionsEnum.CLEAR_CART:
      return {
        products: {},
        total: 0,
        counter: 0
      };

    case CartActionsEnum.REMOVE_ITEM_FROM_CART: {
      const { productID, total, counter } = action.payload;
      const newProductState = state.products;
      delete newProductState[productID];

      return {
        ...state,
        products: newProductState,
        total,
        counter
      };
    }

    case CartActionsEnum.DECREASE_ITEM_FROM_CART: {
      const { product, total, counter } = action.payload;
      return {
        ...state,
        products: {
          ...state.products,
          [product.id]: product
        },
        total,
        counter
      };
    }

    case CartActionsEnum.ADD_ITEM_TO_CART: {
      const { product, total, counter } = action.payload;
      return {
        ...state,
        products: {
          ...state.products,
          [product.id]: product
        },
        total,
        counter
      };
    }

    default:
      return state;
  }
};

export default reducer;
