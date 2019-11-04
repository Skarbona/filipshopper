import * as searchActions from "../actions";
import { productsMock } from "../../../mocks/products";
import { searchInitialState } from "../initialState";
import searchReducer from "../reducers";
import { ISearchStore } from "../search.types";

describe("Search Store Reducers", () => {

  const products = productsMock(2);


  it("should return initial state", () => {
    const reducer = searchReducer(undefined, {} as any);
    expect(reducer).toEqual(searchInitialState);
  });


  it("should handle SET_SEARCH_PRODUCTS reducer", () => {
    const reducer = searchReducer(undefined, searchActions.setSearchProductsAction(products));

    const expectedState: ISearchStore = {
      ...searchInitialState,
      products,
    };

    expect(reducer).toEqual(expectedState);

  });

  it("should handle SET_SEARCHING_STATUS reducer", () => {
    const reducer = searchReducer(undefined, searchActions.setSearchingStatusAction(true));

    const expectedState: ISearchStore = {
      ...searchInitialState,
      searching: true,
    };

    expect(reducer).toEqual(expectedState);

  });

});