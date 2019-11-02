import axios from "axios";
import * as appActions from "./actions";
import { EpicType } from "../store";


export const initProductData = (): EpicType => async dispatch => {
  dispatch(appActions.initProductDataAction());
  try {
    const response = await axios.get("/database/products.json");
    dispatch(appActions.initProductDataSuccessAction(response.data));

  } catch (e) {
    console.warn('Cannot Fetch Products', e);
    dispatch(appActions.initProductDataFailedAction());
  }
};

export const initTranslations = (): EpicType => async dispatch => {
  dispatch(appActions.initTranslationsAction());
  try {
    const response = await axios.get("/database/translations.json");
    dispatch(appActions.initTranslationsSuccessAction(response.data));
  } catch (e) {
    dispatch(appActions.initTranslationsFailedAction());
  }
};
