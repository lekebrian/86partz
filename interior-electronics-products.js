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
