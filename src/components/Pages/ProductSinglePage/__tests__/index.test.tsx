import React from "react";
import { shallow } from "enzyme";

import { ProductSinglePageWrapper } from "../";
import { IProductSinglePageProps } from "../ProductSinglePage.interface";
import { productsMock } from "../../../../mocks/products";
import { appInitialState } from "../../../../store/app/initialState";
import SinglePageCollapse from "../Elements/SinglePageCollapse";
import MainContent from "../Elements/MainContent";

describe("<ProductSinglePageWrapper /> component", () => {

  const props: IProductSinglePageProps = {
    product: productsMock(1, true)[0],
    buttons: appInitialState.translations.buttons,
    addItemToCart: jest.fn(),
    currency: appInitialState.translations.currency.short,
  } as any;

  it("should render properly", () => {
    const wrapper = shallow(<ProductSinglePageWrapper { ...props } />);
    expect(wrapper.find(".product-single-page")).toHaveLength(1);
    expect(wrapper.find(SinglePageCollapse)).toHaveLength(1);
    expect(wrapper.find(MainContent)).toHaveLength(1);
  });

  it("should show loading bar", () => {
    props.product = null as any;
    const wrapper = shallow(<ProductSinglePageWrapper { ...props } />);
    expect(wrapper.find(".product-single-page")).toHaveLength(0);
    expect(wrapper.find(SinglePageCollapse)).toHaveLength(0);
    expect(wrapper.find(MainContent)).toHaveLength(0);
  })

});