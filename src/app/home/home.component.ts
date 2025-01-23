import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { product } from '../data-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule],
})
export class HomeComponent implements OnInit {
  productList: undefined|product[];

  constructor(private product:ProductService) {}
  
  ngOnInit(): void {
    this.product.productList().subscribe((response: any) => {
      this.productList = response.products})
  }
  }


