import React from "react";
import { shallow } from "enzyme";

import MainContent from "../MainContent";
import { IMainContentProps } from "../MainContent.interface";
import { appInitialState } from "../../../../../store/app/initialState";
import { productsMock } from "../../../../../mocks/products";
import Button from "../../../../Elements/Button";

describe("<MainContent /> component", () => {

  const props: IMainContentProps = {
    product: productsMock(1, true)[0],
    addItemToCart: jest.fn(),
    buttons: appInitialState.translations.buttons,
    currency: appInitialState.translations.currency.short
  };

  it("should render properly", () => {
    const wrapper = shallow(<MainContent {...props} />);
    expect(wrapper.find(".product-single-page__left")).toHaveLength(1);
    expect(wrapper.find(".product-single-page__right")).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

});