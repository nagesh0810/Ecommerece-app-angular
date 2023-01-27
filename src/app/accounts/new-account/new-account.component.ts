import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit{
signupForm: FormGroup;
submitted= false;

constructor(private http:HttpClient, private router:Router, private userService: UserLoginService){}

  ngOnInit(): void {
    
    this.signupForm= new FormGroup({
      firstname: new FormControl(null,[Validators.required,Validators.minLength(5)]),
      lastname: new FormControl(null,[Validators.required,Validators.minLength(4)]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      phone: new FormControl(null,Validators.required),
      gender: new FormControl(null,Validators.required),
      password: new FormControl(null,[Validators.required,Validators.minLength(8)])
    })
  }

  validateForm() { 

    for(let i in this.signupForm.controls)
        this.signupForm.controls[i].markAsTouched();
    
    }

  signUp(){
    this.submitted = true;
    if (this.signupForm.valid) {
      this.http.post<any>('http://localhost:3000/usersdata',this.signupForm.value).subscribe((data:any)=> {
      alert('SignUp Succesfully');
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, error => {
      console.log("Something went worng");
    })
    }
    else{
      this.validateForm()
      alert('Please fill all fields ')
    }
    
  }

 

}
