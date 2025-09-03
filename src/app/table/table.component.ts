import { Component, Input, Pipe } from '@angular/core';
import { TableHeadComponent } from '../table-head/table-head.component';
import { Order } from '../product';
import { NgFor, NgStyle, UpperCasePipe } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { RobPipe } from '../rob.pipe';
import { FilterPipe } from '../filter.pipe';
import { LogClass } from '../../utils/ClsDeco';

@Component({
  selector: '[app-table]',
  standalone: true,
  imports: [NgFor,   NgStyle,UpperCasePipe,RobPipe,FilterPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
@LogClass
export class TableComponent {

  tableData:Order[];

  @Input() tableTitle:string =''

  @Input() searchString ='' ;

  constructor(){

    this.tableData = [
      {orderId:101,customerName:'ramesh',status:'pending'},
{orderId:102,customerName:'rajesh',status:'pending'},
{orderId:103,customerName:'rakesh',status:'completed'},
{orderId:104,customerName:'rangesh',status:'completed'},

    ]
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    console.log('inside table comp',this.searchString)
  }

  delete(event:any,idxPos:number):void{


    console.log('Delete Called on element',idxPos);

    this.tableData.splice(idxPos,1);

  }
}
