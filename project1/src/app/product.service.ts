import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
    
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductModel } from './product.module';
import { Observable } from 'rxjs';
import { map } from 'rxjs-compat/operator/map'; 

@Injectable()
export class ProductService { 
  constructor(private db: AngularFireDatabase,private httpClient: HttpClient   ) { }

  create(product:ProductModel){
    
    return  this.db.list('/products/products').push(product);

  }
  
  createWithHttp(product:ProductModel ){
    console.log('http create ...:'+product);    
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');  
    return  this.httpClient.post('https://project1-6d461.firebaseio.com/products/products.json', product, {headers: header});

  }

  getWithHttp(): Observable<ProductModel[]>{ 
    return this.httpClient.get<ProductModel[]>('https://project1-6d461.firebaseio.com/products/products.json');
  //,{ responseType: 'json' }
  }  
  
  getAll(){
     return this.db.list('/products/products/').snapshotChanges().map(changes => {
      return changes.map(c => 
        ({ key: c.payload.key, ...c.payload.val() 
          
        })
      ); 
    }
    )}
    getAll2(){     
      return this.db.object('/products/');
    }

    get(productId){     
      return this.db.object('/products/products/'+ productId);
    }

    update(productId , product){ 
      return this.db.object('/products/products/'+ productId).update(product);
    }

    delete(productId){
      return this.db.object('/products/products'+ productId).remove();
 
    }

    // getTshirt() : Observable<ProductModel[]>{
    //   const params = new HttpParams().set('category','T-Shirt');
    //   return this.httpClient.get<ProductModel[]>('https://project1-6d461.firebaseio.com/products/products.json',{params});
    //   //,{ responseType: 'json' }
   
    // } 
    

    getTshirt(){
      return this.db.list('/products/products/', ref=> ref.orderByChild('category').equalTo('T-Shirt'))
      .snapshotChanges().map(changes => {
       return changes.map(c => 
         ({ key: c.payload.key, ...c.payload.val()            
         })
       ); 
     }
     )
    }
 
     
}

 
