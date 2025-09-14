import { Component } from '@angular/core';
import { ButtonpanelComponent } from "../buttonpanel/buttonpanel.component";
import { Store } from '@ngrx/store';
import { CounterState } from '../../state/counter.reducer';
import { Observable } from 'rxjs';
import { ReviewState } from '../../state/reviews/review.state'
import { IReviews } from '../../state/reviews/review.model';
import { AsyncPipe, NgFor } from '@angular/common';
@Component({
  selector: 'app-review',
  standalone: true,
  imports: [ButtonpanelComponent,NgFor,AsyncPipe],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

  likeCount$:Observable<number>;
  loveCount$:Observable<number>;
  reviews$!: Observable<IReviews[]>;
  error!:Observable<string | null>;

   constructor(private store :Store<{mycounter:CounterState,reviews:ReviewState}>) {  

      this.likeCount$ = this.store.select(state => state.mycounter.likeCount);
      this.loveCount$ = this.store.select(state => state.mycounter.loveCount);  
      this.reviews$ = this.store.select(state => state.reviews.reviews);
   }

  }

