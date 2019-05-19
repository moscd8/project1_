import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../product.module';
import { ShoppingCartService } from '../shoppingCart.service';
import { Subscription } from 'rxjs';

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
  cart: any;
  //  subscription = Subscription;


  constructor(private catergoryService:CategoryService ,private productService:ProductService,
   private shoppingservice: ShoppingCartService
    ) { 
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
 
  // ngOnInit(){

  // }
  async ngOnInit() {
  (await  this.shoppingservice.getCart()).snapshotChanges()
  .subscribe(
    cart=> {
      //console.log(this.cart);
      this.cart=cart; 
    } 
    );
      
  } 
    // OnDestroy(){
    //   console.log(this.cart);
    //   // this.subscription
    // }

  }
  
  

  // ngOnDestroy(){
  // this.subscription= null;
  //  console.log("sa");
  // }

 


