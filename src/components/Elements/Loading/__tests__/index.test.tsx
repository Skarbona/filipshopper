import React from "react";
import { shallow } from "enzyme";

import Loading from "../";

describe("<Loading /> component", () => {

  it("should render properly", () => {
      const wrapper = shallow(<Loading />);
      expect(wrapper.find('.circle')).toHaveLength(12);
  });

});