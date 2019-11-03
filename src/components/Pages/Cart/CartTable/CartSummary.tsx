import React from "react";

import { ICartSummaryProps } from "./CartSummary.interface";

const CartSummary = ({ currency, messages, total }: ICartSummaryProps) => (
  <h2>
    {messages.cart.total} : {total}{" "}
    {currency.short}
  </h2>
);


export default CartSummary;
