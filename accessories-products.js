window.CategoryProducts = {
  products: [
    {
      id: 801,
      name: 'Leather Steering Wheel Cover',
      price: 29,
      image: 'intacc1.jpg',
      images: ['intacc1a.jpg', 'intacc1b.jpg'],
      description: 'Premium leather cover for comfort and grip.'
    },
    {
      id: 802,
      name: 'Aluminum Gear Shift Knob',
      price: 19,
      image: 'intacc2.jpg',
      images: ['intacc2a.jpg', 'intacc2b.jpg'],
      description: 'Upgrade your shift feel with this stylish knob.'
    },
    {
      id: 803,
      name: 'Custom Fit Sunshade',
      price: 24,
      image: 'intacc3.jpg',
      images: ['intacc3a.jpg', 'intacc3b.jpg'],
      description: 'Protect your interior from sun and heat.'
    },
    {
      id: 804,
      name: 'Luxury Floor Mats',
      price: 89,
      image: 'intacc4.jpg',
      images: ['intacc4a.jpg', 'intacc4b.jpg'],
      description: 'Add a touch of luxury to your car\'s interior.'
    },
    {
      id: 805,
      name: 'Ambient LED Kit',
      price: 49,
      image: 'intacc5.jpg',
      images: ['intacc5a.jpg', 'intacc5b.jpg'],
      description: 'Create a custom mood with interior LED lighting.'
    },
    {
      id: 806,
      name: 'Seat Belt Pads',
      price: 15,
      image: 'intacc6.jpg',
      images: ['intacc6a.jpg', 'intacc6b.jpg'],
      description: 'Increase comfort with padded seat belt covers.'
    },
    {
      id: 807,
      name: 'Phone Mount',
      price: 19,
      image: 'intacc7.jpg',
      images: ['intacc7a.jpg', 'intacc7b.jpg'],
      description: 'Securely mount your phone for navigation.'
    },
    {
      id: 808,
      name: 'Organizer Tray',
      price: 22,
      image: 'intacc8.jpg',
      images: ['intacc8a.jpg', 'intacc8b.jpg'],
      description: 'Keep your center console neat and tidy.'
    },
    {
      id: 809,
      name: 'Pedal Cover Set',
      price: 35,
      image: 'intacc9.jpg',
      images: ['intacc9a.jpg', 'intacc9b.jpg'],
      description: 'Sporty pedal covers for better grip and style.'
    },
    {
      id: 810,
      name: 'Rear Seat Hooks',
      price: 12,
      image: 'intacc10.jpg',
      images: ['intacc10a.jpg', 'intacc10b.jpg'],
      description: 'Hang bags or groceries with these handy hooks.'
    },
    {
      id: 811,
      name: 'Trunk Organizer',
      price: 29,
      image: 'intacc11.jpg',
      images: ['intacc11a.jpg', 'intacc11b.jpg'],
      description: 'Keep your trunk clutter-free and organized.'
    },
    {
      id: 812,
      name: 'Key Fob Cover',
      price: 9,
      image: 'intacc12.jpg',
      images: ['intacc12a.jpg', 'intacc12b.jpg'],
      description: 'Protect and personalize your key fob.'
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
          <div class="product-card-controls">
            <button class="quantity-btn" data-action="dec">-</button>
            <input type="number" value="1" min="1" class="quantity-input" style="width:2.2em;">
            <button class="quantity-btn" data-action="inc">+</button>
            <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
    // Add event listeners for quantity and add to cart
    grid.querySelectorAll('.product-card').forEach((card, idx) => {
      const qtyInput = card.querySelector('.quantity-input');
      card.querySelector('[data-action="dec"]').onclick = () => {
        let v = parseInt(qtyInput.value) || 1;
        if (v > 1) qtyInput.value = v - 1;
      };
      card.querySelector('[data-action="inc"]').onclick = () => {
        let v = parseInt(qtyInput.value) || 1;
        qtyInput.value = v + 1;
      };
      card.querySelector('.add-to-cart-btn').onclick = () => {
        let v = parseInt(qtyInput.value) || 1;
        window.CategoryProducts.addToCart(productsToShow[idx], v);
      };
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
  addToCart: function(product, qty) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.qty = Number(existing.qty || 0) + Number(qty || 1);
    } else {
      cart.push({ id: product.id, title: product.name, price: product.price, qty: Number(qty || 1), image: product.image });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    // Update cart count in header if present
    let totalCount = cart.reduce((sum, item) => Number(sum) + Number(item.qty || 0), 0);
    let cartCount = document.querySelector('.cart-count');
    if (cartCount) cartCount.textContent = totalCount;
    // Confirmation message
    let conf = document.getElementById('cartConfirmMsg');
    if (!conf) {
      conf = document.createElement('div');
      conf.id = 'cartConfirmMsg';
      conf.style.position = 'fixed';
      conf.style.top = '24px';
      conf.style.left = '50%';
      conf.style.transform = 'translateX(-50%)';
      conf.style.background = '#fff';
      conf.style.color = '#222';
      conf.style.border = '1.5px solid #b80000';
      conf.style.borderRadius = '8px';
      conf.style.boxShadow = '0 4px 24px rgba(0,0,0,0.13)';
      conf.style.padding = '1.1em 2.2em';
      conf.style.fontSize = '1.08rem';
      conf.style.fontWeight = '600';
      conf.style.zIndex = '10000';
      conf.style.display = 'none';
      document.body.appendChild(conf);
    }
    conf.innerHTML = `<i class="fas fa-check-circle" style="color:#b80000;margin-right:0.6em;"></i> ${qty} × <b>${product.name}</b> added to cart!`;
    conf.style.display = 'block';
    setTimeout(() => { conf.style.display = 'none'; }, 2200);
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
              <div class="product-images" id="modalProductImgs">
                  ${product.images.map(img => `<img src="${img}" alt="${product.name}" class="modal-img-thumb" style="width:160px;height:110px;object-fit:contain;margin:0.5em;cursor:pointer;border-radius:8px;background:#f7f7f7;border:1px solid #eee;">`).join("")}
              </div>
              <div class="product-info">
                  <div class="product-price">$${product.price.toFixed(2)}</div>
                  <div class="product-description">${product.description}</div>
                  <div class="quantity-controls" style="display:flex;align-items:center;gap:0.7rem;margin-bottom:1.2rem;">
                      <button class="quantity-btn" id="qtyDecModal">-</button>
                      <input type="number" value="1" min="1" class="quantity-input" id="qtyValModal" style="width:2.2em;">
                      <button class="quantity-btn" id="qtyIncModal">+</button>
                  </div>
                  <button class="add-to-cart-btn" id="modalAddToCartBtn" style="width:100%;margin-bottom:0.7rem;">Add to Cart</button>
                  <button class="btn btn-secondary" onclick="window.CategoryProducts.hideProductDetail()">Back to Catalog</button>
              </div>
          </div>
      </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Modal quantity logic
    const qtyInput = modal.querySelector('#qtyValModal');
    modal.querySelector('#qtyDecModal').onclick = () => {
      let v = parseInt(qtyInput.value) || 1;
      if (v > 1) qtyInput.value = v - 1;
    };
    modal.querySelector('#qtyIncModal').onclick = () => {
      let v = parseInt(qtyInput.value) || 1;
      qtyInput.value = v + 1;
    };
    modal.querySelector('#modalAddToCartBtn').onclick = () => {
      let v = parseInt(qtyInput.value) || 1;
      window.CategoryProducts.addToCart(product, v);
    };
    // Lightbox logic
    modal.querySelectorAll('.modal-img-thumb').forEach(img => {
      img.onclick = function() {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-modal';
        lightbox.innerHTML = `<button class='close-lightbox'>&times;</button><img src='${img.src}' style='max-width:90vw;max-height:85vh;'>`;
        document.body.appendChild(lightbox);
        lightbox.querySelector('.close-lightbox').onclick = () => lightbox.remove();
        lightbox.onclick = (e) => { if (e.target === lightbox) lightbox.remove(); };
      };
    });
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
  if (document.getElementById('categoryProducts')) {
    window.CategoryProducts.renderProducts(1);
    window.CategoryProducts.setupPagination();
    window.CategoryProducts.setupDetailsModal();
    const page1 = document.getElementById('page1');
    if (page1) page1.classList.add('active');
  }
});
