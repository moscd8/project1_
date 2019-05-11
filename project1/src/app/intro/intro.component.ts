import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../product.module';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit { 
  
  // categories$ ;
  products:ProductModel[]=[];
  route:ActivatedRoute;
  router:Router;
  category:string;
  filterProduct:ProductModel[];


  constructor(private catergoryService:CategoryService ,private productService:ProductService) { 
    // this.categories$= catergoryService.getAll();
    // this.products$= 
    productService.getAll().subscribe( (p:any[])=> {
      this.products= p;
      this.filterProduct= p;
      


    });
  

    // this.route.queryParamMap.subscribe(query => {
    //    this.category= query.get('category');
    // });
    
    
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

  // onSelect(c){
  //   console.log(c.name) ;
  //   // this.router.navigate(['/category'],c.id);
  //   // if(c.name== 'all'){
  //   //   this.filterProduct=this.products;
  //   // }else{

  //   this.category= c.name;
  //   this.filterProduct = (this.category) ? 
  //   this.products.filter(p => p.category === this.category): 
  //   this.products;
   
  // } 



     // this.route.queryParamMap.subscribe(query => {
    //    this.category= query.get('category');
    // });

}
