import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase' ;

@Injectable( )
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }


  getCategories(){
    // console.log(this.db.object.toString);
    return this.db.list('/categories', ref=> ref.orderByChild('name')).valueChanges(); 
    
  }

}
