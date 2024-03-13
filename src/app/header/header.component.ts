import { Component } from '@angular/core';
import { SideNavService } from '../side-nav/side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private sidenaeService: SideNavService) { }

  toggleSidenav() {
    this.sidenaeService.toggle();
  }
}
