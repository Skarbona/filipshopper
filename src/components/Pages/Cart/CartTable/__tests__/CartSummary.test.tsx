import React from "react";
import { shallow } from "enzyme";

import CartSummary from "../CartSummary";
import { ICartSummaryProps } from "../CartSummary.interface";
import { appInitialState } from "../../../../../store/app/initialState";

describe("<CartSummary /> component", () => {

  const props: ICartSummaryProps = {
    currency: appInitialState.translations.currency,
    total: 0,
    messages: appInitialState.translations.messages,
  };

  it("should render properly", () => {
    const wrapper = shallow(<CartSummary {...props} />);
    expect(wrapper.find("h2")).toHaveLength(1);
  })

});