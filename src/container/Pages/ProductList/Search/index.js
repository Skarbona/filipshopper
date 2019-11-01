import React from "react";
import { connect } from "react-redux";
import * as searchEpics from "../../../../store/search/epic";
import { filter } from "lodash";

class Search extends React.Component {
  onSearchChange = e => {
    const { products, setSearchProducts } = this.props;
    const value = e.target.value;
    e.preventDefault();
    const filteredProducts = filter(products, o => o.title.includes(value));

    if (value) {
      setSearchProducts(filteredProducts);
    } else {
      setSearchProducts(null);
    }
  };

  render() {
    const { onSearchChange } = this;
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
  }
}

const mapStateToProps = ({ app }) => {
  return {
    products: app.products
  };
};

const mapDispatchToProps = {
  setSearchProducts: searchEpics.setSearchProducts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
