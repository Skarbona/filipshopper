import React from "react";
import { shallow } from "enzyme";

import ThankYou from "../";
import PageTitle from "../../../Elements/Title";

describe("<ThankYou /> component", () => {

  it("should render properly", () => {
    const wrapper = shallow(<ThankYou/>);
    expect(wrapper.find(".thankyou-page")).toHaveLength(1);
    expect(wrapper.find(PageTitle)).toHaveLength(1);
  });

});