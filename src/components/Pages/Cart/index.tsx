import React from "react";

import PageTitle from "../../Elements/Title";
import CartTable from "./CartTable/";

const Cart = () => {
  return (
    <div className="cart-page">
      <PageTitle title="Your Cart" />
      <CartTable />
    </div>
  );
};

export default Cart;
