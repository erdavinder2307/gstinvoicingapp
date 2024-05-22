import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  productForm: FormGroup = new FormGroup({});
  countries = ['India'

  ];
  productId: string = "";

  constructor(private productService: ProductsService, private router: Router, private route: ActivatedRoute) {

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
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id') || "";

      this.productService.getProductById(this.productId).subscribe((res: any) => {
        // const versionNumber = Math.floor(Math.random() * 10) + 1;
        // res.companyLogo = `${res.companyLogo}?v=${versionNumber}`;
        this.productForm.patchValue(res);
      });
    });
  }

  onSubmit() {
    if (this.productForm.valid) {


      this.productForm.value.id = this.productId;
      // let data = JSON.stringify(this.productForm.value);
      this.productService.updateProduct(this.productId, this.productForm.value).subscribe((res: any) => {

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
