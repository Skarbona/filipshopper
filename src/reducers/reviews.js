import { INIT_REVIEWS } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case INIT_REVIEWS:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};
