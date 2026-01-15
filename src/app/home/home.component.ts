import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="hero-section bg-primary text-white py-5">
      <div class="container text-center">
        <h1 class="display-4 fw-bold mb-4">Welcome to FragranceShop</h1>
        <p class="lead mb-4">Discover the world's finest fragrances and perfumes</p>
        <a routerLink="/products" class="btn btn-light btn-lg">Shop Now</a>
      </div>
    </div>

    <div class="container my-5">
      <div class="row text-center mb-5">
        <div class="col">
          <h2 class="mb-4">Why Choose Us?</h2>
        </div>
      </div>
      
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 text-center border-0 shadow-sm">
            <div class="card-body">
              <div class="mb-3">
                <span class="display-4">🌟</span>
              </div>
              <h5 class="card-title">Premium Quality</h5>
              <p class="card-text">Only the finest fragrances from renowned brands worldwide.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="card h-100 text-center border-0 shadow-sm">
            <div class="card-body">
              <div class="mb-3">
                <span class="display-4">🚚</span>
              </div>
              <h5 class="card-title">Fast Delivery</h5>
              <p class="card-text">Quick and secure shipping to your doorstep.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="card h-100 text-center border-0 shadow-sm">
            <div class="card-body">
              <div class="mb-3">
                <span class="display-4">💯</span>
              </div>
              <h5 class="card-title">Satisfaction Guaranteed</h5>
              <p class="card-text">30-day return policy for your peace of mind.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-light py-5">
      <div class="container text-center">
        <h3 class="mb-4">Ready to Find Your Perfect Scent?</h3>
        <p class="lead mb-4">Browse our collection of premium fragrances</p>
        <a routerLink="/products" class="btn btn-primary btn-lg">Explore Products</a>
      </div>
    </div>
  `,
  styles: [`
    .hero-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .card {
      transition: transform 0.2s;
    }
    .card:hover {
      transform: translateY(-5px);
    }
  `]
})
export class HomeComponent {}