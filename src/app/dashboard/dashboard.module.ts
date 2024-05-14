import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../auth/auth.guard';

const routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard], }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
