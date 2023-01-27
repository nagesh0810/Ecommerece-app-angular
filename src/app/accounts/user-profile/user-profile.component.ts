import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserLoginService } from '../user-login.service';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  // user: any;
  editing = false;

  constructor(private cookieService:CookieService, private userService:UserLoginService,private cdr: ChangeDetectorRef){}
  
  ngOnInit(): void {
    const userCookie = this.cookieService.get('user');
    if (userCookie) {
        const userdata = JSON.parse(userCookie);
        this.user= userdata;
    }
  }

  saveChanges() {
    this.userService.updateUser(this.user).subscribe((updatedUser:any) => {
      this.cookieService.set('user',JSON.stringify(updatedUser));
        localStorage.setItem('user',updatedUser.firstname)
      this.user = updatedUser;
      this.editing = false;
      this.cdr.detectChanges();
    }, error => {
      console.log('Error updating user', error);
    });
  }
  
  cancelEdit() {
    this.editing = false;
  }

}
