import * as appActions from "../actions";
import { productsMock } from "../../../mocks/products";
import { appInitialState } from "../initialState";
import appReducer from "../reducers";

describe("App Store Reducers", () => {

  const products = productsMock(2);
  const translations = appInitialState.translations;
  translations.buttons.seeMore = "See More";

  beforeEach(() => {

  });

  it("should return initial state", () => {
    const reducer =  appReducer(undefined, {} as any);
    expect(reducer).toEqual(appInitialState);
  });

  it("should handle INIT_PRODUCT_DATA reducer", () => {
    const reducer =  appReducer(undefined, appActions.initProductDataAction());
    expect(reducer).toEqual(appInitialState);
  });


  it("should handle INIT_PRODUCT_DATA_SUCCESS reducer", () => {
    const reducer =  appReducer(undefined, appActions.initProductDataSuccessAction(products));

    const expectedState = {
      ...appInitialState,
      products,
      error: false
    };

    expect(reducer).toEqual(expectedState);

  });

  it("should handle INIT_PRODUCT_DATA_FAILED reducer", () => {
    const reducer =  appReducer(undefined, appActions.initProductDataFailedAction());

    const expectedState = {
      ...appInitialState,
      error: true
    };

    expect(reducer).toEqual(expectedState);

  });

  it("should handle INIT_TRANSLATIONS_SUCCESS reducer", () => {
    const reducer =  appReducer(undefined, appActions.initTranslationsSuccessAction(translations));

    const expectedState = {
      ...appInitialState,
      translations,
      error: false
    };

    expect(reducer).toEqual(expectedState);

  });

  it("should handle INIT_TRANSLATIONS reducer", () => {
    const reducer =  appReducer(undefined, appActions.initTranslationsAction());

    expect(reducer).toEqual(appInitialState);

  });

  it("should handle INIT_TRANSLATIONS_FAILED reducer", () => {
    const reducer =  appReducer(undefined, appActions.initTranslationsFailedAction());

    const expectedState = {
      ...appInitialState,
      error: true
    };

    expect(reducer).toEqual(expectedState);

  });

});
