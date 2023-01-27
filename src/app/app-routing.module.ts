import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './accounts/login/login.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';

import { UserProfileComponent } from './accounts/user-profile/user-profile.component';
import { ResetpasswordComponent } from './accounts/verifyemail/resetpassword/resetpassword.component';
import { VerifyemailComponent } from './accounts/verifyemail/verifyemail.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:NewAccountComponent},
  {path:'userprofile', component: UserProfileComponent},
  {path:'verifyemail', component:VerifyemailComponent},
  {path:'restpassword', component:ResetpasswordComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
