# Quick Start Guide - iCart E-Commerce Website

## ✅ What's Working

### 1. Products Page
- **URL**: http://localhost:4200/products
- **API**: https://dummyjson.com/products/category/fragrances
- **Features**: Card layout, View Details, Add to Cart, Ratings, Stock info

### 2. Customers Page  
- **URL**: http://localhost:4200/customers
- **API**: https://jsonplaceholder.typicode.com/users
- **Features**: Table view (default) + Card view toggle
- **Navbar**: ✅ Customers link is visible and working

### 3. Cart
- **URL**: http://localhost:4200/cart
- **Features**: View items, Update quantity, Remove items, Clear cart, Checkout

### 4. Product Details
- **URL**: http://localhost:4200/products/{id}
- **Features**: Full product info, Image gallery, Add to cart

### 5. Other Pages
- Home: http://localhost:4200/
- About: http://localhost:4200/about
- Contact: http://localhost:4200/contact

## 🚀 How to Start

```bash
# Navigate to project directory
cd "c:\Users\Devika Jayaprakash\OneDrive\Desktop\nest\day 5\final"

# Start the server
ng serve

# If port 4200 is busy
ng serve --port 4201
```

## 🔍 Verify Everything Works

1. **Open Browser**: http://localhost:4200

2. **Check Navbar**: Should see Home, Products, Customers, About, Contact, Cart

3. **Test Products**:
   - Click "Products" in navbar
   - Should see fragrance products in cards
   - Click "View Details" on any product
   - Click "Add to Cart"
   - Check cart badge updates

4. **Test Customers**:
   - Click "Customers" in navbar
   - Should see customer table
   - Click "Card View" button to switch views

5. **Test Cart**:
   - Click "Cart" in navbar
   - Should see added products
   - Try quantity controls
   - Try remove button

## 🐛 If Something Doesn't Work

### Products Not Loading?
1. Open browser console (F12)
2. Look for error messages
3. Check if you see: "API Response received:"
4. If you see CORS error, the API might be blocked
5. Try accessing https://dummyjson.com/products/category/fragrances directly in browser

### Customers Not Loading?
1. Open browser console (F12)
2. Look for error messages
3. Check if you see: "Customers loaded:"
4. Try accessing https://jsonplaceholder.typicode.com/users directly in browser

### Enable Debug Mode
In `src/app/products/products.ts`, line 145:
```typescript
debugMode = true; // Change from false to true
```

In `src/app/customers/customers.ts`, line 165:
```typescript
debugMode = true; // Change from false to true
```

This will show debug information at the bottom of the pages.

## 📱 Test on Mobile

The website is fully responsive. Test by:
1. Opening DevTools (F12)
2. Click device toolbar icon
3. Select a mobile device
4. Navbar should show hamburger menu

## ✨ Key Features to Demo

1. **Add to Cart**: 
   - Go to Products
   - Click "Add to Cart" on any product
   - See success notification
   - See cart badge update

2. **View Product Details**:
   - Click "View Details" on any product
   - See full product information
   - Click on thumbnail images to change main image

3. **Manage Cart**:
   - Go to Cart
   - Use +/- buttons to change quantity
   - See total update automatically
   - Try "Clear Cart" button

4. **Customer Views**:
   - Go to Customers
   - Toggle between Table and Card views
   - Click on email/phone/website links

## 🎨 Customization

### Change Primary Color
In `src/styles.css`, line 4:
```css
--primary-color: #0d6efd; /* Change this color */
```

### Change Products API Category
In `src/app/apiservice.ts`, line 53:
```typescript
private categoryUrl = `${this.productsBaseUrl}/products/category/fragrances`;
// Change 'fragrances' to: smartphones, laptops, skincare, etc.
```

## 📊 Console Logs

Open browser console to see:
- "API Service initialized"
- "ProductsComponent initialized"
- "Loading products..."
- "API Response received:"
- "Loaded X products"
- "Adding to cart: [Product Name]"
- "CustomersComponent initialized"
- "Customers loaded:"

## 🎯 Testing Checklist

- [ ] Products page loads with cards
- [ ] Can click "View Details"
- [ ] Can add products to cart
- [ ] Cart badge shows correct count
- [ ] Customers page shows table
- [ ] Can toggle to card view
- [ ] Cart page shows added items
- [ ] Can update quantities
- [ ] Can remove items
- [ ] All navbar links work
- [ ] Footer displays correctly
- [ ] Mobile responsive works

## 💡 Tips

1. **Clear Browser Cache**: If you see old content, clear cache (Ctrl+Shift+Delete)

2. **Check Network Tab**: In DevTools, go to Network tab to see API requests

3. **Console Errors**: Always check console for red error messages

4. **API Status**: Both APIs are public and should work without authentication

## 🆘 Emergency Fixes

### If ng serve fails:
```bash
# Delete node_modules and reinstall
rmdir /s /q node_modules
npm install
ng serve
```

### If port is busy:
```bash
# Use different port
ng serve --port 4201
# or
ng serve --port 4202
```

### If build fails:
```bash
# Clear Angular cache
rmdir /s /q .angular
ng serve
```

## ✅ Success Indicators

You'll know everything is working when:
1. ✅ Products page shows 5 fragrance products
2. ✅ Customers page shows 10 customers
3. ✅ Cart badge updates when adding products
4. ✅ No errors in browser console
5. ✅ All navbar links navigate correctly

## 📞 Quick Reference

- **Products API**: https://dummyjson.com/products/category/fragrances
- **Customers API**: https://jsonplaceholder.typicode.com/users
- **Local URL**: http://localhost:4200
- **Bootstrap**: v5.3.2 (CDN)
- **Font Awesome**: v6.0.0 (CDN)

---

**Ready to go!** Just run `ng serve` and open http://localhost:4200
