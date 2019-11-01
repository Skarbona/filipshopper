import * as cartActions from "../../../../store/cart/actions";
import { InjectedFormProps } from "redux-form";
import React from "react";

export interface ICheckoutFormStoreProps { }

export interface ICheckoutFormDispatchProps {
  clearCart: typeof cartActions.clearCartAction
}

export interface ICheckoutFormOwnProps { }

export interface IReduxFormData {
  handleSubmit(): void,
  pristine: boolean,
}

export type CheckFormType = React.FunctionComponent<ICheckoutFormProps & InjectedFormProps<IReduxFormData>>

export type ICheckoutFormProps =
  ICheckoutFormStoreProps &
  ICheckoutFormDispatchProps &
  ICheckoutFormOwnProps;