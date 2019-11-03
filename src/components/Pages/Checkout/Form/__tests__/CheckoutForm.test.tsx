import React from "react";
import { shallow } from "enzyme";

import { CheckoutFormWrapper } from "../CheckoutForm";

describe("<CheckoutFormWrapper /> component", () => {

  const props = {
    handleSubmit: jest.fn(),
    pristine: false,
    clearCart: jest.fn()
  } as any;

  it("should render properly", () => {
    const wrapper = shallow(<CheckoutFormWrapper { ...props }/>);
    expect(wrapper.find(".row")).toHaveLength(5);
  });

  it("should trigger handleSubmit function on form submit", () => {
    const wrapper = shallow(<CheckoutFormWrapper { ...props }/>);
    const form = wrapper.find('form');
    form.simulate("submit");
    expect(props.handleSubmit).toHaveBeenCalledTimes(1)
  });


});