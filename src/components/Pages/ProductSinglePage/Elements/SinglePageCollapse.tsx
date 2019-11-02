import React, { useRef, useEffect } from "react";
import M from "materialize-css";
import { connect, MapDispatchToPropsParam } from "react-redux";

import * as reviewsEpics from "../../../../store/reviews/epic";

import SingleReview from "./SingleReview";
import { IStore } from "../../../../store/store.interface";
import {
  ISinglePageCollapseProps as IProps,
  ISinglePageCollapseStoreProps as IStoreProps,
  ISinglePageCollapseDispatchProps as IDispatchProps,
  ISinglePageCollapseOwnProps as IOwnProps,
} from "./SinglePageCollapse.interface";

const SinglePageCollapse = ({ reviews, initReviews, extra }: IProps) => {

  const collapse = useRef<HTMLUListElement>(null);

  const reviewsGeneratorHelper = () => reviews && reviews.map(review => (
    <SingleReview key={review.name} review={review}/>
  ));

  useEffect(() => {
    initReviews();
  }, []);

  useEffect(() => {
    const elems = collapse.current;
    if (elems)  M.Collapsible.init(elems);
  });


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
};

const mapStateToProps = ({ reviews }: IStore, ownProps: IOwnProps): IStoreProps => {
  return {
    reviews: reviews.reviews[ownProps.id]
  };
};

const mapDispatchToProps: MapDispatchToPropsParam<any, any> = {
  initReviews: reviewsEpics.initReviews
};

export default connect<IStoreProps, IDispatchProps, IOwnProps, IStore>(
  mapStateToProps,
  mapDispatchToProps
)(SinglePageCollapse);
