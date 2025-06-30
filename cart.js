let cart = JSON.parse(localStorage.getItem("cart")) || []

document.addEventListener("DOMContentLoaded", () => {
  loadCartItems()
  updateCartCount()
})

function loadCartItems() {
  const cartItemsContainer = document.getElementById("cartItems")
  const cartTotal = document.getElementById("cartTotal")
  const emptyCart = document.getElementById("emptyCart")

  let cart = JSON.parse(localStorage.getItem("cart")) || []

  if (cart.length === 0) {
    emptyCart.style.display = "block"
    cartTotal.style.display = "none"
    return
  }

  emptyCart.style.display = "none"
  cartTotal.style.display = "block"

  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h3 class="cart-item-title">${item.name}</h3>
                <div class="cart-item-price">$${item.price}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                <button class="btn btn-outline btn-small" onclick="removeFromCart(${item.id})" style="margin-left: 1rem;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `,
    )
    .join("")

  updateCartTotal()
}

function updateCartQuantity(productId, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  const item = cart.find((item) => item.id === productId)
  if (item) {
    item.quantity += change
    if (item.quantity <= 0) {
      cart = cart.filter((item) => item.id !== productId)
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    loadCartItems()
    updateCartCount()
  }
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  cart = cart.filter((item) => item.id !== productId)
  localStorage.setItem("cart", JSON.stringify(cart))
  loadCartItems()
  updateCartCount()
  showNotification("Item removed from cart")
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartCountElement = document.querySelector(".cart-count")
  if (cartCountElement) {
    cartCountElement.textContent = cartCount
  }
}

function updateCartTotal() {
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  document.getElementById("totalAmount").textContent = `$${total.toFixed(2)}`
}

function placeOrder() {
  // This will be implemented later with EmailJS
  alert("Order functionality will be implemented with EmailJS. Thank you for your interest!")
}

function showNotification(message) {
  alert(message)
}
