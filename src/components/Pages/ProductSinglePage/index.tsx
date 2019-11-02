import React from "react";
import { connect, MapDispatchToPropsParam } from "react-redux";
import { filter } from "lodash";

import MainContent from "./Elements/MainContent";
import SinglePageCollapse from "./Elements/SinglePageCollapse.js";
import * as cartEpics from "../../../store/cart/epic";
import { IStore } from "../../../store/store.interface";
import {
  IProductSinglePageProps as IProps,
  IProductSinglePageDispatchProps as IDispatchProps,
  IProductSinglePageOwnProps as IOwnProps,
  IProductSinglePageStoreProps as IStoreProps,
} from "./ProductSinglePage.interface";

const ProductSinglePage = ({ product, buttons, addItemToCart, currency }: IProps) => {
  if (!product) {
    return (
      <h2>
        Go to Home Page and Refresh the Page. This "error" will be handle in the
        next step
      </h2>
    );
  } // TODO: Take care about this part!!!!!!!!!!!!!!!!!!, useEffect or nice App wrapping

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
        <SinglePageCollapse extra={product.extra} id={product.id}/>
      </div>
    </div>
  );
};

const mapStateToProps = ({ app }: IStore, ownProps: IOwnProps) => {

  const singleProduct = filter(app.products, o => o.id === ownProps.match.params.id);
  const product = singleProduct && singleProduct[0];

  return {
    buttons: app.translations.buttons,
    currency: app.translations.currency.short,
    product
  };
};

const mapDispatchToProps: MapDispatchToPropsParam<any, any> = {
  addItemToCart: cartEpics.addItemToCart
};

export default connect <IStoreProps, IDispatchProps, IOwnProps, IStore> (
  mapStateToProps,
    mapDispatchToProps
)(ProductSinglePage);
