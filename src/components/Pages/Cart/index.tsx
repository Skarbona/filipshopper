import React from "react";

import PageTitle from "../../Elements/Title";
import CartTable from "./CartTable/";
import { ICartProps } from "./Cart.interface";

const Cart = (): ICartProps => (
  <div className="cart-page">
    <PageTitle title="Your Cart"/>
    <CartTable/>
  </div>
);

export default Cart;
