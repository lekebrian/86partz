window.CategoryProducts = {
  products: [
    {
      id: 401,
      name: 'Complete MCS 2-Way Remote Damper Set for all BRZ, 86, FR-S, and GR86 model',
      price: 1225,
      image: '21a.jpg',
      images: ['21b.jpg', '21c.jpg'],
      description:`complete Motion Control Suspension (MCS) 2-Way Remote Damper Set for 86, BRZ, FR-S, and GR86. This top-tier, double-adjustable setup was ordered in January 2025 and features Karcepts spec valving, front and rear spherical top hats, Hyperco 400lb front and 525lb rear main springs, helper springs, Delrin couplers, and extended rear hose lengths for trunk mounting. The Karcepts camber/caster plates offer precise adjustability, with current markings set at -4.8° camber (easily removable). This setup provides exceptional performance, longevity, and adjustability for both first and second gen platforms. Shipping available upon request.`
    },
    {
      id: 402,
      name: 'Set of HKS Hipermax R Coilovers for the GR86 (ZN8)',
      price: 799,
      image: '22a.jpg',
      images: ['22b.jpg', '22c.jpg'],
      description: `For sale is a set of HKS Hipermax R Coilovers for the GR86 (ZN8), installed in March 2025 and driven for less than 1,000 miles. The ride height remains at the factory default settings, and the kit includes all original hardware from HKS. Practically like new and ready to install. Shipping available upon request.`
    },
    {
      id: 403,
      name: 'Complete air suspension kit for GR86, BRZ, or FR-S',
      price: 1349,
      image: '23a.jpg',
      images: ['23b.jpg', '23c.jpg'],
      description: `A complete air suspension kit for GR86, BRZ, or FR-S. The setup was removed from a 2022 second-gen BRZ but is also compatible with first-gen models. It includes Air Lift 3P management, a trunk-mounted setup with tank and single compressor, and Truhart struts. Everything is in good working condition and ready for installation. Shipping available upon request.`
    },
    {
      id: 404,
      name: 'Set of Air Demand air struts',
      price: 1099,
      image: '24a.jpg',
      images: ['24b.jpg', '24a.jpg'],
      description: `For sale is a full set of Air Demand air struts, including front and rear air suspension. The setup is in excellent condition and ready for install. Shipping available upon request.`
    },
    {
      id: 405,
      name: 'Set of Godspeed Mono RS Coilovers for FRS, BRZ, 86, and GR86',
      price: 849,
      image: '25a.jpg',
      images: ['25b.jpg', '25c.jpg'],
      description: `Selling a clean set of Godspeed Mono RS Coilovers for FRS, BRZ, 86, and GR86. Used for under 10,000 miles with no issues—no leaks, no loose top hats, and everything functions as it should. These coilovers feature front adjustable camber plates, 32-way adjustable dampening, 8k spring rates all around, and a durable 52mm monotube shock design. A solid, high-quality option for those looking to lower their car while maintaining comfort and improved handling. Shipping available upon request.`
    },
    {
      id: 406,
      name: 'Complete Airlift V2 air suspension setup for FRS|BRZ|86',
      price: 1399,
      image: '26a.jpg',
      images: ['26b.jpg', '26c.jpg'],
      description: `Selling a complete Airlift V2 air suspension setup for FRS, BRZ, or 86. This kit includes front and rear Airlift air struts, V2 digital management, and a trunk-mounted setup with tank and single compressor. Removed from a second-gen BRZ, but fully compatible with first-gen models as well. Everything is in great working condition and ready to install—ideal for those looking to achieve adjustable ride height, smooth ride quality, and that show-ready stance with the reliability of Airlift's trusted management system. Shipping available upon request.`
    },
    {
      id: 407,
      name: ' RacerX upper control arms compatible with FRS|BRZ|86|WRX|STI models',
      price: 329,
      image: '27a.jpg',
      images: ['27b.jpg', '27c.jpg'],
      description: `Brand new RacerX upper control arms compatible with FRS, BRZ, 86, WRX, and STI models. Never used and ready to install, these control arms offer improved suspension geometry and durability for enhanced handling performance. Shipping available upon request.`
    },
    {
      id: 408,
      name: 'Pair of ISC V3 Lower Control Arms',
      price: 319,
      image: '28a.jpg',
      images: ['28b.jpg', '28c.jpg'],
      description: `For sale is a pair of ISC V3 Lower Control Arms, removed from a 2014 Subaru BRZ. They were used for approximately 25,000 miles and remain structurally solid with no play in the joints. The joint boots show some cracking but function as intended. A reliable upgrade for improved rear suspension adjustability. Shipping available upon request.`
    },
    {
      id: 409,
      name: 'Cusco Type OS carbon fiber front strut bar',
      price: 249,
      image: '29a.jpg',
      images: ['29b.jpg', '29c.jpg'],
      description:`For sale is a Cusco Type OS carbon fiber front strut bar with integrated brake master cylinder stopper, designed for left-hand drive models. Compatible with 2013–2020 BRZ, FR-S, and 86, as well as 2022+ BRZ and GR86. In excellent condition, this strut bar enhances chassis rigidity and braking feel. Shipping available upon request.`
    },
    {
      id: 410,
      name: 'Set of SPL front sway bar endlinks (short length) for 2013–2021 BRZ|FR-S|86',
      price: 199,
      image: '30a.jpg',
      images: ['30b.jpg', '30c.jpg'],
      description: `For sale is a set of SPL front sway bar endlinks (short length) for 2013–2021 BRZ, FR-S, and 86. Used for less than 1,000 miles under daily driving conditions and still in excellent shape. Includes all original hardware from the kit. A high-quality, adjustable solution for improved front-end response. Shipping available upon request.`
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
      const shareUrl = `${window.location.origin}${window.location.pathname}?product=${product.id}`;
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
          <h3 class="product-title">${product.name}</h3>
          <div class="product-price">$${product.price}</div>
          <button class="btn btn-small see-details-btn" data-id="${product.id}">See Details</button>
          <button class="btn btn-social copy-link-btn" data-link="${shareUrl}" style="margin:0.5em 0 0.5em 0;padding:0.3em 0.8em;font-size:0.98em;">
            <i class="fas fa-share-alt" style="margin-right:0.4em;"></i>Copy Link
          </button>
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
    // Add event listeners for quantity, add to cart, and copy link
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
      // Copy link button
      const copyBtn = card.querySelector('.copy-link-btn');
      if (copyBtn) {
        copyBtn.onclick = function() {
          const link = copyBtn.getAttribute('data-link');
          navigator.clipboard.writeText(link).then(() => {
            copyBtn.textContent = 'Link Copied!';
            setTimeout(() => { copyBtn.innerHTML = `<i class=\"fas fa-share-alt\" style=\"margin-right:0.4em;\"></i>Copy Link`; }, 1400);
          });
        };
      }
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
    const shareUrl = `${window.location.origin}${window.location.pathname}?product=${product.id}`;
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
                  <button class="btn btn-social copy-link-btn-modal" data-link="${shareUrl}" style="margin:0.7em 0 1.1em 0;padding:0.3em 0.8em;font-size:1em;width:100%;"><i class="fas fa-share-alt" style="margin-right:0.4em;"></i>Copy Link to This Product</button>
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
    // Copy link in modal
    const copyBtnModal = modal.querySelector('.copy-link-btn-modal');
    if (copyBtnModal) {
      copyBtnModal.onclick = function() {
        const link = copyBtnModal.getAttribute('data-link');
        navigator.clipboard.writeText(link).then(() => {
          copyBtnModal.textContent = 'Link Copied!';
          setTimeout(() => { copyBtnModal.innerHTML = `<i class=\"fas fa-share-alt\" style=\"margin-right:0.4em;\"></i>Copy Link to This Product`; }, 1400);
        });
      };
    }
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
