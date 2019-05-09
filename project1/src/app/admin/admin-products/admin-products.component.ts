import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription, Observable, Subject } from 'rxjs'; 
import { ProductModel } from 'src/app/product.module'; 
import { DataTableModule } from 'angular-4-data-table';
// import { DataTableModule } from 'Angular-6-datatable';
// DataTableModule


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy  {
  products:ProductModel[];
  subscription:Subscription; //manage few windows and change will keep and update
  public productsTemp=[];  
  productChang: Subject<any[]>  ;
  filterProducts: any[]; //local cache for filter

  // tableResource: ProductModel[] ;
  // public    data: ProductModel[] ;
  public data : any[]; 

  constructor(private productService: ProductService) { 

  this.subscription=this.productService.getAll().subscribe( (products:any[])  => {
  this.filterProducts=this.products=products;
  // this.data=products;
  // console.log("products:");
  // console.log(products);
  // console.log("this.products");
  // console.log(this.products);
  // console.log(this.filterProducts);
  // console.log("this.filterProducts");


  });
  }  

  ngOnInit() {
    
    //recive the item from the firebase by http req
    // this.productService.getWithHttp().subscribe( 
    //   (data:ProductModel[]) =>{ 
    //     console.log( "on-init ");
    //     // console.log(  data );
    //     this.productsTemp=data; 
    //     // console.log( "on-init ");
    //     console.log(  this.productsTemp);
    //   }      
    // );

  //   this.data = [{'name':'Anil', 'anil.singh581@gmail.com' :'ssd', 'age' :'34', 'city':'Noida, UP, India' },
  //   {'name':'Anil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  //   {'name':'Sunil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  //   {'name':'Alok', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  //   {'name':'Tinku', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  //   {'name':'XYZ', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  //   {'name':'asas', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  //   {'name':'erer', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  //   {'name':'jhjh', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' }
  //  ]

  
  this.productService.getAll().subscribe( (products:any[])  => {
    this.data=products;
    console.log(this.data);
  }) ;

  }
  

  ngOnDestroy(){
    this.subscription.unsubscribe();  
  }
 
    
  // work
  filter(query){
    console.log('query is: '+ query); 
    this.filterProducts= (query)? 
      this.products.filter(p=> p.title.toLowerCase().includes(query.toLowerCase())): 
      this.products; 
  }


  
  
}
