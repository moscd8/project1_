import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Observable } from 'rxjs';
// import { ProductComponent } from 'src/app/product/product.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products ;
  // products: Observable<any[]>;
  sum=0;
  te:[];
  
  constructor(private productService: ProductService) { 
    // this.products$=
    
    this.productService.getAll().subscribe(res => this. products = res);  
//  this.te= this.products$.ref();
}

  async ngOnInit() {
    
    if(this.products != null){
      for(let item of this.products )
      {
         
             this.sum+= item.price;
             console.log(item.price);
        
      }
     }  
  }
  onclick(){
    
    if(this.products != null){
      for(let item of this.products )
      {
         
             this.sum+= item.price;
             console.log(item.price);
        
      }
     }  
  }
 
      
  }
