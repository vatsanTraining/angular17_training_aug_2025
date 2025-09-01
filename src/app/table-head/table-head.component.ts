import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: '[app-table-head]',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table-head.component.html',
  styleUrl: './table-head.component.css'
})
export class TableHeadComponent {

  headings:string[]

  constructor(){

    this.headings =["OrderId","CustomerName","Status","Actions"]

  }
}
