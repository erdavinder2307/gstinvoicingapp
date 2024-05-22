import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm: FormGroup = new FormGroup({});
  countries = ['India'

  ];

  constructor(private productService: ProductsService, private router: Router) {

    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      price: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      category: new FormControl('', [Validators.maxLength(20)]),
      imageUrl: new FormControl('', [Validators.maxLength(100)]),
      subCategory: new FormControl('', [Validators.maxLength(300)]),
      brand: new FormControl('', [Validators.maxLength(50)]),
      size: new FormControl('', [Validators.maxLength(50)]),
      color: new FormControl('', [Validators.maxLength(50)]),
      quantity: new FormControl('', [Validators.maxLength(20)]),
      taxType: new FormControl('', [Validators.maxLength(20)]),
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      //append default value for id in the form
      this.productForm.value.id = "";

      // let data = JSON.stringify(this.productForm.value);
      this.productService.createProduct(this.productForm.value).subscribe((res: any) => {

        this.router.navigate(['/product']);
      });
    }
  }

  handleFileInputChange(files: any) {
    debugger;
    const file = files[0];

    //file to base64 to pass it to the backend
    const reader = new FileReader();
    reader.onload = (e: any) => {

      this.productForm.patchValue({
        companyLogo: e.target.result
      });
    };
    reader.readAsDataURL(file);



  }



}
