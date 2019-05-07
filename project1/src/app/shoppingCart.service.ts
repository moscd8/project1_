import { Injectable } from '@angular/core';

// import { item } from './product/item_OLD';

 
@Injectable()
export class ShoppingCartService
{  
    wasAdded2=false;
    addedItems=[];
        
    constructor(){
    }

    // selectedItem(itemToAdd: item){
    //     if(itemToAdd!= null)
    //     {
    //         this.addedItems.push(itemToAdd);
    //         this.wasAdded2=true;
    //     }

        
    // }
    isEmpty(){
        if(this.addedItems.values.length >0 )
        {
            alert(this.addedItems.values.length);
            // this.wasAdded2=true;
        }    
    }

    // removeItem(itemToRemove){
    //     var addedItems2=[];
    //     if(this.addedItems!= null){
    //         var i=0;
    //         for(let item of this.addedItems)
    //         {
    //             if(itemToRemove != item){
    //                addedItems2.push(item); 
    //             }
    //         }

    //         this.addedItems=addedItems2;
    //         alert(itemToRemove.name + " was removed");
    //     }
    // }
    
    
    
}