import { Component, ViewChild } from '@angular/core';
import { User } from '../user';
import { JsonPipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [JsonPipe, FormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  @ViewChild('loginForm') form: any

  reset() {
    this.form.reset();
  }

  user:User ={userName:'',password:''}

  constructor(private service:UtilityService){

  }

  ngOnInit(): void {
  }

   submit(){

     console.log('submitted'+ this.user.userName);

     if(this.user.userName==='india' && this.user.password==='delhi'){
         console.log('valid user')
         this.service.changeLoginStatus(true)
     } else {
        console.log('invalid credentials')
     }
   }
}
