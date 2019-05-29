import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
    
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductModel } from './product.module';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs-compat/operator/map'; 

@Injectable()
export class ProductService {
  private arr: ProductModel[]; 
  subject = new Subject<ProductModel[]>();
  constructor(private db: AngularFireDatabase,private httpClient: HttpClient   ) { 
   // this.arr.sub
 
  }

  


  create(product:ProductModel){
//  this.arr.push(product);
  
    return   this.db.list('/products/products').push(product);

  }
  
  createWithHttp(product:ProductModel ){
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
      return this.db.object('/products/products/'+ productId).remove();
      
    } 
      
}

 
