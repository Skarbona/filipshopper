import * as appActions from "../actions";
import { AppActionsEnum } from "../app.enum";

describe("App Store Actions", () => {

  it("should create initProductDataAction", () => {
    const expectedAction = {
      type: AppActionsEnum.INIT_PRODUCT_DATA
    };
    expect(appActions.initProductDataAction()).toEqual(expectedAction);
  });

  it("should create initProductDataAction", () => {
    const expectedAction = {
      type: AppActionsEnum.INIT_PRODUCT_DATA_SUCCESS
    };
    expect(appActions.initProductDataSuccessAction()).toEqual(expectedAction);
  });

  it("should create initProductDataFailedAction", () => {
    const expectedAction = {
      type: AppActionsEnum.INIT_PRODUCT_DATA_FAILED
    };
    expect(appActions.initProductDataFailedAction()).toEqual(expectedAction);
  });

  it("should create initTranslationsAction", () => {
    const expectedAction = {
      type: AppActionsEnum.INIT_TRANSLATIONS
    };
    expect(appActions.initTranslationsAction()).toEqual(expectedAction);
  });

  it("should create initTranslationsSuccessAction", () => {
    const expectedAction = {
      type: AppActionsEnum.INIT_TRANSLATIONS_SUCCESS
    };
    expect(appActions.initTranslationsSuccessAction()).toEqual(expectedAction);
  });

  it("should create initTranslationsFailedAction", () => {
    const expectedAction = {
      type: AppActionsEnum.INIT_TRANSLATIONS_FALIED
    };
    expect(appActions.initTranslationsFailedAction()).toEqual(expectedAction);
  });

});