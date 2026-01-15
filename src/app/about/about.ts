import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h1 class="display-4 mb-4">About iCart</h1>
            <p class="lead">Revolutionizing online shopping with quality products and exceptional service.</p>
          </div>
          
          <div class="row g-4 mb-5">
            <div class="col-md-6">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body p-4">
                  <i class="fas fa-bullseye text-primary mb-3" style="font-size: 2.5rem;"></i>
                  <h4>Our Mission</h4>
                  <p>To provide customers with high-quality products at competitive prices while delivering exceptional shopping experiences.</p>
                </div>
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body p-4">
                  <i class="fas fa-eye text-primary mb-3" style="font-size: 2.5rem;"></i>
                  <h4>Our Vision</h4>
                  <p>To become the most trusted e-commerce platform, connecting customers with the products they love worldwide.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-light rounded p-4 mb-5">
            <h3 class="mb-3">Our Story</h3>
            <p>Founded in 2024, iCart began as a small startup with a big dream: to make online shopping simple, secure, and enjoyable for everyone. Today, we serve thousands of customers worldwide, offering a curated selection of products across multiple categories.</p>
            <p class="mb-0">Our team is passionate about technology, customer service, and creating meaningful connections between people and the products that enhance their lives.</p>
          </div>
          
          <div class="row text-center">
            <div class="col-md-4 mb-4">
              <div class="p-3">
                <h2 class="text-primary fw-bold">10K+</h2>
                <p class="mb-0">Happy Customers</p>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="p-3">
                <h2 class="text-primary fw-bold">500+</h2>
                <p class="mb-0">Products</p>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="p-3">
                <h2 class="text-primary fw-bold">24/7</h2>
                <p class="mb-0">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}