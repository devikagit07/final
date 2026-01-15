import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h1 class="text-center mb-5">About FragranceShop</h1>
          
          <div class="card shadow-sm mb-4">
            <div class="card-body p-5">
              <h3 class="mb-4">Our Story</h3>
              <p class="lead">
                FragranceShop was founded with a simple mission: to bring the world's finest fragrances 
                directly to your doorstep. We believe that the right scent can transform your day, 
                boost your confidence, and create lasting memories.
              </p>
              
              <p>
                Since our inception, we have been committed to curating an exceptional collection of 
                premium fragrances from renowned brands worldwide. Our team of fragrance experts 
                carefully selects each product to ensure authenticity, quality, and uniqueness.
              </p>
            </div>
          </div>

          <div class="row g-4 mb-4">
            <div class="col-md-6">
              <div class="card h-100 border-0 bg-light">
                <div class="card-body text-center p-4">
                  <h4 class="mb-3">🎯 Our Mission</h4>
                  <p>To provide authentic, high-quality fragrances that help people express their unique personality and style.</p>
                </div>
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="card h-100 border-0 bg-light">
                <div class="card-body text-center p-4">
                  <h4 class="mb-3">👁️ Our Vision</h4>
                  <p>To become the most trusted online destination for fragrance enthusiasts worldwide.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card shadow-sm">
            <div class="card-body p-5">
              <h3 class="mb-4">Why Choose Us?</h3>
              <div class="row">
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2">✅ 100% Authentic Products</li>
                    <li class="mb-2">✅ Competitive Pricing</li>
                    <li class="mb-2">✅ Fast & Secure Shipping</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2">✅ Expert Customer Service</li>
                    <li class="mb-2">✅ 30-Day Return Policy</li>
                    <li class="mb-2">✅ Secure Payment Options</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      transition: transform 0.2s;
    }
    .card:hover {
      transform: translateY(-2px);
    }
  `]
})
export class AboutComponent {}