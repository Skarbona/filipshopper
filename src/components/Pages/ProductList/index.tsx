import React from "react";
import { connect } from "react-redux";

import Search from "./Search/index";
import ProductListSingleItem from "./ProductListSingleItem/";
import { IProductListProps, IProductListStoreProps } from "./ProductList.interface";
import { IStore } from "../../../store/store.interface";

export const ProductListWrapper = ({ products, searchProducts }: IProductListProps) => {
  const productsToMap = searchProducts.searching ? searchProducts.products : products;

  return (
    <React.Fragment>
      <div className="product-list">
        <br/>
        <Search/>
        <div className="row flex">
          {productsToMap.map(product => (
            <ProductListSingleItem key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ app, search }: IStore): IProductListStoreProps => {
  return {
    products: app.products,
    searchProducts: search
  };
};

export default connect<IProductListStoreProps, {}, {}, IStore>(mapStateToProps)(ProductListWrapper);
