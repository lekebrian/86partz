// Global variables
const cart = JSON.parse(localStorage.getItem("cart")) || []
const currentPage = 1
const productsPerPage = 5

// Sample reviews data
const reviews = [
  {
    id: 1,
    name: "Michael S.",
    initials: "MS",
    date: "January 15, 2025",
    rating: 5,
    product: "High-Performance Brake Kit",
    text: "These brakes are amazing! Stopping power is incredible and they look great too. Installation was straightforward with the included instructions.",
  },
  {
    id: 2,
    name: "Sarah L.",
    initials: "SL",
    date: "January 12, 2025",
    rating: 4,
    product: "Advanced LED Headlight Set",
    text: "Great visibility at night. The only reason I'm not giving 5 stars is that installation requires some expertise, though the end result is worth it.",
  },
  {
    id: 3,
    name: "David W.",
    initials: "DW",
    date: "January 8, 2025",
    rating: 5,
    product: "Carbon Fiber Air Intake System",
    text: "Noticeable power increase and the sound is perfect. Quality is top-notch and the carbon fiber finish looks amazing in the engine bay.",
  },
  {
    id: 4,
    name: "Emily R.",
    initials: "ER",
    date: "January 5, 2025",
    rating: 5,
    product: "Sport Suspension Kit",
    text: "Perfect balance between comfort and performance. Installation service was excellent and the handling improvement is remarkable.",
  },
  {
    id: 5,
    name: "James T.",
    initials: "JT",
    date: "January 2, 2025",
    rating: 4,
    product: "Turbo Upgrade Kit",
    text: "Significant power gains! Quality is top-notch, though installation requires expertise. Customer support was very helpful throughout.",
  },
  {
    id: 6,
    name: "Lisa M.",
    initials: "LM",
    date: "December 28, 2024",
    rating: 5,
    product: "Racing Exhaust System",
    text: "Amazing sound and build quality. The deep tone is exactly what I was looking for. Shipping was fast and packaging was excellent.",
  },
  {
    id: 7,
    name: "Robert K.",
    initials: "RK",
    date: "December 25, 2024",
    rating: 5,
    product: "Performance Clutch Kit",
    text: "Smooth engagement and great feel. Much better than stock and handles high torque applications perfectly.",
  },
  {
    id: 8,
    name: "Amanda P.",
    initials: "AP",
    date: "December 22, 2024",
    rating: 4,
    product: "Aerodynamic Body Kit",
    text: "Looks fantastic and improves aerodynamics. Fitment is good but requires some adjustment during installation.",
  },
  {
    id: 9,
    name: "Chris B.",
    initials: "CB",
    date: "December 18, 2024",
    rating: 5,
    product: "Racing Seats Set",
    text: "Incredible comfort and support during spirited driving. The quality is professional grade and installation was straightforward.",
  },
  {
    id: 10,
    name: "Nicole H.",
    initials: "NH",
    date: "December 15, 2024",
    rating: 5,
    product: "Cold Air Intake System",
    text: "Easy installation and noticeable performance improvement. The sound is great and the filter is easy to clean.",
  },
  {
    id: 11,
    name: "Mark D.",
    initials: "MD",
    date: "December 12, 2024",
    rating: 5,
    product: "Performance Wheels Set",
    text: "Beautiful wheels that transformed the look of my car. Lightweight and strong, perfect for both street and track use.",
  },
  {
    id: 12,
    name: "Jennifer L.",
    initials: "JL",
    date: "December 8, 2024",
    rating: 4,
    product: "ECU Tuning Module",
    text: "Great performance gains with multiple map options. Installation is plug-and-play but tuning requires some knowledge.",
  },
  {
    id: 13,
    name: "Kevin S.",
    initials: "KS",
    date: "December 5, 2024",
    rating: 5,
    product: "High-Performance Brake Kit",
    text: "Outstanding braking performance with zero fade. The ceramic pads are quiet and the rotors look amazing.",
  },
  {
    id: 14,
    name: "Rachel G.",
    initials: "RG",
    date: "December 2, 2024",
    rating: 5,
    product: "LED Headlight Set",
    text: "Huge improvement in visibility and style. The LED technology is impressive and the installation was easier than expected.",
  },
  {
    id: 15,
    name: "Tom W.",
    initials: "TW",
    date: "November 28, 2024",
    rating: 4,
    product: "Sport Suspension Kit",
    text: "Great handling improvement with adjustable settings. Ride quality is firm but comfortable for daily driving.",
  },
  {
    id: 16,
    name: "Michelle A.",
    initials: "MA",
    date: "November 25, 2024",
    rating: 5,
    product: "Carbon Fiber Air Intake",
    text: "Premium quality carbon fiber with excellent fitment. The performance gain is noticeable and the sound is perfect.",
  },
  {
    id: 17,
    name: "Steve R.",
    initials: "SR",
    date: "November 22, 2024",
    rating: 5,
    product: "Turbo Upgrade Kit",
    text: "Incredible power increase with reliable performance. The kit includes everything needed and instructions are clear.",
  },
  {
    id: 18,
    name: "Laura C.",
    initials: "LC",
    date: "November 18, 2024",
    rating: 4,
    product: "Racing Exhaust System",
    text: "Great sound and performance but slightly louder than expected. Quality is excellent and installation was smooth.",
  },
  {
    id: 19,
    name: "Brian M.",
    initials: "BM",
    date: "November 15, 2024",
    rating: 5,
    product: "Performance Clutch Kit",
    text: "Perfect for high-performance applications. Engagement is smooth and the holding power is impressive.",
  },
  {
    id: 20,
    name: "Jessica T.",
    initials: "JT",
    date: "November 12, 2024",
    rating: 5,
    product: "Aerodynamic Body Kit",
    text: "Transforms the look of the car completely. The aerodynamic benefits are noticeable at highway speeds.",
  },
  {
    id: 21,
    name: "Daniel F.",
    initials: "DF",
    date: "November 8, 2024",
    rating: 5,
    product: "Racing Seats Set",
    text: "Professional quality seats with excellent support. The adjustability is perfect and the materials are top-notch.",
  },
]

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

