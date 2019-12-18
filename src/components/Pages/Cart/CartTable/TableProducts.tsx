import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../Elements/Button";
import { ITableProducts } from "./TableProducts.interface";

const TableProducts: React.FC<ITableProducts> = ({
  products,
  currency,
  addItemToCart,
  removeItemFromCart
}) => (
  <React.Fragment>
    {Object.keys(products).map(key => {
      const product = products[parseInt(key)];
      return (
        <tr key={product.id}>
          <td>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title}/>
            </Link>
          </td>
          <td><Link to={`/product/${product.id}`}>{product.title}</Link></td>
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
          <td> {product.price} {currency.short} </td>
          <td> {product.amount * product.price} {currency.short} </td>
        </tr>
      );
    })}
  </React.Fragment>
);


export default TableProducts;
