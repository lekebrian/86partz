window.CategoryProducts = {
  products: [
    {
      id: 201,
      name: 'Big Brake Kit',
      price: 1299,
      image: 'brake1.jpg',
      images: ['brake1a.jpg', 'brake1b.jpg'],
      description: 'Ultimate stopping power for track and street. Includes calipers, rotors, pads, and lines.'
    },
    {
      id: 202,
      name: 'Ceramic Brake Pads',
      price: 129,
      image: 'brake2.jpg',
      images: ['brake2a.jpg', 'brake2b.jpg'],
      description: 'Low dust, high performance ceramic pads for spirited driving.'
    },
    {
      id: 203,
      name: 'Slotted Rotors (Pair)',
      price: 249,
      image: 'brake3.jpg',
      images: ['brake3a.jpg', 'brake3b.jpg'],
      description: 'Improved cooling and bite for aggressive braking.'
    },
    {
      id: 204,
      name: 'Braided Brake Lines',
      price: 99,
      image: 'brake4.jpg',
      images: ['brake4a.jpg', 'brake4b.jpg'],
      description: 'Stainless steel lines for firmer pedal feel and reliability.'
    },
    {
      id: 205,
      name: 'Performance Wheel Set',
      price: 899,
      image: 'wheel1.jpg',
      images: ['wheel1a.jpg', 'wheel1b.jpg'],
      description: 'Lightweight forged wheels for improved handling and style.'
    },
    {
      id: 206,
      name: 'Wheel Spacers (Set of 4)',
      price: 79,
      image: 'wheel2.jpg',
      images: ['wheel2a.jpg', 'wheel2b.jpg'],
      description: 'Achieve the perfect stance and fitment.'
    },
    {
      id: 207,
      name: 'Lug Nut Set',
      price: 39,
      image: 'wheel3.jpg',
      images: ['wheel3a.jpg', 'wheel3b.jpg'],
      description: 'Durable, lightweight lug nuts for aftermarket wheels.'
    },
    {
      id: 208,
      name: 'TPMS Sensor Kit',
      price: 149,
      image: 'wheel4.jpg',
      images: ['wheel4a.jpg', 'wheel4b.jpg'],
      description: 'Keep your tire pressure monitored with this complete kit.'
    },
    {
      id: 209,
      name: 'Brake Fluid DOT 5.1',
      price: 29,
      image: 'fluid1.jpg',
      images: ['fluid1a.jpg', 'fluid1b.jpg'],
      description: 'High boiling point fluid for extreme conditions.'
    },
    {
      id: 210,
      name: 'Wheel Lock Set',
      price: 49,
      image: 'lock1.jpg',
      images: ['lock1a.jpg', 'lock1b.jpg'],
      description: 'Protect your wheels from theft with these locks.'
    },
    {
      id: 211,
      name: 'Hub Centric Rings',
      price: 19,
      image: 'ring1.jpg',
      images: ['ring1a.jpg', 'ring1b.jpg'],
      description: 'Ensure perfect wheel fitment and eliminate vibrations.'
    },
    {
      id: 212,
      name: 'Brake Duct Kit',
      price: 89,
      image: 'duct1.jpg',
      images: ['duct1a.jpg', 'duct1b.jpg'],
      description: 'Direct airflow to your brakes for maximum cooling.'
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
