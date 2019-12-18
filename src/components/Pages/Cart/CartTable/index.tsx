import React from "react";
import { connect, MapDispatchToPropsParam } from "react-redux";

import TableTh from "./TableTh";
import TableProducts from "./TableProducts";
import Button from "../../../Elements/Button";
import CartSummary from "./CartSummary";
import * as cartEpics from "../../../../store/cart/epic";
import {
  ICartTableDispatchProps,
  ICartTableProps,
  ICartTableStoreProps,
  ICartTableOwnProps
} from "./CartTable.interface";
import { IStore } from "../../../../store/store.interface";

export const CartTableWrapper: React.FC<ICartTableProps> = (
  {
    cartTotal,
    cartProducts,
    translations,
    addItemToCart,
    removeItemFromCart
  }
) => {
  const { messages, cartTitles, currency } = translations;

  if (!cartTotal) return <h2> {messages.cart.emptyCart} </h2>;


  return (
    <React.Fragment>
      <table className="striped responsive-table">
        <tbody>
        <TableTh headers={cartTitles}/>
        <TableProducts
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
          products={cartProducts}
          currency={currency}
        />
        </tbody>
      </table>
      <CartSummary
        currency={currency}
        messages={messages}
        total={cartTotal}
      />
      <Button
        to="/checkout"
        className="btn-large blue darken-3"
        text="Go Checkout"
      />
    </React.Fragment>
  );
};

const mapStateToProps = ({ cart, app }: IStore): ICartTableStoreProps => {
  return {
    cartProducts: cart.products,
    cartTotal: cart.total,
    translations: app.translations
  };
};

const mapDispatchToProps: MapDispatchToPropsParam<any, any> = {
  addItemToCart: cartEpics.addItemToCart,
  removeItemFromCart: cartEpics.removeItem
};

export default connect<ICartTableStoreProps, ICartTableDispatchProps, ICartTableOwnProps, IStore>(
  mapStateToProps,
  mapDispatchToProps
)(CartTableWrapper);
