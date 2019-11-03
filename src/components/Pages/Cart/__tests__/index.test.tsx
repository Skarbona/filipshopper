import React from "react";
import { shallow } from "enzyme";

import Cart from "../";
import CartTable from "../CartTable";
import PageTitle from "../../../Elements/Title";


describe("<Cart /> component", () => {

  it("should render properly", () => {
    const wrapper = shallow(<Cart />);
    expect(wrapper.find('.cart-page')).toHaveLength(1);
    expect(wrapper.find(PageTitle)).toHaveLength(1);
    expect(wrapper.find(CartTable)).toHaveLength(1);
  })

});