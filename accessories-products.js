window.CategoryProducts = {
  products: [
    {
      id: 801,
      name: 'Grams 72mm Throttle Body – BRZ / FRS / 86',
      price: 349,
      image: '61a.jpg',
      images: ['61b.jpg', '61c.jpg'],
      description:`Boost your throttle response and airflow with this brand-new Grams 72mm throttle body, designed specifically for the Subaru BRZ, Scion FRS, and Toyota 86. This unit is still in its original packaging and has never been installed — ideal for performance-focused builds looking to unlock more power and improved drivability.

Key Features:

Large 72mm bore for increased airflow

Compatible with BRZ, FRS, and 86 platforms

Brand new and unused – still in the box

Direct bolt-on upgrade for improved throttle performance

Ships ready to install.`
    },
    {
      id: 802,
      name: 'GrimmSpeed Red Engine Cover – Brand New',
      price: 153,
      image: '62a.jpg',
      images: ['62b.jpg', '62c.jpg'],
      description: `Add a bold visual upgrade to your engine bay with this red GrimmSpeed engine cover. This unit is brand new, only opened and briefly test-fitted. Perfect for enthusiasts looking to enhance both form and function under the hood.

Key Features:

Genuine GrimmSpeed product

Striking red finish

Brand new condition – opened for test fit only

Direct fit for applicable Subaru platforms

Ready to ship.`
    },
    {
      id: 803,
      name: 'OLM K1X Rear Spats – FRS/BRZ/86 ',
      price: 125,
      image: '63a.jpg',
      images: ['63b.jpg', '63c.jpg'],
      description: `Enhance the rear profile of your FRS, BRZ, or 86 with these used OLM K1X painted rear spats. Designed to fit seamlessly with the factory rear bumper, these spats offer a sportier appearance and subtle aerodynamic flair.

Condition: Pre-owned with minor paint imperfections. Overall in good condition and ready for installation.

`
    },
    {
      id: 804,
      name: 'TRD RS1.0 Fender Garnishes – 2015',
      price: 249,
      image: '64a.jpg',
      images: ['64b.jpg', '64c.jpg'],
      description:`Genuine TRD fender garnishes removed from a 2015 Scion FR-S RS1.0. These OEM pieces are rare and increasingly difficult to find, making them a great addition for collectors or those looking to complete an RS1.0 build.

Condition: Used, with one minor flaw on the passenger-side garnish (barely noticeable). Overall well-preserved and ready for installation.`
    },
    {
      id: 805,
      name: 'OEM All-Weather Floor Mats & Trunk Tray – 2022+ Subaru BRZ / Toyota GR86',
      price: 155,
      image: '65a.jpg',
      images: ['65b.jpg', '65c.jpg'],
      description: `OEM All-Weather Floor Mats & Trunk Tray – 2022+ Subaru BRZ / Toyota GR86 (Used)
Genuine OEM all-weather floor mats and trunk tray set for 2022+ BRZ and GR86 models. Perfect for protecting your interior from dirt, moisture, and daily wear.

Includes front and rear floor mats + trunk tray

OEM fit and quality

Easy to clean, durable rubber material

Used, in great condition`
    },
    {
      id: 806,
      name: 'Grams 72mm Throttle Body (+7mm Over Stock) – 2013+ FR-S / BRZ / 86',
      price: 301,
      image: '66a.jpg',
      images: ['66b.jpg', '66c.jpg'],
      description: `Upgrade your intake system with this Grams 72mm throttle body, offering increased airflow over the factory unit for improved throttle response and performance.

Fits 2013+ Scion FR-S / Subaru BRZ / Toyota 86

72mm bore size – +7mm over stock (65mm)

CNC-machined aluminum construction

Ideal for naturally aspirated or forced induction setups

Direct bolt-on with factory-style connectors

Perfect for performance builds looking to reduce airflow restrictions and support higher power output.`
    },
    {
      id: 807,
      name: 'IRP V3 Short Shifter – Red Lockout Button – FR-S / BRZ / 86',
      price: 180,
      image: '67a.jpg',
      images: ['67b.jpg', '67c.jpg'],
      description: `Precision-engineered for performance driving, the IRP V3 short shifter delivers a crisp, mechanical feel with significantly reduced throw for faster, more confident gear changes.

Compatible with Scion FR-S, Subaru BRZ, and Toyota 86 (manual transmission)

Version 3 design with improved shift engagement and durability

Features anodized red reverse lockout button for added style and function

Adjustable height and throw to suit your driving style

CNC-machined aluminum and stainless steel components

Bolt-in installation — no cutting or welding required

A favorite among track enthusiasts and serious street drivers looking for sharper shifting and improved control.

`
    },
    {
      id: 808,
      name: 'APR GT3 Side Mirrors – Subaru BRZ / Scion FR-S / Toyota GT86 ',
      price: 250,
      image: '68a.jpg',
      images: ['68b.jpg', '68c.jpg'],
      description: `Upgrade your ride’s aerodynamics and style with these genuine APR GT3 side mirrors. Designed specifically for the BRZ, FR-S, and GT86, they offer a sleek, race-inspired look while improving airflow.

Used for approximately one month

Excellent condition, like-new appearance

Direct bolt-on replacement for factory mirrors

Lightweight, aerodynamic design

Ideal for enthusiasts seeking both performance and aesthetic enhancement`
    },
    {
      id: 809,
      name: 'DW VB40AX2 Dual Fuel Pump Voltage Booster ',
      price: 300,
      image: '69a.jpg',
      images: ['69b.jpg', '69c.jpg'],
      description: `Optimize your fuel system with the DW VB40AX2 voltage booster designed to increase fuel pump voltage for improved fuel delivery and consistent performance.

Dual pump support for enhanced fuel flow

Reliable and robust design from DeatschWerks (DW)

Brand new, never used—removed due to change in fuel system plans

Easy to install with factory wiring harness compatibility

Perfect for high-performance builds requiring stable fuel pressure under demanding conditions.`
    },
    {
      id: 810,
      name: 'FRS K24 Collins K-Swap Adapter Kit',
      price: 600,
      image: '70a.jpg',
      images: ['70b.jpg', '70c.jpg'],
      description:`Complete adapter kit designed for K24 engine swaps into the Scion FR-S, Toyota 86, or Subaru BRZ, enabling a clean and reliable connection to the stock transmission.

Kit Includes:

Precision-machined adapter plate that bolts directly to the factory transmission

Lightweight aluminum flywheel for improved performance and durability

K-series style transmission mounts (compatible with stock transmission)

Optional throttle body adapter available upon request

This kit offers a seamless K-swap solution, making installation straightforward and efficient. If you need any additional parts or support for your swap, feel free to reach out.`
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
