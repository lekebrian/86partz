# Unified Product Routing System - GT86Partz

## Overview

This document describes the new unified product routing system implemented across all product pages on the GT86Partz website. The system ensures that shared product links work correctly and redirect users to the appropriate products regardless of which page they're on.

## Problem Solved

Previously, the website had copy link functionality that generated URLs like:
```
https://www.86partz.com/general?product=801&slug=hks-gtiii-rs-turbo-pro-kit-with-cat-extension
```

However, these links resulted in 404 errors when clicked because:
1. The routing system wasn't properly implemented
2. Products weren't being found across different pages
3. No automatic redirection was in place

## Solution

The new system implements:

1. **Unified Product Registry**: All products from all pages are registered in a global registry
2. **Smart Routing**: Automatic detection of product location and redirection
3. **Consistent URL Format**: All shared links use the same format: `?product=ID&slug=SLUG`
4. **Cross-Page Navigation**: Links work regardless of which page they're shared from

## How It Works

### 1. Product Registration
When any page loads, the system automatically registers all products in a global registry:

```javascript
window.globalProductRegistry = {
    1: { id: 1, name: "FA24 Engine", category: "engine-drivetrain", ... },
    51: { id: 51, name: "MCS Damper", category: "suspension-handling", ... },
    // ... more products
};
```

### 2. URL Parameter Detection
When someone clicks a shared link, the system detects the product ID:

```javascript
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product'); // e.g., "801"
const slug = urlParams.get('slug'); // e.g., "hks-gtiii-rs-turbo-pro-kit"
```

### 3. Product Location
The system finds the product in the global registry and determines its location:

```javascript
const product = window.globalProductRegistry[productId];
if (product.category !== currentPageCategory) {
    // Redirect to correct page
    redirectToProductPage(productId, slug, product.category);
}
```

### 4. Automatic Redirection
If the product is on a different page, the user is automatically redirected:

```javascript
// Redirect from current page to product page
window.location.href = `${targetPage}?product=${productId}&slug=${slug}`;
```

## Implementation Details

### Files Added/Modified

#### New Files:
- `product-routing.js` - Core routing system
- `test-routing.html` - Test page for functionality verification

#### Modified Files:
- `social-sharing.js` - Updated to use new routing system
- All product page HTML files - Added routing script
- All product JavaScript files - Updated copy link functionality

### Script Loading Order

The routing system must be loaded before other scripts:

```html
<script src="script.js"></script>
<script src="product-routing.js"></script>  <!-- Load this first -->
<script src="social-sharing.js"></script>
<script src="[page]-products.js"></script>
```

## URL Format

### Standard Format
```
https://www.86partz.com/[page].html?product=[ID]&slug=[SLUG]
```

### Examples
```
https://www.86partz.com/engine-drivetrain.html?product=1&slug=subaru-brz-frs-86-fa24-engine
https://www.86partz.com/suspension-handling.html?product=51&slug=mcs-2-way-remote-damper
https://www.86partz.com/brakes-wheels.html?product=101&slug=gram-lights-57dr-wheels
```

### Parameters
- **product**: Required - The unique product ID
- **slug**: Optional - URL-friendly version of product name (auto-generated)

## Product Categories

The system automatically categorizes products based on ID ranges:

| ID Range | Category | Page |
|----------|----------|------|
| 1-50 | Engine & Drivetrain | `engine-drivetrain.html` |
| 51-100 | Suspension & Handling | `suspension-handling.html` |
| 101-150 | Brakes & Wheels | `brakes-wheels.html` |
| 151-200 | Exterior & Aerodynamics | `exterior-aerodynamics.html` |
| 201-250 | Interior & Electronics | `interior-electronics.html` |
| 251-300 | Lighting & Electrical | `lighting-electrical.html` |
| 301-350 | Accessories | `accessories.html` |

## Copy Link Functionality

### How to Copy Links
1. Navigate to any product page
2. Hover over a product card to see the copy link button
3. Click the copy link button
4. The link is automatically copied to clipboard

### What Gets Copied
The system generates a complete URL with:
- Current page path
- Product ID parameter
- Auto-generated slug from product name

### Example Copy Process
```javascript
// User clicks copy link on product ID 801
const link = window.productRouter.generateShareableLink(801, "HKS GTIII-RS Turbo Kit");
// Result: "https://www.86partz.com/engine-drivetrain.html?product=801&slug=hks-gtiii-rs-turbo-kit"
```

## Testing

### Test Page
Use `test-routing.html` to test the routing system:

1. Open the test page
2. Click any of the test links
3. Verify that you're redirected to the correct product
4. Check browser console for routing logs

### Manual Testing
1. Copy a product link from any page
2. Open a new browser tab/window
3. Paste the link and press Enter
4. Verify redirection and product highlighting

## Troubleshooting

### Common Issues

#### 1. Links Not Working
- Check that `product-routing.js` is loaded before other scripts
- Verify that products are being registered in the global registry
- Check browser console for JavaScript errors

#### 2. Wrong Page Redirection
- Verify product ID ranges in the routing logic
- Check that products have correct category assignments
- Ensure product IDs are unique across all pages

#### 3. Copy Link Not Working
- Verify that `window.productRouter` is available
- Check that product data includes name and ID fields
- Ensure clipboard API is supported (fallback available)

### Debug Mode
Enable debug logging by adding this to the console:

```javascript
// Check if routing system is working
console.log('Product Router:', window.productRouter);
console.log('Global Registry:', window.globalProductRegistry);

// Test a specific product
const product = window.productRouter.findProductById(801);
console.log('Product 801:', product);
```

## Performance Considerations

### Memory Usage
- Product registry is loaded once per page
- Minimal memory overhead for small to medium product catalogs
- Registry is cleared when page is unloaded

### Loading Time
- Routing system loads in parallel with other scripts
- No blocking operations during page load
- Product registration happens asynchronously

## Future Enhancements

### Planned Features
1. **SEO-Friendly URLs**: Support for `/product/[id]-[slug]` format
2. **Analytics Integration**: Track shared link usage
3. **Social Media Preview**: Generate Open Graph meta tags for shared products
4. **Deep Linking**: Support for direct product access without page navigation

### Scalability
- System designed to handle thousands of products
- Category-based routing reduces search complexity
- Registry can be extended to support multiple product types

## Support

For technical support or questions about the routing system:

1. Check browser console for error messages
2. Verify script loading order
3. Test with the provided test page
4. Review this documentation for implementation details

## Version History

- **v1.0** - Initial implementation with basic routing
- **v1.1** - Added slug support and improved error handling
- **v1.2** - Enhanced product registry and cross-page navigation 