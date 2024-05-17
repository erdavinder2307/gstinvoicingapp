import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}Authentication`;

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
