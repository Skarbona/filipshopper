import React from "react";

import { ICartSummaryProps } from "./CartSummary.interface";

const CartSummary: React.FC<ICartSummaryProps> = ({ currency, messages, total }) => (
  <h2>
    {messages.cart.total} : {total}{" "}
    {currency.short}
  </h2>
);


export default CartSummary;
