import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { ICartIconProps, ICartIconStoreProps } from "./CartIcon.interface";
import { IStore } from "../../../store/store.interface";

const CartIcon = ({ itemsNumber }: ICartIconProps) => (
  <div className="cart-icon">
    <span className="cart-icon__amount">{itemsNumber}</span>
    <Link to="/cart">
      <i className="material-icons">shopping_cart</i>
    </Link>
  </div>
);

const mapStateToProps = ({ cart }: IStore) => {
  return {
    itemsNumber: cart.counter
  };
};

export default connect<ICartIconStoreProps, {}, {}, IStore>(mapStateToProps)(CartIcon);
