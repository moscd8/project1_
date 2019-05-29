import { ProductModel } from './product.module';
import { Appuser } from './modules/app-user';

export class OrderModel{
 product: ProductModel   
 userId: Appuser;
//  category:string;
//  imageUrl:string;
//  price:number;
//  title:string;
 constructor(product:ProductModel, user:Appuser){
     this.product=product;
     this.userId=user;
 }
 
}