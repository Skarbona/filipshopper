import * as searchEpics from "../../../../store/search/epic";
import { IProductProps } from "../../../../store/cart/cart.types";

export interface ISearchStoreProps {
  products: IProductProps[],
}

export interface ISearchDispatchProps {
  setSearchProducts: typeof searchEpics.setSearchProducts
}

export interface ISearchOwnProps {

}

export type ISearchProps = ISearchStoreProps & ISearchDispatchProps & ISearchOwnProps;