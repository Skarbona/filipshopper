import { SET_SEARCH_PRODUCTS, SET_SEARCHING_STATUS } from "./index";

export const setSearchProducts = products => dispatch => {
  if (products) {
    dispatch({
      type: SET_SEARCH_PRODUCTS,
      payload: products
    });
    dispatch({
      type: SET_SEARCHING_STATUS,
      payload: true
    });
  } else {
    dispatch({
      type: SET_SEARCHING_STATUS,
      payload: false
    });
  }
};
