import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { fromEvent } from 'rxjs';
import {take, first} from 'rxjs/operators';
 
// import "rxjs/add/observable/interval";
import "rxjs/add/operator/take";
import { TouchSequence } from 'selenium-webdriver';
import { Observable } from 'rxjs';
import { product } from 'src/app/product.module';
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/bufferCount"
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product={};
  id;
  
  constructor(
      private categoryService: CategoryService, 
      private productService: ProductService,
      private route:ActivatedRoute,
      private router:Router

    ) 
    { 
      this.categories$=categoryService.getCategories();   
      
      this.id=this.route.snapshot.paramMap.get('id');
      
      if(this.id) 
      this.productService.get(this.id).valueChanges().subscribe(p => {this.product=p;
        // console.log(this.product + " prod");
      });
 
    }

 
 

  save(product:product){
    console.log(product); 
    if(this.id) 
      this.productService.update(this.id, product);
    else 
      this.productService.create(product); 

    this.router.navigate(['admin/products']);
  }

  delete(){
    if(!confirm('Are you sure you want to delete this product')) return ;
      this.productService.delete(this.id);    
      this.router.navigate(['admin/products']);
 
  }
  ngOnInit() {
  }
}
