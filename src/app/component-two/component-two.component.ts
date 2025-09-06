import { Component } from '@angular/core';
import { UtilityService } from '../utility.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-two',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component-two.component.html',
  styleUrl: './component-two.component.css'
})
export class ComponentTwoComponent {

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
