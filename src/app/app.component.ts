import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from './side-nav/side-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gstinvoicapp';
  @ViewChild('sidenav') public sidenav: MatSidenav | any;

  constructor(private sideNavService: SideNavService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.sideNavService.setSidenav(this.sidenav);
  }

}
