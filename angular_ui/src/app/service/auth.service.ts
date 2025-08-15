import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private router:Router) { }

  login(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/login/', user);
  }

  saveTokens(access: string, refresh: string): void {
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
  }

  // Optional: method to get access token
  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  // Optional: method to clear tokens (on logout)
  clearTokens(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  isLoggedIn(): boolean {
    console.log(!!localStorage.getItem('access_token'));
    
    return !!localStorage.getItem('access_token'); // or 'token' depending on what you saved
  }

  logout() {
    this.clearTokens();
    this.router.navigate(['/']); // Redirect to root
  }
}
