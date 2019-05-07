export class product{
 category:string;
 imageUrl:string;
 price:number;
 title:string;
 
 constructor(public categorytemp:string, public imageUrltemp:string, public pricetemp:number, public titletemp:string){
     this.category=categorytemp;
     this.imageUrl=this.imageUrl;
     this.price=pricetemp;
     this.title=titletemp;

 }
}