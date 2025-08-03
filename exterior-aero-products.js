window.CategoryProducts = {
  products: [
    {
      id: 501,
      name: 'Set of front fenders compatible with Scion FRS|Toyota 86|Subaru BRZ',
      price: 450,
      image: '31a.jpg',
      images: ['31b.jpg', '31c.jpg'],
      description: `A clean set of front fenders compatible with Scion FR-S, Toyota 86, and Subaru BRZ. These fenders are in excellent condition with no cracks, dents, or structural damage—perfect for restoration projects or OEM replacements.

Ideal for anyone looking to maintain a factory look or replace worn or damaged panels with original-fit parts.

`
    },
    {
      id: 502,
      name: 'Authentic JDM BRZ tS Rear Wing',
      price: 259,
      image: '32a.jpg',
      images: ['32b.jpg', '32c.jpg'],
      description: `Genuine JDM-spec Subaru BRZ tS rear wing, offering a sleek and functional upgrade for your build. This original piece is in excellent 9.5/10 condition with minimal signs of use.

A perfect addition for enthusiasts looking to enhance both the aesthetic and aerodynamic profile of their BRZ with authentic JDM styling.`
    },
    {
      id: 503,
      name: 'Toyota GR86 Genuine Front Bumper – Black Silica',
      price: 600,
      image: '33a.jpg',
      images: ['33b.jpg', '33c.jpg'],
      description: `Toyota GR86 Genuine Front Bumper – Black Silica
Factory-original Toyota GR86 front bumper in Black Silica finish. This is a brand-new, unused OEM part in flawless condition, ready for installation.

Ideal for direct replacement or for those seeking a clean, factory look with genuine Toyota quality and fitment.

`
    },
    {
      id: 504,
      name: 'FA Style Carbon Fiber Hood',
      price: 699,
      image: '34a.jpg',
      images: ['34b.jpg'],
      description:`Sleek and lightweight FA Style carbon fiber hood designed for aggressive styling and improved performance. Crafted with precision, this hood offers a perfect blend of form and function—ideal for enthusiasts looking to enhance the look and reduce the weight of their build.

Premium quality construction ensures durability and proper fitment.`
    },
    {
      id: 505,
      name: 'BRZ / 86 / FR-S Rear & Side Window Louvers',
      price: 149,
      image: '35a.jpg',
      images: ['35b.jpg', '35c.jpg'],
      description: `Add a bold, retro-inspired touch to your build with this set of rear and side window louvers designed for the Subaru BRZ, Toyota 86, and Scion FR-S.

Lightly used and in like-new condition, these louvers offer easy installation and a unique aesthetic upgrade without compromising rear visibility.`
    },
    {
      id: 506,
      name: 'OEM Front Fenders – GR86 / BRZ',
      price: 399,
      image: '36a.jpg',
      images: ['36b.jpg', '36c.jpg'],
      description: `Genuine OEM front fenders for Toyota GR86 and Subaru BRZ. These fenders are in perfect condition and currently vinyl-wrapped, with the original factory color underneath being gray.

Ideal for anyone looking for a clean OEM replacement or ready-to-wrap panels with no bodywork needed.

`
    },
    {
      id: 507,
      name: '2013–2020 Scion FR-S / Toyota 86 / Subaru BRZ Alfa Style Fiberglass Front Bumper',
      price: 599,
      image: '37a.jpg',
      images: ['37b.jpg', '37c.jpg'],
      description: `Upgrade your ride with this Alfa Style fiberglass front bumper, designed to fit 2013–2020 models of the Scion FR-S, Toyota 86, and Subaru BRZ. Crafted from lightweight, durable fiberglass, this bumper offers an aggressive and sporty look while maintaining quality fitment.

Perfect for enthusiasts seeking a distinctive style upgrade that stands out on the road.`
    },
    {
      id: 508,
      name: 'FR-S / BRZ Verus Aero Package',
      price: 1600,
      image: '38a.jpg',
      images: ['38b.jpg', '38c.jpg'],
      description:`Complete Verus Aero body kit for Scion FR-S and Subaru BRZ, including:

Verus two-piece front splitter,

Aggressive Verus rear diffuser,

Verus UCW wing and trunk components

This package offers a perfect blend of aerodynamic performance and aggressive styling, crafted from high-quality materials for durability and precise fitment. Ideal for enthusiasts looking to enhance both the look and downforce of their vehicle.`
    },
    {
      id: 509,
      name: 'FRS / BRZ / 86 Bayson R Kit and Bumpers Package',
      price: 999,
      image: '39a.jpg',
      images: ['39b.jpg', '39c.jpg'],
      description: `This complete Bayson R kit and bumpers package is designed for the Scion FR-S, Subaru BRZ, and Toyota 86. It includes a 2017+ BRZ front bumper with Futago sidemarker deletes and a 2013 Scion FR-S rear bumper featuring a clear fourth brake light. The kit also comes with matching side skirts, a rear spoiler, and rear spats. Together, these components offer a sleek and aggressive upgrade that enhances the vehicle’s overall appearance with high-quality styling elements`
    },
    {
      id: 510,
      name: 'VIS Carbon Fiber Trunk for First-Gen FR-S / BRZ / GT86',
      price: 349,
      image: '40a.jpg',
      images: ['40b.jpg', '40c.jpg'],
      description: `Vis Carbon Fiber Trunk Frs Brz Gt86
$600 shipped
carbon trunk for the first gen frs Brz gt86 for sale Perfect fitment
No clear coat damage`
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
    // Add event listeners for quantity, add to cart, and copy link (standardized, only once)
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
        let url = window.location.origin + window.location.pathname;
        if (productId) {
          url += '?product=' + encodeURIComponent(productId);
        }
        navigator.clipboard.writeText(url).then(function() {
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
        });
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
        let url = window.location.origin + window.location.pathname;
        if (product.id) {
          url += '?product=' + encodeURIComponent(product.id);
        }
        navigator.clipboard.writeText(url).then(function() {
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
        });
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
  }
});
