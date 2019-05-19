import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProductModel } from './product.module';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
 
@Injectable()
export class ShoppingCartService
{  
   item$;
    
    constructor(private db:AngularFireDatabase){}

    private create(){
      return  this.db.list('/products/shooping-carts').push({
            dateCreated: new Date().getTime()
        });

    }

   async getCart( ){
      let cartId= await this.getOrcreateCartID();
        console.log( cartId) ; 
        console.log( this.db.object('/products/shooping-carts/'+ cartId  )) ; 
        return this.db.object('/products/shooping-carts/'+ cartId +'/items/' );

    }

    private async getOrcreateCartID(){        
    let cartId= localStorage.getItem('cartId');
    if(cartId)    return cartId;
    let res= await this.create();
    localStorage.setItem('cartId', res.key);
    return res.key;
  
 
    }
    getItems(cartId:string, productId:string){
      return  this.db.object('/products/shopping-carts/'+ cartId + '/items/'+ productId);
    }
 
  
      

    async addToCart(product:ProductModel){
        let cartId= await this.getOrcreateCartID();
        this.item$=this.getItems(cartId,product.key);

       this.item$.valueChanges().pipe(take(1)). subscribe((item ) => 
        {
            // if(item.$exist())
            // if(item.value != null)
            let temp=this.db.list('/products/shopping-carts/'+ cartId + '/items/');
            console.log(temp);

            this.item$.update({product:product , quantity: 1 }); 
 
 
            // item$.update({product:product , quantity: ( item.quantity || 0 ) + 1});
 

        }
        ); 
      }
     
    } 