function initializeApp() {
  setupEventListeners()
  loadPopularProducts()
  loadReviews()
  updateCartCount()
  setupAnimations()
}

function setupEventListeners() {
  // Mobile menu toggle
  const hamburger = document.getElementById("hamburger")
  const mobileMenu = document.getElementById("mobileMenu")

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      mobileMenu.classList.toggle("active")
    })
  }

  // Mobile dropdown toggles
  const mobileDropdownBtns = document.querySelectorAll(".mobile-dropdown-btn")
  mobileDropdownBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const content = this.nextElementSibling
      content.classList.toggle("active")

      const icon = this.querySelector("i")
      icon.style.transform = content.classList.contains("active") ? "rotate(180deg)" : "rotate(0deg)"
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      mobileMenu &&
      mobileMenu.classList.contains("active") &&
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      hamburger.classList.remove("active")
      mobileMenu.classList.remove("active")
    }
  })

  // Newsletter form
  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector(".newsletter-input").value
      if (email) {
        alert("Thank you for subscribing to our newsletter!")
        this.reset()
      }
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

function loadPopularProducts() {
  const container = document.getElementById("popularProducts")
  if (!container) return

  const popularProducts = products.slice(0, 5)

  container.innerHTML = popularProducts
    .map(
      (product) => `
        <div class="product-card animate-fade-up" style="animation-delay: ${Math.random() * 0.5}s">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price}</div>
                <div class="product-actions">
                    <button class="btn btn-outline btn-small" onclick="showProductDetail(${product.id})">
                        See Details
                    </button>
                    <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

function loadReviews() {
  const container = document.getElementById("reviewsGrid")
  if (!container) return

  const displayReviews = reviews.slice(0, 5)

  container.innerHTML = displayReviews
    .map(
      (review) => `
        <div class="review-card animate-fade-up" style="animation-delay: ${Math.random() * 0.5}s">
            <div class="review-header">
                <div class="reviewer-avatar">${review.initials}</div>
                <div class="reviewer-info">
                    <h4>${review.name}</h4>
                    <div class="review-date">${review.date}</div>
                </div>
            </div>
            <div class="review-rating">
                ${generateStars(review.rating)}
            </div>
            <div class="review-product">${review.product}</div>
            <div class="review-text">${review.text}</div>
        </div>
    `,
    )
    .join("")
}

function generateStars(rating) {
  let stars = ""
  for (let i = 1; i <= 5; i++) {
    stars += `<i class="fas fa-star star ${i <= rating ? "" : "empty"}"></i>`
  }
  return stars
}

function showProductDetail(productId) {
  const product = products.find((p) => p.id === productId)
  if (!product) return

  // Create modal if it doesn't exist
  let modal = document.getElementById("productDetailModal")
  if (!modal) {
    modal = document.createElement("div")
    modal.id = "productDetailModal"
    modal.className = "product-detail"
    document.body.appendChild(modal)
  }

  modal.innerHTML = `
        <div class="product-detail-content">
            <div class="product-detail-header">
                <h2>${product.name}</h2>
                <button class="close-detail" onclick="closeProductDetail()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="product-detail-body">
                <div class="product-images">
                    ${product.images.map((img) => `<img src="${img}" alt="${product.name}">`).join("")}
                </div>
                <div class="product-price">$${product.price}</div>
                <p class="product-description">${product.description}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                    <input type="number" value="1" min="1" class="quantity-input" id="productQuantity">
                    <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCartWithQuantity(${product.id})">
                        Add to Cart
                    </button>
                    <button class="btn btn-outline" onclick="closeProductDetail()">
                        Back to Catalog
                    </button>
                </div>
            </div>
        </div>
    `

  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeProductDetail() {
  const modal = document.getElementById("productDetailModal")
  if (modal) {
    modal.classList.remove("active")
    document.body.style.overflow = ""
  }
}

function changeQuantity(change) {
  const input = document.getElementById("productQuantity")
  if (input) {
    const currentValue = Number.parseInt(input.value)
    const newValue = Math.max(1, currentValue + change)
    input.value = newValue
  }
}

function findProductById(productId) {
  // Search in main products array (from script.js)
  let product = products.find(p => p.id === productId);
  if (product) {
    return product;
  }
  // Search in category products array (if it exists)
  if (window.CategoryProducts && window.CategoryProducts.products) {
    product = window.CategoryProducts.products.find(p => p.id === productId);
    if (product) {
      return product;
    }
  }
  return null;
}

function addToCart(productId, quantity = 1) {
  const product = findProductById(productId);
  if (!product) return

  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({
      ...product,
      quantity: quantity,
    })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()

  // Show success message
  showNotification(`${product.name} added to cart!`)
}

function addToCartWithQuantity(productId) {
  const quantityInput = document.getElementById("productQuantity")
  const quantity = quantityInput ? Number.parseInt(quantityInput.value) : 1
  addToCart(productId, quantity)
  closeProductDetail()
}

// Utility: Update cart count in header everywhere
function updateCartCount() {
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem('cart') || '[]');
        if (!Array.isArray(cart)) cart = [];
    } catch (e) {
        cart = [];
    }
    let totalCount = 0;
    for (let i = 0; i < cart.length; i++) {
        let qty = Number(cart[i].qty);
        if (!isNaN(qty) && qty > 0) totalCount += qty;
    }
    var cartCountElem = document.querySelector('.cart-count');
    if (cartCountElem) cartCountElem.textContent = totalCount;
}

// Utility: Add a product to cart (call this from all product/category pages)
function addToCart(product) {
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem('cart') || '[]');
        if (!Array.isArray(cart)) cart = [];
    } catch (e) {
        cart = [];
    }
    // product: {id, title, price, qty, image}
    let existing = cart.find(item => item.id === product.id);
    let qtyToAdd = Number(product.qty || 1);
    if (existing) {
        existing.qty = Number(existing.qty || 0) + qtyToAdd;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            qty: qtyToAdd,
            image: product.image
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Ensure cart count is correct on every page load
document.addEventListener('DOMContentLoaded', updateCartCount);

// Show notification
function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div")
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--accent-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `
  notification.textContent = message

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

function setupAnimations() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running"
      }
    })
  }, observerOptions)

  // Observe all animated elements
  document.querySelectorAll(".animate-fade-up, .animate-slide-right, .animate-slide-left").forEach((el) => {
    el.style.animationPlayState = "paused"
    observer.observe(el)
  })

  // Header scroll effect
  let lastScrollY = window.scrollY
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)"
      header.style.boxShadow = "var(--shadow)"
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)"
      header.style.boxShadow = "none"
    }
    lastScrollY = window.scrollY
  })
}

// Close modal when clicking outside
document.addEventListener("click", (e) => {
  const modal = document.getElementById("productDetailModal")
  if (modal && modal.classList.contains("active") && e.target === modal) {
    closeProductDetail()
  }
})

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProductDetail()
    const mobileMenu = document.getElementById("mobileMenu")
    const hamburger = document.getElementById("hamburger")
    if (mobileMenu && mobileMenu.classList.contains("active")) {
      hamburger.classList.remove("active")
      mobileMenu.classList.remove("active")
    }
  }
})

// Instagram links: open in external context to avoid blank page in in-app browsers
document.addEventListener("DOMContentLoaded", function() {
  var igUrl = "https://www.instagram.com/86partz_official/"
  document.querySelectorAll('a[href*="instagram.com"]').forEach(function(a) {
    a.setAttribute("href", igUrl)
    a.setAttribute("rel", "noopener noreferrer")
    a.addEventListener("click", function(e) {
      e.preventDefault()
      window.open(igUrl, "_blank", "noopener,noreferrer")
    })
  })
})
