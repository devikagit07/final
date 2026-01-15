import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h1 class="display-4 mb-4">Contact Us</h1>
            <p class="lead text-muted">We'd love to hear from you. Get in touch with our team!</p>
          </div>
          
          <div class="row g-4 mb-5">
            <div class="col-md-4 text-center">
              <div class="contact-info-card p-4 h-100">
                <i class="fas fa-envelope fa-3x text-primary mb-3"></i>
                <h5>Email Us</h5>
                <p class="text-muted mb-0">support@icart.com</p>
                <p class="text-muted">info@icart.com</p>
              </div>
            </div>
            
            <div class="col-md-4 text-center">
              <div class="contact-info-card p-4 h-100">
                <i class="fas fa-phone fa-3x text-success mb-3"></i>
                <h5>Call Us</h5>
                <p class="text-muted mb-0">+91 1234567890</p>
                <p class="text-muted">Mon-Fri 9AM-6PM</p>
              </div>
            </div>
            
            <div class="col-md-4 text-center">
              <div class="contact-info-card p-4 h-100">
                <i class="fas fa-map-marker-alt fa-3x text-danger mb-3"></i>
                <h5>Visit Us</h5>
                <p class="text-muted mb-0">123, Tech Park</p>
                <p class="text-muted">Kerala, India</p>
              </div>
            </div>
          </div>
          
          <div class="card shadow-sm">
            <div class="card-body p-4">
              <h3 class="mb-4">Send us a Message</h3>
              <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="name" class="form-label">Full Name *</label>
                    <input type="text" class="form-control" id="name" [(ngModel)]="formData.name" name="name" required>
                  </div>
                  <div class="col-md-6">
                    <label for="email" class="form-label">Email Address *</label>
                    <input type="email" class="form-control" id="email" [(ngModel)]="formData.email" name="email" required>
                  </div>
                  <div class="col-12">
                    <label for="subject" class="form-label">Subject *</label>
                    <input type="text" class="form-control" id="subject" [(ngModel)]="formData.subject" name="subject" required>
                  </div>
                  <div class="col-12">
                    <label for="message" class="form-label">Message *</label>
                    <textarea class="form-control" id="message" rows="5" [(ngModel)]="formData.message" name="message" required></textarea>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary btn-lg" [disabled]="!contactForm.form.valid">
                      <i class="fas fa-paper-plane me-2"></i>Send Message
                    </button>
                  </div>
                </div>
              </form>
              
              <div class="alert alert-success mt-3" *ngIf="messageSent">
                <i class="fas fa-check-circle me-2"></i>
                Thank you for your message! We'll get back to you soon.
              </div>
            </div>
          </div>
          
          <div class="text-center mt-5">
            <h4 class="mb-3">Follow Us</h4>
            <div class="social-links">
              <a href="#" class="btn btn-outline-primary btn-lg me-2">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="btn btn-outline-info btn-lg me-2">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="btn btn-outline-danger btn-lg me-2">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="btn btn-outline-primary btn-lg">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-info-card {
      background: #f8f9fa;
      border-radius: 10px;
      transition: transform 0.3s ease;
    }
    .contact-info-card:hover {
      transform: translateY(-5px);
    }
    .social-links a {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    .social-links a:hover {
      transform: translateY(-3px);
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
  
  messageSent = false;

  onSubmit() {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', this.formData);
    
    // Show success message
    this.messageSent = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.messageSent = false;
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }, 3000);
  }
}