import React from "react";
import { shallow } from "enzyme";

import SingleReview from "../SingleReview";
import { reviewsMock } from "../../../../../mocks/reviews";
import { ISingleReviewProps } from "../SingleReview.interface";
import StarReviewGenerator from "../StarReviewGenerator";

describe("<SingleReview /> component", () => {

  const props: ISingleReviewProps = {
    review: reviewsMock(1)[0]
  };

  it("should render properly", () => {
    const wrapper = shallow(<SingleReview { ...props }/>);
    expect(wrapper.find(".collection-item")).toHaveLength(1);
    expect(wrapper.find(StarReviewGenerator)).toHaveLength(5);
  })


});