import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductModel } from 'src/app/product.module';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$ ; 
  @Input('category') category;
  @Input('products') products;
  @Input('filterProduct') filterProduct;

  @Output() public filterProductEvent = new EventEmitter(); 

  constructor(private catergoryService:CategoryService ) { 
    this.categories$= catergoryService.getAll();
  }

  ngOnInit() {
  }

  onSelect(c){
   
    // this.router.navigate(['/category'],c.id);
    // if(c.name== 'all'){
    //   this.filterProduct=this.products;
    // }else{

    this.category= c.name;
    this.filterProduct = (this.category) ? 
    this.products.filter(p => p.category === this.category): 
    this.products; 
    this.filterProductEvent.emit(this.filterProduct);

  } 
 
  reset(){
    this.filterProductEvent.emit(this.products);
  }
}
