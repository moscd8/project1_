import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase' ;

@Injectable( )
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }


  getAll() { 
     
    return this.db.list('/products/categories', ref=> ref.orderByChild('name')).valueChanges(); 
     
  }

}
