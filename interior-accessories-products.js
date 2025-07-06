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
