window.CategoryProducts = {
  products: [
    {
      id: 601,
      name: 'Custom Seat Covers',
      price: 199,
      image: 'int1.jpg',
      images: ['int1a.jpg', 'int1b.jpg'],
      description: 'Protect and style your seats with custom covers.'
    },
    {
      id: 602,
      name: 'Leather Steering Wheel',
      price: 149,
      image: 'int2.jpg',
      images: ['int2a.jpg', 'int2b.jpg'],
      description: 'Upgrade your interior with a premium wheel.'
    },
    {
      id: 603,
      name: 'All-Weather Floor Mats',
      price: 89,
      image: 'int3.jpg',
      images: ['int3a.jpg', 'int3b.jpg'],
      description: 'Keep your car clean with durable floor mats.'
    },
    {
      id: 604,
      name: 'HD Dash Cam',
      price: 129,
      image: 'int4.jpg',
      images: ['int4a.jpg', 'int4b.jpg'],
      description: 'Record every drive with this high-definition dash cam.'
    },
    {
      id: 605,
      name: 'Ambient Lighting Kit',
      price: 59,
      image: 'int5.jpg',
      images: ['int5a.jpg', 'int5b.jpg'],
      description: 'Create a unique cabin atmosphere with LED lighting.'
    },
    {
      id: 606,
      name: 'Wireless Charger',
      price: 39,
      image: 'int6.jpg',
      images: ['int6a.jpg', 'int6b.jpg'],
      description: 'Charge your phone wirelessly while you drive.'
    },
    {
      id: 607,
      name: 'Touchscreen Headunit',
      price: 399,
      image: 'int7.jpg',
      images: ['int7a.jpg', 'int7b.jpg'],
      description: 'Modernize your dash with a new touchscreen system.'
    },
    {
      id: 608,
      name: 'Backup Camera',
      price: 79,
      image: 'int8.jpg',
      images: ['int8a.jpg', 'int8b.jpg'],
      description: 'Park with confidence using a clear backup camera.'
    },
    {
      id: 609,
      name: 'Performance ECU',
      price: 499,
      image: 'int9.jpg',
      images: ['int9a.jpg', 'int9b.jpg'],
      description: 'Unlock more power and features with a programmable ECU.'
    },
    {
      id: 610,
      name: 'Gauge Cluster',
      price: 299,
      image: 'int10.jpg',
      images: ['int10a.jpg', 'int10b.jpg'],
      description: 'Monitor your car\'s vitals with a digital gauge cluster.'
    },
    {
      id: 611,
      name: 'Push Button Start Kit',
      price: 89,
      image: 'int11.jpg',
      images: ['int11a.jpg', 'int11b.jpg'],
      description: 'Upgrade to a modern push-button start system.'
    },
    {
      id: 612,
      name: 'Bluetooth Adapter',
      price: 29,
      image: 'int12.jpg',
      images: ['int12a.jpg', 'int12b.jpg'],
      description: 'Add Bluetooth connectivity to your factory stereo.'
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
