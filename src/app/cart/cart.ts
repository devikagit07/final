import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Apiservice, CartItem } from '../apiservice';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container my-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="mb-0"><i class="fas fa-shopping-cart me-2"></i>Shopping Cart</h2>
        <button class="btn btn-outline-danger" *ngIf="cartItems.length > 0" (click)="clearCart()">
          <i class="fas fa-trash me-1"></i> Clear Cart
        </button>
      </div>
      
      <div *ngIf="cartItems.length > 0">
        <div class="row">
          <div class="col-lg-8">
            <div class="card mb-3 cart-item-card" *ngFor="let item of cartItems; trackBy: trackByProductId">
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col-md-2">
                    <img [src]="item.product.image" 
                         [alt]="item.product.title" 
                         class="img-fluid rounded cart-item-image"
                         (error)="onImageError($event)">
                  </div>
                  <div class="col-md-4">
                    <h5 class="card-title mb-1">{{item.product.title}}</h5>
                    <p class="text-muted small mb-1">{{item.product.category | titlecase}}</p>
                    <p class="text-muted small">{{item.product.description | slice:0:60}}...</p>
                  </div>
                  <div class="col-md-2 text-center">
                    <span class="fw-bold text-primary h5">\${{item.product.price}}</span>
                  </div>
                  <div class="col-md-2 text-center">
                    <div class="quantity-controls">
                      <button class="btn btn-outline-secondary btn-sm" 
                              (click)="updateQuantity(item.product.id, item.quantity - 1)" 
                              [disabled]="item.quantity <= 1">
                        <i class="fas fa-minus"></i>
                      </button>
                      <span class="mx-2 fw-bold">{{item.quantity}}</span>
                      <button class="btn btn-outline-secondary btn-sm" 
                              (click)="updateQuantity(item.product.id, item.quantity + 1)">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="col-md-2 text-center">
                    <div class="d-flex flex-column align-items-center">
                      <span class="fw-bold mb-2">\${{(item.product.price * item.quantity).toFixed(2)}}</span>
                      <button class="btn btn-outline-danger btn-sm" 
                              (click)="removeFromCart(item.product.id)"
                              [title]="'Remove ' + item.product.title + ' from cart'">
                        <i class="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4">
            <div class="card sticky-top" style="top: 20px;">
              <div class="card-header bg-primary text-white">
                <h5 class="mb-0"><i class="fas fa-receipt me-2"></i>Order Summary</h5>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between mb-2">
                  <span>Items ({{getTotalItems()}})</span>
                  <span>\${{getSubtotal().toFixed(2)}}</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span class="text-success">Free</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span>Tax (8%)</span>
                  <span>\${{getTax().toFixed(2)}}</span>
                </div>
                <hr>
                <div class="d-flex justify-content-between mb-3">
                  <strong>Total</strong>
                  <strong class="text-primary h5">\${{getTotal().toFixed(2)}}</strong>
                </div>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary btn-lg" (click)="proceedToCheckout()">
                    <i class="fas fa-credit-card me-2"></i>Proceed to Checkout
                  </button>
                  <button class="btn btn-outline-primary" routerLink="/products">
                    <i class="fas fa-arrow-left me-2"></i>Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div *ngIf="cartItems.length === 0" class="text-center py-5">
        <div class="empty-cart-container">
          <i class="fas fa-shopping-cart fa-5x text-muted mb-4"></i>
          <h3 class="text-muted mb-3">Your cart is empty</h3>
          <p class="text-muted mb-4">Looks like you haven't added any items to your cart yet.</p>
          <a routerLink="/products" class="btn btn-primary btn-lg">
            <i class="fas fa-shopping-bag me-2"></i>Start Shopping
          </a>
        </div>
      </div>

      <!-- Success/Info Messages -->
      <div class="alert alert-success alert-dismissible fade show" *ngIf="showSuccessMessage" role="alert">
        <i class="fas fa-check-circle me-2"></i>
        {{ successMessage }}
        <button type="button" class="btn-close" (click)="showSuccessMessage = false"></button>
      </div>
    </div>
  `,
  styles: [`
    .cart-item-card {
      transition: all 0.3s ease;
      border: none;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .cart-item-card:hover {
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    }
    .cart-item-image {
      height: 80px;
      width: 80px;
      object-fit: cover;
    }
    .quantity-controls {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .quantity-controls button {
      width: 30px;
      height: 30px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .empty-cart-container {
      padding: 3rem 0;
    }
    .btn {
      transition: all 0.2s ease;
    }
    .btn:hover:not(:disabled) {
      transform: translateY(-1px);
    }
    .sticky-top {
      z-index: 1020;
    }
  `]
})
export class Cart implements OnInit, OnDestroy {
  cartItems: CartItem[] = [];
  showSuccessMessage = false;
  successMessage = '';
  private cartSubscription?: Subscription;

  constructor(private apiService: Apiservice) {}

  ngOnInit() {
    this.cartSubscription = this.apiService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  removeFromCart(productId: number) {
    const product = this.cartItems.find(item => item.product.id === productId);
    if (product) {
      this.apiService.removeFromCart(productId);
      this.showMessage(`${product.product.title} removed from cart`);
    }
  }

  updateQuantity(productId: number, newQuantity: number) {
    if (newQuantity > 0) {
      this.apiService.updateQuantity(productId, newQuantity);
    } else {
      this.removeFromCart(productId);
    }
  }

  clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
      this.apiService.clearCart();
      this.showMessage('Cart cleared successfully');
    }
  }

  proceedToCheckout() {
    alert('Checkout functionality would be implemented here. Total: $' + this.getTotal().toFixed(2));
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getSubtotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  getTax(): number {
    return this.getSubtotal() * 0.08;
  }

  getTotal(): number {
    return this.getSubtotal() + this.getTax();
  }

  trackByProductId(index: number, item: CartItem): number {
    return item.product.id;
  }

  onImageError(event: any) {
    event.target.src = 'https://via.placeholder.com/80x80?text=No+Image';
  }

  private showMessage(message: string) {
    this.successMessage = message;
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3000);
  }
}