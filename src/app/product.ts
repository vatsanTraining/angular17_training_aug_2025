export interface Product {

    productId:number;productName:string,ratePerUnit:number,stock?:number;
}

export interface Order{

    orderId:number;customerName:string,status:string;
}