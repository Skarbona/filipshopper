import React from "react";
import { shallow } from "enzyme";

import StarReviewGenerator from "../StarReviewGenerator";
import { StarsEnum } from "../stars.enum";

describe("<StarReviewGenerator /> component", () => {

  it("should render properly for Full Stars", () => {
    const props = { type: StarsEnum.full };
    const wrapper = shallow(<StarReviewGenerator {...props}/>);
    expect(wrapper.find(".icon-star")).toHaveLength(1);
  });

  it("should render properly for Empty Stars", () => {
    const props = { type: StarsEnum.empty };
    const wrapper = shallow(<StarReviewGenerator {...props}/>);
    expect(wrapper.find(".icon-star-border")).toHaveLength(1);
  });

});