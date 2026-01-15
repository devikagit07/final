import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="hero-section text-white py-5">
      <div class="container">
        <div class="row align-items-center min-vh-75">
          <div class="col-lg-6">
            <h1 class="display-3 fw-bold mb-4">Exquisite Jewelry Collection</h1>
            <p class="lead mb-4">Discover our stunning collection of fine jewelry. From elegant necklaces to sparkling rings, find the perfect piece to express your unique style.</p>
            <div class="d-flex gap-3">
              <a routerLink="/products" class="btn btn-light btn-lg px-4">
                <i class="fas fa-shopping-bag me-2"></i>Shop Now
              </a>
              <a routerLink="/about" class="btn btn-outline-light btn-lg px-4">
                <i class="fas fa-info-circle me-2"></i>Learn More
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-image-container">
              <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop" 
                   alt="Jewelry Collection" class="img-fluid rounded shadow-lg hero-image">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="features-section py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-3">Why Choose Us?</h2>
          <p class="lead text-muted">We're committed to providing the finest jewelry and exceptional service</p>
        </div>
        
        <div class="row g-4">
          <div class="col-md-4 text-center">
            <div class="feature-card h-100 p-4">
              <div class="feature-icon mb-3">
                <i class="fas fa-shipping-fast fa-3x text-primary"></i>
              </div>
              <h5 class="fw-bold mb-3">Free Shipping</h5>
              <p class="text-muted">Enjoy free shipping on all orders over $50. Fast and secure delivery to your doorstep.</p>
            </div>
          </div>
          
          <div class="col-md-4 text-center">
            <div class="feature-card h-100 p-4">
              <div class="feature-icon mb-3">
                <i class="fas fa-gem fa-3x text-success"></i>
              </div>
              <h5 class="fw-bold mb-3">Premium Quality</h5>
              <p class="text-muted">100% authentic jewelry with certified gemstones. Quality and authenticity guaranteed.</p>
            </div>
          </div>
          
          <div class="col-md-4 text-center">
            <div class="feature-card h-100 p-4">
              <div class="feature-icon mb-3">
                <i class="fas fa-headset fa-3x text-info"></i>
              </div>
              <h5 class="fw-bold mb-3">24/7 Support</h5>
              <p class="text-muted">Our customer support team is available around the clock to assist you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="stats-section py-5">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-3 mb-4">
            <div class="stat-item">
              <h2 class="display-4 fw-bold text-primary mb-2">10K+</h2>
              <p class="text-muted mb-0">Happy Customers</p>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="stat-item">
              <h2 class="display-4 fw-bold text-success mb-2">500+</h2>
              <p class="text-muted mb-0">Jewelry Pieces</p>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="stat-item">
              <h2 class="display-4 fw-bold text-info mb-2">50+</h2>
              <p class="text-muted mb-0">Designer Brands</p>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="stat-item">
              <h2 class="display-4 fw-bold text-warning mb-2">24/7</h2>
              <p class="text-muted mb-0">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-section py-5 bg-primary text-white">
      <div class="container text-center">
        <h2 class="display-5 fw-bold mb-3">Ready to Find Your Perfect Piece?</h2>
        <p class="lead mb-4">Browse our collection of exquisite jewelry and discover pieces that shine as bright as you do.</p>
        <a routerLink="/products" class="btn btn-light btn-lg px-5">
          <i class="fas fa-arrow-right me-2"></i>Explore Jewelry
        </a>
      </div>
    </div>
  `,
  styles: [`
    .hero-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 70vh;
      display: flex;
      align-items: center;
    }
    .min-vh-75 {
      min-height: 75vh;
    }
    .hero-image-container {
      position: relative;
    }
    .hero-image {
      transition: transform 0.3s ease;
    }
    .hero-image:hover {
      transform: scale(1.05);
    }
    .feature-card {
      background: white;
      border-radius: 15px;
      transition: all 0.3s ease;
      border: none;
      box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    }
    .feature-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    }
    .feature-icon {
      transition: transform 0.3s ease;
    }
    .feature-card:hover .feature-icon {
      transform: scale(1.1);
    }
    .stat-item {
      padding: 2rem 1rem;
    }
    .cta-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .btn {
      transition: all 0.3s ease;
    }
    .btn:hover {
      transform: translateY(-2px);
    }
  `]
})
export class HomeComponent {}