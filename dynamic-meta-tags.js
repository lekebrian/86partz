// Dynamic Meta Tags for Social Media Sharing
class DynamicMetaTags {
    constructor() {
        this.initializeMetaTags();
        this.handleURLParameters();
    }

    // Initialize meta tags
    initializeMetaTags() {
        // Set default meta tags
        this.updateMetaTags({
            title: 'GT86Partz - Premium Automotive Parts & Accessories',
            description: 'Your trusted source for high-quality automotive parts and accessories since 2021.',
            image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-TcqfBd0xwqxL4ERf3OEAf8TdxOYkYL.jpeg',
            url: window.location.href
        });
    }

    // Update meta tags based on product
    updateMetaTags(product) {
        const title = product.title || product.name || 'GT86Partz - Premium Automotive Parts';
        const description = product.description || 'High-quality automotive parts and accessories for your vehicle.';
        const image = product.image || product.images?.[0] || 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-TcqfBd0xwqxL4ERf3OEAf8TdxOYkYL.jpeg';
        const url = window.location.href;

        // Update Open Graph tags
        this.updateMetaTag('og:title', title);
        this.updateMetaTag('og:description', description);
        this.updateMetaTag('og:image', image);
        this.updateMetaTag('og:url', url);

        // Update Twitter Card tags
        this.updateMetaTag('twitter:title', title);
        this.updateMetaTag('twitter:description', description);
        this.updateMetaTag('twitter:image', image);

        // Update page title
        document.title = title;
    }

    // Update individual meta tag
    updateMetaTag(property, content) {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
            meta = document.querySelector(`meta[name="${property}"]`);
        }
        
        if (!meta) {
            meta = document.createElement('meta');
            if (property.startsWith('og:')) {
                meta.setAttribute('property', property);
            } else {
                meta.setAttribute('name', property);
            }
            document.head.appendChild(meta);
        }
        
        meta.setAttribute('content', content);
    }

    // Handle URL parameters to show specific product meta tags
    handleURLParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('product');
        
        if (productId) {
            this.updateMetaTagsForProduct(productId);
        }
    }

    // Update meta tags for specific product
    updateMetaTagsForProduct(productId) {
        // Try to find product in CategoryProducts
        if (window.CategoryProducts && window.CategoryProducts.products) {
            const product = window.CategoryProducts.products.find(p => p.id == productId);
            if (product) {
                this.updateMetaTags(product);
                return;
            }
        }

        // Try to find product in homepage productDetails
        if (window.productDetails) {
            const product = window.productDetails.find(p => p.id == productId);
            if (product) {
                this.updateMetaTags(product);
                return;
            }
        }

        // If product not found, use default meta tags
        this.initializeMetaTags();
    }

    // Update meta tags when product detail modal is opened
    updateMetaTagsForModal(productId) {
        this.updateMetaTagsForProduct(productId);
    }
}

// Initialize dynamic meta tags when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.dynamicMetaTags = new DynamicMetaTags();
});

// Override showProductDetail function to update meta tags
if (window.showProductDetail) {
    const originalShowProductDetail = window.showProductDetail;
    window.showProductDetail = function(id) {
        // Update meta tags for the product
        if (window.dynamicMetaTags) {
            window.dynamicMetaTags.updateMetaTagsForModal(id);
        }
        
        // Call original function
        originalShowProductDetail(id);
    };
} 