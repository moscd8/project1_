import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './product/product.component';
import { IntroComponent } from './intro/intro.component';
import { CheckoutComponent } from './shopping-cart/checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';


const routes: Routes = [ 
  // {path:'home',component: HeaderComponent},
  {path:'login',component:  LoginComponent},
  {path:'shopping-cart',component: ShoppingCartComponent},
  {path:'product',component: ProductComponent},
  {path:'home',component: IntroComponent },

  {path:'check-out',component: CheckoutComponent, canActivate: [AuthGuardService]}, /*   protect this route  */
  {path:'my/orders',component: MyOrdersComponent,canActivate: [AuthGuardService] }, /*   protect this route  */
  {path:'order-success',component: OrderSuccessComponent,canActivate: [AuthGuardService] }, /*   protect this route  */
  
  {
    path:'admin/products/new',
    component: ProductFormComponent,
    canActivate: [AuthGuardService ,AdminAuthGuardService]  
  }, /*   protect this route  */
  {
    path:'admin/products/:id', 
    component: ProductFormComponent,
    canActivate: [AuthGuardService ,AdminAuthGuardService]  
  }, /*   protect this route  */


  {
    path:'admin/products',
    component: AdminProductsComponent ,
    canActivate: [AuthGuardService,AdminAuthGuardService]  
  }, /*   protect this route  */

  {
    path:'admin/orders',
    component: AdminOrdersComponent ,
    canActivate: [AuthGuardService ,AdminAuthGuardService]  
  }, /*   protect this route  */



  
  {path: '', redirectTo:'/home', pathMatch:'full'}
  
];

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
