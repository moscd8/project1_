import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shoppingCart.service';
import { AuthService } from '../auth.service';
import { Appuser } from '../modules/app-user';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  item=[];
  appUser: Appuser;

  constructor(private scService:ShoppingCartService, private auth: AuthService) { 
    this.item=this.scService.addedItems;
    auth.appUser$.subscribe(appUser => this.appUser= appUser);
 
  }

  ngOnInit() {
    this.item=this.scService.addedItems;
  }

  logout(){

    this.auth.logout();
  }

 }
