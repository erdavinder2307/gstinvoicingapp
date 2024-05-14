import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticatedUser()) {
      this.router.navigate(['/dashboard']);
    }
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }


  login() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/dashboard']);
    }
    );
  }





}


