import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container my-4">
      <div class="text-center mb-5">
        <h2 class="display-5 fw-bold">Our Valued Customers</h2>
        <p class="lead text-muted">Meet some of our amazing customers from around the world</p>
      </div>
      
      <div class="text-center my-5" *ngIf="loading">
        <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-3 text-muted">Loading customer information...</p>
      </div>
      
      <div class="alert alert-danger text-center" *ngIf="error">
        <i class="fas fa-exclamation-triangle me-2"></i>
        <strong>Error:</strong> {{ error }}
        <button class="btn btn-outline-danger btn-sm mt-3" (click)="loadCustomers()">
          <i class="fas fa-redo"></i> Retry
        </button>
      </div>
      
      <!-- Table View -->
      <div *ngIf="!loading && !error && customers.length > 0">
        <div class="table-responsive">
          <table class="table table-hover table-striped">
            <thead class="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Website</th>
                <th scope="col">City</th>
                <th scope="col">Company</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let customer of customers; trackBy: trackByCustomerId">
                <th scope="row">{{ customer.id }}</th>
                <td class="fw-semibold">{{ customer.name }}</td>
                <td><span class="badge bg-secondary">@{{ customer.username }}</span></td>
                <td><a [href]="'mailto:' + customer.email" class="text-decoration-none">{{ customer.email }}</a></td>
                <td><a [href]="'tel:' + customer.phone" class="text-decoration-none">{{ customer.phone }}</a></td>
                <td><a [href]="'https://' + customer.website" target="_blank" class="text-decoration-none">{{ customer.website }}</a></td>
                <td>{{ customer.address?.city }}</td>
                <td>{{ customer.company?.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="text-center py-5" *ngIf="!loading && !error && customers.length === 0">
        <i class="fas fa-users fa-5x text-muted mb-3"></i>
        <h3 class="text-muted">No customers found</h3>
        <p class="text-muted">Unable to load customer information at this time.</p>
        <button class="btn btn-primary" (click)="loadCustomers()">
          <i class="fas fa-redo me-1"></i> Refresh
        </button>
      </div>
    </div>
  `,
  styles: [`
    .table-responsive {
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .table th {
      border: none;
      font-weight: 600;
    }
    .table td {
      border: none;
      vertical-align: middle;
    }
    .table-hover tbody tr:hover {
      background-color: rgba(0, 123, 255, 0.1);
    }
  `]
})
export class CustomersComponent implements OnInit {
  customers: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private apiService: Apiservice) {}

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.loading = true;
    this.error = null;
    
    this.apiService.getCustomers().subscribe({
      next: (customers: any[]) => {
        this.customers = customers || [];
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load customers';
        this.loading = false;
      }
    });
  }

  trackByCustomerId(index: number, customer: any): number {
    return customer.id;
  }
}