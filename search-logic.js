// --- GLOBAL PRODUCT SEARCH FUNCTIONALITY (using SEARCH_INDEX) ---
// 1. Aggregate all products from window.SEARCH_INDEX (search-data.js)
// 2. Search by name, description, and year (including year ranges)
// 3. Show results in a dropdown overlay

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
    // Match single year (2015)
    if (str.match(new RegExp('\\b' + year + '\\b'))) return true;
    // Match ranges like 2013-2021, 2012–2016, 2013–20, etc.
    const rangeRegex = /(20\d{2})\s*[–-]\s*(20\d{2}|\d{2})/g;
    let m;
    while ((m = rangeRegex.exec(str)) !== null) {
        let start = parseInt(m[1], 10);
        let end = m[2].length === 2 ? parseInt('20' + m[2], 10) : parseInt(m[2], 10);
        if (year >= start && year <= end) return true;
    }
    return false;
}

// Main search function (uses SEARCH_INDEX)
function searchProducts(query) {
    const allProducts = getAllProducts();
    if (!query || !allProducts.length) return [];
    query = query.trim();
    let year = null;
    if (/^\d{4}$/.test(query)) year = parseInt(query, 10);
    const q = query.toLowerCase();
    return allProducts.filter(p => {
        const name = (p.name || '').toLowerCase();
        const desc = (p.description || '').toLowerCase();
        const prodYear = (p.year || '').toLowerCase();
        // If searching for a year, check year field and also in name/description
        if (year) {
            if (matchesYear(prodYear, year) || matchesYear(name, year) || matchesYear(desc, year)) return true;
            return false;
        }
        // Otherwise, match name, description, or year field
        return name.includes(q) || desc.includes(q) || prodYear.includes(q);
    });
}

