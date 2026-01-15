import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Apiservice } from '../../apiservice';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  loading = true;
  error = '';

  constructor(private apiService: Apiservice, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe({
      next: (data: any[]) => {
        console.log('Products received:', data);
        this.products = Array.isArray(data) ? data : [];
        this.loading = false;
        this.cdr.detectChanges();
        console.log('Final products count:', this.products.length);
        console.log('Loading state:', this.loading);
      },
      error: (err: any) => {
        console.error('Error loading products:', err);
        this.error = 'Failed to load products';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  addToCart(product: any): void {
    this.apiService.addToCart(product);
    alert(`${product.title} added to cart!`);
  }
}