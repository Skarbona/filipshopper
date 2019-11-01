import React, { useState, useCallback } from "react";

import PaymentMethod from "./Methods/index";
import PageTitle from "../../Elements/Title/index";
import Button from "../../Elements/Button/index";
import { IPaymentState, IPaymentProps } from "./Payment.interface";

const methods = [
  { name: "Paypal", color: "blue" },
  { name: "Credit Card", color: "green" },
  { name: "Bank Transfer", color: "orange" }
];

const Payment = (): IPaymentProps => {
  const [state, setState] = useState<IPaymentState>({
    paymentMethod: null,
    buttonActive: false
  });

  const onPaymentClickHandler = (paymentMethod: string) => useCallback(
    () => setState({ paymentMethod, buttonActive: false }), []);

  return (
    <div className="payment-page">
      <PageTitle title="Choose Payment Method"/>
      <div className="row">
        {methods.map(method => (
            <PaymentMethod
              key={method.name}
              color={method.color}
              active={state.paymentMethod === method.name}
              onClick={onPaymentClickHandler}
              name={method.name}
            />
          )
        )}
      </div>
      <div className="row">
        <Button
          text="Pay Now!"
          to="/thankyou"
          className="btn-large red"
          disabled={!state.buttonActive}
        />
      </div>
    </div>
  );
};

export default Payment;
