import React from "react";
import { shallow } from "enzyme";
import { Route, Switch, Redirect } from "react-router-dom";

import Pages from "../";

describe("<Pages /> component", () => {

  it("should render properly", () => {
    const wrapper = shallow(<Pages/>);
    expect(wrapper.find(".container")).toHaveLength(1);
    expect(wrapper.find(Route)).toHaveLength(6);
    expect(wrapper.find(Redirect)).toHaveLength(1);
    expect(wrapper.find(Switch)).toHaveLength(1);
  });

});