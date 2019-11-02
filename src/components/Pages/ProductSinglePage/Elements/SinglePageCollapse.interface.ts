import * as reviewsEpics from "../../../../store/reviews/epic";
import { IReviewProps } from "../../../../store/reviews/reviews.types";

export interface ISinglePageCollapseOwnProps {
  id: string,
  extra: string,
}

export interface ISinglePageCollapseStoreProps {
  reviews: IReviewProps[];
}

export interface ISinglePageCollapseDispatchProps {
  initReviews: typeof reviewsEpics.initReviews
}

export type ISinglePageCollapseProps =
  ISinglePageCollapseOwnProps
  & ISinglePageCollapseStoreProps
  & ISinglePageCollapseDispatchProps