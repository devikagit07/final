// Quick test to verify DummyJSON API response structure
fetch('https://dummyjson.com/products/category/fragrances')
  .then(response => response.json())
  .then(data => {
    console.log('API Response Structure:', {
      hasProducts: 'products' in data,
      productsLength: data.products ? data.products.length : 0,
      totalProducts: data.total,
      firstProduct: data.products ? data.products[0] : null
    });
  })
  .catch(error => console.error('API Error:', error));