import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/product.module';
// import { ProductComponent } from 'src/app/product/product.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products$;
  // products: Observable<any[]>;
  total;
  te:ProductModel[];
  constructor(private productService: ProductService) { 
    //this.products$=this.productService.getAll();  
    this.productService.getAll().subscribe(
      (res:[])=> {
        this.te=res;
        console.log(this.te);
      }
    );  
//  this.te= this.products$.ref();
}

 async ngOnInit() {
 
   this.getSum();
 
  }
  
 

   getSum() {
   this.total =0;
    if(this.te != null){
      for(let i of this.te){
        this.total +=i.price;
      }
    } 
  }
 
      
  }
