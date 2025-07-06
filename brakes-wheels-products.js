window.CategoryProducts = {
  products: [
    {
      id: 201,
      name: 'Big Brake Kit',
      price: 1299,
      image: 'brake1.jpg',
      images: ['brake1a.jpg', 'brake1b.jpg'],
      description: 'Ultimate stopping power for track and street. Includes calipers, rotors, pads, and lines.'
    },
    {
      id: 202,
      name: 'Ceramic Brake Pads',
      price: 129,
      image: 'brake2.jpg',
      images: ['brake2a.jpg', 'brake2b.jpg'],
      description: 'Low dust, high performance ceramic pads for spirited driving.'
    },
    {
      id: 203,
      name: 'Slotted Rotors (Pair)',
      price: 249,
      image: 'brake3.jpg',
      images: ['brake3a.jpg', 'brake3b.jpg'],
      description: 'Improved cooling and bite for aggressive braking.'
    },
    {
      id: 204,
      name: 'Braided Brake Lines',
      price: 99,
      image: 'brake4.jpg',
      images: ['brake4a.jpg', 'brake4b.jpg'],
      description: 'Stainless steel lines for firmer pedal feel and reliability.'
    },
    {
      id: 205,
      name: 'Performance Wheel Set',
      price: 899,
      image: 'wheel1.jpg',
      images: ['wheel1a.jpg', 'wheel1b.jpg'],
      description: 'Lightweight forged wheels for improved handling and style.'
    },
    {
      id: 206,
      name: 'Wheel Spacers (Set of 4)',
      price: 79,
      image: 'wheel2.jpg',
      images: ['wheel2a.jpg', 'wheel2b.jpg'],
      description: 'Achieve the perfect stance and fitment.'
    },
    {
      id: 207,
      name: 'Lug Nut Set',
      price: 39,
      image: 'wheel3.jpg',
      images: ['wheel3a.jpg', 'wheel3b.jpg'],
      description: 'Durable, lightweight lug nuts for aftermarket wheels.'
    },
    {
      id: 208,
      name: 'TPMS Sensor Kit',
      price: 149,
      image: 'wheel4.jpg',
      images: ['wheel4a.jpg', 'wheel4b.jpg'],
      description: 'Keep your tire pressure monitored with this complete kit.'
    },
    {
      id: 209,
      name: 'Brake Fluid DOT 5.1',
      price: 29,
      image: 'fluid1.jpg',
      images: ['fluid1a.jpg', 'fluid1b.jpg'],
      description: 'High boiling point fluid for extreme conditions.'
    },
    {
      id: 210,
      name: 'Wheel Lock Set',
      price: 49,
      image: 'lock1.jpg',
      images: ['lock1a.jpg', 'lock1b.jpg'],
      description: 'Protect your wheels from theft with these locks.'
    },
    {
      id: 211,
      name: 'Hub Centric Rings',
      price: 19,
      image: 'ring1.jpg',
      images: ['ring1a.jpg', 'ring1b.jpg'],
      description: 'Ensure perfect wheel fitment and eliminate vibrations.'
    },
    {
      id: 212,
      name: 'Brake Duct Kit',
      price: 89,
      image: 'duct1.jpg',
      images: ['duct1a.jpg', 'duct1b.jpg'],
      description: 'Direct airflow to your brakes for maximum cooling.'
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
