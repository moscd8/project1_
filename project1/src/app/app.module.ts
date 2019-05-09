import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
// import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
// import { ProductComponent } from './product/product.component';
// import { productService } from './product/product.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


import { LoginComponent } from './login/login.component';

import { Route } from '@angular/router';
import { CheckoutComponent } from './shopping-cart/checkout/checkout.component';
import { ShoppingCartService } from './shoppingCart.service';
import { IntroComponent } from './intro/intro.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component'; 

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';



import { AngularFireDatabaseModule } from 'angularfire2/database'; 
 
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './shered/services/auth.service';
import { AuthGuardService } from './shered/services/auth-guard.service';
import { UserService } from './shered/services/user.service';
import { AdminAuthGuardService } from './shered/services/admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import {FormsModule } from '@angular/forms';
import { ProductService } from './product.service';    
 
import { HttpClientModule } from '@angular/common/http'; 
import {DataTableModule} from "angular-6-datatable";
import { TshirtComponent } from './product-per-type/tshirt/tshirt.component';

@NgModule({
  declarations: [
    AppComponent, 
    // TestComponent,
    HeaderComponent,
    // ProductComponent,
    ShoppingCartComponent,
    LoginComponent,
    CheckoutComponent,
    IntroComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductFormComponent,
    TshirtComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule ,
    DataTableModule
  ],
  providers: [ShoppingCartService,AuthService, AuthGuardService, UserService,AdminAuthGuardService,CategoryService,ProductService ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
