import React from "react";
import { shallow } from "enzyme";

import { CartIconWrapper } from "../";
import { ICartIconProps } from "../CartIcon.interface";

describe("<CartIcon /> component", () => {

  const props: ICartIconProps = {
    itemsNumber: 2
  };

  it("should render properly", () => {
    const wrapper = shallow(<CartIconWrapper {...props} />);
    expect(wrapper.find(".cart-icon")).toHaveLength(1);
  });

});