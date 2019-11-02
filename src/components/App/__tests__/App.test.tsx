import React from "react";
import { shallow } from "enzyme";

import { AppWrapper } from "../App";
import Header from "../../Header/index";
import Pages from "../../Pages/";
import { IAppProps } from "../App.interface";

describe("<App /> component", () => {

  let props: IAppProps;

  beforeEach(() => {
    props = {
      initProductData: jest.fn(),
      initTranslations: jest.fn()
    };
  });

  it("should render childs properly", () => {
    const wrapper = shallow(<AppWrapper {...props}/>);

    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Pages)).toHaveLength(1);

  });

  it("should run init Methods only on first render",  () => {
    const wrapper = shallow(<AppWrapper {...props}/>);

    expect(props.initProductData).toHaveBeenCalledTimes(1);
    expect(props.initTranslations).toHaveBeenCalledTimes(1);
  });

  // TODO: Check if store is updated

});
