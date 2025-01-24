import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { dataType } from '../data-type';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  imports: [CommonModule, CardModule],
})
export class ProductCardComponent implements OnInit {
  productList: dataType[] = []; 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts(); 
  }

  private fetchProducts(): void {
    this.productService.productList().subscribe({
      next: (response: { products: dataType[] }) => {
        this.productList = response.products; 
      },
      error: (err: any) => {
        console.error('Error fetching product list:', err);
      },
    });
  }
}