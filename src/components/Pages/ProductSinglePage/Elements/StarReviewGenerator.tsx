import React from "react";
import { IStarViewGeneratorProps } from "./StarReviewGenerator.interface";
import { StarsEnum } from "./stars.enum";

const StarReviewGenerator: React.FC<IStarViewGeneratorProps> = ({ type }) => {
    return type === StarsEnum.full ?
      <i className="material-icons icon-star">star</i> :
      <i className="material-icons icon-star-border">star_border</i>;
  };


export default StarReviewGenerator;
