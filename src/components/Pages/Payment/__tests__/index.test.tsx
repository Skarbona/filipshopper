import React from "react";
import { shallow } from "enzyme";

import Payment from "../";
import PaymentMethod from "../Methods";

describe("<Payment /> component", () => {

  it("should render properly", () => {
    const wrapper = shallow(<Payment />);
    expect(wrapper.find(PaymentMethod)).toHaveLength(3)
  })

});