import * as searchActions from "../actions";
import { SearchActionsEnum } from "../search.enum";
import { productsMock } from "../../../mocks/products";

describe("Search Store Actions", () => {

  it("should create setSearchProductsAction", () => {
    const productMocks = productsMock(2);
    const expectedAction = {
      type: SearchActionsEnum.SET_SEARCH_PRODUCTS,
      payload: productMocks
    };

    expect(searchActions.setSearchProductsAction(productMocks)).toEqual(expectedAction);
  });

  it("should create setSearchingStatusAction", () => {
    const expectedAction = {
      type: SearchActionsEnum.SET_SEARCHING_STATUS,
      payload: true
    };

    expect(searchActions.setSearchingStatusAction(true)).toEqual(expectedAction);
  });

});