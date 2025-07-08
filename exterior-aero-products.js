window.CategoryProducts = {
  products: [
    {
      id: 501,
      name: 'Full Body Kit',
      price: 1599,
      image: 'aero1.jpg',
      images: ['aero1a.jpg', 'aero1b.jpg'],
      description: 'Transform your car with a complete body kit.'
    },
    {
      id: 502,
      name: 'Carbon Fiber Spoiler',
      price: 399,
      image: 'aero2.jpg',
      images: ['aero2a.jpg', 'aero2b.jpg'],
      description: 'Lightweight and stylish carbon fiber spoiler.'
    },
    {
      id: 503,
      name: 'Side Skirts',
      price: 249,
      image: 'aero3.jpg',
      images: ['aero3a.jpg', 'aero3b.jpg'],
      description: 'Aggressive side skirts for a lower look.'
    },
    {
      id: 504,
      name: 'Rear Diffuser',
      price: 179,
      image: 'aero4.jpg',
      images: ['aero4a.jpg', 'aero4b.jpg'],
      description: 'Improve rear-end stability and looks.'
    },
    {
      id: 505,
      name: 'Front Lip Spoiler',
      price: 149,
      image: 'aero5.jpg',
      images: ['aero5a.jpg', 'aero5b.jpg'],
      description: 'Add downforce and style to your front bumper.'
    },
    {
      id: 506,
      name: 'Canard Set',
      price: 89,
      image: 'aero6.jpg',
      images: ['aero6a.jpg', 'aero6b.jpg'],
      description: 'Increase front-end grip with these canards.'
    },
    {
      id: 507,
      name: 'Rear Wing',
      price: 499,
      image: 'aero7.jpg',
      images: ['aero7a.jpg', 'aero7b.jpg'],
      description: 'Track-inspired rear wing for maximum downforce.'
    },
    {
      id: 508,
      name: 'Hood Vents',
      price: 129,
      image: 'aero8.jpg',
      images: ['aero8a.jpg', 'aero8b.jpg'],
      description: 'Reduce under-hood temps and add aggression.'
    },
    {
      id: 509,
      name: 'Wide Fenders',
      price: 399,
      image: 'aero9.jpg',
      images: ['aero9a.jpg', 'aero9b.jpg'],
      description: 'Fit wider wheels and tires with these fenders.'
    },
    {
      id: 510,
      name: 'Roof Spoiler',
      price: 99,
      image: 'aero10.jpg',
      images: ['aero10a.jpg', 'aero10b.jpg'],
      description: 'Subtle roof spoiler for a unique look.'
    },
    {
      id: 511,
      name: 'Mirror Covers',
      price: 59,
      image: 'aero11.jpg',
      images: ['aero11a.jpg', 'aero11b.jpg'],
      description: 'Carbon-look mirror covers for a premium touch.'
    },
    {
      id: 512,
      name: 'Aero Undertray',
      price: 299,
      image: 'aero12.jpg',
      images: ['aero12a.jpg', 'aero12b.jpg'],
      description: 'Reduce drag and improve underbody airflow.'
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
    modal.style.overflowY = 'auto';
    modal.style.maxHeight = '90vh';

    document.getElementById('detailTitle').textContent = product.name;
    document.getElementById('detailPrice').textContent = "$" + product.price;
    document.getElementById('detailDescription').textContent = product.description;
    document.getElementById('detailImages').innerHTML = product.images.map(img =>
      `<img src="${img}" alt="${product.name}" style="width:100px;height:70px;object-fit:cover;margin-right:8px;border-radius:6px;">`
    ).join('');
    // Add quantity controls and Add to Cart button
    let infoDiv = document.getElementById('detailDescription').parentElement;
    let oldControls = document.getElementById('productDetailControls');
    if (oldControls) oldControls.remove();
    const controls = document.createElement('div');
    controls.id = 'productDetailControls';
    controls.style.margin = '1.2em 0 0.7em 0';
    controls.innerHTML = `
      <div style="display:flex;align-items:center;gap:0.7rem;margin-bottom:1.2rem;">
        <button id="qtyDec" style="font-size:1.3rem;width:2.2em;height:2.2em;border-radius:50%;border:1px solid #ddd;background:#fafafa;cursor:pointer;">-</button>
        <span id="qtyVal" style="font-size:1.2rem;min-width:2em;display:inline-block;text-align:center;">1</span>
        <button id="qtyInc" style="font-size:1.3rem;width:2.2em;height:2.2em;border-radius:50%;border:1px solid #ddd;background:#fafafa;cursor:pointer;">+</button>
      </div>
      <button class="btn btn-primary btn-small" id="modalAddToCartBtn" style="width:100%;padding:1rem 0;font-size:1.1rem;background:#b80000;color:#fff;border:none;border-radius:8px;display:block;margin-bottom:0.7rem;">
        Add to Cart
      </button>
    `;
    infoDiv.appendChild(controls);

    // Quantity logic
    let qty = 1;
    const qtyVal = document.getElementById('qtyVal');
    document.getElementById('qtyDec').onclick = function() {
      if (qty > 1) qty--;
      qtyVal.textContent = qty;
    };
    document.getElementById('qtyInc').onclick = function() {
      qty++;
      qtyVal.textContent = qty;
    };

    // Add to Cart logic
    document.getElementById('modalAddToCartBtn').onclick = function() {
      if (typeof addToCart === 'function') {
        addToCart({
          id: product.id,
          title: product.name,
          price: product.price,
          qty: qty,
          image: product.image
        });
      } else {
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
          existing.qty = Number(existing.qty || 0) + qty;
        } else {
          cart.push({ id: product.id, title: product.name, price: product.price, qty: qty, image: product.image });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        if (typeof updateCartCount === 'function') updateCartCount();
      }
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
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

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
  if (document.getElementById('categoryProducts')) {
    window.CategoryProducts.renderProducts(1);
    window.CategoryProducts.setupPagination();
    window.CategoryProducts.setupDetailsModal();
    const page1 = document.getElementById('page1');
    if (page1) page1.classList.add('active');
  }
});
