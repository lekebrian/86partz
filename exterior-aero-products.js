window.CategoryProducts = {
  products: [
    {
      id: 501,
      name: 'Full Body Kit',
      price: 1599,
      image: 'aero1.jpg',
      images: ['aero1a.jpg', 'aero1b.jpg'],
      description: 'Transform your car with a complete body kit.'
    },
    {
      id: 502,
      name: 'Carbon Fiber Spoiler',
      price: 399,
      image: 'aero2.jpg',
      images: ['aero2a.jpg', 'aero2b.jpg'],
      description: 'Lightweight and stylish carbon fiber spoiler.'
    },
    {
      id: 503,
      name: 'Side Skirts',
      price: 249,
      image: 'aero3.jpg',
      images: ['aero3a.jpg', 'aero3b.jpg'],
      description: 'Aggressive side skirts for a lower look.'
    },
    {
      id: 504,
      name: 'Rear Diffuser',
      price: 179,
      image: 'aero4.jpg',
      images: ['aero4a.jpg', 'aero4b.jpg'],
      description: 'Improve rear-end stability and looks.'
    },
    {
      id: 505,
      name: 'Front Lip Spoiler',
      price: 149,
      image: 'aero5.jpg',
      images: ['aero5a.jpg', 'aero5b.jpg'],
      description: 'Add downforce and style to your front bumper.'
    },
    {
      id: 506,
      name: 'Canard Set',
      price: 89,
      image: 'aero6.jpg',
      images: ['aero6a.jpg', 'aero6b.jpg'],
      description: 'Increase front-end grip with these canards.'
    },
    {
      id: 507,
      name: 'Rear Wing',
      price: 499,
      image: 'aero7.jpg',
      images: ['aero7a.jpg', 'aero7b.jpg'],
      description: 'Track-inspired rear wing for maximum downforce.'
    },
    {
      id: 508,
      name: 'Hood Vents',
      price: 129,
      image: 'aero8.jpg',
      images: ['aero8a.jpg', 'aero8b.jpg'],
      description: 'Reduce under-hood temps and add aggression.'
    },
    {
      id: 509,
      name: 'Wide Fenders',
      price: 399,
      image: 'aero9.jpg',
      images: ['aero9a.jpg', 'aero9b.jpg'],
      description: 'Fit wider wheels and tires with these fenders.'
    },
    {
      id: 510,
      name: 'Roof Spoiler',
      price: 99,
      image: 'aero10.jpg',
      images: ['aero10a.jpg', 'aero10b.jpg'],
      description: 'Subtle roof spoiler for a unique look.'
    },
    {
      id: 511,
      name: 'Mirror Covers',
      price: 59,
      image: 'aero11.jpg',
      images: ['aero11a.jpg', 'aero11b.jpg'],
      description: 'Carbon-look mirror covers for a premium touch.'
    },
    {
      id: 512,
      name: 'Aero Undertray',
      price: 299,
      image: 'aero12.jpg',
      images: ['aero12a.jpg', 'aero12b.jpg'],
      description: 'Reduce drag and improve underbody airflow.'
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
