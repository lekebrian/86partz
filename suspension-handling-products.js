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
  // ...existing renderProducts, setupPagination, setupDetailsModal, showProductDetail, hideProductDetail...
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
