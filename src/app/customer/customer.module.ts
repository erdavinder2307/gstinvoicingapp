import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { MaterialModule } from 'src/material.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';



const routes = [
  { path: '', component: CustomerComponent, canActivate: [AuthGuard], },
  { path: 'add-customer', component: AddCustomerComponent, canActivate: [AuthGuard], }
];

@NgModule({
  declarations: [CustomerComponent, AddCustomerComponent],
  imports: [

    CommonModule,
    SharedModule,

    RouterModule.forChild(routes)
  ]
})
export class CustomerModule { }
