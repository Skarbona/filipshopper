import { appInitialState } from "./initialState";
import { AppActionsEnum } from "./app.enum";
import { IAppAction } from "./app.interface";
import { IAppStore } from "./app.types";
import { Reducer } from "redux";

const reducer: Reducer<IAppStore, IAppAction> = (state = appInitialState, action: IAppAction) => {

  switch (action.type) {

    case AppActionsEnum.INIT_PRODUCT_DATA:
      return state;

    case AppActionsEnum.INIT_PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        products: action.payload,
        error: false
      };

    case AppActionsEnum.INIT_PRODUCT_DATA_FAILED:
      return {
        ...state,
        error: true
      };

    case AppActionsEnum.INIT_TRANSLATIONS:
      return state;

    case AppActionsEnum.INIT_TRANSLATIONS_SUCCESS:
      return {
        ...state,
        translations: action.payload,
        error: false
      };

    case AppActionsEnum.INIT_TRANSLATIONS_FALIED:
      return {
        ...state,
        error: true
      };

    default:
      return state;
  }
};

export default reducer;
