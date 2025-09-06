import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { NgFor } from '@angular/common';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() list:Product[]=[] 

  @Output() itemToDelete:EventEmitter<Product> = new EventEmitter();

    @Output() itemToUpdate:EventEmitter<Product> = new EventEmitter();
    btnText='Add';

  delete(product:Product) {

    this.itemToDelete.emit(product)
  }

  update(product:Product){

    this.itemToUpdate.emit(product)
  }

}
