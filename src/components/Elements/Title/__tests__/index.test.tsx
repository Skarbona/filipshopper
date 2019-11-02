import React from "react";
import { shallow } from "enzyme";

import TitleProps from "../"

describe("<TitleProps /> component", () => {

  const props = {
    title: ""
  };

  it("should render component properly", () => {
    const wrapper = shallow(<TitleProps {...props}/>);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

});
