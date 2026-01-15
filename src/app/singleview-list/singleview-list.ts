import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-singleview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4" *ngIf="product">
      <h2>{{ product.title }}</h2>
      <div class="row mt-3">
        <div class="col-md-4">
          <img [src]="product.image" [alt]="product.title" class="img-fluid" style="object-fit: contain;">
        </div>
        <div class="col-md-8">
          <p><strong>Category:</strong> {{ product.category }}</p>
          <p><strong>Description:</strong> {{ product.description }}</p>
          <p><strong>Price:</strong> \${{ product.price }}</p>
          <button class="btn btn-secondary" (click)="goBack()">Back</button>
        </div>
      </div>
    </div>

    <div *ngIf="loading" class="text-center p-4">
      Loading product details...
    </div>

    <div *ngIf="error" class="text-center text-danger p-4">
      {{ error }}
    </div>
  `
})
export class SingleviewComponent implements OnInit {
  product: any = null;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: Apiservice,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getProductById(id).subscribe({
      next: (data) => {
        this.product = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = 'Failed to load product details';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  goBack() {
    this.router.navigate(['/products']);
  }
}