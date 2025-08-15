// Unified URL Routing and Social Sharing System for GT86Partz
class ProductSharing {
    constructor() {
        this.initializeSharing();
        this.handleURLParameters();
        this.setupGlobalRouting();
    }

    // Initialize sharing functionality
    initializeSharing() {
        this.addShareButtonsToProducts();
        this.addCopyLinkFunctionality();
    }

    // Setup global routing for all pages
    setupGlobalRouting() {
        // Handle direct product access via URL parameters
        this.handleDirectProductAccess();
    }

    // Handle direct product access when someone clicks a shared link
    handleDirectProductAccess() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('product');
        const slug = urlParams.get('slug');
        
        if (productId) {
            // Wait for page to fully load, then show product
            setTimeout(() => {
                this.showProductFromURL(productId, slug);
            }, 1000);
        }
    }

    // Show product when accessed via URL
    showProductFromURL(productId, slug) {
        // Try to find product in current page data
        let product = this.findProductById(productId);
        
        if (product) {
            // Product found on current page - highlight and scroll to it
            this.highlightProduct(productId);
        } else {
            // Product not found on current page - redirect to appropriate page
            this.redirectToProductPage(productId, slug);
        }
    }

    // Find product by ID in current page data
    findProductById(productId) {
        // Check for CategoryProducts first (category pages)
        if (window.CategoryProducts && window.CategoryProducts.products) {
            return window.CategoryProducts.products.find(p => p.id == productId);
        }
        
        // Check for homepage product details
        if (window.productDetails) {
            return window.productDetails.find(p => p.id == productId);
        }

        // Check for specific page product arrays
        if (window.engineDrivetrainProducts && window.engineDrivetrainProducts.products) {
            return window.engineDrivetrainProducts.products.find(p => p.id == productId);
        }
        
        if (window.suspensionHandlingProducts && window.suspensionHandlingProducts.products) {
            return window.suspensionHandlingProducts.products.find(p => p.id == productId);
        }
        
        if (window.brakesWheelsProducts && window.brakesWheelsProducts.products) {
            return window.brakesWheelsProducts.products.find(p => p.id == productId);
        }
        
        if (window.exteriorAeroProducts && window.exteriorAeroProducts.products) {
            return window.exteriorAeroProducts.products.find(p => p.id == productId);
        }
        
        if (window.interiorElectronicsProducts && window.interiorElectronicsProducts.products) {
            return window.interiorElectronicsProducts.products.find(p => p.id == productId);
        }
        
        if (window.lightingElectricalProducts && window.lightingElectricalProducts.products) {
            return window.lightingElectricalProducts.products.find(p => p.id == productId);
        }
        
        if (window.accessoriesProducts && window.accessoriesProducts.products) {
            return window.accessoriesProducts.products.find(p => p.id == productId);
        }
        
        return null;
    }

    // Redirect to appropriate product page
    redirectToProductPage(productId, slug) {
        // Determine which page the product belongs to based on product ID ranges
        // This is a fallback method - ideally each product should have a category field
        let targetPage = 'general.html'; // Default fallback
        
        // You can customize this logic based on your product ID ranges
        if (productId >= 1 && productId <= 50) {
            targetPage = 'engine-drivetrain.html';
        } else if (productId >= 51 && productId <= 100) {
            targetPage = 'suspension-handling.html';
        } else if (productId >= 101 && productId <= 150) {
            targetPage = 'brakes-wheels.html';
        } else if (productId >= 151 && productId <= 200) {
            targetPage = 'exterior-aerodynamics.html';
        } else if (productId >= 201 && productId <= 250) {
            targetPage = 'interior-electronics.html';
        } else if (productId >= 251 && productId <= 300) {
            targetPage = 'lighting-electrical.html';
        } else if (productId >= 301 && productId <= 350) {
            targetPage = 'accessories.html';
        }
        
        // Redirect with product parameters
        const redirectUrl = `${targetPage}?product=${productId}${slug ? '&slug=' + slug : ''}`;
        window.location.href = redirectUrl;
    }

    // Add share buttons to product cards
    addShareButtonsToProducts() {
        // Find all product cards
        const productCards = document.querySelectorAll('.product-card, .homepage-product-card');
        
        productCards.forEach(card => {
            const productId = card.getAttribute('data-product-id');
            if (!productId) return;

            // Create share button container
            const shareContainer = document.createElement('div');
            shareContainer.className = 'product-share-container';
            shareContainer.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                display: flex;
                gap: 5px;
                z-index: 10;
            `;

            // Copy link button
            const copyBtn = this.createShareButton('copy', 'fas fa-link', () => {
                this.copyProductLink(productId);
            });

            shareContainer.appendChild(copyBtn);

            // Add to product card
            card.style.position = 'relative';
            card.appendChild(shareContainer);
        });
    }

    // Create individual share button
    createShareButton(type, iconClass, onClick) {
        const button = document.createElement('button');
        button.className = `share-btn share-btn-${type}`;
        button.innerHTML = `<i class="${iconClass}"></i>`;
        button.style.cssText = `
            width: 32px;
            height: 32px;
            border: none;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            transition: all 0.3s ease;
            backdrop-filter: blur(5px);
        `;

        button.addEventListener('mouseenter', () => {
            button.style.background = 'rgba(184, 0, 0, 0.9)';
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.background = 'rgba(0, 0, 0, 0.7)';
            button.style.transform = 'scale(1)';
        });

        button.addEventListener('click', onClick);
        return button;
    }

    // Copy product link to clipboard
    copyProductLink(productId) {
        const productUrl = this.getProductUrl(productId);
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(productUrl).then(() => {
                this.showNotification('Product link copied to clipboard!', 'success');
            }).catch(() => {
                this.fallbackCopyTextToClipboard(productUrl);
            });
        } else {
            this.fallbackCopyTextToClipboard(productUrl);
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

    // Get product URL with proper format
    getProductUrl(productId) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const baseUrl = window.location.origin + window.location.pathname;
        
        // Create slug from product name if available
        let slug = '';
        const product = this.findProductById(productId);
        if (product && product.name) {
            slug = this.createSlug(product.name);
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

    // Add copy link functionality to product detail modals
    addCopyLinkFunctionality() {
        // Override the existing showProductDetail function to add share buttons
        if (window.showProductDetail) {
            const originalShowProductDetail = window.showProductDetail;
            window.showProductDetail = function(id) {
                originalShowProductDetail(id);
                
                // Add share buttons to modal
                setTimeout(() => {
                    const modal = document.getElementById('productDetailModal');
                    if (modal) {
                        const shareContainer = modal.querySelector('.product-share-container');
                        if (!shareContainer) {
                            const newShareContainer = document.createElement('div');
                            newShareContainer.className = 'product-share-container';
                            newShareContainer.style.cssText = `
                                display: flex;
                                gap: 10px;
                                justify-content: center;
                                margin-top: 15px;
                            `;

                            const copyBtn = this.createShareButton('copy', 'fas fa-link', () => {
                                this.copyProductLink(id);
                            });

                            newShareContainer.appendChild(copyBtn);

                            const modalContent = modal.querySelector('#modalContent');
                            if (modalContent) {
                                modalContent.appendChild(newShareContainer);
                            }
                        }
                    }
                }, 100);
            }.bind(this);
        }
    }

    // Handle URL parameters to show specific products
    handleURLParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('product');
        
        if (productId) {
            // Scroll to the product and highlight it
            setTimeout(() => {
                this.highlightProduct(productId);
            }, 500);
        }
    }

    // Highlight a specific product
    highlightProduct(productId) {
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

    // Show notification
    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.share-notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `share-notification share-notification-${type}`;
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
        if (!document.querySelector('#share-notification-styles')) {
            const style = document.createElement('style');
            style.id = 'share-notification-styles';
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
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize social sharing when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.productSharing = new ProductSharing();
}); 