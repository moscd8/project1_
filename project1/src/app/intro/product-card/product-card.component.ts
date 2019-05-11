import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/product.module';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product:ProductModel;
  @Input('show-actions') showActions=true;

  
 
  @Input('filterProduct') filterProduct;
  constructor() { 


    // console.log("filter: ");
    // console.log(this.filterProduct);
    

  }

  ngOnInit() {
  }

}
