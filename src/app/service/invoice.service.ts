import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = `${environment.apiUrl}Invoice`;

  constructor(private http: HttpClient) { }

  generateInvoice() {
    this.http.get(`${this.apiUrl}/generate`, { responseType: 'blob' })
      .subscribe((data: Blob) => {
        saveAs(data, 'invoice.pdf');
      }, error => {
        console.error(error);
      });
  }
}


