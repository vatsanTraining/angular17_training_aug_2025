import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  newtask :string;
  message:string =''
  constructor(activeRoute:ActivatedRoute){
   this.newtask =  activeRoute.snapshot.params['task'];
   this.list.push(this.newtask)
  }

  task =''

update() {

  this.list.push(this.task)
}

  list =["Order Food", "Pay Insurance"];


}
