import { IProductProps } from "../../../store/cart/cart.types";
import { ISearchStore } from "../../../store/search/search.types";

export interface IProductListStoreProps {
  products: IProductProps[],
  searchProducts: ISearchStore,
}

export interface IProductListDispatchProps {

}

export interface IProductListOwnProps {

}

export type IProductListProps = IProductListStoreProps & IProductListDispatchProps & IProductListOwnProps;