import { IReviews } from "./review.model";

 export interface ReviewState {
  reviews: IReviews[];
  error: string | null;
}

