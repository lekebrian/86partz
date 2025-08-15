// Unified Product Routing System for GT86Partz
// This file handles routing for shared product links across all pages

class ProductRouter {
    constructor() {
        this.initializeRouting();
        this.setupProductData();
    }

    // Initialize routing system
    initializeRouting() {
        // Prevent multiple initializations
        if (window.productRouterInitialized) {
            console.log('Product router already initialized, skipping...');
            return;
        }
        
        // Handle URL parameters when page loads
        this.handleURLParameters();
        
        // Setup global product search
        this.setupGlobalProductSearch();
        
        // Mark as initialized
        window.productRouterInitialized = true;
        console.log('Product router initialized successfully');
    }

    // Setup product data from all pages
    setupProductData() {
        // Create a global product registry
        window.globalProductRegistry = {};
        
        // Clear any lingering redirect flags to prevent loops
        this.clearRedirectFlags();
        
        // Register products from different pages
        this.registerPageProducts();
    }

    // Register products from different pages
    registerPageProducts() {
        // Engine & Drivetrain products
        if (window.engineDrivetrainProducts && window.engineDrivetrainProducts.products) {
            window.engineDrivetrainProducts.products.forEach(product => {
                this.registerProduct(product, 'engine-drivetrain');
            });
        }

        // Suspension & Handling products
        if (window.suspensionHandlingProducts && window.suspensionHandlingProducts.products) {
            window.suspensionHandlingProducts.products.forEach(product => {
                this.registerProduct(product, 'suspension-handling');
            });
        }

        // Brakes & Wheels products
        if (window.brakesWheelsProducts && window.brakesWheelsProducts.products) {
            window.brakesWheelsProducts.products.forEach(product => {
                this.registerProduct(product, 'brakes-wheels');
            });
        }

        // Exterior & Aerodynamics products
        if (window.exteriorAeroProducts && window.exteriorAeroProducts.products) {
            window.exteriorAeroProducts.products.forEach(product => {
                this.registerProduct(product, 'exterior-aerodynamics');
            });
        }

        // Interior & Electronics products
        if (window.interiorElectronicsProducts && window.interiorElectronicsProducts.products) {
            window.interiorElectronicsProducts.products.forEach(product => {
                this.registerProduct(product, 'interior-electronics');
            });
        }

        // Lighting & Electrical products
        if (window.lightingElectricalProducts && window.lightingElectricalProducts.products) {
            window.lightingElectricalProducts.products.forEach(product => {
                this.registerProduct(product, 'lighting-electrical');
            });
        }

        // Accessories products
        if (window.accessoriesProducts && window.accessoriesProducts.products) {
            window.accessoriesProducts.products.forEach(product => {
                this.registerProduct(product, 'accessories');
            });
        }

        // Homepage products
        if (window.productDetails) {
            window.productDetails.forEach(product => {
                this.registerProduct(product, 'homepage');
            });
        }

        // General inventory products
        if (window.generalInventoryProducts) {
            window.generalInventoryProducts.forEach(product => {
                this.registerProduct(product, 'general');
            });
        }
        
        // Category products (used by general.html and other category pages)
        if (window.CategoryProducts && window.CategoryProducts.products) {
            window.CategoryProducts.products.forEach(product => {
                // Determine category based on current page context
                let category = this.getCurrentPageCategory();
                console.log(`Current page category: ${category}, Product ID: ${product.id}`);
                
                // Only use ID-based categorization for homepage or if current category is unknown
                if (category === 'homepage' || category === 'unknown') {
                    if (product.id >= 1 && product.id <= 50) category = 'engine-drivetrain';
                    else if (product.id >= 51 && product.id <= 100) category = 'suspension-handling';
                    else if (product.id >= 101 && product.id <= 150) category = 'brakes-wheels';
                    else if (product.id >= 151 && product.id <= 200) category = 'exterior-aerodynamics';
                    else if (product.id >= 201 && product.id <= 250) category = 'interior-electronics';
                    else if (product.id >= 251 && product.id <= 300) category = 'lighting-electrical';
                    else if (product.id >= 301 && product.id <= 350) category = 'accessories';
                    else if (product.id >= 501 && product.id <= 550) category = 'exterior-aerodynamics';
                    else if (product.id >= 551 && product.id <= 600) category = 'interior-electronics';
                    else if (product.id >= 601 && product.id <= 650) category = 'accessories';
                    else if (product.id >= 801 && product.id <= 900) category = 'general';
                    console.log(`Using ID-based categorization for product ${product.id}: ${category}`);
                } else {
                    console.log(`Keeping product ${product.id} in current page category: ${category}`);
                }
                
                this.registerProduct(product, category);
            });
        }
    }

