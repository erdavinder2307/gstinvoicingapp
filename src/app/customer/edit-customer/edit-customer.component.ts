import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent {
  customerId: string = '';
  customerForm: FormGroup = new FormGroup({});
  countries = ['India'

  ];

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) {

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
    this.route.paramMap.subscribe(params => {
      this.customerId = params.get('id') || "";

      this.customerService.getCustomerById(this.customerId).subscribe((res: any) => {
        const versionNumber = Math.floor(Math.random() * 10) + 1;
        res.companyLogo = `${res.companyLogo}?v=${versionNumber}`;
        this.customerForm.patchValue(res);
      });
    });


  }

  onSubmit() {
    if (this.customerForm.valid) {
      console.log(this.customerForm.value);

      this.customerForm.value.id = this.customerId;
      // let data = JSON.stringify(this.customerForm.value);
      this.customerService.updateCustomer(this.customerId, this.customerForm.value).subscribe((res: any) => {
        console.log(res);
        this.router.navigate(['/customer']);
      });
    }
  }

  handleFileInputChange(files: any) {


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
