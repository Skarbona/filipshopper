import { applyMiddleware, compose, createStore, AnyAction, Action } from "redux";
import thunk, { ThunkAction, ThunkMiddleware } from "redux-thunk";

import reducers from "./reducer";
import { IStore } from "./store.interface";
import { appInitialState } from "./app/initialState";
import { cartInitialState } from "./cart/initialState";
import { searchInitialState } from "./search/initialState";
import { reviewsInitialState } from "./reviews/initialState";
import { IAppAction } from "./app/app.interface";
import { ICartAction } from "./cart/cart.interface";
import { ISearchAction } from "./search/search.interface";
import { IReviewsAction } from "./reviews/reviews.interface";

const storeInitialState: IStore = {
  app: appInitialState,
  cart: cartInitialState,
  search: searchInitialState,
  reviews: reviewsInitialState,
  form: {}
};

export type EpicType = ThunkAction<void, IStore, any, Action<string>>
type storeActions = IAppAction | ICartAction | ISearchAction | IReviewsAction;


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore<IStore, storeActions, null, AnyAction>(reducers, storeInitialState, composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<IStore, storeActions>)));