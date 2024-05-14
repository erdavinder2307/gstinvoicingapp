import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'address', 'action'];

  constructor(private customerService: CustomerService) {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((res: any) => {
      this.dataSource = res;
    });
  }

  editCustomer(customer: any) {
    this.customerService.updateCustomer(customer.id, customer).subscribe((res: any) => {
      console.log(res);
    }
    );
  }
  deleteCustomer(customer: any) {
    this.customerService.deleteCustomer(customer.id).subscribe((res: any) => {
      console.log(res);
    });
  }


}
