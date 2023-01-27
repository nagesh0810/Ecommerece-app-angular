import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;

  constructor(private http:HttpClient, private router:Router, private cookieService:CookieService){}

  ngOnInit(): void {
    this.loginForm= new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    })
  }

  login(){
    this.http.get('http://localhost:3000/usersdata')
    .subscribe((data:any)=> {
      const user= data.find((details:any) => {
        return details.email=== this.loginForm.value.email && details.password === this.loginForm.value.password
      });
      if(user){
        this.cookieService.set('user',JSON.stringify(user));
        localStorage.setItem('user',user.firstname)
        alert('Login Success!!');
        this.loginForm.reset();
        this.router.navigate(['products']);
      }
      else{
        alert("User not found!!")
      }
    }, error => {
      alert("Something went wrong!!")
    })
  }
}
