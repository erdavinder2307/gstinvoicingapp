import { Component } from '@angular/core';
import { InvoiceService } from '../service/invoice.service';

@Component({
  selector: 'app-createinvoice',
  templateUrl: './createinvoice.component.html',
  styleUrls: ['./createinvoice.component.css']
})
export class CreateinvoiceComponent {
  constructor(private invoiceService: InvoiceService) {

  }

  // generateInvoice() {
  //   this.invoiceService.generateInvoice().subscribe((data) => {
  //     console.log(data);
  //   });
  // }

}
