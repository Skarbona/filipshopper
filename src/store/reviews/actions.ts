import { ReviewsActionsEnum } from "./reviews.enum";
import { IInitReviewsAction, IInitReviewsFailedAction, IInitReviewsSuccessAction } from "./reviews.interface";
import { IReview } from "./reviews.types";
import { ActionCreator } from "redux";

export const initReviewsAction: ActionCreator<IInitReviewsAction>
  = () => ({
  type: ReviewsActionsEnum.INIT_REVIEWS
});

export const initReviewsSuccessAction: ActionCreator<IInitReviewsSuccessAction>
  = (data: IReview) => ({
  type: ReviewsActionsEnum.INIT_REVIEWS_SUCCESS,
  payload: data
});

export const initReviewsFailedAction: ActionCreator<IInitReviewsFailedAction>
  = () => ({
  type: ReviewsActionsEnum.INIT_REVIEWS_FAILED
});