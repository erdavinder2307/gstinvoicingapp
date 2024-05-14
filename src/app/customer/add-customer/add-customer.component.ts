import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  customerForm: FormGroup = new FormGroup({});
  countries = ['India'

  ];

  constructor(private customerService: CustomerService) {

    this.customerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      phoneNumber: new FormControl('', [Validators.maxLength(20)]),
      companyName: new FormControl('', [Validators.maxLength(100)]),
      address: new FormControl('', [Validators.maxLength(300)]),
      city: new FormControl('', [Validators.maxLength(50)]),
      state: new FormControl('', [Validators.maxLength(50)]),
      country: new FormControl('', [Validators.maxLength(50)]),
      postalCode: new FormControl('', [Validators.maxLength(20)]),
      gstNumber: new FormControl('', [Validators.maxLength(20)]),
      companyLogo: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.customerForm.valid) {
      console.log(this.customerForm.value);
      //append default value for id in the form
      this.customerForm.value.id = "";

      // let data = JSON.stringify(this.customerForm.value);
      this.customerService.createCustomer(this.customerForm.value).subscribe((res: any) => {
        console.log(res);
      });
    }
  }

  handleFileInputChange(files: any) {
    debugger;
    const file = files[0];
    console.log(file);
    //file to base64 to pass it to the backend
    const reader = new FileReader();
    reader.onload = (e: any) => {
      console.log(e.target.result);
      this.customerForm.patchValue({
        companyLogo: e.target.result
      });
    };
    reader.readAsDataURL(file);



  }



}
