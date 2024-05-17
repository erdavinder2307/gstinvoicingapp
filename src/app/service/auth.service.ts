import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7004/api/Authentication'; // Replace with your API URL

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    const loginData = {
      email: username,
      password: password
    };

    return this.http.post(`${this.apiUrl}/login`, loginData);
  }

  signup(data: any) {


    return this.http.post(`${this.apiUrl}/signup`, data).subscribe((res) => {


      return res;
    });
  }

  logout() {
    return this.http.post(`${this.apiUrl}/logout`, {}).subscribe((res) => {

      localStorage.removeItem('token');
      this.router.navigate(['/auth']);
    });

  }

  isAuthenticatedUser() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
