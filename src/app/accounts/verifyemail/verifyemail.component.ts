import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.css']
})
export class VerifyemailComponent {

  email: string;
  verifyForm: FormGroup;
  
  constructor(private http: HttpClient, private router:Router) {}

  ngOnInit() {
    this.verifyForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  verifyEmail() {
    this.http.get(`http://localhost:3000/usersdata?email=${this.verifyForm.value.email}`)
      .subscribe(response => {
        if (response) {
          alert('Email verified');
          this.router.navigate(['restpassword'], { queryParams: { email: this.verifyForm.value.email } });
        } else {
          alert('Email not registered with us');
        }
      });
  }
}
