import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CartIcon = ({ itemsNumber }) => {
  return (
    <div className="cart-icon">
      <span className="cart-icon__amount">{itemsNumber}</span>
      <Link to="/cart">
        <i className="material-icons">shopping_cart</i>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ cart }) => {
  return {
    itemsNumber: cart.counter ? cart.counter : 0
  };
};

export default connect(mapStateToProps)(CartIcon);
