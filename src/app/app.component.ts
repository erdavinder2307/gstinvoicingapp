import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from './side-nav/side-nav.service';
import { AuthService } from './service/auth.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isUserLoggedIn = false;
  title = 'gstinvoicapp';
  @ViewChild('sidenav') public sidenav: MatSidenav | any;

  constructor(private sideNavService: SideNavService, private authService: AuthService, private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isUserLoggedIn = this.authService.isAuthenticatedUser();
    });
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.sideNavService.setSidenav(this.sidenav);
  }

}
