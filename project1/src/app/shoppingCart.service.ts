import { Injectable } from '@angular/core';
import { ProductModel } from './product.module';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { UserService } from './shered/services/user.service';
import { OrderModel } from './order.module';
import { AuthService } from './shered/services/auth.service';
import { Appuser } from './modules/app-user';
import { Subject } from 'rxjs';

// import { item } from './product/item_OLD';

 
@Injectable()
export class ShoppingCartService
{  
    wasAdded2=false;
    addedItems=[];
    appUser: Appuser;
 
    constructor(private db: AngularFireDatabase,private userService:UserService,
      private auth: AuthService){

        auth.appUser$.subscribe(appUser => this.appUser= appUser);
    } 
    // selectedItem(itemToAdd: item){
    //     if(itemToAdd!= null)
    //     {
    //         this.addedItems.push(itemToAdd);
    //         this.wasAdded2=true;
    //     }

        
    // }


    isEmpty(){
        if(this.addedItems.values.length >0 )
        {
            alert(this.addedItems.values.length);
            // this.wasAdded2=true;
        }    
    }

    // removeItem(itemToRemove){
    //     var addedItems2=[];
    //     if(this.addedItems!= null){
    //         var i=0;
    //         for(let item of this.addedItems)
    //         {
    //             if(itemToRemove != item){
    //                addedItems2.push(item); 
    //             }
    //         }

    //         this.addedItems=addedItems2;
    //         alert(itemToRemove.name + " was removed");
    //     }
    // }
    
    OrderItem(itemToOrder: ProductModel){
      //this.userService.get()
      let id= this.appUser.name;
      return this.db.list('/orders/'+ id).push(itemToOrder);

    }

    getCart() {
      
      let id= this.appUser.name;
      return this.db.list('/orders/'+ id);
      
      
    }

     

    
}