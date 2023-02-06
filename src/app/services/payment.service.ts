import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartService } from './cart.service';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private totalAmount: number;
  
  constructor(private cartService: CartService) {}

  getTotalAmount() {
    this.totalAmount = this.cartService.getTotalPrice();
    return this.totalAmount;
  }
}

