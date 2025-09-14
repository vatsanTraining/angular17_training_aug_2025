
import { createReducer, on } from '@ngrx/store';
import { ReviewState } from './review.state';

import { loadReviewSuccess, loadReviewFailure } from './reviews.action';

const initalState: ReviewState = {
  reviews: [],
  error: null,
};  

export const ReviewReducer = createReducer(
  initalState,
  on(loadReviewSuccess, (state, { reviews }) => ({
    ...state,
    reviews,
    error: null,
  })),
  on(loadReviewFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage,
  }))
);
