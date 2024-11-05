import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router module
import { ProductsService } from '../service/products.service';
import { InvoiceService } from '../service/invoice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'address', 'action'];

  constructor(private productsService: ProductsService, private router: Router, private invoiceService: InvoiceService) { // Inject the Router module
    this.getProductss();
    //this.generateInvoice();
  }

  getProductss() {
    this.productsService.getProducts().subscribe((res: any) => {
      this.dataSource = res;
    });
  }

  editProduct(products: any) {
    this.router.navigate(['/product/edit-product', products.id]);
  }
  deleteProduct(products: any) {
    this.productsService.deleteProduct(products.id).subscribe((res: any) => {
      this.getProductss();
    });
  }

  generateInvoice() {
    this.invoiceService.generateInvoice();
  }


}
function saveAs(data: Blob, arg1: string) {
  throw new Error('Function not implemented.');
}

