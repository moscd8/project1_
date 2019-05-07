import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
 
import { HttpClient } from '@angular/common/http';
import { element } from '@angular/core/src/render3';
import { product } from './product.module'; 
// import { item } from './product/item_OLD';
// import { itemTEST } from './product.module';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase,private httpClient: HttpClient ) { }

  create(product:product){
    
    return  this.db.list('/products').push(product);

  } 

  getAll(){
    
     return this.db.list('/products').snapshotChanges().map(changes => {
      return changes.map(c => 
        ({ key: c.payload.key, ...c.payload.val() 
          
        })
      ); 
    }
    )}


    get(productId){
     
      return this.db.object('/products/'+ productId);

    }

    update(productId , product){ 
      return this.db.object('/products/'+ productId).update(product);
    }

    delete(productId){
      return this.db.object('/products/'+ productId).remove();
 
    }

     
}

// return this.httpclient.get<UserData>('https://ng-word-memory.firebaseio.com/data.json?auth=' + token).map(
//         (userdata) => {
//             return userdata;
//         }
//       );
