import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shoppingCart.service';
 
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productAdded=[];
  wasAdded  = false;
  // wasAdded2  = true;

  checkout=false;
  constructor(private scService: ShoppingCartService) { }

  ngOnInit() {
    this.productAdded= this.scService.addedItems;
    if(this.productAdded != null)
      {this.wasAdded = this.scService.wasAdded2;}
  }

  removeItem(itemToRemove){
    var addedItems2=[];
    if(this.productAdded!= null){
        var i=0;
        for(let item of this.productAdded)
        {
            if(itemToRemove != item){
               addedItems2.push(item); 
            }
        }
        this.productAdded=addedItems2;
        alert(itemToRemove.name + " was removed");
    }}

    // getCheckOut(){
    //   return false;
    // }
    getCheckOut(){
      this.checkout=true;
    };
}
