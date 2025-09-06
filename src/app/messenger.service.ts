import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {


  subject:BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  change(message:string){
    this.subject.next(message);
  }
  
}
