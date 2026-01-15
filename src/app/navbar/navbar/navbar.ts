import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Apiservice, CartItem } from '../../apiservice';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div class="container">
        <a class="navbar-brand fw-bold" routerLink="/">iCart</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" routerLink="/">Home</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/products">Products</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/customers">Customers</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/about">About</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/contact">Contact</a></li>
            <li class="nav-item">
              <a class="nav-link position-relative" routerLink="/cart">
                Cart
                <span *ngIf="cartItemCount > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {{cartItemCount}}
                  <span class="visually-hidden">items in cart</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
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