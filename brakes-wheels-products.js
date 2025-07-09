window.CategoryProducts = {
  products: [
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
      id: 201,
      name: 'Set of Circuit CSF1 wheels in matte bronze',
      price: 1190,
      image: '17a.jpg',
      images: ['17b.jpg', '17c.jpg'],
      description: `Selling a like-new set of Circuit CSF1 wheels in matte bronze, sized 18x9.5 with a +38 offset and 5x100 bolt pattern. Wrapped in Falken Ziex 225/40 tyres, this setup offers a clean, aggressive fitment perfect for 5x100 platforms. Lightly used and in excellent condition. Shipping available upon request.`
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
    // Make modal scrollable if content is tall
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
