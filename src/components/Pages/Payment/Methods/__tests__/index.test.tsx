import React from "react";
import { shallow } from "enzyme";

import Methods from "../";

describe("<Methods /> component", () => {

  const props = {
    name: "Method Name",
    color: "blue",
    onClick: jest.fn(),
    active: false,
  };

  it("should render properly", () => {
    const wrapper = shallow(<Methods {...props} />);
    expect(wrapper.find(`.${props.color}`)).toHaveLength(1);
  });

  it("should handle click action", () => {
    const wrapper = shallow(<Methods {...props} />);
    const divToClick = wrapper.find(".s12");
    divToClick.simulate("click");
    expect(props.onClick).toBeCalledWith(props.name);
    expect(props.onClick).toBeCalledTimes(1);
  });

});