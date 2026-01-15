import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-dark text-light py-5 mt-auto">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <h5 class="fw-bold mb-3">
              <i class="fas fa-shopping-bag me-2 text-primary"></i>iCart
            </h5>
            <p class="text-muted mb-3">Your premium destination for exquisite jewelry and fine accessories. We bring you the finest selection of jewelry pieces from around the world.</p>
            <div class="social-links">
              <a href="#" class="btn btn-outline-light btn-sm me-2 mb-2">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="btn btn-outline-light btn-sm me-2 mb-2">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="btn btn-outline-light btn-sm me-2 mb-2">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="btn btn-outline-light btn-sm mb-2">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div class="col-lg-2 col-md-6">
            <h6 class="fw-bold mb-3">Quick Links</h6>
            <ul class="list-unstyled">
              <li class="mb-2"><a routerLink="/" class="text-muted text-decoration-none footer-link">Home</a></li>
              <li class="mb-2"><a routerLink="/products" class="text-muted text-decoration-none footer-link">Products</a></li>
              <li class="mb-2"><a routerLink="/customers" class="text-muted text-decoration-none footer-link">Customers</a></li>
              <li class="mb-2"><a routerLink="/about" class="text-muted text-decoration-none footer-link">About Us</a></li>
              <li class="mb-2"><a routerLink="/contact" class="text-muted text-decoration-none footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div class="col-lg-3 col-md-6">
            <h6 class="fw-bold mb-3">Customer Service</h6>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="#" class="text-muted text-decoration-none footer-link">Privacy Policy</a></li>
              <li class="mb-2"><a href="#" class="text-muted text-decoration-none footer-link">Terms of Service</a></li>
              <li class="mb-2"><a href="#" class="text-muted text-decoration-none footer-link">Shipping Info</a></li>
              <li class="mb-2"><a href="#" class="text-muted text-decoration-none footer-link">Return Policy</a></li>
              <li class="mb-2"><a href="#" class="text-muted text-decoration-none footer-link">FAQ</a></li>
            </ul>
          </div>
          
          <div class="col-lg-3 col-md-6">
            <h6 class="fw-bold mb-3">Contact Info</h6>
            <div class="contact-info">
              <p class="mb-2">
                <i class="fas fa-envelope text-primary me-2"></i>
                <a href="mailto:info@icart.com" class="text-muted text-decoration-none">info@icart.com</a>
              </p>
              <p class="mb-2">
                <i class="fas fa-phone text-primary me-2"></i>
                <a href="tel:+911234567890" class="text-muted text-decoration-none">+91 1234567890</a>
              </p>
              <p class="mb-2">
                <i class="fas fa-map-marker-alt text-primary me-2"></i>
                <span class="text-muted">123, Tech Park<br>Kerala, India</span>
              </p>
              <p class="mb-0">
                <i class="fas fa-clock text-primary me-2"></i>
                <span class="text-muted">Mon-Fri: 9AM-6PM</span>
              </p>
            </div>
          </div>
        </div>
        
        <hr class="my-4 border-secondary">
        
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="mb-0 text-muted">&copy; 2024 iCart. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <p class="mb-0 text-muted">Made with <i class="fas fa-heart text-danger"></i> for great shopping experience</p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer-link {
      transition: color 0.3s ease;
    }
    .footer-link:hover {
      color: #0d6efd !important;
    }
    .social-links .btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    .social-links .btn:hover {
      background-color: #0d6efd;
      border-color: #0d6efd;
      transform: translateY(-2px);
    }
    .contact-info a {
      transition: color 0.3s ease;
    }
    .contact-info a:hover {
      color: #0d6efd !important;
    }
  `]
})
export class FooterComponent {}