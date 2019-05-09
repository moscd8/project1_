import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service'; 
import { ProductModel } from 'src/app/product.module';

@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrls: ['./tshirt.component.css']
})
export class TshirtComponent implements OnInit {

  products:ProductModel[];
   
  
  constructor(private productService: ProductService) { 
  }

  getTshirts(){
  
    
  }
  
  ngOnInit() {
    this.productService.getTshirt().subscribe( (products:any[])  => {
      this.products=products; 
      console.log(this.products);
    }) ;
  }
} 

 
 