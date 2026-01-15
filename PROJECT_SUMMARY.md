# iCart - Professional E-Commerce Website

## Project Overview
A fully functional Angular standalone component e-commerce website for fragrances with professional styling and complete functionality.

## Features Implemented

### 1. **Products Page** (`/products`)
- ✅ Displays products from API: `https://dummyjson.com/products/category/fragrances`
- ✅ Professional card layout with:
  - Product image
  - Title and category
  - Price and discount badge
  - Star ratings
  - Stock information
  - "View Details" button
  - "Add to Cart" button
- ✅ Loading spinner while fetching data
- ✅ Error handling with retry button
- ✅ Success notification when adding to cart
- ✅ Hover effects and animations

### 2. **Customers Page** (`/customers`)
- ✅ Displays customers from API: `https://jsonplaceholder.typicode.com/users`
- ✅ **Two view modes:**
  - **Table View** (default): Professional table with all customer details
  - **Card View**: Modern card layout with customer information
- ✅ Toggle button to switch between views
- ✅ Displays: Name, Username, Email, Phone, Website, City, Company
- ✅ Loading spinner and error handling
- ✅ Clickable email, phone, and website links

### 3. **Product Details Page** (`/products/:id`)
- ✅ Full product information
- ✅ Image gallery with thumbnails
- ✅ Product description, price, rating
- ✅ Brand and stock information
- ✅ Add to Cart functionality
- ✅ Breadcrumb navigation
- ✅ Success notification on cart addition

### 4. **Shopping Cart** (`/cart`)
- ✅ Displays all cart items
- ✅ Quantity controls (increase/decrease)
- ✅ Remove item functionality
- ✅ Clear cart option
- ✅ Order summary with:
  - Subtotal
  - Tax calculation (8%)
  - Total amount
- ✅ Empty cart message with "Start Shopping" button
- ✅ Proceed to Checkout button

### 5. **Navigation Bar**
- ✅ Responsive navbar with all links:
  - Home
  - Products
  - **Customers** (visible and working)
  - About
  - Contact
  - Cart (with item count badge)
- ✅ Real-time cart count updates
- ✅ Mobile-responsive hamburger menu

### 6. **Home Page** (`/`)
- ✅ Hero section with call-to-action
- ✅ Feature highlights (Free Shipping, Premium Quality, 24/7 Support)
- ✅ Statistics section
- ✅ Call-to-action section

### 7. **About Page** (`/about`)
- ✅ Company mission and vision
- ✅ Company story
- ✅ Statistics display
- ✅ Professional layout

### 8. **Contact Page** (`/contact`)
- ✅ Contact information cards
- ✅ Contact form with validation
- ✅ Social media links
- ✅ Success message on form submission

### 9. **Footer**
- ✅ Professional multi-column layout
- ✅ Quick links to all pages
- ✅ Contact information
- ✅ Social media links
- ✅ Copyright information

## Technical Implementation

### Architecture
- **Framework**: Angular (Standalone Components)
- **Styling**: Bootstrap 5.3.2 + Custom CSS
- **Icons**: Font Awesome 6.0.0
- **HTTP Client**: Angular HttpClient with RxJS
- **Routing**: Angular Router

### Key Files

1. **API Service** (`apiservice.ts`)
   - Handles all API calls
   - Error handling with retry logic
   - Cart management with BehaviorSubject
   - Console logging for debugging

2. **App Configuration** (`app.config.ts`)
   - Provides HttpClient
   - Provides Router
   - Provides API Service

3. **Routes** (`app.routes.ts`)
   - All routes properly configured
   - Wildcard route for 404 handling

4. **Components** (All Standalone)
   - AppComponent (root)
   - NavbarComponent
   - FooterComponent
   - HomeComponent
   - ProductsComponent
   - ProductDetailComponent
   - CustomersComponent
   - CartComponent
   - AboutComponent
   - ContactComponent

### Styling Features
- ✅ Gradient backgrounds
- ✅ Smooth animations and transitions
- ✅ Hover effects on cards
- ✅ Shadow effects
- ✅ Responsive design
- ✅ Custom scrollbar
- ✅ Loading spinners
- ✅ Alert notifications

## APIs Used

### Products API
```
Base URL: https://dummyjson.com
Endpoint: /products/category/fragrances
Single Product: /products/{id}
```

### Customers API
```
Base URL: https://jsonplaceholder.typicode.com
Endpoint: /users
```

## How to Run

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   ng serve
   ```

3. **Open Browser**
   ```
   http://localhost:4200
   ```

## Troubleshooting

### If Products Don't Load:
1. Check browser console for errors
2. Verify internet connection
3. Check if API is accessible: https://dummyjson.com/products/category/fragrances
4. Enable debug mode in products.ts: `debugMode = true`

### If Customers Don't Load:
1. Check browser console for errors
2. Verify API is accessible: https://jsonplaceholder.typicode.com/users
3. Enable debug mode in customers.ts: `debugMode = true`

### Common Issues:
- **Port 4200 in use**: Use `ng serve --port 4201`
- **Module errors**: Run `npm install`
- **Build errors**: Check for template syntax errors

## Debug Mode

To enable debug information:
1. Open `products.ts` and set `debugMode = true`
2. Open `customers.ts` and set `debugMode = true`
3. This will show API URLs, counts, and error details at the bottom of pages

## Browser Console Logs

The application logs important information to the console:
- API Service initialization
- Component initialization
- API requests and responses
- Cart operations
- Error messages

Open browser DevTools (F12) to view these logs.

## Features Highlights

### Real-time Cart Updates
- Cart count badge updates immediately when items are added
- Cart page updates in real-time
- Quantity changes reflect instantly

### Error Handling
- Retry buttons on error
- User-friendly error messages
- API URL displayed for debugging
- Fallback images for broken product images

### User Experience
- Loading spinners for better feedback
- Success notifications
- Smooth animations
- Responsive design for all devices
- Accessible navigation

## Project Structure
```
src/app/
├── about/
│   └── about.ts
├── cart/
│   └── cart.ts
├── contact/
│   └── contact.ts
├── customers/
│   └── customers.ts
├── footer/
│   └── footer.ts
├── home/
│   └── home.ts
├── navbar/
│   └── navbar/
│       └── navbar.ts
├── product-detail/
│   └── product-detail/
│       └── product-detail.ts
├── products/
│   └── products.ts
├── apiservice.ts
├── app.component.ts
├── app.config.ts
└── app.routes.ts
```

## Next Steps for Enhancement

1. **Backend Integration**
   - Connect to real backend API
   - Implement user authentication
   - Add payment gateway

2. **Additional Features**
   - Product search and filters
   - User reviews and ratings
   - Wishlist functionality
   - Order history
   - User profile management

3. **Performance**
   - Implement lazy loading
   - Add caching
   - Optimize images

4. **Testing**
   - Unit tests
   - Integration tests
   - E2E tests

## Support

For issues or questions:
1. Check browser console for errors
2. Enable debug mode
3. Verify API endpoints are accessible
4. Check network tab in DevTools

## License

This is a demo project for educational purposes.

---

**Status**: ✅ Fully Functional
**Last Updated**: January 15, 2026
**Version**: 1.0.0
