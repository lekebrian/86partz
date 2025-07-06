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
