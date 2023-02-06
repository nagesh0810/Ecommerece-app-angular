import { Component , OnInit} from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { Router } from '@angular/router';
declare var paypal: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  totalAmount: number;
  paymentSuccess=false;

  constructor(private paymentService: PaymentService, private router: Router) {}
    
  ngOnInit(): void {

    this.totalAmount = this.paymentService.getTotalAmount();

    paypal.Buttons({
      createOrder: (_data:any, _actions:any) => {
        return _actions.order.create({
          purchase_units: [{
            amount: {
              value: this.totalAmount
            }
          }]
        });
      },
      onApprove: (_data:any, _actions:any) => {
        return _actions.order.capture().then((details) =>{
          alert('Payment Successful ' + details.payer.name.given_name);
          this.paymentSuccess=true;
          // Call your server to save the transaction
          return fetch('http://localhost:3000/payments', {
            method: 'post',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              orderID: _data.orderID
            })
          });
         
        });
      }
      
    }).render('#paypal-button-container');
    
  }

  goToHome() {
    this.router.navigate(['products']);
  }
}