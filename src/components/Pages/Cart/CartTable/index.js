import React from "react";
import { connect } from "react-redux";

import TableTh from "./TableTh";
import TableProducts from "./TableProducts";
import Button from "../../../Elements/Button";
import CartSummary from "./CartSummary";
import * as cartEpics from "../../../../store/cart/epic";

const CartTable = (
  {
    cartTotal,
    cartProducts,
    translations,
    addItemToCart,
    removeItemFromCart
  }
) => {
  if (cartTotal > 0) {
    return (
      <React.Fragment>
        <table className="striped responsive-table">
          <tbody>
          <TableTh titles={translations}/>
          <TableProducts
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
            products={cartProducts.products}
            translations={translations}
          />
          </tbody>
        </table>
        <CartSummary translations={translations} total={cartTotal}/>
        <Button
          to="/checkout"
          className="btn-large blue darken-3"
          text="Go Checkout"
        />
      </React.Fragment>
    );
  } else {
    return (
      <h2>
        {!translations ? "Loading..." : translations.messages.cart.emptyCart}
      </h2>
    );
  }
};

const mapStateToProps = ({ cart, app: { translations } }) => {
  return {
    cartProducts: cart,
    cartTotal: cart.total,
    translations
  };
};

const mapDispatchToProps = {
  addItemToCart: cartEpics.addItemToCart,
  removeItemFromCart: cartEpics.removeItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartTable);
