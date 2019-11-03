import React from "react";
import { shallow } from "enzyme";

import { SearchWrapper } from "../";
import { productsMock } from "../../../../../mocks/products";
import { ISearchProps } from "../Search.interface";

describe("<SearchWrapper /> component", () => {

  const props: ISearchProps = {
    products: productsMock(2),
    setSearchProducts: jest.fn()
  };

  const e = {
    preventDefault: () => {},
    target: {
      value: "God of War"
    }
  };

  it("should render properly", () => {
    const wrapper = shallow(<SearchWrapper {...props} />);
    expect(wrapper.find(".row")).toHaveLength(1);
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper.find("form")).toHaveLength(1);
  });

  it("should trigger setSearchProducts on input change", () => {
    const wrapper = shallow(<SearchWrapper {...props} />);
    const input = wrapper.find("input");
    input.simulate("change", { ...e });
    expect(props.setSearchProducts).toBeCalledTimes(1);
  });


});