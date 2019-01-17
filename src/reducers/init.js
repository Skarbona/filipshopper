import { INIT_PRODUCT_DATA, INIT_TRANSLATIONS } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case INIT_PRODUCT_DATA:
      return {
        ...state,
        products: [...action.payload]
      };
    case INIT_TRANSLATIONS:
      return {
        ...state,
        translations: { ...state.translations, ...action.payload }
      };
    default:
      return state;
  }
};
