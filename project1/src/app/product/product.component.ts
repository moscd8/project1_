import { Component, OnInit } from '@angular/core';
// import { item } from './item_OLD';
import { productService } from './product.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ShoppingCartService } from '../shoppingCart.service';
 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  
})
export class ProductComponent implements OnInit {
  
  items=[];  
  constructor(private pService: productService, private scService: ShoppingCartService) { 
 }

  ngOnInit() {
    // this.items=this.pService.getItem();

  }
  // onSelect(itemToAdd: item): void {
  //   // console.log(item + "was added..");
  //   // alert(itemToAdd.name + " was added..");
  //   this.scService.selectedItem(itemToAdd);

  // }

}
