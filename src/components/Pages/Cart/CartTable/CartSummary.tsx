import React from "react";

import { ICartSummaryProps } from "./CartSummary.interface";

const CartSummary = ({ currency, messages, total }: ICartSummaryProps) => {
  return (
    <React.Fragment>
      <h2>
        {messages.cart.total} : {total}{" "}
        {currency.short}
      </h2>
    </React.Fragment>
  );
};

export default CartSummary;
