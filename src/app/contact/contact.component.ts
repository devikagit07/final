import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h1 class="text-center mb-5">Contact Us</h1>
          
          <div class="row g-4">
            <div class="col-md-6">
              <div class="card h-100 shadow-sm">
                <div class="card-body p-4">
                  <h4 class="mb-4">Get in Touch</h4>
                  
                  <div class="mb-3">
                    <h6><i class="bi bi-geo-alt"></i> Address</h6>
                    <p class="text-muted">123 Fragrance Street<br>Perfume City, PC 12345</p>
                  </div>
                  
                  <div class="mb-3">
                    <h6><i class="bi bi-telephone"></i> Phone</h6>
                    <p class="text-muted">+1 (555) 123-4567</p>
                  </div>
                  
                  <div class="mb-3">
                    <h6><i class="bi bi-envelope"></i> Email</h6>
                    <p class="text-muted">info@fragranceshop.com</p>
                  </div>
                  
                  <div class="mb-3">
                    <h6><i class="bi bi-clock"></i> Business Hours</h6>
                    <p class="text-muted">
                      Monday - Friday: 9:00 AM - 6:00 PM<br>
                      Saturday: 10:00 AM - 4:00 PM<br>
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="card shadow-sm">
                <div class="card-body p-4">
                  <h4 class="mb-4">Send us a Message</h4>
                  
                  <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
                    <div class="mb-3">
                      <label for="name" class="form-label">Name *</label>
                      <input type="text" class="form-control" id="name" 
                             [(ngModel)]="formData.name" name="name" required>
                    </div>
                    
                    <div class="mb-3">
                      <label for="email" class="form-label">Email *</label>
                      <input type="email" class="form-control" id="email" 
                             [(ngModel)]="formData.email" name="email" required>
                    </div>
                    
                    <div class="mb-3">
                      <label for="subject" class="form-label">Subject *</label>
                      <input type="text" class="form-control" id="subject" 
                             [(ngModel)]="formData.subject" name="subject" required>
                    </div>
                    
                    <div class="mb-3">
                      <label for="message" class="form-label">Message *</label>
                      <textarea class="form-control" id="message" rows="4" 
                                [(ngModel)]="formData.message" name="message" required></textarea>
                    </div>
                    
                    <div class="d-grid">
                      <button type="submit" class="btn btn-primary" 
                              [disabled]="!contactForm.form.valid">
                        Send Message
                      </button>
                    </div>
                  </form>
                  
                  <div *ngIf="submitted" class="alert alert-success mt-3">
                    Thank you for your message! We'll get back to you soon.
                  </div>
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
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  submitted = false;

  onSubmit(): void {
    console.log('Contact form submitted:', this.formData);
    this.submitted = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.submitted = false;
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }, 3000);
  }
}