import React, { useCallback } from "react";
import { connect, MapDispatchToPropsParam } from "react-redux";

import * as searchEpics from "../../../../store/search/epic";
import { filter } from "lodash";
import { IStore } from "../../../../store/store.interface";
import { ISearchDispatchProps, ISearchProps, ISearchStoreProps } from "./Search.interface";

const Search = ({ products, setSearchProducts }: ISearchProps) => {

  const onSearchChange = useCallback((e) => {
    const value = e.target.value;
    e.preventDefault();
    const filteredProducts = filter(products, o => o.title.includes(value));
    setSearchProducts(value && filteredProducts);
  }, []);

  return (
    <React.Fragment>
      <div className="row">
        <form className="input-field col s12">
          <i className="material-icons prefix">search</i>
          <input
            id="icon_prefix"
            onChange={onSearchChange}
            type="search"
            className="validate"
          />
          <label htmlFor="icon_prefix">Search Products</label>
        </form>
      </div>
    </React.Fragment>
  );
};


const mapStateToProps = ({ app }: IStore): ISearchStoreProps => {
  return {
    products: app.products
  };
};

const mapDispatchToProps: MapDispatchToPropsParam<any, any> = {
  setSearchProducts: searchEpics.setSearchProducts
};

export default connect<ISearchStoreProps, ISearchDispatchProps, {}, IStore>(
  mapStateToProps,
  mapDispatchToProps
)(Search);
