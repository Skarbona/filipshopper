import { shallow } from "enzyme";
import { Link } from "react-router-dom";
import React from "react";

import Button from "../";
import { IButtonProps } from "../Button.interface";

describe("<Button /> component", () => {

  let props: IButtonProps;

  beforeEach(() => {
    props = {
      text: "Button",
      icon: "",
      to: "",
      className: "",
      type: "",
      disabled: false
    };
  });

  it("should render component properly", () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find(".material-icons")).toHaveLength(0);
  });

  it("should render icon if provided", () => {
    props.icon = "icon";
    const wrapper = shallow(<Button {...props} />);

    expect(wrapper.find(".material-icons")).toHaveLength(1);
  });

});
