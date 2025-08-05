// search-results.js: Handles dynamic search results rendering for search.html

// Helper: Get all products from SEARCH_INDEX (search-data.js)
function getAllProducts() {
    if (window.SEARCH_INDEX && Array.isArray(window.SEARCH_INDEX)) {
        return window.SEARCH_INDEX;
    }
    return [];
}

// Helper: Check if a string contains a year or a year range that includes a given year
function matchesYear(str, year) {
    if (!str) return false;
    if (str.match(new RegExp('\\b' + year + '\\b'))) return true;
    const rangeRegex = /(20\d{2})\s*[–-]\s*(20\d{2}|\d{2})/g;
    let m;
    while ((m = rangeRegex.exec(str)) !== null) {
        let start = parseInt(m[1], 10);
        let end = m[2].length === 2 ? parseInt('20' + m[2], 10) : parseInt(m[2], 10);
        if (year >= start && year <= end) return true;
    }
    return false;
}

// Main search function
function searchProducts(query) {
    const allProducts = getAllProducts();
    if (!query || !allProducts.length) return [];
    query = query.trim();
    let year = null;
    if (/^\d{4}$/.test(query)) year = parseInt(query, 10);
    const q = query.toLowerCase();
    // If searching for a year, prioritize year/range logic
    if (year) {
        return allProducts.filter(p => {
            const name = (p.name || '').toLowerCase();
            const desc = (p.description || '').toLowerCase();
            // Check for year in ranges in name/desc
            return matchesYear(name, year) || matchesYear(desc, year);
        });
    }
    // For non-year queries, match if query is a substring of any word in name/desc (case-insensitive)
    return allProducts.filter(p => {
        const name = (p.name || '').toLowerCase();
        const desc = (p.description || '').toLowerCase();
        // Match if query is a substring of any word in name or description
        return name.includes(q) || desc.includes(q);
    });
}

