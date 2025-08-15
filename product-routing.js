// Unified Product Routing System for GT86Partz
// This file handles routing for shared product links across all pages

class ProductRouter {
    constructor() {
        this.initializeRouting();
        this.setupProductData();
    }

    // Initialize routing system
    initializeRouting() {
        // Handle URL parameters when page loads
        this.handleURLParameters();
        
        // Setup global product search
        this.setupGlobalProductSearch();
    }

    // Setup product data from all pages
    setupProductData() {
        // Create a global product registry
        window.globalProductRegistry = {};
        
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
            // Wait for page to fully load, then handle product
            setTimeout(() => {
                this.handleProductAccess(productId, slug);
            }, 1500);
        }
    }

    // Handle product access from URL
    handleProductAccess(productId, slug) {
        const product = this.findProductById(productId);
        
        if (product) {
            if (product.category === this.getCurrentPageCategory()) {
                // Product is on current page - highlight it
                this.highlightProductOnCurrentPage(productId);
            } else {
                // Product is on different page - redirect
                this.redirectToProductPage(productId, slug, product.category);
            }
        } else {
            // Product not found - show error or redirect to search
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
        const productCard = document.querySelector(`[data-product-id="${productId}"]`);
        if (productCard) {
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
        
        // Redirect with product parameters
        const redirectUrl = `${targetPage}?product=${productId}${slug ? '&slug=' + slug : ''}`;
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
}

// Initialize product router when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.productRouter = new ProductRouter();
}); 