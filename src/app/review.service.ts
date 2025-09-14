import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { IReviews } from '../state/reviews/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  getReviews():Observable<IReviews[]>{

    let list =[ {"reviewedBy":"Ramesh","reviews":["Great product!","Very useful and well-made."],"rating":5,"productReviewed":"Product A"},
{"reviewedBy":"Suresh","reviews":["Not satisfied with the quality.","Could be better."],"rating":2,"productReviewed":"Product B"},
{"reviewedBy":"Mahesh","reviews":["Average performance.","Decent for the price."],"rating":3,"productReviewed":"Product C"},
{"reviewedBy":"Rajesh","reviews":["Exceeded my expectations!","Highly recommend it."],"rating":5,"productReviewed":"Product D"},
{"reviewedBy":"Vijay","reviews":["Poor build quality.","Disappointed with the purchase."],"rating":1,"productReviewed":"Product E"}]

 
    return of(list);
  }
    
  }


