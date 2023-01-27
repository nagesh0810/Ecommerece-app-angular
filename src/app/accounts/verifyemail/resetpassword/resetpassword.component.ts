import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {

  resetForm: FormGroup;
  email: string;

  constructor(private http: HttpClient,  private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
    });

    this.resetForm = new FormGroup({
      newPassword: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  resetPassword() {
    const data = {
      email: this.email,
      password: this.resetForm.value.newPassword
    };
    this.http.put(`http://localhost:3000/usersdata/${data.email}`, data)
      .subscribe(response => {
        if (response) {
          alert('Password reset successfully');
        } else {
          alert('Error resetting password, please try again');
        }
      });
  }
}



