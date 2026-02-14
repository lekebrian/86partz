// search-results.js: Handles dynamic search results rendering for search.html

// Helper: Get all products from SEARCH_INDEX (search-data.js)
function getAllProducts() {
    var idx = window.SEARCH_INDEX;
    if (idx && Array.isArray(idx) && idx.length > 0) return idx;
    if (idx && typeof idx.length === 'number' && idx.length > 0) return Array.prototype.slice.call(idx);
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

// Main search function (same logic as search-logic.js: match name, description, year)
function searchProducts(query) {
    const allProducts = getAllProducts();
    if (!query || !allProducts.length) return [];
    query = query.trim();
    let year = null;
    if (/^\d{4}$/.test(query)) year = parseInt(query, 10);
    const q = query.toLowerCase();
    if (year) {
        return allProducts.filter(function(p) {
            var name = (p.name || p.title || '').toString().toLowerCase();
            var desc = (p.description || '').toString().toLowerCase();
            var prodYear = (p.year != null ? String(p.year) : '').toLowerCase();
            return matchesYear(prodYear, year) || matchesYear(name, year) || matchesYear(desc, year);
        });
    }
    return allProducts.filter(function(p) {
        var name = (p.name || p.title || '').toString().toLowerCase();
        var desc = (p.description || '').toString().toLowerCase();
        var prodYear = (p.year != null ? String(p.year) : '').toLowerCase();
        return name.indexOf(q) !== -1 || desc.indexOf(q) !== -1 || (prodYear && prodYear.indexOf(q) !== -1);
    });
}

// Render search results as product cards
function renderSearchResults(results, query) {
    const container = document.getElementById('searchResultsContainer');
    const title = document.getElementById('searchTitle');
    if (!results.length) {
        title.innerHTML = `<span style="font-size:1.1rem;font-weight:500;color:#b80000;letter-spacing:0.01em;">No products found for "${query}"</span>`;
        container.innerHTML = '';
        return;
    }
    title.innerHTML = `<span style="font-size:1.15rem;font-weight:500;color:#222;letter-spacing:0.01em;opacity:0.85;">Search Results for <span style='color:#b80000;'>"${query}"</span></span>`;
    container.innerHTML = `<div class="products-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:1.5em 1.2em;margin-top:1.2em;">` +
        results.map(p => {
            let img = p.image || (p.images && p.images[0]) || '';
            let price = p.price ? (typeof p.price === 'string' ? p.price : `$${p.price}`) : '';
            let slug = (p.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').replace(/-+/g, '-');
            let prettyUrl = window.location.origin + window.location.pathname.replace(/\/search\.html.*/, '') + '/' + p.id + '-' + slug;
            return `
            <div class="product-card" data-product-id="${p.id}" style="background:#fff;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.07);padding:1.1em 1em 1.3em 1em;transition:box-shadow 0.2s;">
                <img src="${img}" alt="${p.name}" class="product-image" style="width:100%;height:170px;object-fit:cover;border-radius:8px 8px 0 0;box-shadow:0 1px 6px rgba(0,0,0,0.08);margin-bottom:0.7em;">
                <div class="product-info">
                    <h3 class="product-title" style="font-size:1.08rem;font-weight:600;margin-bottom:0.3em;">${p.name || 'Product'}</h3>
                    <div class="product-price" style="font-size:1.05rem;color:#b80000;font-weight:500;margin-bottom:0.5em;">$${p.price}</div>
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

    // See Details modal logic (single, correct handler)
    container.querySelectorAll('.see-details-btn').forEach(btn => {
        btn.onclick = function() {
            const id = parseInt(btn.getAttribute('data-id'));
            // Use the current search results to find the product, not the global SEARCH_INDEX
            const product = results.find(p => p.id === id);
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
            // Main image (first image or image field)
            let mainImg = product.image || (product.images && product.images[0]) || '';
            // All images (main + additional)
            let allImgs = [mainImg].concat((product.images||[]).filter(img => img !== mainImg));
            // Modal overlay for click-outside-to-close
            let overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.background = 'rgba(0,0,0,0.18)';
            overlay.style.zIndex = '9999';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.appendChild(modal);
            modal.innerHTML = `
                <div class=\"product-detail-content\"> 
                    <button class=\"close-detail\" id=\"closeSearchDetailBtn\">&times;</button>
                    <div class=\"product-detail-header\"> 
                        <h2 id=\"searchDetailTitle\">${product.name}</h2>
                    </div>
                    <div class=\"product-detail-body\"> 
                        <div class=\"product-images\" id=\"searchDetailImages\"> 
                            <img id=\"mainDetailImg\" src=\"${mainImg}\" alt=\"${product.name}\" style=\"width:320px;height:220px;object-fit:cover;margin-bottom:10px;border-radius:8px;display:block;margin-left:auto;margin-right:auto;box-shadow:0 2px 12px rgba(0,0,0,0.13);\"> 
                            <div style=\"display:flex;gap:8px;justify-content:center;margin-top:10px;\"> 
                                ${allImgs.map(img =>
                                    `<img src=\"${img}\" alt=\"${product.name}\" class=\"thumbDetailImg\" style=\"width:70px;height:50px;object-fit:cover;border-radius:6px;cursor:pointer;border:2px solid #eee;transition:border 0.2s;\">`
                                ).join('')}
                            </div>
                        </div>
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
            document.body.appendChild(overlay);
            setTimeout(() => { modal.classList.add('active'); document.body.style.overflow = 'hidden'; }, 10);
            // Click outside modal to close
            overlay.addEventListener('mousedown', function(e) {
                if (e.target === overlay) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                    setTimeout(() => { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 300);
                }
            });
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
            // Image click-to-enlarge/gallery logic
            const mainImgEl = modal.querySelector('#mainDetailImg');
            modal.querySelectorAll('.thumbDetailImg').forEach(thumb => {
                thumb.onclick = function() {
                    if (mainImgEl) mainImgEl.src = thumb.src;
                };
                // Optional: highlight selected thumb
                thumb.addEventListener('click', function() {
                    modal.querySelectorAll('.thumbDetailImg').forEach(t => t.style.border = '2px solid #eee');
                    thumb.style.border = '2px solid #b80000';
                });
            });
            // Start with first thumb highlighted
            const firstThumb = modal.querySelector('.thumbDetailImg');
            if (firstThumb) firstThumb.style.border = '2px solid #b80000';
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
                // ...existing code...
}

// Get query from URL (works with search.html?q= or /search?q=)
function getQueryParam(name) {
    var search = window.location.search || '';
    if (!search && window.location.href.indexOf('?') !== -1) {
        var idx = window.location.href.indexOf('?');
        search = window.location.href.substring(idx);
    }
    try {
        var url = new URL(window.location.href);
        var val = url.searchParams.get(name);
        if (val != null && val !== '') return String(val).trim();
    } catch (e) {}
    var match = search.match(new RegExp('[?&]' + name + '=([^&]*)'));
    if (match) return decodeURIComponent(match[1].replace(/\+/g, ' ')).trim();
    return '';
}

window.addEventListener('DOMContentLoaded', function() {
    const q = getQueryParam('q').trim();
    const titleEl = document.getElementById('searchTitle');
    const containerEl = document.getElementById('searchResultsContainer');
    if (!q) {
        titleEl.textContent = 'Your search was not found.';
        containerEl.innerHTML = '<p style="margin:1rem 0 1.5rem;color:#555;font-size:1.05rem;">No search query was provided. Please search from the homepage.</p><a href="index.html" class="btn btn-primary">Back to home</a>';
        return;
    }
    var allProducts = getAllProducts();
    if (!allProducts.length) {
        titleEl.textContent = 'Search unavailable';
        containerEl.innerHTML = '<p style="margin:1rem 0 1.5rem;color:#555;">The product list could not be loaded. Please refresh the page or <a href="index.html">go back to the homepage</a> and try again.</p><a href="index.html" class="btn btn-primary">Back to home</a>';
        return;
    }
    var results = searchProducts(q);
    if (!results.length) {
        titleEl.innerHTML = '<span style="font-size:1.1rem;font-weight:500;color:#b80000;">Your search was not found.</span>';
        containerEl.innerHTML = '<p style="margin:1rem 0 1.5rem;color:#555;">No products match <strong>"' + q.replace(/</g, '&lt;') + '"</strong>. Try a different term or <a href="index.html">search from the homepage</a>.</p><a href="index.html" class="btn btn-primary">Back to home</a>';
        return;
    }
    titleEl.innerHTML = '<span style="font-size:1.15rem;font-weight:500;color:#222;">Search Results for <span style="color:#b80000;">"' + q.replace(/</g, '&lt;') + '"</span></span>';
    renderSearchResults(results, q);
});
