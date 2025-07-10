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
