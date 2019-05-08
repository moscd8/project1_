import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription, Observable, Subject } from 'rxjs'; 
import { ProductModel } from 'src/app/product.module'; 
 

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit  {
  products$;
  subscription:Subscription;
  public productsTemp=[];  
  productChang: Subject<ProductModel[]>  ;


  constructor(private productService: ProductService) { 
  
    this.products$=this.productService.getAll();

  } 


  // setProduct(products:product[]){
  //   this.products=products;
  //   this.productChanged.next(this.products.slice());
    
  // }

  ngOnInit() {
    
    //recive the item from the firebase by http req
    this.productService.getWithHttp().subscribe( 
      (data:ProductModel[]) =>{ 
        console.log( "on-init ");
        console.log(  data );
        this.productsTemp=data; 
        console.log( "on-init ");
        console.log(  this.productsTemp);
      }      
    );


    
  
  }

  // setProducts(productsTest: ProductModel[]){

  //   console.log('pre assign: '+ this.productsTemp);
  //   this.productsTemp=productsTest;
   
  //   this.productChang.next(this.productsTemp.slice());
  //   console.log('after assign: '+ this.productsTemp);
  // }
 
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
   


  // dont work
  filter(query){
    console.log('query is: '+ query);
     let temparry:ProductModel[]= this.productsTemp ;
    console.log( temparry);
    
    for(let p of temparry){
        console.log("price:");
        console.log( p.price);
     
    }

    
 
  }
  
}
