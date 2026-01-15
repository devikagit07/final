# Angular E-Commerce Website - Jewelry Store

## Overview
Professional Angular standalone e-commerce website featuring jewelry products from FakeStoreAPI.

## Features
- ✅ Home page with jewelry theme
- ✅ Products page with card layout
- ✅ Product detail view
- ✅ Shopping cart functionality
- ✅ About and Contact pages
- ✅ Responsive navbar and footer
- ✅ Customer management page

## API Configuration
- **Products API**: https://fakestoreapi.com/products/category/jewelery
- **Customers API**: https://jsonplaceholder.typicode.com/users

## Product Model
```typescript
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
```

## Running the Application
```bash
npm install
ng serve
```

Navigate to `http://localhost:4200/`

## Routes
- `/` - Home page
- `/products` - Products listing
- `/products/:id` - Product detail
- `/cart` - Shopping cart
- `/customers` - Customer management
- `/about` - About page
- `/contact` - Contact page

## Key Components
- **ProductsComponent**: Displays jewelry products in card layout
- **ProductDetailComponent**: Shows detailed product information
- **Cart**: Shopping cart with add/remove functionality
- **NavbarComponent**: Navigation with cart counter
- **FooterComponent**: Footer with links and info

## Notes
- Products load from FakeStoreAPI jewelry category
- Cart data persists in localStorage
- All components are standalone (no NgModule)
- Bootstrap 5 for styling
