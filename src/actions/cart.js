import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, CLEAR_CART } from "./index";

export const addItemToCart = (product, countBy = 1) => dispatch => {
  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: {
      product,
      countBy
    }
  });
};

export const removeItemFromCart = (product, countBy = 1) => dispatch => {
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: {
      product,
      countBy
    }
  });
};

export const clearCart = () => dispatch => {
  dispatch({
    type: CLEAR_CART
  });
};
