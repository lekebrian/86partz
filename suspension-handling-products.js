window.CategoryProducts = {
  products: [
    {
      id: 401,
      name: 'Adjustable Coilovers',
      price: 899,
      image: 'susp1.jpg',
      images: ['susp1a.jpg', 'susp1b.jpg'],
      description: 'Fully adjustable coilovers for street and track.'
    },
    {
      id: 402,
      name: 'Front Sway Bar',
      price: 199,
      image: 'susp2.jpg',
      images: ['susp2a.jpg', 'susp2b.jpg'],
      description: 'Reduce body roll and improve handling.'
    },
    {
      id: 403,
      name: 'Rear Sway Bar',
      price: 199,
      image: 'susp3.jpg',
      images: ['susp3a.jpg', 'susp3b.jpg'],
      description: 'Enhance rear-end stability and cornering.'
    },
    {
      id: 404,
      name: 'Front Strut Brace',
      price: 129,
      image: 'susp4.jpg',
      images: ['susp4a.jpg', 'susp4b.jpg'],
      description: 'Increase chassis rigidity for sharper response.'
    },
    {
      id: 405,
      name: 'Rear Lower Control Arms',
      price: 249,
      image: 'susp5.jpg',
      images: ['susp5a.jpg', 'susp5b.jpg'],
      description: 'Adjustable arms for camber and toe settings.'
    },
    {
      id: 406,
      name: 'Camber Adjustment Kit',
      price: 99,
      image: 'susp6.jpg',
      images: ['susp6a.jpg', 'susp6b.jpg'],
      description: 'Fine-tune your alignment for track or street.'
    },
    {
      id: 407,
      name: 'Polyurethane Bushings',
      price: 79,
      image: 'susp7.jpg',
      images: ['susp7a.jpg', 'susp7b.jpg'],
      description: 'Reduce flex and improve suspension response.'
    },
    {
      id: 408,
      name: 'End Link Set',
      price: 59,
      image: 'susp8.jpg',
      images: ['susp8a.jpg', 'susp8b.jpg'],
      description: 'Heavy-duty end links for sway bars.'
    },
    {
      id: 409,
      name: 'Spring Set',
      price: 199,
      image: 'susp9.jpg',
      images: ['susp9a.jpg', 'susp9b.jpg'],
      description: 'Lower your car and improve handling.'
    },
    {
      id: 410,
      name: 'Shock Absorber Set',
      price: 399,
      image: 'susp10.jpg',
      images: ['susp10a.jpg', 'susp10b.jpg'],
      description: 'Performance shocks for comfort and control.'
    },
    {
      id: 411,
      name: 'Rear Strut Brace',
      price: 119,
      image: 'susp11.jpg',
      images: ['susp11a.jpg', 'susp11b.jpg'],
      description: 'Increase rear chassis stiffness.'
    },
    {
      id: 412,
      name: 'Subframe Brace',
      price: 149,
      image: 'susp12.jpg',
      images: ['susp12a.jpg', 'susp12b.jpg'],
      description: 'Tie your chassis together for ultimate handling.'
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
