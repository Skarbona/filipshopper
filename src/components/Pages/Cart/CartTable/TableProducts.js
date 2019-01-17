import React from "react";
import Button from "../../../Elements/Button";
import { Link } from "react-router-dom";

const TableProducts = ({
  products,
  translations,
  addItemToCart,
  removeItemFromCart
}) => {
  if (!products && !translations) return "Loading...";
  return (
    <React.Fragment>
      {Object.keys(products).map(key => {
        const product = products[key];
        return (
          <tr key={product.id}>
            <td>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
              </Link>
            </td>
            <td>
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </td>
            <td>
              {product.amount}
              <Button
                icon="add"
                text=""
                to="/cart"
                onClickButton={() => addItemToCart(product)}
                className="btn-floating btn-small"
              />
              <Button
                icon="remove"
                text=""
                to="/cart"
                onClickButton={() => removeItemFromCart(product)}
                className="btn-floating btn-small red"
              />
            </td>
            <td>
              {product.price} {translations.currency.short}
            </td>
            <td>
              {product.amount * product.price} {translations.currency.short}
            </td>
          </tr>
        );
      })}
    </React.Fragment>
  );
};

export default TableProducts;
