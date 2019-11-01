import axios from "axios";

import * as reviewsActions from "./actions";
import { EpicType } from "../store";

export const initReviews = (): EpicType => async dispatch => {

  dispatch(reviewsActions.initReviewsAction());

  try {
    const response = await axios.get("/database/reviews.json");
    dispatch(reviewsActions.initReviewsSuccessAction(response.data));
  } catch (e) {
    dispatch(reviewsActions.initReviewsFailedAction());
  }

};
