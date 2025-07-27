// Helper script to update homepage product cards with data-product-id attributes
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.homepage-product-card');
    let productId = 1;
    
    productCards.forEach(card => {
        if (!card.hasAttribute('data-product-id')) {
            card.setAttribute('data-product-id', productId);
            productId++;
        }
    });
}); 