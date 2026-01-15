import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container mt-4 text-center">
      <h1 class="display-4 fw-bold">Welcome to iCart</h1>
      <p class="lead">Your professional online shopping destination. Explore products, manage your cart, and enjoy seamless shopping!</p>
      <a routerLink="/products" class="btn btn-primary btn-lg mt-3">Shop Now</a>
    </div>
    <div class="container mt-5">
      <div class="row text-center">
        <div class="col-md-4">
          <i class="bi bi-truck display-3 text-primary"></i>
          <h4 class="mt-2">Fast Delivery</h4>
          <p>Get your products delivered quickly at your doorstep.</p>
        </div>
        <div class="col-md-4">
          <i class="bi bi-shield-check display-3 text-primary"></i>
          <h4 class="mt-2">Secure Payment</h4>
          <p>100% secure payment with multiple payment options.</p>
        </div>
        <div class="col-md-4">
          <i class="bi bi-headset display-3 text-primary"></i>
          <h4 class="mt-2">24/7 Support</h4>
          <p>Our team is available anytime to help you with your queries.</p>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {}