import React from "react";
import { connect } from "react-redux";
import { setSearchProducts } from "../../../../store/actions/search";
import _ from "lodash";

class Search extends React.Component {
  onSearchChange = e => {
    const { products, setSearchProducts } = this.props;
    e.preventDefault();
    let filteredProducts = _.filter(products, function(o) {
      return o.title.includes(e.target.value);
    });

    if (e.target.value) {
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
              onChange={e => onSearchChange(e)}
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

const mapStateToProps = state => {
  return {
    products: state.init.products
  };
};

export default connect(
  mapStateToProps,
  { setSearchProducts }
)(Search);
