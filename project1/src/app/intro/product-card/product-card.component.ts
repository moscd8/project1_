import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductModel } from 'src/app/product.module';
import { ShoppingCartService } from 'src/app/shoppingCart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit, OnDestroy {

  cart: any;
  subscription = Subscription;

  item2$
 
  @Input('product') product:ProductModel;
  @Input('show-actions') showActions=true;
  @Input('shopping-cart') shoppingCart;


  @Input('filterProduct') filterProduct;
  constructor(private shoopingcartService:ShoppingCartService,
    private shoppingservice: ShoppingCartService) {   }

    async ngOnInit() {
  this.item2$=    this.shoopingcartService.item$;
     // alert(this.item2$);
      (await  this.shoppingservice.getCart()).snapshotChanges()
      .subscribe(
        (cart)=> {this.cart=cart; 
        console.log(this.cart);
        } 
        );
    
    
      }
    

  addToCart(product:ProductModel){
    this.shoopingcartService.addToCart(product);
    
  }
 
  getQuantity(){
    if(!this.shoppingCart) {
      // console.log("0");      
      return 0; }

      console.log(      this.shoppingCart.item[this.product.key]);

   let item=  this.shoppingCart.item[this.product.key];
   console.log(item);
   return item? item.quantity: 0;
  }
  
  ngOnDestroy(){

  }
 

}
