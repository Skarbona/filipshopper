import React from "react";
import { shallow } from "enzyme";

import { ProductListWrapper } from "../";
import { IProductListProps } from "../ProductList.interface";
import { productsMock } from "../../../../mocks/products";
import ProductListSingleItem from "../ProductListSingleItem";


describe("<ProductListWrapper /> component", () => {

  const products = productsMock(3, true);
  const searchProducts = productsMock(2, true);

  const props: IProductListProps = {
    products,
    searchProducts: {
      products: searchProducts,
      searching: false,
    }
  };

  it("should render properly", () => {
    const wrapper = shallow(<ProductListWrapper {...props} />);
    expect(wrapper.find(".product-list")).toHaveLength(1);
    expect(wrapper.find(ProductListSingleItem)).toHaveLength(3);
  });

  it("should display search results", () => {
    props.searchProducts.searching = true;
    const wrapper = shallow(<ProductListWrapper {...props} />);
    expect(wrapper.find(ProductListSingleItem)).toHaveLength(2);
  })

});