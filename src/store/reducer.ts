import { combineReducers, Reducer } from "redux";
import { reducer as formReducer } from "redux-form";

import { IStore } from './store.interface'
import app from "./app/reducers";
import cart from "./cart/reducers";
import search from "./search/reducers";
import reviews from "./reviews/reducers";

const reducers: Reducer<IStore> = combineReducers<IStore>({
  app,
  cart,
  search,
  reviews,
  form: formReducer
});

export default reducers;
