import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { IStore } from "../store.interface";
import * as reviewsActions from "./actions";

export const initReviews = (): ThunkAction<void, IStore, null, Action<string>> => async dispatch => {

  dispatch(reviewsActions.initReviewsAction());

  try {
    const response = await axios.get("/database/reviews.json");
    dispatch(reviewsActions.initReviewsSuccessAction(response.data));
  } catch (e) {
    dispatch(reviewsActions.initReviewsFailedAction());
  }

};
