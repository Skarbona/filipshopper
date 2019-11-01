import React from "react";
import { connect } from "react-redux";
import { filter } from "lodash";

import MainContent from "./Elements/MainContent";
import SinglePageCollapse from "./Elements/SinglePageCollapse.js";
import * as cartEpics from "../../../store/cart/epic";

const ProductSinglePage = ({ product, buttons, addItemToCart, currency }) => {
  if (product) {
    return (
      <div className="product-single-page">
        <div className="row">
          <MainContent
            product={product}
            addItemToCart={addItemToCart}
            buttons={buttons}
            currency={currency}
          />
        </div>
        <div className="row">
          <SinglePageCollapse extra={product.extra} id={product.id} />
        </div>
      </div>
    );
  } else {
    return (
      <h2>
        Go to Home Page and Refresh the Page. This "error" will be handle in the
        next step
      </h2>
    );
  }
};

const mapStateToProps = ({ app }, ownProps) => {
  let product = null;
  let singleProduct = null;
  const translations = app.translations;
  if (app) {
    singleProduct = filter(app.products, o => o.id === ownProps.match.params.id);
  }

  if (singleProduct) {
    product = singleProduct[0];
  }
  return {
    buttons: translations && translations.buttons,
    currency: translations.currency && translations.currency.short,
    product,
  };
};

const mapDispatchToProps = {
  addItemToCart: cartEpics.addItemToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductSinglePage);
