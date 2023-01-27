import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  userUrl='http://localhost:3000/usersdata'

  constructor(private http: HttpClient) {}

  updateUser(user) {
    return this.http.put(`${this.userUrl}/${user.id}`, user).pipe(
      map(res => res)
    );
  }
}
