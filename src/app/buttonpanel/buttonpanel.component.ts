import { AsyncPipe } from '@angular/common';
import { Component,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CounterState } from '../../state/counter.reducer';
@Component({
  selector: 'app-buttonpanel',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './buttonpanel.component.html',
  styleUrl: './buttonpanel.component.css'
})
export class ButtonpanelComponent {

     constructor(private store :Store<{mycounter:CounterState}>){
  
     }
 @Input() likeCount!: Observable<number>;
  @Input() loveCount!: Observable<number>;
  like() {
    // Implement your like logic here
    console.log('Like button clicked');
    this.store.dispatch({type: '[Counter] Count Like'});
  }

  love(){
    // Implement your like logic here
    console.log('Love button clicked');
    this.store.dispatch({type: '[Counter] Count Love'});
  }

}