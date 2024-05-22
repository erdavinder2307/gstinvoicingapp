import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = `${environment.apiUrl}Products`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl);
  }

  getProductById(id: string): Observable<Products> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Products>(url);
  }

  createProduct(products: Products): Observable<Products> {
    return this.http.post<Products>(this.apiUrl, products);
  }

  updateProduct(id: string, products: Products): Observable<Products> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Products>(url, products);
  }

  deleteProduct(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}

interface Products {

}