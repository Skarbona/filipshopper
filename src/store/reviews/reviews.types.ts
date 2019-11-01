export interface IReviewsStore {
  error: boolean,
  reviews: IReview,
}

export interface IReview {
  [id: string]: IReviewProps[],
}

export interface IReviewProps {
  name: string,
  opinion: string,
  stars: number,
}
