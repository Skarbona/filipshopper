import { ICartStore } from "./cart/cart.types";
import { IAppStore } from "./app/app.types";
import { IReviewsStore } from "./reviews/reviews.types";
import { ISearchStore } from "./search/search.types";

export interface IStore {
  cart: ICartStore;
  app: IAppStore;
  reviews: IReviewsStore;
  search: ISearchStore;
  form: any;
}