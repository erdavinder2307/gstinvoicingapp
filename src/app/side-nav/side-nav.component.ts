import { Component, HostListener, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from './side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],

})
export class SideNavComponent {
  isMobileScreen = false;

  constructor() {
    this.isMobileScreen = window.innerWidth < 768;
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    if (width < 768) {
      this.isMobileScreen = true;
    }
  }

}
