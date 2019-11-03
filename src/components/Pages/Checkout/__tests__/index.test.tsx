import React from "react";
import { shallow } from "enzyme";

import Checkout from "../";
import PageTitle from "../../../Elements/Title";
import CheckoutForm from "../Form/CheckoutForm";

describe("<Checkout /> component", () => {

  it("should render properly", () => {
    const wrapper = shallow(<Checkout />);
    expect(wrapper.find(PageTitle)).toHaveLength(1);
    expect(wrapper.find(CheckoutForm)).toHaveLength(1);
  })

});