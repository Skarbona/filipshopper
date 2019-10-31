import React from "react";
import M from "materialize-css";
import { connect } from "react-redux";

import { initReviews } from "../../../../store/actions/reviews";

import SingleReview from "../../../../components/Pages/ProductSinglePage/Elements/SingleReview";

class SinglePageCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.collapse = React.createRef();
  }

  reviewsGeneratorHelper = () => {
    const { reviews } = this.props;
    return reviews.map(review => (
      <SingleReview key={review.name} review={review} />
    ));
  };

  componentDidMount = () => {
    const { collapse } = this;
    const { initReviews } = this.props;

    const elems = collapse.current;
    M.Collapsible.init(elems);

    initReviews();
  };

  render() {
    const { collapse, reviewsGeneratorHelper } = this;
    const { extra } = this.props;
    return (
      <ul className="collapsible" ref={collapse}>
        <li>
          <div className="collapsible-header">
            <i className="material-icons">filter_drama</i>
            Extra Product Informations
          </div>
          <div className="collapsible-body">
            <p>{extra}</p>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <i className="material-icons">star</i>
            Reviews
          </div>
          <div className="collapsible-body">
            <ul className="collection">{reviewsGeneratorHelper()}</ul>
          </div>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: state.reviews[ownProps.id] ? state.reviews[ownProps.id] : []
  };
};

export default connect(
  mapStateToProps,
  { initReviews }
)(SinglePageCollapse);
