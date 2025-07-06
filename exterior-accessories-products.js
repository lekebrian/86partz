window.CategoryProducts = {
  products: [
    {
      id: 701,
      name: 'Premium Car Cover',
      price: 59,
      image: 'extacc1.jpg',
      images: ['extacc1a.jpg', 'extacc1b.jpg'],
      description: 'Protect your car from the elements with a custom-fit cover.'
    },
    {
      id: 702,
      name: 'Window Tint Film',
      price: 39,
      image: 'extacc2.jpg',
      images: ['extacc2a.jpg', 'extacc2b.jpg'],
      description: 'Reduce glare and heat with high-quality tint film.'
    },
    {
      id: 703,
      name: 'Stainless Steel License Plate Frame',
      price: 19,
      image: 'extacc3.jpg',
      images: ['extacc3a.jpg', 'extacc3b.jpg'],
      description: 'Add a touch of style to your license plate.'
    },
    {
      id: 704,
      name: 'Custom Mud Flaps',
      price: 49,
      image: 'extacc4.jpg',
      images: ['extacc4a.jpg', 'extacc4b.jpg'],
      description: 'Protect your paint from debris and mud.'
    },
    {
      id: 705,
      name: 'Door Edge Guards',
      price: 15,
      image: 'extacc5.jpg',
      images: ['extacc5a.jpg', 'extacc5b.jpg'],
      description: 'Prevent chips and dings on your door edges.'
    },
    {
      id: 706,
      name: 'Chrome Mirror Covers',
      price: 29,
      image: 'extacc6.jpg',
      images: ['extacc6a.jpg', 'extacc6b.jpg'],
      description: 'Upgrade your mirrors with chrome covers.'
    },
    {
      id: 707,
      name: 'Wind Deflectors',
      price: 69,
      image: 'extacc7.jpg',
      images: ['extacc7a.jpg', 'extacc7b.jpg'],
      description: 'Enjoy fresh air without wind noise or rain.'
    },
    {
      id: 708,
      name: 'Rear Bumper Protector',
      price: 35,
      image: 'extacc8.jpg',
      images: ['extacc8a.jpg', 'extacc8b.jpg'],
      description: 'Guard your bumper from scratches and scuffs.'
    },
    {
      id: 709,
      name: 'Antenna Mast',
      price: 19,
      image: 'extacc9.jpg',
      images: ['extacc9a.jpg', 'extacc9b.jpg'],
      description: 'Short, stylish antenna for a modern look.'
    },
    {
      id: 710,
      name: 'Tow Hook',
      price: 25,
      image: 'extacc10.jpg',
      images: ['extacc10a.jpg', 'extacc10b.jpg'],
      description: 'Functional and stylish tow hook for track days.'
    },
    {
      id: 711,
      name: 'Decal Set',
      price: 15,
      image: 'extacc11.jpg',
      images: ['extacc11a.jpg', 'extacc11b.jpg'],
      description: 'Customize your car with unique decals.'
    },
    {
      id: 712,
      name: 'Paint Protection Film',
      price: 99,
      image: 'extacc12.jpg',
      images: ['extacc12a.jpg', 'extacc12b.jpg'],
      description: 'Invisible film to protect your paint from chips.'
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
