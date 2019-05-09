import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit { 
  
  categories$;
  products$;
  constructor(private catergoryService:CategoryService ,private productService:ProductService) { 
    this.categories$= catergoryService.getAll();
    this.products$= productService.getAll();

    
  
  }

  // constructor(private productService: ProductService) { 
  
  //   this.subscription=this.productService.getAll().subscribe( (products:any[])  => {
  //   this.filterProducts=this.products=products;
 
  //   });
  //   }  




  //srvc
  // getAll(){
  //   return this.db.list('/products/products/').snapshotChanges().map(changes => {
  //    return changes.map(c => 
  //      ({ key: c.payload.key, ...c.payload.val() 
         
  //      })
  //    ); 
  //  }
  //  )}

  ngOnInit() {
  }

  

}
