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
