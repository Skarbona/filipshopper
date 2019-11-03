import React from "react";
import { shallow } from "enzyme";

import { ProductListSingleItemWrapper } from "../";
import { IProductListSingleItemProps } from "../ProductListSingleItem.interface";
import { productsMock } from "../../../../../mocks/products";
import { appInitialState } from "../../../../../store/app/initialState";
import Button from "../../../../Elements/Button";

describe("<ProductListSingleItemWrapper /> component", () => {

  const props: IProductListSingleItemProps = {
    product: productsMock(2),
    buttons: appInitialState.translations.buttons,
    currency: appInitialState.translations.currency.short,
    addItemToCart: jest.fn()
  };

  it("should render properly", () => {
    const wrapper = shallow(<ProductListSingleItemWrapper {...props} />);
    expect(wrapper.find(Button)).toHaveLength(2);
    expect(wrapper.find(".product-list__item")).toHaveLength(1);

  });

});