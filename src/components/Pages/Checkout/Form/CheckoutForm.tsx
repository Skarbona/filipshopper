import React from "react";
import { connect, MapDispatchToPropsParam } from "react-redux";
import { Field, reduxForm } from "redux-form";

import Button from "../../../Elements/Button";
import * as cartActions from "../../../../store/cart/actions";
import { IStore } from "../../../../store/store.interface";
import { ICartIconDispatchProps } from "../../../Header/CartIcon/CartIcon.interface";
import { CheckFormType } from "./CheckoutForm.interface";

export const CheckoutFormWrapper: CheckFormType = ({ handleSubmit, pristine, clearCart }) => {
  return (
    <div className="row">
      <form onSubmit={handleSubmit} className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <Field name="firstName" component="input" type="text"/>
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field col s6">
            <Field name="lastName" component="input" type="text"/>
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <Field name="street" component="input" type="text"/>
            <label htmlFor="street">Street</label>
          </div>
          <div className="input-field col s6">
            <Field name="city" component="input" type="text"/>
            <label htmlFor="city">City</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <Field name="email" component="input" type="email"/>
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <Button
              text="Pay"
              type="submit"
              disabled={pristine}
              icon="payment"
              onClickButton={clearCart}
              to="/payment"
              className="btn-large blue darken-1"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps: MapDispatchToPropsParam<any, any> = {
  clearCart: cartActions.clearCartAction
};

const CheckoutFormConnect = connect<{}, ICartIconDispatchProps, {}, IStore>(
  null,
  mapDispatchToProps
)(CheckoutFormWrapper);

export default reduxForm({
  form: "checkoutForm"
})(CheckoutFormConnect as any);
