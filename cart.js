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

// --- Checkout/Order Placement Logic ---

// Helper: Format date
function formatDateTime(date) {
  return date.toLocaleString('en-US', {
    year: 'numeric', month: 'short', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: true
  });
}

// Helper: Get total
function getCartTotal() {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  return cart.reduce((sum, item) => sum + (item.price * (item.qty || item.quantity || 1)), 0);
}

// Validate checkout form
function validateCheckoutForm() {
  const name = document.getElementById('customerName').value.trim();
  const email = document.getElementById('customerEmail').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();
  const address = document.getElementById('customerAddress').value.trim();
  const payment = document.getElementById('paymentMethod').value.trim();
  return name && email && phone && address && payment;
}

// Enable/disable Place Order button based on form validity
function updatePlaceOrderButtonState() {
  const btn = document.querySelector('.btn.btn-primary[onclick="placeOrder()"]');
  if (!btn) return;
  btn.disabled = !validateCheckoutForm() || (JSON.parse(localStorage.getItem('cart') || '[]').length === 0);
  btn.style.opacity = btn.disabled ? 0.6 : 1;
  btn.style.cursor = btn.disabled ? 'not-allowed' : 'pointer';
}

document.getElementById('checkoutForm')?.addEventListener('input', updatePlaceOrderButtonState);
document.addEventListener('DOMContentLoaded', updatePlaceOrderButtonState);

// --- Receipt Modal ---
function showReceiptModal(order) {
  let modal = document.getElementById('orderReceiptModal');
  // Helper: currency format
  function fmt(n) { return '$' + Number(n).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2}); }
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'orderReceiptModal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.7)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '9999';
    modal.innerHTML = `<div id="receiptContent" style="background:#fff;max-width:440px;width:95vw;max-height:92vh;overflow-y:auto;padding:2.2rem 1.5rem 2rem 1.5rem;position:relative;text-align:left;box-sizing:border-box;border-radius:0;">
      <button id="closeReceiptModal" style="position:absolute;top:0.7rem;right:1rem;font-size:2rem;background:none;border:none;cursor:pointer;border-radius:0;">&times;</button>
      <div style="text-align:center;margin-bottom:1.5rem;">
        <img src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-TcqfBd0xwqxL4ERf3OEAf8TdxOYkYL.jpeg' alt='GT86Partz Logo' style='height:60px;border-radius:50%;margin-bottom:0.5em;'>
        <div style="font-size:1.7rem;font-weight:800;color:#b80000;letter-spacing:1px;margin-bottom:0.2em;">Order Placed!</div>
        <div style="color:#222;font-size:1.08rem;font-weight:500;">Your receipt</div>
      </div>
      <div style="margin-bottom:1.2em;font-size:1.01rem;color:#444;"><b>Order Date:</b> <span style='color:#b80000;'>${order.date}</span></div>
      <div style="margin-bottom:1.5em;padding:1em 1em 0.7em 1em;background:#f7f7f7;">
        <div style="font-weight:700;margin-bottom:0.5em;color:#222;">Customer Info</div>
        <div><b>Name:</b> ${order.name}</div>
        <div><b>Email:</b> ${order.email}</div>
        <div><b>Phone:</b> ${order.phone}</div>
        <div><b>Address:</b> ${order.address}</div>
        ${order.instructions ? `<div><b>Special Instructions:</b> ${order.instructions}</div>` : ''}
        <div><b>Payment Method:</b> ${order.payment}</div>
      </div>
      <div style="margin-bottom:1.5em;">
        <div style="font-weight:700;margin-bottom:0.5em;color:#222;">Order Items</div>
        <table style="width:100%;border-collapse:collapse;font-size:0.98rem;">
          <thead><tr style="background:#f3f3f3;"><th style='text-align:left;padding:0.4em 0.3em;font-weight:600;'>Item</th><th style='text-align:center;padding:0.4em 0.3em;font-weight:600;'>Qty</th><th style='text-align:right;padding:0.4em 0.3em;font-weight:600;'>Subtotal</th></tr></thead>
          <tbody>
            ${order.items.map(item => `<tr><td style='padding:0.3em 0.2em;'>${item.title}</td><td style='text-align:center;'>${item.qty}</td><td style='text-align:right;'>${fmt(item.price * item.qty)}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div style="font-size:1.15rem;font-weight:800;margin-bottom:1.2em;text-align:right;">Total: <span style="color:#b80000;">${fmt(order.total)}</span></div>
      <div style="text-align:center;color:#222;font-size:1.08rem;margin-top:1.5em;">We appreciate your business.<br>Our team will contact you soon.</div>
    </div>`;
    document.body.appendChild(modal);
  } else {
    // update content if already exists
    modal.querySelector('#receiptContent').innerHTML = `<button id="closeReceiptModal" style="position:absolute;top:0.7rem;right:1rem;font-size:2rem;background:none;border:none;cursor:pointer;border-radius:0;">&times;</button>
      <div style="text-align:center;margin-bottom:1.5rem;">
        <img src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-TcqfBd0xwqxL4ERf3OEAf8TdxOYkYL.jpeg' alt='GT86Partz Logo' style='height:60px;border-radius:50%;margin-bottom:0.5em;'>
        <div style="font-size:1.7rem;font-weight:800;color:#b80000;letter-spacing:1px;margin-bottom:0.2em;">Order Placed!</div>
        <div style="color:#222;font-size:1.08rem;font-weight:500;">Your receipt</div>
      </div>
      <div style="margin-bottom:1.2em;font-size:1.01rem;color:#444;"><b>Order Date:</b> <span style='color:#b80000;'>${order.date}</span></div>
      <div style="margin-bottom:1.5em;padding:1em 1em 0.7em 1em;background:#f7f7f7;">
        <div style="font-weight:700;margin-bottom:0.5em;color:#222;">Customer Info</div>
        <div><b>Name:</b> ${order.name}</div>
        <div><b>Email:</b> ${order.email}</div>
        <div><b>Phone:</b> ${order.phone}</div>
        <div><b>Address:</b> ${order.address}</div>
        ${order.instructions ? `<div><b>Special Instructions:</b> ${order.instructions}</div>` : ''}
        <div><b>Payment Method:</b> ${order.payment}</div>
      </div>
      <div style="margin-bottom:1.5em;">
        <div style="font-weight:700;margin-bottom:0.5em;color:#222;">Order Items</div>
        <table style="width:100%;border-collapse:collapse;font-size:0.98rem;">
          <thead><tr style="background:#f3f3f3;"><th style='text-align:left;padding:0.4em 0.3em;font-weight:600;'>Item</th><th style='text-align:center;padding:0.4em 0.3em;font-weight:600;'>Qty</th><th style='text-align:right;padding:0.4em 0.3em;font-weight:600;'>Subtotal</th></tr></thead>
          <tbody>
            ${order.items.map(item => `<tr><td style='padding:0.3em 0.2em;'>${item.title}</td><td style='text-align:center;'>${item.qty}</td><td style='text-align:right;'>${fmt(item.price * item.qty)}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div style="font-size:1.15rem;font-weight:800;margin-bottom:1.2em;text-align:right;">Total: <span style="color:#b80000;">${fmt(order.total)}</span></div>
      <div style="text-align:center;color:#222;font-size:1.08rem;margin-top:1.5em;">We appreciate your business.<br>Our team will contact you soon.</div>`;
  }
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  modal.querySelector('#closeReceiptModal').onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  };
  modal.onclick = function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  };
}

