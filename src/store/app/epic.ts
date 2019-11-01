import axios from "axios";
import * as appActions from "./actions";
import { ThunkAction } from "redux-thunk";
import { IStore } from "../store.interface";
import { Action } from "redux";

export const initProductData = (): ThunkAction<void, IStore, null, Action<string>> => async dispatch => {
  dispatch(appActions.initProductDataAction());
  try {
    const response = await axios.get("./database/products.json");
    dispatch(appActions.initProductDataSuccessAction(response.data));

  } catch (e) {
    console.warn('Cannot Fetch Products', e);
    dispatch(appActions.initProductDataFailedAction());
  }
};

export const initTranslations = (): ThunkAction<void, IStore, null, Action<string>> => async dispatch => {
  dispatch(appActions.initTranslationsAction());
  try {
    const response = await axios.get("./database/translations.json");
    dispatch(appActions.initTranslationsSuccessAction(response.data));
  } catch (e) {
    dispatch(appActions.initTranslationsFailedAction());
  }
};
