import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  product;

  constructor(private route: ActivatedRoute, private cartService:CartService, private router:Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.product = JSON.parse(params['product']);
    });
  }

  addTocart(item){
    this.cartService.addtoCart(item);
  }

  backTohome(){
    this.router.navigate(['products']);
  }
  
}
