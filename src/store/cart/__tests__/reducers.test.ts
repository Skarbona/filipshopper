import * as cartActions from "../actions";
import { productsMock } from "../../../mocks/products";
import { cartInitialState } from "../initialState";
import cartReducer from "../reducers";

describe("Cart Store Reducers", () => {

  const products = productsMock(2);


  it("should return initial state", () => {
    const reducer = cartReducer(undefined, {} as any);
    expect(reducer).toEqual(cartInitialState);
  });


  it("should handle CLEAR_CART reducer", () => {
    const reducer = cartReducer(undefined, cartActions.clearCartAction());

    const expectedState = {
      ...cartInitialState,
      products: {},
      total: 0,
      counter: 0
    };

    expect(reducer).toEqual(expectedState);

  });

  it("should handle REMOVE_ITEM_FROM_CART reducer", () => {
    const storeState = {
      ...cartInitialState,
      products
    };

    const reducer = cartReducer(storeState, cartActions.removeItemFromCartAction(0, 0, 0));

    const newProducts = products;
    delete newProducts[1];

    const expectedState = {
      ...cartInitialState,
      products: newProducts,
      total: 0,
      counter: 0
    };

    expect(reducer).toEqual(expectedState);

  });

  it("should handle DECREASE_ITEM_FROM_CART reducer", () => {

    const storeState = {
      ...cartInitialState,
      products
    };

    const singleProduct = productsMock(1, true)[0];

    const reducer = cartReducer(storeState, cartActions.decreaseItemFromCartAction(singleProduct, 0, 0));


    const expectedState = {
      ...cartInitialState,
      products: {
        ...products,
        [singleProduct.id]: singleProduct
      },
      total: 0,
      counter: 0
    };

    expect(reducer).toEqual(expectedState);

  });

  it("should handle ADD_ITEM_TO_CART reducer", () => {

    const singleProduct = productsMock(1, true)[0];

    const reducer = cartReducer(cartInitialState, cartActions.addItemToCartAction(singleProduct, 0, 0));


    const expectedState = {
      ...cartInitialState,
      products: {
        ...products,
        [singleProduct.id]: singleProduct
      },
      total: 0,
      counter: 0
    };

    expect(reducer).toEqual(expectedState);

  });


});