// UI: Show results in a dropdown overlay
function showSearchResults(results, query) {
    let overlay = document.getElementById('searchResultsOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'searchResultsOverlay';
        overlay.style.position = 'absolute';
        overlay.style.left = '50%';
        overlay.style.top = '70px';
        overlay.style.transform = 'translateX(-50%)';
        overlay.style.background = '#fff';
        overlay.style.boxShadow = '0 4px 24px rgba(0,0,0,0.13)';
        overlay.style.borderRadius = '10px';
        overlay.style.zIndex = '10001';
        overlay.style.width = 'min(95vw, 900px)';
        overlay.style.maxHeight = '80vh';
        overlay.style.overflowY = 'auto';
        overlay.style.padding = '1.2em 1em';
        overlay.style.fontSize = '1.08rem';
        overlay.style.display = 'none';
        document.body.appendChild(overlay);
    }
    if (!results.length) {
        overlay.innerHTML = `<div style='padding:1.2em;text-align:center;color:#888;'>No products found for "${query}"</div>`;
    } else {
        overlay.innerHTML = `<div class="products-grid" id="searchProductsGrid">` +
            results.map(p => {
                let img = p.image || (p.images && p.images[0]) || '';
                let price = p.price ? (typeof p.price === 'string' ? p.price : `$${p.price}`) : '';
                let slug = (p.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').replace(/-+/g, '-');
                let prettyUrl = window.location.origin + window.location.pathname.replace(/\.html.*/, '') + '/' + p.id + '-' + slug;
                return `
                <div class="product-card" data-product-id="${p.id}">
                    <img src="${img}" alt="${p.name}" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">${p.name || 'Product'}</h3>
                        <div class="product-price">${price}</div>
                        <div class="product-actions" style="margin-bottom:0.7em;">
                            <button class="btn btn-small btn-outline see-details-btn" data-id="${p.id}">See Details</button>
                            <button class="btn btn-small btn-social copy-link-btn" data-link="${prettyUrl}"><i class="fas fa-share-alt" style="margin-right:0.4em;"></i>Copy Link</button>
                        </div>
                        <button class="btn btn-primary btn-small order-btn" data-id="${p.id}" style="width:100%;">Place Order</button>
                    </div>
                </div>
                `;
            }).join('') + `</div>`;
    }
    overlay.style.display = 'block';

    // Copy Link functionality
    overlay.querySelectorAll('.copy-link-btn').forEach(btn => {
        btn.onclick = function() {
            const link = btn.getAttribute('data-link');
            navigator.clipboard.writeText(link).then(() => {
                btn.innerHTML = '<i class="fas fa-share-alt" style="margin-right:0.4em;"></i>Link Copied!';
                setTimeout(() => { btn.innerHTML = '<i class="fas fa-share-alt" style="margin-right:0.4em;"></i>Copy Link'; }, 1400);
            });
        };
    });

    // See Details modal logic
    overlay.querySelectorAll('.see-details-btn').forEach(btn => {
        btn.onclick = function() {
            const id = parseInt(btn.getAttribute('data-id'));
            const product = (window.SEARCH_INDEX || []).find(p => p.id === id);
            if (!product) return;
            let modal = document.getElementById('searchProductDetailModal');
            if (!modal) {
                modal = document.createElement('div');
                modal.className = 'product-detail';
                modal.id = 'searchProductDetailModal';
                modal.innerHTML = `
                    <div class="product-detail-content">
                        <button class="close-detail" id="closeSearchDetailBtn">&times;</button>
                        <div class="product-detail-header">
                            <h2 id="searchDetailTitle"></h2>
                        </div>
                        <div class="product-detail-body">
                            <div class="product-images" id="searchDetailImages"></div>
                            <div class="product-info">
                                <div id="searchDetailPrice"></div>
                                <div id="searchDetailDescription"></div>
                                <button class="btn btn-secondary" id="backToSearchResultsBtn">Back to Results</button>
                            </div>
                        </div>
                    </div>
                `;
                document.body.appendChild(modal);
            }
            // Fill modal content
            document.getElementById('searchDetailTitle').textContent = product.name;
            document.getElementById('searchDetailPrice').textContent = "$" + product.price;
            document.getElementById('searchDetailDescription').textContent = product.description;
            document.getElementById('searchDetailImages').innerHTML = (product.images||[]).map(img =>
                `<img src="${img}" alt="${product.name}" style="width:100px;height:70px;object-fit:cover;margin-right:8px;border-radius:6px;">`
            ).join('');
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            // Close logic
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

    // Place Order functionality (open details modal for now)
    overlay.querySelectorAll('.order-btn').forEach(btn => {
        btn.onclick = function() {
            const seeDetailsBtn = btn.parentElement.querySelector('.see-details-btn');
            if (seeDetailsBtn) seeDetailsBtn.click();
        };
    });
    setTimeout(() => {
        document.addEventListener('mousedown', function hideOverlay(e) {
            const modal = document.getElementById('searchProductDetailModal');
            if (modal && modal.classList.contains('active')) return;
            if (!overlay.contains(e.target)) {
                overlay.style.display = 'none';
                document.removeEventListener('mousedown', hideOverlay);
            }
        });
    }, 0);
}

// Attach to search bar
window.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.main-search-input');
    // Try to find a button or icon next to the search input
    let searchBtn = null;
    // Try common selectors
    searchBtn = document.querySelector('.main-search-btn, .search-btn, button[type="submit"]');
    if (!searchBtn && searchInput && searchInput.nextElementSibling) {
        // Fallback: next sibling if it's a button
        if (searchInput.nextElementSibling.tagName === 'BUTTON') {
            searchBtn = searchInput.nextElementSibling;
        }
    }
    if (!searchInput || !searchBtn) return;
    // Only trigger search on click of the search icon/button
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const q = searchInput.value.trim();
        if (q.length < 2) return;
        window.location.href = 'search.html?q=' + encodeURIComponent(q);
    });
    // Prevent page refresh on submit
    if (searchInput.form) {
        searchInput.form.addEventListener('submit', function(e) {
            e.preventDefault();
            const q = searchInput.value.trim();
            if (q.length < 2) return;
            window.location.href = 'search.html?q=' + encodeURIComponent(q);
        });
    }
});
