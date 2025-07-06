window.CategoryProducts = {
  products: [
    {
      id: 801,
      name: 'Leather Steering Wheel Cover',
      price: 29,
      image: 'intacc1.jpg',
      images: ['intacc1a.jpg', 'intacc1b.jpg'],
      description: 'Premium leather cover for comfort and grip.'
    },
    {
      id: 802,
      name: 'Aluminum Gear Shift Knob',
      price: 19,
      image: 'intacc2.jpg',
      images: ['intacc2a.jpg', 'intacc2b.jpg'],
      description: 'Upgrade your shift feel with this stylish knob.'
    },
    {
      id: 803,
      name: 'Custom Fit Sunshade',
      price: 24,
      image: 'intacc3.jpg',
      images: ['intacc3a.jpg', 'intacc3b.jpg'],
      description: 'Protect your interior from sun and heat.'
    },
    {
      id: 804,
      name: 'Luxury Floor Mats',
      price: 89,
      image: 'intacc4.jpg',
      images: ['intacc4a.jpg', 'intacc4b.jpg'],
      description: 'Add a touch of luxury to your car\'s interior.'
    },
    {
      id: 805,
      name: 'Ambient LED Kit',
      price: 49,
      image: 'intacc5.jpg',
      images: ['intacc5a.jpg', 'intacc5b.jpg'],
      description: 'Create a custom mood with interior LED lighting.'
    },
    {
      id: 806,
      name: 'Seat Belt Pads',
      price: 15,
      image: 'intacc6.jpg',
      images: ['intacc6a.jpg', 'intacc6b.jpg'],
      description: 'Increase comfort with padded seat belt covers.'
    },
    {
      id: 807,
      name: 'Phone Mount',
      price: 19,
      image: 'intacc7.jpg',
      images: ['intacc7a.jpg', 'intacc7b.jpg'],
      description: 'Securely mount your phone for navigation.'
    },
    {
      id: 808,
      name: 'Organizer Tray',
      price: 22,
      image: 'intacc8.jpg',
      images: ['intacc8a.jpg', 'intacc8b.jpg'],
      description: 'Keep your center console neat and tidy.'
    },
    {
      id: 809,
      name: 'Pedal Cover Set',
      price: 35,
      image: 'intacc9.jpg',
      images: ['intacc9a.jpg', 'intacc9b.jpg'],
      description: 'Sporty pedal covers for better grip and style.'
    },
    {
      id: 810,
      name: 'Rear Seat Hooks',
      price: 12,
      image: 'intacc10.jpg',
      images: ['intacc10a.jpg', 'intacc10b.jpg'],
      description: 'Hang bags or groceries with these handy hooks.'
    },
    {
      id: 811,
      name: 'Trunk Organizer',
      price: 29,
      image: 'intacc11.jpg',
      images: ['intacc11a.jpg', 'intacc11b.jpg'],
      description: 'Keep your trunk clutter-free and organized.'
    },
    {
      id: 812,
      name: 'Key Fob Cover',
      price: 9,
      image: 'intacc12.jpg',
      images: ['intacc12a.jpg', 'intacc12b.jpg'],
      description: 'Protect and personalize your key fob.'
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
