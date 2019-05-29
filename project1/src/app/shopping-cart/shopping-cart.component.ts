import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shoppingCart.service';
import { ProductService } from '../product.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProductModel } from '../product.module';
import { OrderModel } from '../order.module';
import { Appuser } from '../modules/app-user';
import { AuthService } from '../shered/services/auth.service';
import { Subject } from 'rxjs';
 
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productAdded=[];
  productAdded2:ProductModel[];
  wasAdded  = false;
  // wasAdded2  = true;
  appUser: Appuser;
  checkout=false;
  
  userOrders$; 
  constructor(private scService: ShoppingCartService,
     private productService: ProductService,
     private auth: AuthService
     )
     {
       auth.appUser$.subscribe(appUser => this.appUser= appUser);
     
      } 

    ngOnInit() {

    this.productService.getAll().subscribe( 
      (res:[]) => {
      this.productAdded2=res;

      
    }); 
    this.productAdded= this.scService.addedItems;
    if(this.productAdded != null)
      {this.wasAdded = this.scService.wasAdded2;}
 
      
    }


  payItem(itemToAdd: ProductModel){ 
    //let order= new OrderModel(itemToAdd,"tedst");
    //let greeter = new Greeter("world");
    let t = this.scService.OrderItem(itemToAdd ); 

    if(t!=null){
      this.removeItem(itemToAdd);
    }
    
    this.getCart();
    


    }

    getCart(){
    this.scService.getCart().valueChanges().subscribe(
        
      (res: OrderModel[]) => {
      this.userOrders$=res;

      console.log(this.userOrders$);
     }
   ); 

  }
  
  removeItem(itemToRemove:ProductModel){
    var tempItems=[];
    if(this.productAdded2!= null){
        var i=0;
        for(let item of this.productAdded2)
        {   
            if(itemToRemove != item){
              tempItems.push(item); 
            }
        }
        this.productAdded2=tempItems;
        
        alert(itemToRemove);
    }}
 

}
