import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Apiservice } from '../../apiservice';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
})
export class ProductDetailComponent implements OnInit {
  product: any = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: Apiservice,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    console.log('Fetching product ID:', productId);
    
    if (productId) {
      this.loading = true;
      this.apiService.getProductById(+productId).subscribe({
        next: (data: any) => {
          console.log('Product details received:', data);
          this.product = data;
          this.loading = false;
          this.cdr.detectChanges();
          console.log('Loading state:', this.loading);
          console.log('Product loaded:', !!this.product);
        },
        error: (error: any) => {
          console.error('Error loading product:', error);
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    } else {
      console.log('No product ID found');
      this.loading = false;
    }
  }

  addToCart() {
    if (this.product) {
      this.apiService.addToCart(this.product);
      alert(`${this.product.title} added to cart!`);
    }
  }

  goBack() {
    this.router.navigate(['/products']);
  }
}