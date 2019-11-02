import React from "react";

import { ICheckoutProps } from "./Checkout.interface";
import PageTitle from "../../Elements/Title";
import CheckoutForm from "./Form/CheckoutForm";

const Checkout: React.FC<ICheckoutProps> = () => {
  return (
    <div className="checkout-page">
      <PageTitle title="Checkout"/>
      <CheckoutForm/>
    </div>
  );
};

export default Checkout;
