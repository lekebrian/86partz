// category-products.js

window.CategoryProducts = {
  products: [
    {
      id: 101,
      name: 'FA24 Engine',
      price: 4300,
      image: '1a.jpg',
      images: ['1b.jpg', '1c.jpg'],
      description: 'Boost your engine performance with this premium turbocharger kit. Includes all necessary hardware for installation.'
    },
    {
      id: 102,
      name: 'Performance Clutch',
      price: 399,
      image: 'logo.jpg',
      images: ['logo.jpg', 'logo.jpg'],
      description: 'High-grip clutch for improved power transfer and durability. Perfect for spirited driving.'
    },
    {
      id: 103,
      name: 'Short Shifter',
      price: 149,
      image: 'logo.jpg',
      images: ['logo.jpg', 'logo.jpg'],
      description: 'Reduce shift throw and enjoy crisp gear changes with this short shifter kit.'
    },
    {
      id: 104,
      name: 'Lightweight Flywheel',
      price: 299,
      image: 'logo.jpg',
      images: ['logo.jpg', 'logo.jpg'],
      description: 'Faster revs and improved throttle response with this lightweight flywheel.'
    },
    {
      id: 105,
      name: 'Limited Slip Differential',
      price: 799,
      image: 'logo.jpg',
      images: ['logo.jpg', 'logo.jpg'],
      description: 'Enhance traction and cornering with a high-quality LSD.'
    },
    {
      id: 106,
      name: 'Cold Air Intake',
      price: 199,
      image: 'logo.jpg',
      images: ['logo.jpg', 'logo.jpg'],
      description: 'Increase horsepower and engine sound with this cold air intake system.'
    },
    {
      id: 107,
      name: 'Oil Cooler Kit',
      price: 249,
      image: 'logo.jpg',
      images: ['logo.jpg', 'logo.jpg'],
      description: 'Keep your engine temps in check with this efficient oil cooler kit.'
    },
    {
      id: 108,
      name: 'Aluminum Radiator',
      price: 279,
      image: 'logo.jpg',
      images: ['logo.jpg', 'logo.jpg'],
      description: 'Improved cooling capacity for track and street use.'
    },
    {
      id: 109,
      name: 'Catback Exhaust',
      price: 599,
      image: 'logo.jpg',
      images: ['logo.jpg', 'logo.jpg'],
      description: 'Aggressive sound and performance gains with this catback exhaust.'
    },
    {
      id: 110,
      name: 'Engine Mounts',
      price: 129,
      image: 'logo.jpg',
      images: ['logo.jpg', 'logo.jpg'],
      description: 'Reduce engine movement and improve response with stiffer mounts.'
    },
    {
      id: 111,
      name: 'Spark Plug Set',
      price: 49,
      image: 'logo.jpg',
      images: ['logo.jpg', 'logo.jpg'],
      description: 'High-performance spark plugs for reliable ignition.'
    },
    {
      id: 112,
      name: 'Fuel Pump Upgrade',
      price: 179,
      image: 'logo.jpg',
      images: ['logo.jpg', 'logo.jpg'],
      description: 'Support higher power levels with this upgraded fuel pump.'
    }
  ],
  productsPerPage: 5,
  currentPage: 1,
  renderProducts: function(page) {
    const grid = document.getElementById('categoryProducts');
    if (!grid) return;
    const start = (page - 1) * this.productsPerPage;
    const end = start + this.productsPerPage;
    const productsToShow = this.products.slice(start, end);
    grid.innerHTML = '';
    productsToShow.forEach((product, idx) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
          <h3 class="product-title">${product.name}</h3>
          <div class="product-price">$${product.price}</div>
          <button class="btn btn-small see-details-btn" data-id="${product.id}">See Details</button>
        </div>
      `;
      grid.appendChild(card);
    });
  },
  setupPagination: function() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    if (!page1 || !page2) return;
    page1.onclick = () => {
      this.currentPage = 1;
      this.renderProducts(1);
      page1.classList.add('active');
      page2.classList.remove('active');
    };
    page2.onclick = () => {
      this.currentPage = 2;
      this.renderProducts(2);
      page2.classList.add('active');
      page1.classList.remove('active');
    };
  },
  setupDetailsModal: function() {
    const grid = document.getElementById('categoryProducts');
    const closeBtn = document.getElementById('closeDetailBtn');
    const backBtn = document.getElementById('backToCatalogBtn');
    if (!grid || !closeBtn || !backBtn) return;
    grid.onclick = function(e) {
      if (e.target.classList.contains('see-details-btn')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        this.showProductDetail(productId);
      }
    }.bind(this);
    closeBtn.onclick = this.hideProductDetail;
    backBtn.onclick = this.hideProductDetail;
  },
  showProductDetail: function(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productDetailModal');
    if (!modal) return;

    modal.innerHTML = `
      <div class="product-detail-content">
          <button class="close-detail" onclick="window.CategoryProducts.hideProductDetail()">&times;</button>
          <div class="product-detail-header">
              <h2>${product.name}</h2>
          </div>
          <div class="product-detail-body">
              <div class="product-images">
                  ${product.images.map(img => `<img src="${img}" alt="${product.name}">`).join("")}
              </div>
              <div class="product-info">
                  <div class="product-price">$${product.price.toFixed(2)}</div>
                  <div class="product-description">${product.description}</div>
                  <div class="quantity-controls">
                      <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                      <input type="number" value="1" min="1" class="quantity-input" id="productQuantity">
                      <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                  </div>
                  <div class="product-actions">
                      <button class="btn btn-primary" onclick="addToCartWithQuantity(${product.id})">
                          Add to Cart
                      </button>
                      <button class="btn btn-secondary" onclick="window.CategoryProducts.hideProductDetail()">Back to Catalog</button>
                  </div>
              </div>
          </div>
      </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },
  hideProductDetail: function() {
    const modal = document.getElementById('productDetailModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
};

document.addEventListener('DOMContentLoaded', function() {
  // Only run if the product grid exists
  if (document.getElementById('categoryProducts')) {
    window.CategoryProducts.renderProducts(1);
    window.CategoryProducts.setupPagination();
    window.CategoryProducts.setupDetailsModal();
    const page1 = document.getElementById('page1');
    if (page1) page1.classList.add('active');
  }
}); 