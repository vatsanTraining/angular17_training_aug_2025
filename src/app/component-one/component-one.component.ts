import { Component } from '@angular/core';
import { UtilityService } from '../utility.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-one',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component-one.component.html',
  styleUrl: './component-one.component.css'
})
export class ComponentOneComponent {
   value: string='';

   constructor(private service:UtilityService){

   }

   ngOnInit(): void {

    this.service.subject.subscribe(val => this.value = val);

   }

   change(newvalue: string) {

    this.service.changeSubject(newvalue)
}

}
