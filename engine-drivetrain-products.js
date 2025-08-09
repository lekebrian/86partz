window.CategoryProducts = {
  products: [
    {
      id: 301,
      name: 'Subaru BRZ|FRS|86 FA24 Engine',
      price: 4300,
      image: '1a.jpg',
      images: ['1b.jpg', '1c.jpg'],
      description: `2023 FA24 Engine with Headers & Carbon Covers – 14,992 Miles

This 2023 FA24 engine is in excellent condition with only 14,992 miles. It comes equipped with high-quality headers and carbon fiber engine covers, enhancing both performance and aesthetics.

Meticulously maintained and garage-kept, this engine has been serviced regularly and driven sparingly. A great opportunity for anyone looking to upgrade with a clean, low-mileage powertrain setup`
    },
    {
      id: 302,
      name: 'Subaru BRZ Engine',
      price: 4000,
      image: '2a.jpg',
      images: ['2b.jpg', '2c.jpg'],
      description: `2023 Subaru BRZ 2.4L Engine – Only 8,000 Miles | Manual Transmission | $4,000 Shipped

For sale: A 2.4L FA24 engine removed from a 2023 Subaru BRZ with only 8,000 miles. This engine is paired with a manual transmission and is in perfect condition, offering a like-new powertrain ideal for a performance build or replacement.

Price includes shipping within the U.S.—an excellent deal for a low-mileage, well-maintained engine.`
    },
    {
      id: 303,
      name: 'Subaru FA2OD Engine(FRS/BRZ/GT86)',
      price: 3800,
      image: '3a.jpg',
      images: ['3b.jpg', '3c.jpg'],
      description: `Subaru FA20D Engine (FR-S / BRZ / GT86) – $3,000 Shipped

Offered for sale is a Subaru FA20D engine, compatible with Scion FR-S, Subaru BRZ, and Toyota GT86 models. This engine is in perfect condition with no issues, making it a great option for a replacement or performance project.

Price includes shipping within the U.S..`
    },
    {
      id: 304,
      name: 'FRS/BRZ Injen SP Series Short Ram Intake',
      price: 259,
      image: '4a.jpg',
      images: ['4b.jpg'],
      description: `Injen SP Series Short Ram Intake – FR-S / BRZ 

For sale: Injen SP Series Short Ram Intake for Scion FR-S, Subaru BRZ, and Toyota GT86. The intake is in good condition and comes with all necessary hardware for installation.

The filter is clean, and the intake box has no scratches—ready to install and improve both performance and engine sound.

Shipping inclusive

`
    },
    {
      id: 305,
      name: 'Fuel Injectors',
      price: 299,
      image: '5a.jpg',
      images: ['5b.jpg', '5d.jpg'],
      description: `Fuel Injector Clinic 1200cc Injectors – FR-S / BRZ / 86 

For sale: FIC (Fuel Injector Clinic) 1200cc injectors, specifically designed for the Scion FR-S, Subaru BRZ, and Toyota 86 platforms.

These high-performance injectors are ideal for boosted or high-horsepower builds

Ready to install and a great upgrade for your fuel system.`
    },
    {
      id: 306,
      name: '2013-2020 Red Aluminum Manifold FRS BRZ 86',
      price: 350,
      image: '6a.jpg',
      images: ['6b.jpg', '6c.jpg'],
      description: `Red Aluminum Intake Manifold – 2013–2020 FR-S / BRZ / Toyota 86 | For Sale
Up for sale is a red aluminum intake manifold in good condition, removed from a 2017 Toyota 86. This is a direct OEM upgrade for 2013–2016 Scion FR-S and Subaru BRZ models, offering improved airflow and a clean, sporty look.

Fits all 2013–2020 FR-S, BRZ, and Toyota 86 models.

Ready to install—perfect for a performance upgrade or engine bay refresh.

`
    },
    {
      id: 307,
      name: 'Frs brz 86 oil cooler',
      price: 290,
      image: '7a.jpg',
      images: ['7b.jpg', '7c.jpg'],
      description: `Oil Cooler – FR-S / BRZ / GT86

Up for sale is an aftermarket oil cooler kit for Scion FR-S, Subaru BRZ, and Toyota GT86. While not a Mishimoto brand, it performs reliably and has been used for approximately 5,000 miles with no issues.

The included adapter/sandwich plate features three ports for sensors or additional lines, making it ideal for performance setups or monitoring upgrades.

Everything is in good working condition and ready for installation.`
    },
    {
      id: 308,
      name: '2013-24 FR-S/GR86/BRZ Dual Radiator/Oil Cooler',
      price: 499,
      image: '8a.jpg',
      images: ['8b.jpg', '8c.jpg'],
      description: `Jackson Racing Dual Radiator/Oil Cooler – 2013–2024 FR-S / BRZ / GR86

For sale is a Jackson Racing dual radiator and oil cooler setup, compatible with 2013–2024 Scion FR-S, Subaru BRZ, and Toyota GR86 models.

The kit is in almost new condition, offering enhanced cooling performance for both the engine and oil system—ideal for track use or high-performance street builds.

Complete and ready for installation.`
    },
    {
      id: 309,
      name: 'Performance Camshaft',
      price: 1300,
      image: '9.jpg',
      
      description: `Camshafts – Precision Performance for Your Build

Engineered to optimize valve timing, increase airflow, and unlock hidden power in your engine. Whether you're building for the street or track, our camshafts deliver improved throttle response, higher RPM potential, and enhanced overall performance.

Perfect for naturally aspirated or forced induction setups—reliability and performance you can trust.`
    },
    {
      id: 310,
      name: 'Crankshaft',
      price: 550,
      image: '10.jpg',
      
      description: `Crankshafts for Subaru BRZ / Scion FR-S / Toyota 86 – Built for Boxer Performance

Designed specifically for the FA20/FA24 Boxer engines, our high-performance crankshafts deliver the strength, balance, and durability needed for BRZ, FR-S, and 86 builds pushing beyond factory limits. Whether you're upgrading for forced induction, high-revving NA setups, or a full race engine, these crankshafts are engineered to handle the increased stress without compromise.

Forged from premium materials and precision-machined for perfect fitment, these crankshafts form the core of any reliable high-performance build for your Subaru or Toyota platform.

`
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
        </div>
      `;
      grid.appendChild(card);
    });
    // Add event listeners for copy link
    grid.querySelectorAll('.product-card').forEach((card, idx) => {
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
    this.attachProductDetailListeners();
  },
  attachProductDetailListeners: function() {
    document.querySelectorAll('.btn.btn-small.see-details-btn').forEach(btn => {
      btn.onclick = function() {
        const id = parseInt(this.closest('.product-card').getAttribute('data-product-id'));
        window.CategoryProducts.showProductDetail(id);
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
    // Add quantity controls, Add to Cart, and Copy Link button
    let infoDiv = document.getElementById('detailDescription').parentElement;
    // Remove previous controls if any
    let oldControls = document.getElementById('productDetailControls');
    if (oldControls) oldControls.remove();
    const controls = document.createElement('div');
    controls.id = 'productDetailControls';
    controls.style.margin = '1.2em 0 0.7em 0';
    const shareUrl = `${window.location.origin}${window.location.pathname}?product=${product.id}`;
    controls.innerHTML = `
      <button class="btn btn-social copy-link-btn-modal" data-link="${shareUrl}" style="margin:0.7em 0 1.1em 0;padding:0.3em 0.8em;font-size:1em;width:100%;"><i class=\"fas fa-share-alt\" style=\"margin-right:0.4em;\"></i>Copy Link to This Product</button>
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

    // Copy link in modal
    const copyBtnModal = controls.querySelector('.copy-link-btn-modal');
    if (copyBtnModal) {
      copyBtnModal.onclick = function() {
        const link = copyBtnModal.getAttribute('data-link');
        navigator.clipboard.writeText(link).then(() => {
          copyBtnModal.textContent = 'Link Copied!';
          setTimeout(() => { copyBtnModal.innerHTML = `<i class=\"fas fa-share-alt\" style=\"margin-right:0.4em;\"></i>Copy Link to This Product`; }, 1400);
        });
      };
    }

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
      // Use global addToCart if available, else fallback
      if (typeof addToCart === 'function') {
        addToCart({
          id: product.id,
          title: product.name,
          price: product.price,
          qty: qty,
          image: product.image
        });
      } else {
        // Fallback: localStorage logic
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
      conf.innerHTML = `<i class=\"fas fa-check-circle\" style=\"color:#b80000;margin-right:0.6em;\"></i> ${qty} × <b>${product.name}</b> added to cart!`;
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