// Render search results as product cards
function renderSearchResults(results, query) {
    const container = document.getElementById('searchResultsContainer');
    const title = document.getElementById('searchTitle');
    if (!results.length) {
        title.textContent = `No products found for "${query}"`;
        container.innerHTML = '';
        return;
    }
    title.textContent = `Search Results for "${query}"`;
    container.innerHTML = `<div class="products-grid">` +
        results.map(p => {
            let img = p.image || (p.images && p.images[0]) || '';
            let price = p.price ? (typeof p.price === 'string' ? p.price : `$${p.price}`) : '';
            let slug = (p.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').replace(/-+/g, '-');
            let prettyUrl = window.location.origin + window.location.pathname.replace(/\/search\.html.*/, '') + '/' + p.id + '-' + slug;
            return `
            <div class="product-card" data-product-id="${p.id}">
                <img src="${img}" alt="${p.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${p.name || 'Product'}</h3>
                    <div class="product-price">$${p.price}</div>
                    <div class="product-actions" style="margin-bottom:0.7em;display:flex;gap:0.5em;">
                        <button class="btn btn-small btn-outline see-details-btn" data-id="${p.id}">See Details</button>
                        <button class="btn btn-small btn-social copy-link-btn" data-link="${prettyUrl}"><i class="fas fa-share-alt" style="margin-right:0.4em;"></i>Copy Link</button>
                    </div>
                    <div class="quantity-controls" style="display:flex;align-items:center;gap:0.7rem;margin:1em 0;">
                        <button class="quantity-btn qtyDec" data-id="${p.id}" style="font-size:1.3rem;width:2.2em;height:2.2em;border-radius:50%;border:1px solid #ddd;background:#fafafa;cursor:pointer;">-</button>
                        <span class="qtyVal" data-id="${p.id}" style="font-size:1.2rem;min-width:2em;display:inline-block;text-align:center;">1</span>
                        <button class="quantity-btn qtyInc" data-id="${p.id}" style="font-size:1.3rem;width:2.2em;height:2.2em;border-radius:50%;border:1px solid #ddd;background:#fafafa;cursor:pointer;">+</button>
                    </div>
                    <button class="btn btn-primary btn-small add-to-cart-btn" data-id="${p.id}" style="width:100%;padding:1rem 0;font-size:1.1rem;background:#b80000;color:#fff;border:none;border-radius:8px;display:block;margin-bottom:0.7rem;">Add to Cart</button>
                </div>
            </div>
            `;
        }).join('') + `</div>`;

    // Copy Link functionality
    container.querySelectorAll('.copy-link-btn').forEach(btn => {
        btn.onclick = function() {
            const link = btn.getAttribute('data-link');
            navigator.clipboard.writeText(link).then(() => {
                btn.innerHTML = '<i class="fas fa-share-alt" style="margin-right:0.4em;"></i>Link Copied!';
                setTimeout(() => { btn.innerHTML = '<i class="fas fa-share-alt" style="margin-right:0.4em;"></i>Copy Link'; }, 1400);
            });
        };
    });

    // Quantity logic
    container.querySelectorAll('.product-card').forEach(card => {
        let qty = 1;
        const id = card.getAttribute('data-product-id');
        const qtyVal = card.querySelector('.qtyVal');
        const decBtn = card.querySelector('.qtyDec');
        const incBtn = card.querySelector('.qtyInc');
        decBtn.onclick = function() {
            if (qty > 1) qty--;
            qtyVal.textContent = qty;
        };
        incBtn.onclick = function() {
            qty++;
            qtyVal.textContent = qty;
        };
    });

    // Add to Cart logic
    container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.onclick = function() {
            const card = btn.closest('.product-card');
            const id = parseInt(card.getAttribute('data-product-id'));
            const product = (window.SEARCH_INDEX || []).find(p => p.id === id);
            if (!product) return;
            let qty = parseInt(card.querySelector('.qtyVal').textContent) || 1;
            // Use global addToCart if available, else fallback
            if (typeof addToCart === 'function') {
                addToCart({
                    id: product.id,
                    title: product.name,
                    price: product.price,
                    qty: qty,
                    image: product.image
                });
            } else {
                // Fallback: localStorage logic
                let cart = JSON.parse(localStorage.getItem('cart') || '[]');
                const existing = cart.find(item => item.id === product.id);
                if (existing) {
                    existing.qty = Number(existing.qty || 0) + qty;
                } else {
                    cart.push({ id: product.id, title: product.name, price: product.price, qty: qty, image: product.image });
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                if (typeof updateCartCount === 'function') updateCartCount();
            }
            let conf = document.getElementById('cartConfirmMsg');
            if (!conf) {
                conf = document.createElement('div');
                conf.id = 'cartConfirmMsg';
                conf.style.position = 'fixed';
                conf.style.top = '24px';
                conf.style.left = '50%';
                conf.style.transform = 'translateX(-50%)';
                conf.style.background = '#fff';
                conf.style.color = '#222';
                conf.style.border = '1.5px solid #b80000';
                conf.style.borderRadius = '8px';
                conf.style.boxShadow = '0 4px 24px rgba(0,0,0,0.13)';
                conf.style.padding = '1.1em 2.2em';
                conf.style.fontSize = '1.08rem';
                conf.style.fontWeight = '600';
                conf.style.zIndex = '10000';
                conf.style.display = 'none';
                document.body.appendChild(conf);
            }
            conf.innerHTML = `<i class=\"fas fa-check-circle\" style=\"color:#b80000;margin-right:0.6em;\"></i> ${qty} × <b>${product.name}</b> added to cart!`;
            conf.style.display = 'block';
            setTimeout(() => { conf.style.display = 'none'; }, 2200);
        };
    });

    // See Details modal logic (must NOT be nested inside add-to-cart logic)
    container.querySelectorAll('.see-details-btn').forEach(btn => {
        btn.onclick = function() {
            const id = parseInt(btn.getAttribute('data-id'));
            const product = (window.SEARCH_INDEX || []).find(p => p.id === id);
            if (!product) return;
            // Remove any existing modal before creating a new one
            let oldModal = document.getElementById('searchProductDetailModal');
            if (oldModal && oldModal.parentNode) oldModal.parentNode.removeChild(oldModal);
            let modal = document.createElement('div');
            modal.className = 'product-detail';
            modal.id = 'searchProductDetailModal';
            let slug = (product.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').replace(/-+/g, '-');
            let base = window.location.origin + window.location.pathname.replace(/\/search\.html.*/, '');
            let prettyUrl = base + '/' + product.id + '-' + slug;
            modal.innerHTML = `
                <div class=\"product-detail-content\">
                    <button class=\"close-detail\" id=\"closeSearchDetailBtn\">&times;</button>
                    <div class=\"product-detail-header\">
                        <h2 id=\"searchDetailTitle\">${product.name}</h2>
                    </div>
                    <div class=\"product-detail-body\">
                        <div class=\"product-images\" id=\"searchDetailImages\">${(product.images||[]).map(img =>
                            `<img src=\"${img}\" alt=\"${product.name}\" style=\"width:100px;height:70px;object-fit:cover;margin-right:8px;border-radius:6px;\">`
                        ).join('')}</div>
                        <div class=\"product-info\">
                            <div id=\"searchDetailPrice\">$${product.price}</div>
                            <div id=\"searchDetailDescription\">${product.description}</div>
                            <button class=\"btn btn-social copy-link-btn-modal\" data-link=\"${prettyUrl}\" style=\"margin:0.7em 0 1.1em 0;padding:0.3em 0.8em;font-size:1em;width:100%;\"><i class=\\"fas fa-share-alt\\" style=\\"margin-right:0.4em;\\"></i>Copy Link to This Product</button>
                            <div style=\"display:flex;align-items:center;gap:0.7rem;margin-bottom:1.2rem;\">
                                <button id=\"qtyDecModal\" style=\"font-size:1.3rem;width:2.2em;height:2.2em;border-radius:50%;border:1px solid #ddd;background:#fafafa;cursor:pointer;\">-</button>
                                <span id=\"qtyValModal\" style=\"font-size:1.2rem;min-width:2em;display:inline-block;text-align:center;\">1</span>
                                <button id=\"qtyIncModal\" style=\"font-size:1.3rem;width:2.2em;height:2.2em;border-radius:50%;border:1px solid #ddd;background:#fafafa;cursor:pointer;\">+</button>
                            </div>
                            <button class=\"btn btn-primary btn-small\" id=\"modalAddToCartBtn\" style=\"width:100%;padding:1rem 0;font-size:1.1rem;background:#b80000;color:#fff;border:none;border-radius:8px;display:block;margin-bottom:0.7rem;\">Add to Cart</button>
                            <button class=\"btn btn-secondary\" id=\"backToSearchResultsBtn\">Back to Results</button>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            setTimeout(() => { modal.classList.add('active'); document.body.style.overflow = 'hidden'; }, 10);
            // Copy link in modal
            const copyBtnModal = modal.querySelector('.copy-link-btn-modal');
            if (copyBtnModal) {
                copyBtnModal.onclick = function() {
                    const link = copyBtnModal.getAttribute('data-link');
                    navigator.clipboard.writeText(link).then(() => {
                        copyBtnModal.textContent = 'Link Copied!';
                        setTimeout(() => { copyBtnModal.innerHTML = `<i class=\"fas fa-share-alt\" style=\"margin-right:0.4em;\"></i>Copy Link to This Product`; }, 1400);
                    });
                };
            }
            // Quantity logic in modal
            let qty = 1;
            const qtyVal = modal.querySelector('#qtyValModal');
            modal.querySelector('#qtyDecModal').onclick = function() {
                if (qty > 1) qty--;
                qtyVal.textContent = qty;
            };
            modal.querySelector('#qtyIncModal').onclick = function() {
                qty++;
                qtyVal.textContent = qty;
            };
            // Add to Cart in modal
            modal.querySelector('#modalAddToCartBtn').onclick = function() {
                let modalQty = parseInt(qtyVal.textContent) || 1;
                if (typeof addToCart === 'function') {
                    addToCart({
                        id: product.id,
                        title: product.name,
                        price: product.price,
                        qty: modalQty,
                        image: product.image
                    });
                } else {
                    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
                    const existing = cart.find(item => item.id === product.id);
                    if (existing) {
                        existing.qty = Number(existing.qty || 0) + modalQty;
                    } else {
                        cart.push({ id: product.id, title: product.name, price: product.price, qty: modalQty, image: product.image });
                    }
                    localStorage.setItem('cart', JSON.stringify(cart));
                    if (typeof updateCartCount === 'function') updateCartCount();
                }
                let conf = document.getElementById('cartConfirmMsg');
                if (!conf) {
                    conf = document.createElement('div');
                    conf.id = 'cartConfirmMsg';
                    conf.style.position = 'fixed';
                    conf.style.top = '24px';
                    conf.style.left = '50%';
                    conf.style.transform = 'translateX(-50%)';
                    conf.style.background = '#fff';
                    conf.style.color = '#222';
                    conf.style.border = '1.5px solid #b80000';
                    conf.style.borderRadius = '8px';
                    conf.style.boxShadow = '0 4px 24px rgba(0,0,0,0.13)';
                    conf.style.padding = '1.1em 2.2em';
                    conf.style.fontSize = '1.08rem';
                    conf.style.fontWeight = '600';
                    conf.style.zIndex = '10000';
                    conf.style.display = 'none';
                    document.body.appendChild(conf);
                }
                conf.innerHTML = `<i class=\"fas fa-check-circle\" style=\"color:#b80000;margin-right:0.6em;\"></i> ${modalQty} × <b>${product.name}</b> added to cart!`;
                conf.style.display = 'block';
                setTimeout(() => { conf.style.display = 'none'; }, 2200);
                modal.classList.remove('active');
                document.body.style.overflow = '';
                setTimeout(() => { if (modal.parentNode) modal.parentNode.removeChild(modal); }, 300);
            };
            modal.querySelector('#closeSearchDetailBtn').onclick = function() {
                modal.classList.remove('active');
                document.body.style.overflow = '';
                setTimeout(() => { if (modal.parentNode) modal.parentNode.removeChild(modal); }, 300);
            };
            modal.querySelector('#backToSearchResultsBtn').onclick = function() {
                modal.classList.remove('active');
                document.body.style.overflow = '';
                setTimeout(() => { if (modal.parentNode) modal.parentNode.removeChild(modal); }, 300);
            };
        };
    });
                    conf = document.createElement('div');
                    conf.id = 'cartConfirmMsg';
                    conf.style.position = 'fixed';
                    conf.style.top = '24px';
                    conf.style.left = '50%';
                    conf.style.transform = 'translateX(-50%)';
                    conf.style.background = '#fff';
                    conf.style.color = '#222';
                    conf.style.border = '1.5px solid #b80000';
                    conf.style.borderRadius = '8px';
                    conf.style.boxShadow = '0 4px 24px rgba(0,0,0,0.13)';
                    conf.style.padding = '1.1em 2.2em';
                    conf.style.fontSize = '1.08rem';
                    conf.style.fontWeight = '600';
                    conf.style.zIndex = '10000';
                    conf.style.display = 'none';
                    document.body.appendChild(conf);
                }
                conf.innerHTML = `<i class=\"fas fa-check-circle\" style=\"color:#b80000;margin-right:0.6em;\"></i> ${modalQty} × <b>${product.name}</b> added to cart!`;
                conf.style.display = 'block';
                setTimeout(() => { conf.style.display = 'none'; }, 2200);
                modal.classList.remove('active');
                document.body.style.overflow = '';
            };
            document.getElementById('closeSearchDetailBtn').onclick = function() {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            };
            document.getElementById('backToSearchResultsBtn').onclick = function() {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            };
        };
    });
}

// Get query from URL
function getQueryParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name) || '';
}

window.addEventListener('DOMContentLoaded', function() {
    const q = getQueryParam('q');
    if (!q) {
        document.getElementById('searchTitle').textContent = 'No search query provided.';
        return;
    }
    const results = searchProducts(q);
    renderSearchResults(results, q);
});
