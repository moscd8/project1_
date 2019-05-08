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
  products$;
  // products: Observable<any[]>;
  total: number;
  te:[];
  constructor(private productService: ProductService) { 
    this.products$=this.productService.getAll();  
//  this.te= this.products$.ref();
}

  ngOnInit() {
    
  }
 
      
  }
