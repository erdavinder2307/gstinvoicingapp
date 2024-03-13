import { Injectable } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  public sideNav: MatDrawer | any;
  constructor() { }
  setSidenav(sideNav: MatDrawer) {
    if (sideNav != undefined) {
      this.sideNav = sideNav;
    }
  }
  open() {
    return this.sideNav.open();
  }
  close() {
    return this.sideNav.close();
  }
  toggle(): void {
    this.sideNav.toggle();
  }


}
