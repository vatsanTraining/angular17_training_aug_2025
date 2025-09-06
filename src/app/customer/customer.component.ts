import { JsonPipe, CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, JsonPipe, CommonModule,NgFor],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {


  customerForm:FormGroup;

  constructor(private frmBuilder:FormBuilder){

    this.customerForm =frmBuilder.group(this.initControls())
  }
  
  initControls(){

    return {
        customerId:['',Validators.required],
        customerName:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        phoneNumbers:this.frmBuilder.array([
          this.frmBuilder.control('',[Validators.required])
        ])
      
    }
  }

addPhoneNumer(){
 
   this.phoneNumbers.push(this.frmBuilder.control('',[Validators.required]));
}

removePhoneNumber(idx:number){

  this.phoneNumbers.removeAt(idx)
}

get phoneNumbers(){
  return this.customerForm.get('phoneNumbers') as FormArray;

}

  submit(){
    console.log(this.customerForm.value)
  }
}
