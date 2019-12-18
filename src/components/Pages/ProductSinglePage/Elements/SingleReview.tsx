import React from "react";

import StarReviewGenerator from "./StarReviewGenerator";
import { StarsEnum } from "./stars.enum";
import { ISingleReviewProps } from "./SingleReview.interface";

const amountStarGenerator = (number: number, type: StarsEnum) => {
  let arrayHandler = [];

  for (let i = 0; i < number; i++) {
    arrayHandler.push(
      <StarReviewGenerator type={type} key={i + Math.random()}/>
    );
  }

  return arrayHandler;
};

const SingleReview: React.FC<ISingleReviewProps> = ({ review }) => (
  <li className="collection-item avatar">
    <img src="https://via.placeholder.com/150/" alt="" className="circle"/>
    <span className="title">{review.name}</span>
    <p> {review.opinion}</p>
    <span className="secondary-content">
        {amountStarGenerator(review.stars, StarsEnum.full)}
      {amountStarGenerator(5 - review.stars, StarsEnum.empty)}
      </span>
  </li>
);


export default SingleReview;
