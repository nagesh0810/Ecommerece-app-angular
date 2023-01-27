import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface PasswordResetResponse {
  success: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  sendPasswordResetCode(email: string): Observable<PasswordResetResponse> {
    return this.http.post<PasswordResetResponse>('/api/send-reset-code', { email });
  }

  resetPassword(email: string, code: string, password: string): Observable<PasswordResetResponse> {
    return this.http.post<PasswordResetResponse>('/api/reset-password', { email, code, password });
  }
}
