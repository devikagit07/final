import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Apiservice, CartItem } from '../apiservice';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand fw-bold" routerLink="/">iCart</a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/products" routerLinkActive="active">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/customers" routerLinkActive="active">Customers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/about" routerLinkActive="active">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contact" routerLinkActive="active">Contact</a>
            </li>
          </ul>
          
          <div class="d-flex">
            <a class="btn btn-outline-light position-relative" routerLink="/cart">
              <i class="fas fa-shopping-cart"></i> Cart
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" *ngIf="cartItemCount > 0">
                {{cartItemCount}}
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar-brand {
      font-size: 1.5rem;
    }
    .nav-link.active {
      font-weight: bold;
    }
    .badge {
      font-size: 0.7rem;
    }
  `]
})
export class NavbarComponent implements OnInit {
  cartItemCount = 0;

  constructor(private apiService: Apiservice) {}

  ngOnInit() {
    this.apiService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItemCount = items.reduce((count: number, item: CartItem) => count + item.quantity, 0);
    });
  }
}