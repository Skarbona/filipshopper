import React from "react";

import StarReviewGenerator from "./StarReviewGenerator";

const amountStarGenerator = (number, type) => {
  let arrayHandler = [];
  for (let i = 0; i < number; i++) {
    arrayHandler.push(
      <StarReviewGenerator type={type} key={i + Math.random()} />
    );
  }
  return arrayHandler;
};

const SingleReview = ({ review }) => {
  if (!review) return null;

  return (
    <li className="collection-item avatar">
      <img src="https://via.placeholder.com/150/" alt="" className="circle" />
      <span className="title">{review.name}</span>
      <p> {review.opinion}</p>
      <span className="secondary-content">
        {amountStarGenerator(review.stars, "full")}
        {amountStarGenerator(5 - review.stars, "empty")}
      </span>
    </li>
  );
};

export default SingleReview;
