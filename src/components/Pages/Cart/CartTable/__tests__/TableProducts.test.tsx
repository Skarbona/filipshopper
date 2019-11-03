import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";

import TableProducts from "../TableProducts";
import { productsMock } from "../../../../../mocks/products";
import { appInitialState } from "../../../../../store/app/initialState";
import { ITableProducts } from "../TableProducts.interface";
import Button from "../../../../Elements/Button";


describe("<TableProducts /> component", () => {

  const props: ITableProducts = {
    products: productsMock(2),
    currency: appInitialState.translations.currency,
    addItemToCart: jest.fn(),
    removeItemFromCart: jest.fn(),
  };

  it("should render properly", () => {
    const wrapper = shallow(<TableProducts { ...props} />);
    expect(wrapper.find(Button)).toHaveLength(4);
    expect(wrapper.find(Link)).toHaveLength(4);
  })

});