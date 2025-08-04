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
    return allProducts.filter(p => {
        const name = (p.name || '').toLowerCase();
        const desc = (p.description || '').toLowerCase();
        const prodYear = (p.year || '').toLowerCase();
        if (year) {
            if (matchesYear(prodYear, year) || matchesYear(name, year) || matchesYear(desc, year)) return true;
            return false;
        }
        return name.includes(q) || desc.includes(q) || prodYear.includes(q);
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

    // See Details modal logic
    container.querySelectorAll('.see-details-btn').forEach(btn => {
        btn.onclick = function() {
            const id = parseInt(btn.getAttribute('data-id'));
            const product = (window.SEARCH_INDEX || []).find(p => p.id === id);
            if (!product) return;
            let modal = document.getElementById('searchProductDetailModal');
            if (!modal) {
                modal = document.createElement('div');
                modal.className = 'product-detail';
                modal.id = 'searchProductDetailModal';
                document.body.appendChild(modal);
            }
            modal.innerHTML = `
                <div class="product-detail-content">
                    <button class="close-detail" id="closeSearchDetailBtn">&times;</button>
                    <div class="product-detail-header">
                        <h2 id="searchDetailTitle">${product.name}</h2>
                    </div>
                    <div class="product-detail-body">
                        <div class="product-images" id="searchDetailImages">${(product.images||[]).map(img =>
                            `<img src="${img}" alt="${product.name}" style="width:100px;height:70px;object-fit:cover;margin-right:8px;border-radius:6px;">`
                        ).join('')}</div>
                        <div class="product-info">
                            <div id="searchDetailPrice">$${product.price}</div>
                            <div id="searchDetailDescription">${product.description}</div>
                            <button class="btn btn-secondary" id="backToSearchResultsBtn">Back to Results</button>
                        </div>
                    </div>
                </div>
            `;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
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
    container.querySelectorAll('.order-btn').forEach(btn => {
        btn.onclick = function() {
            const seeDetailsBtn = btn.parentElement.querySelector('.see-details-btn');
            if (seeDetailsBtn) seeDetailsBtn.click();
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
