window.CategoryProducts = {
  products: [
    {
      id: 201,
      name: 'Set of Circuit CSF1 wheels in matte bronze',
      price: 1190,
      image: '17a.jpg',
      images: ['17b.jpg', '17c.jpg'],
      description: `Selling a like-new set of Circuit CSF1 wheels in matte bronze, sized 18x9.5 with a +38 offset and 5x100 bolt pattern. Wrapped in Falken Ziex 225/40 tyres, this setup offers a clean, aggressive fitment perfect for 5x100 platforms. Lightly used and in excellent condition. Shipping available upon request.`
    },
    {
      id: 202,
      name: 'Set of Gram Lights 57DR wheels',
      price: 1200,
      image: '13a.jpg',
      images: ['13b.jpg', '13c.jpg'],
      description: `Available now is a stunning set of Gram Lights 57DR wheels in Eternal Blue Pearl. These wheels are 17x9 with a +38 offset and a 5x100 bolt pattern—perfect for FRS, BRZ, 86, and 2002–2007 or 2011–2014 WRX models. A highly sought-after fitment finished in a rare color, ideal for enhancing both performance and aesthetics. Shipping available upon request.`
    },
    {
      id: 203,
      name: 'TE37-style REPS Wheels',
      price: 1320,
      image: '12a.jpg',
      images: ['12b.jpg', '12c.jpg'],
      description: `
For sale is a set of TE37-style rep wheels in 18x10.5 with a +20 offset and 5x100 bolt pattern. Ceramic coated and in perfect condition, with only 100 miles of use. A great fit for aggressive setups, offering both style and stance. Shipping available upon request.
`
    },
    {
      id: 204,
      name: ' Endless brake caliper kit for 86/BRZ',
      price: 1200,
      image: '14a.jpg',
      images: ['14b.jpg', '14c.jpg'],
      description: `Brand new Endless brake caliper kit for 86/BRZ. The front features the M4 kit with 326mm rotors, and the rear comes with the S2 kit and 316mm rotors. A high-performance upgrade designed for superior stopping power and balanced braking. Shipping available upon request.`
    },
    {
      id: 205,
      name: 'Brembo big brake kit for GT86, GR86, BRZ, and FRS',
      price: 1350,
      image: '15a.jpg',
      images: ['15b.jpg', '15c.jpg'],
      description: `Brembo big brake kit for GT86, GR86, BRZ, and FRS—full plug-and-play setup. This complete kit includes STI Brembo calipers professionally modified for proper piston stagger, offering improved performance over OEM Performance Package Brembos. Comes with pads, rotors, all necessary hardware, and is ready to install. Ideal for street or track use. Shipping available upon request.
`
    },
    {
      id: 206,
      name: 'Enkei wheels with Yokohama advan apex tires',
      price: 1200,
      image: '16a.jpg',
      images: ['16b.jpg', '16c.jpg'],
      description: `Enkei wheels paired with Yokohama Advan Apex tyres, used for only 634 miles. This staggered setup was fitted on a BRZ and is compatible with or without Brembo brakes. Specs include 5x100 bolt pattern, 18x8 front, 18x8.5 rear, with a 45mm offset. Comes equipped with four brand-new TPMS sensors from Tire Rack. A clean, ready-to-run package. Shipping available upon request.
`
    },
    {
      id: 207,
      name: 'Set of 4x XR performance wheels with tyres',
      price: 1299,
      image: '11a.jpg',
      images: ['11b.jpg', '11c.jpg'],
      description: `For sale is a set of 4 Rays GramLights XR Series performance wheels, sized 18x8.5 with a dual stud pattern of 5x114.3 and 5x112. They come fitted with 235/40ZR18 tyres, which still have approximately 95% tread remaining. Previously mounted on a Toyota 86, this set is in excellent condition and ready for installation—perfect for performance-oriented setups.

`
    },
    {
      id: 208,
      name: 'Brembo GTS 345mm brake kit for FRS, GT86, and GR86',
      price: 1700,
      image: '18a.jpg',
      images: ['18c.jpg', '18d.jpg'],
      description: `Brembo GTS 345mm brake kit for FRS, GT86, and GR86. This 4-piston setup includes 345x28mm rotors and requires 18" wheels. Note: it does not directly bolt to Gen 2 BRZ aluminum knuckles—an alternative adapter bracket (readily available from any Brembo authorized distributor) is needed.

Includes two sets of used Endless pads:
– ME20 compound (~25% life)
– CCRG compound (~50% life)

Rotor rings are under 4 months old with plenty of life remaining—estimated to last through 3 track seasons. Shipping available upon request.`
    },
    {
      id: 209,
      name: 'Set of WedsSport TC105N wheels',
      price: 1400,
      image: '19a.jpg',
      images: ['19b.jpg', '19c.jpg'],
      description: `For sale is a set of WedsSport TC105N wheels, sized 17x9.0 +35 with a 5x100 bolt pattern. Fitted with 245/40/17 tyres that have approximately 90% tread remaining. The wheels have minor curb rash but no bends or cracks. Includes Toyota TPMS sensors. A lightweight and performance-oriented setup, ready to mount. Shipping available upon request.`
    },
    {
      id: 210,
      name: 'Brembo brake kit FR-S BRZ 86',
      price: 1100,
      image: '20a.jpg',
      images: ['20b.jpg'],
      description: `Complete Brembo brake kit for FR-S, BRZ, and 86. The kit includes front and rear calipers, brand-new front and rear rotors, and lightly used brake pads. Also included are brand-new front brackets with bolts, making this a full plug-and-play setup—everything needed for immediate installation. Shipping available upon request.`
    },
    
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
      card.setAttribute('data-product-id', product.id);
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
          <h3 class="product-title">${product.name}</h3>
          <div class="product-price">$${product.price}</div>
          <div style="display:flex;gap:0.5em;align-items:center;margin-bottom:0.5em;">
            <button class="btn btn-small see-details-btn" data-id="${product.id}">See Details</button>
            <button class="btn btn-small copy-link-btn" data-id="${product.id}"><i class="fas fa-link"></i> Copy Link</button>
          </div>
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
    // Add event listeners for quantity, add to cart, and copy link (standardized)
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
      // Copy Link button logic (standardized)
      card.querySelector('.copy-link-btn').onclick = function(e) {
        e.preventDefault();
        const productId = this.getAttribute('data-id');
        const product = productsToShow[idx];
        if (window.productRouter && product) {
          window.productRouter.copyProductLink(productId, product.name);
        }
        // Show confirmation message
        let conf = document.getElementById('copyLinkConfirmMsg');
        if (!conf) {
          conf = document.createElement('div');
          conf.id = 'copyLinkConfirmMsg';
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
        conf.innerHTML = '<i class="fas fa-link" style="color:#b80000;margin-right:0.6em;"></i> Product link copied!';
        conf.style.display = 'block';
        setTimeout(() => { conf.style.display = 'none'; }, 1800);
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
                  <div style="display:flex;gap:0.5em;align-items:center;margin-bottom:0.7em;">
                    <button class="btn btn-small copy-link-btn-modal" data-id="${product.id}"><i class="fas fa-link"></i> Copy Link</button>
                  </div>
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
    // Copy Link button logic for modal (standardized, only once)
    const copyBtnModal = modal.querySelector('.copy-link-btn-modal');
    if (copyBtnModal) {
      copyBtnModal.onclick = function(e) {
        e.preventDefault();
        if (window.productRouter && product) {
          window.productRouter.copyProductLink(product.id, product.name);
        }
        // Show confirmation message
        let conf = document.getElementById('copyLinkConfirmMsg');
        if (!conf) {
          conf = document.createElement('div');
          conf.id = 'copyLinkConfirmMsg';
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
        conf.innerHTML = '<i class="fas fa-link" style="color:#b80000;margin-right:0.6em;"></i> Product link copied!';
        conf.style.display = 'block';
        setTimeout(() => { conf.style.display = 'none'; }, 1800);
      };
    }
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

    // Pretty URL: open product modal if /[id]-[slug] is in the path
    const pathMatch = window.location.pathname.match(/(?:\/|^)(\d+)-[a-z0-9-]+$/);
    if (pathMatch && pathMatch[1]) {
      const prodId = parseInt(pathMatch[1]);
      setTimeout(function() {
        window.CategoryProducts.showProductDetail(prodId);
      }, 200);
    }
  }
});
