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
  sum=0;

  cart$;

  checkout=false;
  constructor(private scService: ShoppingCartService) { }

async  ngOnInit() {
    // this.productAdded= this.scService.addedItems;
//    if(this.productAdded != null)
 //     {this.wasAdded = this.scService.wasAdded2;}
 /// this.cart$ = await this.scService.getCart();

 if(this.productAdded!= null){
  for(let item of this.productAdded)
  {
     
         this.sum+= item.price;
    
  }
 }  


}

  removeItem(itemToRemove){
    var addedItems2=[];
    var sum=0;
    if(this.productAdded!= null){
        var i=0;
        for(let item of this.productAdded)
        {
            if(itemToRemove != item){
               addedItems2.push(item); 
               sum+= item.price;
            }
        }
        this.productAdded=addedItems2;
        console.log("sum is: "+ sum);
        alert(itemToRemove.name + " was removed");
    }}

    // getCheckOut(){
    //   return false;
    // }
    getCheckOut(){
      this.checkout=true;
    };
}
