import * as reviewsActions from "../actions";
import { ReviewsActionsEnum } from "../reviews.enum";
import { reviewsMock } from "../../../mocks/reviews";

describe("Reviews Store Actions", () => {

  it("should create initReviewsAction", () => {
    const expectedAction = {
      type: ReviewsActionsEnum.INIT_REVIEWS
    };
    expect(reviewsActions.initReviewsAction()).toEqual(expectedAction);
  });

  it("should create initReviewsSuccessAction", () => {

    const reviews = {
      "id": reviewsMock(1)[0]
    };

    const expectedAction = {
      type: ReviewsActionsEnum.INIT_REVIEWS_SUCCESS,
      payload: reviews
    };
    expect(reviewsActions.initReviewsSuccessAction(reviews)).toEqual(expectedAction);
  });

  it("should create initReviewsFailedAction", () => {
    const expectedAction = {
      type: ReviewsActionsEnum.INIT_REVIEWS_FAILED
    };
    expect(reviewsActions.initReviewsFailedAction()).toEqual(expectedAction);
  });


});