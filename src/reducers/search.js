import {
    SET_SEARCH_PRODUCTS,
    SET_SEARCHING_STATUS,
} from '../actions/'

export default (state = { searching: false }, action) => {
  switch (action.type) {
    case SET_SEARCH_PRODUCTS:
      return {
        ...state,
        products: [...action.payload]
      };
    case SET_SEARCHING_STATUS:
      return {
        ...state,
        searching: action.payload
      };
    default:
      return state;
  }
};