import React from 'react';

import PaymentMethod from "../../../components/Pages/Payment/Methods/"
import PageTitle from "../../../components/Elements/Title/PageTitle";
import Button from "../../../components/Elements/Button";

const methods = [
{"name": "Paypal", "color": "blue"},
{"name":"Credit Card", "color": "green" },
{"name": "Bank Transfer", "color": "orange"}
];

class Payment extends React.Component {

    state = {
        paymentMethod: null,
        buttonActive : false
    };

    onPaymentClickHandler = paymentMethod => {
        this.setState({ paymentMethod, buttonActive: true })
    };

    render() {
        const { onPaymentClickHandler, state : { paymentMethod, buttonActive } } = this;
        return (
            <div className="payment-page">
                <PageTitle title="Choose Payment Method"/>
                <div className="row">
                { methods.map(method => {
                    return (
                        <PaymentMethod
                            key={method.name}
                            color={method.color}
                            active={paymentMethod === method.name}
                            onClick={onPaymentClickHandler}
                            name={method.name} />
                    )
                })}

                </div>
                <div className="row">
                    <Button text="Pay Now!"
                            to="/thankyou"
                            className="btn-large red"
                            disabled={!buttonActive}
                    />
                </div>
            </div>
        );
    }
}

export default Payment;
