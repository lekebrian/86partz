// Social Media Sharing Functionality
class ProductSharing {
    constructor() {
        this.initializeSharing();
        this.handleURLParameters();
    }

    // Initialize sharing functionality
    initializeSharing() {
        // Add share buttons to all product cards
        this.addShareButtonsToProducts();
        
        // Add copy link functionality
        this.addCopyLinkFunctionality();
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

            // Instagram share button
            const instagramBtn = this.createShareButton('instagram', 'fab fa-instagram', () => {
                this.shareToInstagram(productId);
            });

            // Facebook share button
            const facebookBtn = this.createShareButton('facebook', 'fab fa-facebook-f', () => {
                this.shareToFacebook(productId);
            });

            // Copy link button
            const copyBtn = this.createShareButton('copy', 'fas fa-link', () => {
                this.copyProductLink(productId);
            });

            shareContainer.appendChild(instagramBtn);
            shareContainer.appendChild(facebookBtn);
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

    // Share to Instagram
    shareToInstagram(productId) {
        const productUrl = this.getProductUrl(productId);
        const product = this.getProductById(productId);
        
        if (product) {
            // Instagram doesn't support direct sharing via URL, so we'll copy the link
            this.copyProductLink(productId);
            this.showNotification('Product link copied! Share it on Instagram', 'success');
        }
    }

    // Share to Facebook
    shareToFacebook(productId) {
        const productUrl = this.getProductUrl(productId);
        const product = this.getProductById(productId);
        
        if (product) {
            const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`;
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
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

    // Get product URL
    getProductUrl(productId) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        return `${window.location.origin}${window.location.pathname}?product=${productId}`;
    }

    // Get product by ID
    getProductById(productId) {
        // Check for CategoryProducts first (category pages)
        if (window.CategoryProducts && window.CategoryProducts.products) {
            return window.CategoryProducts.products.find(p => p.id == productId);
        }
        
        // Check for homepage product details
        if (window.productDetails) {
            return window.productDetails.find(p => p.id == productId);
        }
        
        return null;
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

                            const instagramBtn = this.createShareButton('instagram', 'fab fa-instagram', () => {
                                this.shareToInstagram(id);
                            });

                            const facebookBtn = this.createShareButton('facebook', 'fab fa-facebook-f', () => {
                                this.shareToFacebook(id);
                            });

                            const copyBtn = this.createShareButton('copy', 'fas fa-link', () => {
                                this.copyProductLink(id);
                            });

                            newShareContainer.appendChild(instagramBtn);
                            newShareContainer.appendChild(facebookBtn);
                            newShareContainer.appendChild(copyBtn);

                            const modalContent = modal.querySelector('#modalContent');
                            modalContent.appendChild(newShareContainer);
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