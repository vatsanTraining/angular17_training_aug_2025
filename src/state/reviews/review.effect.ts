import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
  import { ReviewService } from '../../app/review.service';
import { loadReviews, loadReviewSuccess, loadReviewFailure } from './reviews.action';

@Injectable()
export class ReviewEffect {
  private api = inject(ReviewService);
  action$ = inject(Actions);

  loadReview$ = createEffect(() =>
        this.api.getReviews().pipe(
          map((res) => loadReviewSuccess({ reviews: res })),
          catchError((error) => of(loadReviewFailure({ errorMessage: error.message })))
    )
  );
}