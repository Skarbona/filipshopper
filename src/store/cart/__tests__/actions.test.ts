import * as cartActions from "../actions";
import { CartActionsEnum } from "../cart.enum";
import { productsMock } from "../../../mocks/products";

describe("Cart Store Actions", () => {

  const productMock = productsMock(1)[0];

  it("should create addItemToCartAction", () => {
    const expectedAction = {
      type: CartActionsEnum.ADD_ITEM_TO_CART,
      payload: {
        product: productMock,
        total: 1,
        counter: 1
      }
    };
    expect(cartActions.addItemToCartAction(productMock, 1, 1)).toEqual(expectedAction);
  });

  it("should create removeItemFromCartAction", () => {

    const expectedAction = {
      type: CartActionsEnum.REMOVE_ITEM_FROM_CART,
      payload: {
        productID: "1",
        total: 1,
        counter: 1
      }
    };
    expect(cartActions.removeItemFromCartAction("1", 1, 1)).toEqual(expectedAction);
  });

  it("should create decreaseItemFromCartAction", () => {

    const expectedAction = {
      type: CartActionsEnum.DECREASE_ITEM_FROM_CART,
      payload: {
        product: productMock,
        total: 1,
        counter: 1
      }
    };
    expect(cartActions.decreaseItemFromCartAction(productMock, 1, 1)).toEqual(expectedAction);
  });

  it("should create clearCartAction", () => {

    const expectedAction = {
      type: CartActionsEnum.CLEAR_CART
    };
    expect(cartActions.clearCartAction()).toEqual(expectedAction);
  });


});