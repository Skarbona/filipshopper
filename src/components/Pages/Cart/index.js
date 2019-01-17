import React from "react";

import PageTitle from "../../Elements/Title/PageTitle";
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
