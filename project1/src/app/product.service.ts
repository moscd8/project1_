import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
   Response
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductModel } from './product.module';
import { Observable } from 'rxjs';
import { map } from 'rxjs-compat/operator/map'; 

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase,private httpClient: HttpClient   ) { }

  create(product:ProductModel){
    
    return  this.db.list('/products').push(product);

  }
  
  createWithHttp(product:ProductModel ){
    console.log('http create ...:'+product);    
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');  
    return  this.httpClient.post('https://project1-6d461.firebaseio.com/products.json', product, {headers: header});

  }

  getWithHttp(): Observable<ProductModel[]>{ 
    return this.httpClient.get<ProductModel[]>('https://project1-6d461.firebaseio.com/products.json',{ responseType: 'json' });
  
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

 
