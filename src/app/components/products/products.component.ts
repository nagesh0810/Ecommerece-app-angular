import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList:any =[];
public filterCategory : any;
  searchKey:string='';
  productSlider:any=[];
  selectedProduct:any=[];
  constructor(private api:ApiService , private cartService:CartService, private http:HttpClient,
    private router:Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList=res;
      this.filterCategory=res;
      this.productList.forEach((a:any) => {
        if(a.category==="women's clothing" || a.category === "men's clothing") {
          a.category = "fashion"
        }
        Object.assign(a,{quatity:1 , total:a.price});
      });
    })
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })

    this.api.popularProducts().subscribe((data:any) => {
      this.productSlider= data;
    })
  }

  addtocart(item:any){
    this.cartService.addtoCart(item);
  }

  filter(category:string){
    this.filterCategory = this.productList.filter((a:any)=>{
      if(a.category == category || category == ''){
        return a;
      }
    })
  }

  viewDetails(item) {
    this.router.navigate(['/product-details'], { queryParams: { product: JSON.stringify(item) } });
  }
  productDetails(item){
    this.router.navigate(['/slider-product-details'], { queryParams: { product: JSON.stringify(item) } });
  }

}
