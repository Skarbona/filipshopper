import React from "react";

const CartSummary = ({ translations, total }) => {
  return (
    <React.Fragment>
      <h2>
        {translations.messages.cart.total} : {total}{" "}
        {translations.currency.short}
      </h2>
    </React.Fragment>
  );
};

export default CartSummary;