// --- Smartsupp API integration ---
function sendOrderToSmartsupp(order) {
  if (window._smartsupp && window._smartsupp.chat) {
    // Compose summary
    let msg = `NEW ORDER RECEIVED\n` +
      `Date: ${order.date}\n` +
      `Name: ${order.name}\n` +
      `Email: ${order.email}\n` +
      `Phone: ${order.phone}\n` +
      `Address: ${order.address}\n` +
      (order.instructions ? `Special Instructions: ${order.instructions}\n` : '') +
      `Payment: ${order.payment}\n` +
      `Items:\n` +
      order.items.map(item => `- ${item.qty} × ${item.title} @ $${item.price} = $${(item.price * item.qty).toFixed(2)}`).join('\n') +
      `\nTotal: $${order.total.toFixed(2)}`;
    try {
      window._smartsupp.chat.message(msg);
    } catch (e) {
      // fallback: do nothing
    }
  }
}

// --- Place Order Handler ---
function placeOrder() {
  // Validate form
  if (!validateCheckoutForm()) {
    alert('Please fill in all required fields.');
    return;
  }
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  if (!cart.length) {
    alert('Your cart is empty.');
    return;
  }
  // Gather form data
  const name = document.getElementById('customerName').value.trim();
  const email = document.getElementById('customerEmail').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();
  const address = document.getElementById('customerAddress').value.trim();
  const instructions = document.getElementById('specialInstructions').value.trim();
  const payment = document.getElementById('paymentMethod').value.trim();
  const date = formatDateTime(new Date());
  const items = cart.map(item => ({
    title: item.title || item.name,
    price: parseFloat(typeof item.price === 'number' ? item.price : (item.price||'').replace(/[^0-9.\-]/g, '')),
    qty: parseInt(item.qty || item.quantity || 1)
  }));
  const total = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const order = { name, email, phone, address, instructions, payment, date, items, total };
  // Show receipt
  showReceiptModal(order);
  // Send to Smartsupp
  sendOrderToSmartsupp(order);
  // Clear cart
  localStorage.removeItem('cart');
  loadCartItems();
  updateCartCount();
  updatePlaceOrderButtonState();
  // Optionally, reset form
  document.getElementById('checkoutForm').reset();
}

function showNotification(message) {
  alert(message)
}
