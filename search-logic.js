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
        overlay.style.width = 'min(95vw, 600px)';
        overlay.style.maxHeight = '60vh';
        overlay.style.overflowY = 'auto';
        overlay.style.padding = '0.7em 0.5em';
        overlay.style.fontSize = '1.08rem';
        overlay.style.display = 'none';
        document.body.appendChild(overlay);
    }
    if (!results.length) {
        overlay.innerHTML = `<div style='padding:1.2em;text-align:center;color:#888;'>No products found for "${query}"</div>`;
    } else {
        overlay.innerHTML = results.map(p => {
            let link = '#';
            if (p.page) link = `/${p.page}?product=${p.id}`;
            return `<div style='padding:0.7em 1em;border-bottom:1px solid #eee;display:flex;align-items:center;gap:1em;'>\
                <div style='flex:1;'>\
                    <a href='${link}' style='font-weight:600;color:#b80000;text-decoration:none;font-size:1.08em;'>${p.name || 'Product'}</a>\
                    <div style='color:#444;font-size:0.98em;margin-top:0.2em;'>${(p.description||'').slice(0,110)}${(p.description||'').length>110?'...':''}</div>\
                </div>\
            </div>`;
        }).join('');
    }
    overlay.style.display = 'block';
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
    if (!searchInput) return;
    let lastQuery = '';
    searchInput.addEventListener('input', function(e) {
        const q = e.target.value.trim();
        if (q.length < 2) {
            let overlay = document.getElementById('searchResultsOverlay');
            if (overlay) overlay.style.display = 'none';
            return;
        }
        lastQuery = q;
        const results = searchProducts(q);
        showSearchResults(results, q);
    });
    // Prevent page refresh on submit and search
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
