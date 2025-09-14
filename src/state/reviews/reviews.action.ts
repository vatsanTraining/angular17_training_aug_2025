import { createAction, props } from '@ngrx/store';
import { IReviews } from './review.model';

export const loadReviews = createAction('[Review Component] loadReviews');

export const loadReviewSuccess = createAction(
  '[Review Component] loadReviewSuccess',
  props<{reviews: IReviews[]}>()
);

export const loadReviewFailure = createAction(
  '[Review Component] loadReviewFailure',
  props<{ errorMessage: string }>()
);