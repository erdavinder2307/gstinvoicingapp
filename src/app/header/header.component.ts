import { Component } from '@angular/core';
import { SideNavService } from '../side-nav/side-nav.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private sidenaeService: SideNavService, private authService: AuthService, private router: Router) { }

  toggleSidenav() {
    this.sidenaeService.toggle();
  }

  logout() {
    this.authService.logout();

  }

  isLoggedIn() {
    return this.authService.isAuthenticatedUser();
  }
}
