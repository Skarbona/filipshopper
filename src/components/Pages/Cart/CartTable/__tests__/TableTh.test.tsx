import React from "react";
import { shallow } from "enzyme";

import TableTh from "../TableTh";
import { ITableThProps } from "../TableTh.interface";

describe("<TableTh /> component", () => {

  const props: ITableThProps = {
    headers: ["menu-item"]
  };

  it("should render properly", () => {
    const wrapper = shallow(<TableTh { ...props } />);
    expect(wrapper.find("th")).toHaveLength(1)
  })

});