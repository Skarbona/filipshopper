import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { storeInitialState } from "../../store";
import * as appActions from "../actions";
import { AppActionsEnum } from "../app.enum";
import { productsMock } from "../../../mocks/products";
import { appInitialState } from "../initialState";


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("App Store Reducers", () => {

  let store: any;
  const products = productsMock(2);
  const translations = appInitialState.translations;

  beforeEach(() => {
    store = mockStore(storeInitialState);
  });

  it("should handle INIT_PRODUCT_DATA reducer", () => {

    const expectedActions = [{
      type: AppActionsEnum.INIT_PRODUCT_DATA,
    }];

    store.dispatch(appActions.initProductDataAction());
    const actions = store.getActions();

    expect(actions).toEqual(expectedActions);

  });


  it("should handle INIT_PRODUCT_DATA_SUCCESS reducer", () => {

    const expectedActions = [{
      type: AppActionsEnum.INIT_PRODUCT_DATA_SUCCESS,
      payload: products,
    }];

    store.dispatch(appActions.initProductDataSuccessAction(products));
    const actions = store.getActions();

    expect(actions).toEqual(expectedActions);

  });

  it("should handle INIT_PRODUCT_DATA_FAILED reducer", () => {

    const expectedActions = [{
      type: AppActionsEnum.INIT_PRODUCT_DATA_FAILED,
    }];

    store.dispatch(appActions.initProductDataFailedAction(products));
    const actions = store.getActions();

    expect(actions).toEqual(expectedActions);

  });

  it("should handle INIT_TRANSLATIONS_SUCCESS reducer", () => {

    const expectedActions = [{
      type: AppActionsEnum.INIT_TRANSLATIONS_SUCCESS,
      payload: translations,
    }];

    store.dispatch(appActions.initTranslationsSuccessAction(translations));
    const actions = store.getActions();

    expect(actions).toEqual(expectedActions);

  });

  it("should handle INIT_TRANSLATIONS reducer", () => {

    const expectedActions = [{
      type: AppActionsEnum.INIT_TRANSLATIONS,
    }];

    store.dispatch(appActions.initTranslationsAction());
    const actions = store.getActions();

    expect(actions).toEqual(expectedActions);

  });

  it("should handle INIT_TRANSLATIONS_FALIED reducer", () => {

    const expectedActions = [{
      type: AppActionsEnum.INIT_TRANSLATIONS_FALIED,
    }];

    store.dispatch(appActions.initTranslationsFailedAction());
    const actions = store.getActions();

    expect(actions).toEqual(expectedActions);

  });

});
