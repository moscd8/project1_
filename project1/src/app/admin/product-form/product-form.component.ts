import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';  
import "rxjs/add/operator/take"; 
import { Observable } from 'rxjs'; 
import { ProductModel } from 'src/app/product.module'; 
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
          private router:Router  ) 
    { 
      this.categories$=categoryService.getAll();   
      
      this.id=this.route.snapshot.paramMap.get('id');
      
      if(this.id) 
      this.productService.get(this.id).valueChanges().subscribe(p => {this.product=p;
        // console.log(this.product + " prod");
      });
 
    }

 
 

  save(product:ProductModel){
    console.log(product); 
    if(this.id) 
      this.productService.update(this.id, product);
    else 
    this.productService.createWithHttp(product);  

      

    this.router.navigate(['admin/products']);
  }

  //save with httpClient
  
  saveWithHttm(productTest:ProductModel){
    this.productService.createWithHttp(productTest ).subscribe(  
          (res:ProductModel)=> { 
            console.log('res: '+ res)},
          (error) => console.log('error: '+ error)
        );
 
  }



  delete(){
    if(!confirm('Are you sure you want to delete this product')) return ;
      this.productService.delete(this.id);    
      this.router.navigate(['admin/products']);
 
  }
  ngOnInit() {
  }
}
