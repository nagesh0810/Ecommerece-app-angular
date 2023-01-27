import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem : number = 0;
  public searchTerm !: string;
  user: any;
  loggedinUser:string;

  constructor(private cartService : CartService, private router:Router){}

 ngOnInit(): void {
   this.cartService.getProducts().subscribe(res => {
    this.totalItem = res.length;
   })
 }

 search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  this.cartService.search.next(this.searchTerm);
 }

 loggedIn(){
  this.loggedinUser= localStorage.getItem('user');
  return this.loggedinUser;
 }

 loggedOut(){
  localStorage.removeItem('user');
  this.router.navigate(['login']);
 }
}
