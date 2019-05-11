import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase' ;

@Injectable( )
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }


  getAll() { 
    console.log("cate:");
    console.log(this.db.list('/products/categories'));
    return this.db.list('/products/categories', ref=> ref.orderByChild('name')).valueChanges(); 
     
  }

}
