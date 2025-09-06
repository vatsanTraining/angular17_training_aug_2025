import { JsonPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ProductComponent } from "../product/product.component";
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, JsonPipe, ProductComponent],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

   productForm!:FormGroup

   btnText ='Add';
   list:Product[]=[] 
   
   constructor(private service:ProductService,private router:Router){
   }
   ngOnInit(): void {
    
     this.fetchData();

    this.productForm= new FormGroup(
      {'id':new FormControl(),
        'productName':new FormControl(),
        'ratePerUnit':new FormControl(),
        'stock':new FormControl(),
        'imageRef':new FormControl()
      }
    )
   }
   submit(){

     if(this.btnText ==='Add'){
    console.log(this.productForm.value)

    this.list.push(this.productForm.value);

    this.service.addProduct(this.productForm.value).subscribe(value => console.log('one value added'));
     } else {
      this.edit(this.productForm.value)
     } 
  }

     
      fetchData(): void {
       
         this.service.findAll().subscribe({
           next: (data)=>{this.list = data},
           error: (error) =>console.log(error),
           complete:()=> console.log('completed')
         })
               }

               
               remove(product:any):void{

this.service.deleteProduct(product.id).subscribe(data =>{

      let idxPos =this.list.indexOf(product);

      this.list.splice(idxPos, 1);
  
    })
 
               }

               edit(product:any):void {

                this.btnText = 'Edit'
                this.productForm.setValue(
                  {'id':product.id,'productName':product.productName,'ratePerUnit':product.ratePerUnit,'stock':product.stock,'imageRef':product.imageRef}
                )
                this.service.updateProduct(product).subscribe(resp => {
                        let idxPos =this.list.indexOf(product);

     this.list= this.list.map((eachProduct,idx)=>
         eachProduct.id ==resp.id?resp:eachProduct
      )
      
                })
               }
   
               ngOnDestroy(): void {
                 //Called once, before the instance is destroyed.
                 //Add 'implements OnDestroy' to the class.
                 this.service.findAll().subscribe().unsubscribe();
               }

          
}

    
