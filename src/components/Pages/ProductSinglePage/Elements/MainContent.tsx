import React from "react";
import Button from "../../../Elements/Button";
import { IMainContentProps } from "./MainContent.interface";

const MainContent = ({ product, addItemToCart, buttons, currency }: IMainContentProps) => {

  const { id, image, price, title } = product;

  return (
    <React.Fragment>
      <div className="col xl6 l6 m6 s12 product-single-page__left">
        <img src={image} alt={title}/>
      </div>
      <div className="col xl6 l6 m6 s12 product-single-page__right">
        <h1>{title}</h1>
        <h2>
          {price} {currency}
        </h2>
        <div className="product-single-page__right__buttons">
          <Button
            text={buttons ? buttons.addToCart : "Loading..."}
            to={`/product/${id}`}
            className="btn-large green darken-1"
            icon="add"
            onClickButton={() => addItemToCart(product)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainContent;
