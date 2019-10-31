import { INIT_REVIEWS } from "../actions/index";

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
