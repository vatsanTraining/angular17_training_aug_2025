import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ReviewState } from "./review.state";

export const selectReviewFeature = createFeatureSelector<ReviewState>('reviews');

export const selectAllReviews = createSelector(
  selectReviewFeature,
  (state: ReviewState) => state.reviews
)

export const selectProductError = createSelector(
  selectReviewFeature,
  (state: ReviewState) => state.error
);