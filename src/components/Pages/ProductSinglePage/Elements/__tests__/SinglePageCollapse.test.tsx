import React from "react";
import { shallow } from "enzyme";
import M from "materialize-css";

import { SinglePageCollapseWrapper } from "../SinglePageCollapse";
import { ISinglePageCollapseProps } from "../SinglePageCollapse.interface";
import { reviewsMock } from "../../../../../mocks/reviews";
import SingleReview from "../SingleReview";

describe("<SinglePageCollapseWrapper /> component", () => {

  const props: ISinglePageCollapseProps = {
    reviews: [],
    initReviews: jest.fn(),
    extra: "Extra",
    id: "2"
  };

  it("should render properly", () => {
    const wrapper = shallow(<SinglePageCollapseWrapper {...props} />);
    expect(wrapper.find(".collapsible")).toHaveLength(1);
    expect(wrapper.find(SingleReview)).toHaveLength(0);
  });

  it("should call initReviews method", () => {
    const wrapper = shallow(<SinglePageCollapseWrapper {...props} />);
    expect(props.initReviews).toBeCalled();
    const newProps = {
      ...props,
      reviews: reviewsMock(2)
    };
    wrapper.setProps(newProps);
    expect(wrapper.find(SingleReview)).toHaveLength(2);
  });

  it("should set Ref for collapse", () => {
    const wrapper = shallow(<SinglePageCollapseWrapper {...props} />);
    expect(M.Collapsible.init).toHaveBeenCalled();
  });

});