import React from "react";
import { IStarViewGeneratorProps } from "./StarReviewGenerator.interface";
import { StarsEnum } from "./stars.enum";

const StarReviewGenerator = ({ type }: IStarViewGeneratorProps) => {
    return type === StarsEnum.full ?
      <i className="material-icons">star</i> :
      <i className="material-icons">star_border</i>;
  };


export default StarReviewGenerator;
