import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  subject :BehaviorSubject<string>=new BehaviorSubject('Hello World');

loginStatus :BehaviorSubject<boolean>=new BehaviorSubject(false);
  
  constructor() { }

  changeSubject(val:string):void{

    this.subject.next(val)
  }

  changeLoginStatus(status:boolean):void{
    this.loginStatus.next(status)
  }
}
