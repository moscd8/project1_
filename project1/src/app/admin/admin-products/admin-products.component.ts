import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription, Observable } from 'rxjs'; 
import { product } from 'src/app/product.module'; 

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit  {
  products$;
  subscription:Subscription;
   
  constructor(private productService: ProductService) { 
  
    this.products$=this.productService.getAll();
  
  }

  ngOnInit() { 
  
     
  }
 
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
  


  // dont work
  filter(query){
 
 
  }
  
}
