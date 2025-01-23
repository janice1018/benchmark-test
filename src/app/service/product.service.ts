import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
    productList() {
      return this.http.get<product[]>('https://dummyjson.com/products');
    }
}
