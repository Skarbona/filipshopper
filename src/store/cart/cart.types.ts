export interface ICartStore {
  total: number,
  counter: number,
  products: IProduct
}

export interface IProduct {
  [id: string]: IProductProps
}

export interface IProductProps {
  price: number,
  amount: number,
  image?: string,
  title: string,
  extra: string,
  id: string,
}

