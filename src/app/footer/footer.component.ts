import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer class="bg-dark text-light mt-5">
      <div class="container py-4">
        <div class="row">
          <div class="col-md-4">
            <h5>FragranceShop</h5>
            <p class="text-muted">Your premium destination for luxury fragrances and perfumes.</p>
          </div>
          
          <div class="col-md-4">
            <h6>Quick Links</h6>
            <ul class="list-unstyled">
              <li><a routerLink="/" class="text-muted text-decoration-none">Home</a></li>
              <li><a routerLink="/products" class="text-muted text-decoration-none">Products</a></li>
              <li><a routerLink="/about" class="text-muted text-decoration-none">About</a></li>
              <li><a routerLink="/contact" class="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </div>
          
          <div class="col-md-4">
            <h6>Contact Info</h6>
            <p class="text-muted mb-1">📧 info@fragranceshop.com</p>
            <p class="text-muted mb-1">📞 +1 (555) 123-4567</p>
            <p class="text-muted">📍 123 Fragrance St, Perfume City</p>
          </div>
        </div>
        
        <hr class="my-4">
        
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="text-muted mb-0">&copy; 2024 FragranceShop. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <p class="text-muted mb-0">Built with Angular</p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      margin-top: auto;
    }
    a:hover {
      color: #fff !important;
    }
  `]
})
export class FooterComponent {}