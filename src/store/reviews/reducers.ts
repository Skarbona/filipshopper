import { ReviewsActionsEnum } from "./reviews.enum";
import { reviewsInitialState } from "./initialState";
import { IReviewsAction } from "./reviews.interface";
import { IReviewsStore } from "./reviews.types";
import { Reducer } from "redux";


const reducer: Reducer<IReviewsStore, IReviewsAction> = (state = reviewsInitialState, action: IReviewsAction) => {

  switch (action.type) {

    case ReviewsActionsEnum.INIT_REVIEWS: {
      return state;
    }

    case ReviewsActionsEnum.INIT_REVIEWS_SUCCESS:
      return {
        reviews: action.payload,
        error: false,
      };
    case ReviewsActionsEnum.INIT_REVIEWS_FAILED: {
      return {
        ...state,
        error: true,
      }
    }
    default:
      return state;
  }

};

export default reducer;
