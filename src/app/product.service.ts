import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

  //baseUrl = "http://localhost:3000/products"

  baseUrl = "../assets/products.json"
  constructor(private http:HttpClient) { }

  findAll():Observable<Product[]>{
    
    return this.http.get<Product[]>(this.baseUrl)
  }

  addProduct(product:Product):Observable<Product>{

    return this.http.post<Product>(this.baseUrl,product);


  }

  deleteProduct(id:string):Observable<Product>{

    return this.http.delete<Product>(this.baseUrl+'/'+id);
  }

  updateProduct(product: Product) :Observable<Product>{

    console.log(product.id)
    return this.http.put<Product>(this.baseUrl+'/'+product.id,product);
  }
     
}

