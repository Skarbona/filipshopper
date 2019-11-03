import React from "react";
import { shallow } from "enzyme";

import { CartTableWrapper as CartTable } from "../";
import TableProducts from "../TableProducts";
import CartSummary from "../CartSummary";
import Button from "../../../../Elements/Button";
import { ICartTableProps } from "../CartTable.interface";
import { appInitialState } from "../../../../../store/app/initialState";
import { productsMock } from "../../../../../mocks/products";


describe("<CartTable /> component", () => {
  let props: ICartTableProps;

  beforeEach(() => {
    props = {
      cartTotal: 2,
      cartProducts: productsMock(1),
      translations: appInitialState.translations,
      addItemToCart: jest.fn(),
      removeItemFromCart: jest.fn()
    };
  });

  it("should render properly", () => {
    const wrapper = shallow(<CartTable {...props} />);
    expect(wrapper.find(".responsive-table")).toHaveLength(1);
    expect(wrapper.find(TableProducts)).toHaveLength(1);
    expect(wrapper.find(CartSummary)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);

  });

  it("should render message if cart is empty", () => {

    props.cartTotal = 0;

    const wrapper = shallow(<CartTable {...props} />);

    expect(wrapper.find("h2")).toHaveLength(1);
    expect(wrapper.find(".responsive-table")).toHaveLength(0);
    expect(wrapper.find(TableProducts)).toHaveLength(0);
    expect(wrapper.find(CartSummary)).toHaveLength(0);
    expect(wrapper.find(Button)).toHaveLength(0);

  });

});