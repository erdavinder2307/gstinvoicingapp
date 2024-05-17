import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router module
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'address', 'action'];

  constructor(private customerService: CustomerService, private router: Router) { // Inject the Router module
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((res: any) => {
      this.dataSource = res;
    });
  }

  editCustomer(customer: any) {
    this.router.navigate(['/customer/edit-customer', customer.id]);
  }
  deleteCustomer(customer: any) {
    this.customerService.deleteCustomer(customer.id).subscribe((res: any) => {
      console.log(res);
      this.getCustomers();
    });
  }


}
