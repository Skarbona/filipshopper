import * as reviewsActions from "../actions";
import { productsMock } from "../../../mocks/products";
import { reviewsInitialState } from "../initialState";
import reviewsReducer from "../reducers";
import { reviewsMock } from "../../../mocks/reviews";

describe("Reviews Store Reducers", () => {

  const products = productsMock(2);


  it("should return initial state", () => {
    const reducer = reviewsReducer(undefined, {} as any);
    expect(reducer).toEqual(reviewsInitialState);
  });

  it("should return INIT_REVIEWS reducer", () => {
    const reducer = reviewsReducer(undefined, reviewsActions.initReviewsAction());
    expect(reducer).toEqual(reviewsInitialState);
  });


  it("should handle INIT_REVIEWS_FAILED reducer", () => {
    const reducer = reviewsReducer(undefined, reviewsActions.initReviewsFailedAction());

    const expectedState = {
      ...reviewsInitialState,
      error: true
    };

    expect(reducer).toEqual(expectedState);

  });

  it("should handle INIT_REVIEWS_SUCCESS reducer", () => {
    const reviews = reviewsMock(3);

    const reducer = reviewsReducer(undefined, reviewsActions.initReviewsSuccessAction(reviews));

    const expectedState = {
      ...reviewsInitialState,
      reviews
    };

    expect(reducer).toEqual(expectedState);

  });

});