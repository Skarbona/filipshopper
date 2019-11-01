import React from "react";
import { connect } from "react-redux";

import Search from "./Search/";
import ProductListSingleItem from "./ProductListSingleItem";

const ProductList = ({ products, searchProducts }) => {
  if (!products) return null;
  if (searchProducts.searching) products = searchProducts.products;
  return (
    <React.Fragment>
      <div className="product-list">
        <br />
        <Search />
        <div className="row flex">
          {products.map(product => (
            <ProductListSingleItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ app, search }) => {
  return {
    products: app.products,
    searchProducts: search
  };
};

export default connect(mapStateToProps)(ProductList);
