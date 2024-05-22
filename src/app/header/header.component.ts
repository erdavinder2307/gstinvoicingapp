import { Component } from '@angular/core';
import { SideNavService } from '../side-nav/side-nav.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../common/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent {
  constructor(private sidenaeService: SideNavService, private authService: AuthService, private dialog: MatDialog, private commonService: CommonService,) { }

  toggleSidenav() {
    this.sidenaeService.toggle();
  }

  confirmLogout() {
    this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { message: 'Are you sure you want to logout?', title: 'Logout' }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.logout();
      }
    });

  }

  logout() {
    this.authService.logout();

  }

  isLoggedIn() {
    return this.authService.isAuthenticatedUser();
  }
}
