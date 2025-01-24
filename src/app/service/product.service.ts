import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dataType } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  
  productList(): Observable<{ products: dataType[] }> {
    return this.http.get<{ products: dataType[] }>(this.apiUrl);
  }
}
