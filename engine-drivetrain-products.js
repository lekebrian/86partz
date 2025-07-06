window.CategoryProducts = {
  products: [
    {
      id: 301,
      name: 'FA24 Engine',
      price: 4300,
      image: 'engine1.jpg',
      images: ['engine1a.jpg', 'engine1b.jpg'],
      description: 'Brand new FA24 engine for maximum reliability and power.'
    },
    {
      id: 302,
      name: 'Performance Clutch',
      price: 399,
      image: 'clutch1.jpg',
      images: ['clutch1a.jpg', 'clutch1b.jpg'],
      description: 'High-grip clutch for improved power transfer and durability.'
    },
    {
      id: 303,
      name: 'Short Shifter',
      price: 149,
      image: 'shifter1.jpg',
      images: ['shifter1a.jpg', 'shifter1b.jpg'],
      description: 'Reduce shift throw and enjoy crisp gear changes.'
    },
    {
      id: 304,
      name: 'Lightweight Flywheel',
      price: 299,
      image: 'flywheel1.jpg',
      images: ['flywheel1a.jpg', 'flywheel1b.jpg'],
      description: 'Faster revs and improved throttle response.'
    },
    {
      id: 305,
      name: 'Limited Slip Differential',
      price: 799,
      image: 'lsd1.jpg',
      images: ['lsd1a.jpg', 'lsd1b.jpg'],
      description: 'Enhance traction and cornering with a high-quality LSD.'
    },
    {
      id: 306,
      name: 'Cold Air Intake',
      price: 199,
      image: 'intake1.jpg',
      images: ['intake1a.jpg', 'intake1b.jpg'],
      description: 'Increase horsepower and engine sound with this cold air intake system.'
    },
    {
      id: 307,
      name: 'Oil Cooler Kit',
      price: 249,
      image: 'oilcooler1.jpg',
      images: ['oilcooler1a.jpg', 'oilcooler1b.jpg'],
      description: 'Keep your engine temps in check with this efficient oil cooler kit.'
    },
    {
      id: 308,
      name: 'Aluminum Radiator',
      price: 279,
      image: 'radiator1.jpg',
      images: ['radiator1a.jpg', 'radiator1b.jpg'],
      description: 'Improved cooling capacity for track and street use.'
    },
    {
      id: 309,
      name: 'Catback Exhaust',
      price: 599,
      image: 'exhaust1.jpg',
      images: ['exhaust1a.jpg', 'exhaust1b.jpg'],
      description: 'Aggressive sound and performance gains with this catback exhaust.'
    },
    {
      id: 310,
      name: 'Engine Mounts',
      price: 129,
      image: 'mounts1.jpg',
      images: ['mounts1a.jpg', 'mounts1b.jpg'],
      description: 'Reduce engine movement and improve response with stiffer mounts.'
    },
    {
      id: 311,
      name: 'Spark Plug Set',
      price: 49,
      image: 'spark1.jpg',
      images: ['spark1a.jpg', 'spark1b.jpg'],
      description: 'High-performance spark plugs for reliable ignition.'
    },
    {
      id: 312,
      name: 'Fuel Pump Upgrade',
      price: 179,
      image: 'fuelpump1.jpg',
      images: ['fuelpump1a.jpg', 'fuelpump1b.jpg'],
      description: 'Support higher power levels with this upgraded fuel pump.'
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
