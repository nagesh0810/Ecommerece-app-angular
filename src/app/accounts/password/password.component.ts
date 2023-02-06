import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
resetPasswordForm: FormGroup;
userFound = false;

constructor(private http: HttpClient, private router:Router) {}

ngOnInit(): void {
this.forgotPasswordForm = new FormGroup({
email: new FormControl(null)
});
this.resetPasswordForm = new FormGroup({
  newPassword: new FormControl(null)
});
}

verifyEmail() {
  this.http.get('http://localhost:3000/usersdata')
  .subscribe((data: any) => {
  const user = data.find((details: any) => {
  return details.email === this.forgotPasswordForm.value.email;
  });
  if (user) {
  this.userFound = true;
  alert('Email is verified')
  } else {
  this.userFound = false;
  alert("User not found"); 
  }
  }, error => {
  console.error(error);
  });
  }

  resetPassword() {
    this.http.get('http://localhost:3000/usersdata')
      .subscribe((data: any) => {
        const user = data.find((details: any) => {
          return details.email === this.forgotPasswordForm.value.email;
        });
        if (user) {
          user.password = this.resetPasswordForm.value.newPassword;
          this.http.patch(`http://localhost:3000/usersdata/${user.id}`,{ password: this.resetPasswordForm.value.newPassword })
            .subscribe((data) => {
              alert('Password reset successful!');
              this.forgotPasswordForm.reset();
              this.router.navigate(['login']);
            }, error => {
              alert("Error updating user data!");
            });
        } else {
          alert("Email not found!");
        }
      }, error => {
        alert("Something went wrong!");
      });
  }
}
