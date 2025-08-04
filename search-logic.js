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
        overlay.innerHTML = `<div style="display: flex; flex-wrap: wrap; gap: 1.5em; justify-content: center;">` +
            results.map(p => {
                let link = p.page ? `/${p.page}?product=${p.id}` : '#';
                let img = p.image || (p.images && p.images[0]) || '';
                let price = p.price ? (typeof p.price === 'string' ? p.price : `$${p.price}`) : '';
                // Card UI
                return `
                <div class="search-product-card" style="background:#fff;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.08);width:270px;max-width:95vw;display:flex;flex-direction:column;align-items:center;padding:1.1em 1em 1.3em 1em;position:relative;">
                    <img src="${img}" alt="${p.name}" style="width:100%;height:140px;object-fit:cover;border-radius:8px;background:#f7f7f7;border:1px solid #eee;margin-bottom:0.7em;">
                    <div style="font-weight:700;font-size:1.08em;text-align:center;margin-bottom:0.5em;">${p.name || 'Product'}</div>
                    <div style="color:#b80000;font-weight:600;font-size:1.05em;margin-bottom:0.4em;">${price}</div>
                    <div style="color:#444;font-size:0.98em;margin-bottom:0.7em;text-align:center;min-height:2.5em;">${(p.description||'').slice(0,110)}${(p.description||'').length>110?'...':''}</div>
                    <div style="display:flex;gap:0.5em;justify-content:center;">
                        <a href="${link}" target="_blank" class="btn btn-primary btn-small" style="background:#b80000;color:#fff;padding:0.5em 1.1em;border-radius:6px;font-size:0.98em;text-decoration:none;">See Details</a>
                        <button class="btn btn-secondary btn-small copy-link-btn" data-link="${window.location.origin}${link}" style="background:#eee;color:#b80000;padding:0.5em 1.1em;border-radius:6px;font-size:0.98em;border:1px solid #b80000;cursor:pointer;">Copy Link</button>
                    </div>
                    <button class="btn btn-primary btn-small order-btn" data-id="${p.id}" style="margin-top:0.8em;width:100%;background:#222;color:#fff;padding:0.7em 0;border-radius:6px;font-size:1.05em;">Place Order</button>
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
                btn.textContent = 'Copied!';
                setTimeout(() => { btn.textContent = 'Copy Link'; }, 1200);
            });
        };
    });
    // Place Order functionality (simple modal or redirect)
    overlay.querySelectorAll('.order-btn').forEach(btn => {
        btn.onclick = function() {
            const id = btn.getAttribute('data-id');
            // You can customize this: for now, just open the details page in a new tab for ordering
            const card = btn.closest('.search-product-card');
            const detailsBtn = card.querySelector('a.btn-primary');
            if (detailsBtn && detailsBtn.href) {
                window.open(detailsBtn.href, '_blank');
            }
        };
    });
    setTimeout(() => {
        document.addEventListener('mousedown', function hideOverlay(e) {
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
        if (q.length < 2) {
            let overlay = document.getElementById('searchResultsOverlay');
            if (overlay) overlay.style.display = 'none';
            return;
        }
        const results = searchProducts(q);
        showSearchResults(results, q);
    });
    // Prevent page refresh on submit
    if (searchInput.form) {
        searchInput.form.addEventListener('submit', function(e) {
            e.preventDefault();
            const q = searchInput.value.trim();
            if (q.length < 2) return;
            const results = searchProducts(q);
            showSearchResults(results, q);
        });
    }
});
