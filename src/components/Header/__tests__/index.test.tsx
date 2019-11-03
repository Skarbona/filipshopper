import React from "react";
import { shallow } from "enzyme";
import M from "materialize-css";

import Header from "../"

describe("<Header /> component", () => {

  it("should render properly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(".navbar-fixed")).toHaveLength(1)
  });

  it("should set ref for mobile burger", () => {
    const wrapper = shallow(<Header />);
    expect(M.Sidenav.init).toHaveBeenCalled();
  });

});