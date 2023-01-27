import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {
 
  constructor(private http: HttpClient) {}

  
}
