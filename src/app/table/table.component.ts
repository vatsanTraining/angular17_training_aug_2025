import { Component, Input } from '@angular/core';
import { TableHeadComponent } from '../table-head/table-head.component';
import { Order } from '../product';
import { NgFor, NgStyle } from '@angular/common';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: '[app-table]',
  standalone: true,
  imports: [NgFor, TableHeadComponent, HeaderComponent, NgStyle],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  tableData:Order[];

  @Input() tableTitle:string =''

  constructor(){

    this.tableData = [
      {orderId:101,customerName:'ramesh',status:'pending'},
{orderId:102,customerName:'rajesh',status:'pending'},
{orderId:103,customerName:'rakesh',status:'completed'},
{orderId:104,customerName:'rangesh',status:'completed'},

    ]
  }

  delete(event:any,idxPos:number):void{


    console.log('Delete Called on element',idxPos);

    this.tableData.splice(idxPos,1);

  }
}