    // Register a product in the global registry
    registerProduct(product, category) {
        if (product && product.id) {
            window.globalProductRegistry[product.id] = {
                ...product,
                category: category
            };
        }
    }

    // Handle URL parameters
    handleURLParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('product');
        const slug = urlParams.get('slug');
        
        if (productId) {
            // Clear any redirect flags for this product to allow proper highlighting
            const redirectKey = `redirected_${productId}`;
            sessionStorage.removeItem(redirectKey);
            
            // Wait for page to fully load, then handle product
            setTimeout(() => {
                this.handleProductAccess(productId, slug);
            }, 1500);
            
            // Clear all redirect flags after successful page load to prevent future loops
            setTimeout(() => {
                this.clearRedirectFlags();
            }, 2000);
        }
    }

    // Handle product access from URL
    handleProductAccess(productId, slug) {
        const product = this.findProductById(productId);
        
        if (product) {
            const currentCategory = this.getCurrentPageCategory();
            console.log(`Product ${productId} found in category: ${product.category}, current page: ${currentCategory}`);
            
            // Check if we're already on the correct page
            if (product.category === currentCategory || 
                (currentCategory === 'homepage' && product.category === 'homepage') ||
                (currentCategory === 'general' && product.category === 'general')) {
                // Product is on current page - highlight it
                console.log(`Product ${productId} is on current page, highlighting...`);
                this.highlightProductOnCurrentPage(productId);
            } else {
                // Product is on different page - redirect
                console.log(`Redirecting from ${currentCategory} to ${product.category}`);
                this.redirectToProductPage(productId, slug, product.category);
            }
        } else {
            // Product not found - show error or redirect to search
            console.warn(`Product ${productId} not found in global registry`);
            this.handleProductNotFound(productId);
        }
    }

    // Find product by ID in global registry
    findProductById(productId) {
        return window.globalProductRegistry[productId] || null;
    }

    // Get current page category
    getCurrentPageCategory() {
        const path = window.location.pathname;
        if (path.includes('engine-drivetrain')) return 'engine-drivetrain';
        if (path.includes('suspension-handling')) return 'suspension-handling';
        if (path.includes('brakes-wheels')) return 'brakes-wheels';
        if (path.includes('exterior-aerodynamics')) return 'exterior-aerodynamics';
        if (path.includes('interior-electronics')) return 'interior-electronics';
        if (path.includes('lighting-electrical')) return 'lighting-electrical';
        if (path.includes('accessories')) return 'accessories';
        if (path.includes('general')) return 'general';
        if (path === '/' || path.includes('index')) return 'homepage';
        return 'unknown';
    }

    // Highlight product on current page
    highlightProductOnCurrentPage(productId) {
        // Try multiple selectors to find the product card
        let productCard = document.querySelector(`[data-product-id="${productId}"]`);
        
        if (!productCard) {
            // Try alternative selectors
            productCard = document.querySelector(`[data-id="${productId}"]`);
        }
        
        if (!productCard) {
            // Try finding by product title or other attributes
            productCard = document.querySelector(`[onclick*="showProductDetail(${productId})"]`);
        }
        
        if (productCard) {
            console.log(`Found product card for ID ${productId}, highlighting...`);
            
            // Scroll to product
            productCard.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });

            // Add highlight effect
            productCard.style.boxShadow = '0 0 20px rgba(184, 0, 0, 0.5)';
            productCard.style.transform = 'scale(1.02)';
            productCard.style.transition = 'all 0.3s ease';

            // Remove highlight after 3 seconds
            setTimeout(() => {
                productCard.style.boxShadow = '';
                productCard.style.transform = '';
            }, 3000);
        } else {
            console.warn(`Product card not found for ID ${productId}`);
        }
    }

    // Redirect to product page
    redirectToProductPage(productId, slug, category) {
        let targetPage = 'general.html'; // Default fallback
        
        // Map category to page
        const categoryPages = {
            'engine-drivetrain': 'engine-drivetrain.html',
            'suspension-handling': 'suspension-handling.html',
            'brakes-wheels': 'brakes-wheels.html',
            'exterior-aerodynamics': 'exterior-aerodynamics.html',
            'interior-electronics': 'interior-electronics.html',
            'lighting-electrical': 'lighting-electrical.html',
            'accessories': 'accessories.html',
            'general': 'general.html',
            'homepage': 'index.html'
        };
        
        targetPage = categoryPages[category] || targetPage;
        
        // Prevent redirect loops by checking if we're already on the target page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        if (currentPage === targetPage) {
            console.log(`Already on target page ${targetPage}, highlighting product instead`);
            this.highlightProductOnCurrentPage(productId);
            return;
        }
        
        // Additional loop prevention: check if we've already redirected for this product
        const redirectKey = `redirected_${productId}`;
        if (sessionStorage.getItem(redirectKey)) {
            console.log(`Already redirected for product ${productId}, highlighting instead`);
            this.highlightProductOnCurrentPage(productId);
            return;
        }
        
        // Final safety check: prevent redirects if we're in a loop
        const redirectCount = parseInt(sessionStorage.getItem('redirect_count') || '0');
        if (redirectCount > 3) {
            console.warn(`Too many redirects detected, highlighting product instead`);
            this.highlightProductOnCurrentPage(productId);
            sessionStorage.removeItem('redirect_count');
            return;
        }
        
        // Mark this product as redirected to prevent loops
        sessionStorage.setItem(redirectKey, 'true');
        sessionStorage.setItem('redirect_count', (redirectCount + 1).toString());
        
        // Redirect with product parameters
        const redirectUrl = `${targetPage}?product=${productId}${slug ? '&slug=' + slug : ''}`;
        console.log(`Redirecting to: ${redirectUrl}`);
        window.location.href = redirectUrl;
    }

    // Handle product not found
    handleProductNotFound(productId) {
        console.warn(`Product with ID ${productId} not found in global registry`);
        // Could redirect to search page or show error message
    }

    // Setup global product search
    setupGlobalProductSearch() {
        // Add global search functionality if needed
        if (window.searchProducts) {
            const originalSearch = window.searchProducts;
            window.searchProducts = function(query) {
                // Search in global registry
                const results = Object.values(window.globalProductRegistry).filter(product => 
                    product.name.toLowerCase().includes(query.toLowerCase()) ||
                    (product.description && product.description.toLowerCase().includes(query.toLowerCase()))
                );
                
                return results;
            };
        }
    }

    // Generate shareable link for a product
    generateShareableLink(productId, productName = '') {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const baseUrl = window.location.origin + window.location.pathname;
        
        // Create slug from product name if available
        let slug = '';
        if (productName) {
            slug = this.createSlug(productName);
        }
        
        // Return URL in format: ?product=ID&slug=SLUG
        if (slug) {
            return `${baseUrl}?product=${productId}&slug=${slug}`;
        } else {
            return `${baseUrl}?product=${productId}`;
        }
    }

    // Create URL-friendly slug from product name
    createSlug(text) {
        return text
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-') // Replace multiple hyphens with single
            .trim();
    }

    // Copy product link to clipboard
    copyProductLink(productId, productName = '') {
        const link = this.generateShareableLink(productId, productName);
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(link).then(() => {
                this.showNotification('Product link copied to clipboard!', 'success');
            }).catch(() => {
                this.fallbackCopyTextToClipboard(link);
            });
        } else {
            this.fallbackCopyTextToClipboard(link);
        }
    }

    // Fallback copy method for older browsers
    fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            this.showNotification('Product link copied to clipboard!', 'success');
        } catch (err) {
            this.showNotification('Failed to copy link', 'error');
        }
        
        document.body.removeChild(textArea);
    }

    // Show notification
    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.routing-notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `routing-notification routing-notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
            color: white;
            padding: 12px 20px;
            border-radius: 5px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            font-size: 14px;
            font-weight: 500;
            animation: slideInRight 0.3s ease;
        `;

        // Add animation keyframes
        if (!document.querySelector('#routing-notification-styles')) {
            const style = document.createElement('style');
            style.id = 'routing-notification-styles';
            style.textContent = `
                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
    }
    
    // Clear redirect flags to prevent loops
    clearRedirectFlags() {
        const keys = Object.keys(sessionStorage);
        keys.forEach(key => {
            if (key.startsWith('redirected_')) {
                sessionStorage.removeItem(key);
            }
        });
        
        // Also clear redirect count
        sessionStorage.removeItem('redirect_count');
        
        console.log('Cleared redirect flags and count');
    }
}

// Initialize product router when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.productRouter = new ProductRouter();
}); 