import { Reducer } from "redux";

import { searchInitialState } from "./initialState";
import { ISearchStore } from "./search.types";
import { SearchActionsEnum } from "./search.enum";
import { ISearchAction } from "./search.interface";


const reducer: Reducer<ISearchStore, ISearchAction> = (state = searchInitialState, action: ISearchAction) => {

  switch (action.type) {
    case SearchActionsEnum.SET_SEARCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case SearchActionsEnum.SET_SEARCHING_STATUS:
      return {
        ...state,
        searching: action.payload
      };
    default:
      return state;
  }
};

export default reducer;