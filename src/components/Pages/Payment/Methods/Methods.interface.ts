import Payment from "../index"

export interface IMethodsProps {
  name: string,
  color: string,
  active: boolean,
  onClick: typeof Payment.prototype.cartProducts

}