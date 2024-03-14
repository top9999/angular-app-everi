import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products/';

  constructor(private http: HttpClient) { }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}`);
  }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}`);
  }
}