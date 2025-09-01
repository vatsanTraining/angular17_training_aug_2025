import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  message :string;

  constructor(){
    this.message = '';
  }

  task =''

update() {

  this.list.push(this.task)
}

  list =["Order Food", "Pay Insurance"];


}
