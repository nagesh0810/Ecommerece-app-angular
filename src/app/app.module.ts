import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './accounts/login/login.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';
import { FilterPipe } from './pipes/filter.pipe';
import { UserProfileComponent } from './accounts/user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PasswordComponent } from './accounts/password/password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { SliderProductDetailsComponent } from './components/products/slider-product-details/slider-product-details.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentComponent } from './components/payment/payment.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    LoginComponent,
    NewAccountComponent,
    FilterPipe,
    UserProfileComponent,
    PasswordComponent,
    ProductDetailsComponent,
    SliderProductDetailsComponent,
    FooterComponent,
    PaymentComponent
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [{ provide: BsDropdownConfig, useValue: { autoClose: true } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
