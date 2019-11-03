import { IProduct } from "../store/cart/cart.types";

export const productsMock = (amount: number): IProduct => {
  let products = {};
  for (let i = 0; i < amount; i++) {
    products = {
      ...products,
      [`${i}`]: {
        price: i * 2,
        id: `${i}`,
        title: `Title for ${i}`,
        amount: i * 5,
        extra: `Extra for ${i}`,
        image: `http://mysite.com/image${i}`,
      }
    }

  }
  return products;
};