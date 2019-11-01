import { ReviewsActionsEnum } from "./reviews.enum";
import { IReview } from "./reviews.types";

export interface IReviewsActions {
  type: ReviewsActionsEnum;
}

export interface IInitReviewsAction extends IReviewsActions {
  type: ReviewsActionsEnum.INIT_REVIEWS,
}

export interface IInitReviewsSuccessAction extends IReviewsActions {
  type: ReviewsActionsEnum.INIT_REVIEWS_SUCCESS
  payload: IReview
}

export interface IInitReviewsFailedAction extends IReviewsActions {
  type: ReviewsActionsEnum.INIT_REVIEWS_FAILED
}

export type IReviewsAction =
  IInitReviewsAction |
  IInitReviewsSuccessAction |
  IInitReviewsFailedAction

