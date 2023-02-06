import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { paymentSchema } from 'paypal-rest-api';

import { LoginComponent } from './accounts/login/login.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';
import { PasswordComponent } from './accounts/password/password.component';
import { UserProfileComponent } from './accounts/user-profile/user-profile.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:NewAccountComponent},
  {path:'userprofile', component: UserProfileComponent},
  {path:'password', component:PasswordComponent},
  {path:'product-details', component:ProductDetailsComponent},
  {path:'slider-product-details', component:ProductDetailsComponent},
  {path:'payment', component:PaymentComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
