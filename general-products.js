window.CategoryProducts = {
  products: [
    {
      id: 801,
      name: 'Premium Carbon Fiber Hood for GT86/BRZ/FRS',
      price: 1200,
      image: '1a.jpg',
      images: ['1b.jpg', '1c.jpg'],
      description: `Upgrade your vehicle's appearance and performance with this premium carbon fiber hood. Crafted from high-quality carbon fiber, this hood offers significant weight reduction while maintaining structural integrity. The aggressive design enhances aerodynamics and provides a modern, sporty look that will make your vehicle stand out. Perfect for enthusiasts looking to combine style with performance improvements.`
    },
    {
      id: 802,
      name: 'High-Performance Exhaust System',
      price: 850,
      image: '4a.jpg',
      images: ['4b.jpg', '4c.jpg'],
      description: `Experience enhanced performance and sound with this high-performance exhaust system. Designed for optimal flow and reduced backpressure, this system delivers improved horsepower and torque while producing an aggressive, sporty exhaust note. Made from premium stainless steel for durability and corrosion resistance.`
    },
    {
      id: 803,
      name: 'Performance Air Intake System',
      price: 320,
      image: '6a.jpg',
      images: ['6b.jpg', '6c.jpg'],
      description: `Maximize your engine's potential with this performance air intake system. Engineered for increased airflow and improved throttle response, this system delivers noticeable power gains and enhanced engine sound. Features a high-flow air filter and heat shield for optimal performance in all conditions.`
    },
    {
      id: 804,
      name: 'Racing Brake Pads Set',
      price: 180,
      image: '7a.jpg',
      images: ['7b.jpg', '7c.jpg'],
      description: `Upgrade your braking performance with these high-performance racing brake pads. Designed for aggressive driving and track use, these pads provide excellent stopping power and fade resistance. Perfect for enthusiasts who demand maximum braking performance in demanding conditions.`
    },
    {
      id: 805,
      name: 'Adjustable Coilover Suspension Kit',
      price: 1400,
      image: '13a.jpg',
      images: ['13b.jpg', '13c.jpg'],
      description: `Transform your vehicle's handling with this adjustable coilover suspension kit. Featuring 32-way adjustable dampers and height-adjustable springs, this kit allows for precise tuning of your suspension setup. Perfect for both street and track use, providing excellent ride quality and cornering performance.`
    },
    {
      id: 806,
      name: 'LED Headlight Conversion Kit',
      price: 450,
      image: '18a.jpg',
      images: ['18b.jpg', '18c.jpg'],
      description: `Upgrade your lighting with this complete LED headlight conversion kit. Featuring high-output LED bulbs and advanced optics, this kit provides superior illumination and a modern appearance. Includes all necessary components for a professional installation and improved nighttime visibility.`
    },
    {
      id: 807,
      name: 'Performance Clutch Kit',
      price: 680,
      image: '19a.jpg',
      images: ['19b.jpg', '19c.jpg'],
      description: `Enhance your drivetrain with this performance clutch kit. Designed for increased torque capacity and improved pedal feel, this kit features a lightweight flywheel and high-friction clutch disc. Perfect for modified vehicles or those seeking improved shifting performance.`
    },
    {
      id: 808,
      name: 'Carbon Fiber Side Skirts',
      price: 420,
      image: '14a.jpg',
      images: ['14b.jpg', '14c.jpg'],
      description: `Add aggressive styling to your vehicle with these carbon fiber side skirts. Crafted from premium carbon fiber, these skirts provide aerodynamic benefits while enhancing the vehicle's visual appeal. Features a perfect fit and professional finish for a seamless installation.`
    },
    {
      id: 809,
      name: 'Performance ECU Tune',
      price: 550,
      image: '21a.jpg',
      images: ['21b.jpg', '21c.jpg'],
      description: `Unlock your engine's full potential with this performance ECU tune. Optimized for maximum power and torque while maintaining reliability, this tune provides significant performance gains across the entire RPM range. Includes dyno testing and professional installation support.`
    },
    {
      id: 810,
      name: 'Racing Steering Wheel',
      price: 380,
      image: '23a.jpg',
      images: ['23b.jpg', '23c.jpg'],
      description: `Upgrade your driving experience with this racing steering wheel. Featuring a compact diameter and ergonomic design, this wheel provides improved control and feedback. Made from premium materials with a comfortable grip for extended driving sessions.`
    },
    {
      id: 811,
      name: 'Performance Intercooler',
      price: 720,
      image: '24a.jpg',
      images: ['24b.jpg', '24c.jpg'],
      description: `Improve your turbocharged performance with this high-efficiency intercooler. Designed for maximum heat rejection and minimal pressure drop, this intercooler helps maintain optimal intake air temperatures for consistent power output. Perfect for forced induction applications.`
    },
    {
      id: 812,
      name: 'Carbon Fiber Rear Wing',
      price: 890,
      image: '27a.jpg',
      images: ['27b.jpg', '27c.jpg'],
      description: `Add downforce and style with this carbon fiber rear wing. Aerodynamically designed to provide significant downforce at high speeds, this wing enhances stability and cornering performance. Features an adjustable design for fine-tuning aerodynamic balance.`
    },
    {
      id: 813,
      name: 'Performance Oil Cooler Kit',
      price: 480,
      image: '31a.jpg',
      images: ['31b.jpg', '31c.jpg'],
      description: `Protect your engine with this performance oil cooler kit. Designed to maintain optimal oil temperatures under demanding conditions, this kit includes a high-capacity cooler and all necessary mounting hardware. Essential for track use and high-performance applications.`
    },
    {
      id: 814,
      name: 'Racing Seat Set',
      price: 950,
      image: '35a.jpg',
      images: ['35b.jpg', '35c.jpg'],
      description: `Upgrade your interior with this racing seat set. Featuring aggressive bolstering and lightweight construction, these seats provide excellent support during spirited driving. Includes mounting brackets and all necessary hardware for a complete installation.`
    },
    {
      id: 815,
      name: 'Performance Fuel Pump',
      price: 320,
      image: '38a.jpg',
      images: ['38b.jpg', '38c.jpg'],
      description: `Ensure adequate fuel delivery with this high-flow performance fuel pump. Designed for increased fuel flow capacity, this pump supports higher horsepower applications and forced induction setups. Features reliable construction and easy installation.`
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
    const page3 = document.getElementById('page3');
    if (!page1 || !page2 || !page3) return;
    
    page1.onclick = () => {
      this.currentPage = 1;
      this.renderProducts(1);
      page1.classList.add('active');
      page2.classList.remove('active');
      page3.classList.remove('active');
    };
    page2.onclick = () => {
      this.currentPage = 2;
      this.renderProducts(2);
      page2.classList.add('active');
      page1.classList.remove('active');
      page3.classList.remove('active');
    };
    page3.onclick = () => {
      this.currentPage = 3;
      this.renderProducts(3);
      page3.classList.add('active');
      page1.classList.remove('active');
      page2.classList.remove('active');
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