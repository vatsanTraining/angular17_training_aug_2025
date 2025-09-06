export interface Product {

    id:number,productId:number;productName:string,ratePerUnit:number,stock?:number,imageRef:string;
}

export interface Order{

    orderId:number;customerName:string,status:string;
}