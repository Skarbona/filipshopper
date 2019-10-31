import React from "react";
import PageTitle from "../../Elements/Title";
import CheckoutForm from "./Form/CheckoutForm";

const Checkout = () => {
  return (
    <div className="checkout-page">
      <PageTitle title="Checkout" />
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
