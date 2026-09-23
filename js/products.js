/**
 * BLOSSO FLOWER SHOP - PRODUCTS CATALOG SCRIPT
 * Handles Category Tabs, Multi-Filter, Search, Sort & Responsive Layouts
 */

document.addEventListener('DOMContentLoaded', () => {
  const catalogGrid = document.getElementById('catalog-products-grid');
  const countDisplay = document.getElementById('catalog-products-count');
  const searchInput = document.getElementById('catalog-search-input');
  const sortSelect = document.getElementById('catalog-sort-select');
  const priceSlider = document.getElementById('catalog-price-slider');
  const priceDisplay = document.getElementById('price-slider-display');
  const occasionTabs = document.querySelectorAll('.occasion-tab-item');
  const flowerFilters = document.querySelectorAll('.filter-pill-flower');
  const colorFilters = document.querySelectorAll('.filter-pill-color');
  const resetBtn = document.getElementById('reset-filters-btn');

  if (!catalogGrid) return;

  // Filter State
  let activeOccasion = 'all';
  let activeFlower = 'all';
  let activeColor = 'all';
  let maxPrice = 250;
  let searchQuery = '';
  let activeSort = 'featured';

  // Check URL parameters for initial occasion filter (e.g. ?occasion=Birthday)
  const urlParams = new URLSearchParams(window.location.search);
  const paramOccasion = urlParams.get('occasion');
  if (paramOccasion) {
    activeOccasion = paramOccasion.toLowerCase();
    occasionTabs.forEach(tab => {
      if (tab.getAttribute('data-occasion').toLowerCase() === activeOccasion) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  function renderCatalog() {
    let filtered = FLORAL_DATA.products.filter(item => {
      // Occasion Match
      const matchesOccasion = activeOccasion === 'all' || item.category.toLowerCase() === activeOccasion;
      // Flower Type Match
      const matchesFlower = activeFlower === 'all' || item.flowerType.toLowerCase() === activeFlower;
      // Color Match
      const matchesColor = activeColor === 'all' || item.colorPalette.toLowerCase() === activeColor;
      // Price Match
      const matchesPrice = item.price <= maxPrice;
      // Search Match
      const matchesSearch = searchQuery === '' || 
        item.name.toLowerCase().includes(searchQuery) || 
        item.stems.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery);

      return matchesOccasion && matchesFlower && matchesColor && matchesPrice && matchesSearch;
    });

    // Sorting
    if (activeSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (activeSort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (activeSort === 'bestseller') {
      filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    // Update count display
    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} curated bouquet${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      catalogGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFF; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
          <div style="font-size: 3rem; margin-bottom: 12px;">🥀</div>
          <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 8px;">No Bouquets Found</h3>
          <p style="color: var(--color-muted); max-width: 450px; margin: 0 auto 20px;">We couldn't find any floral arrangements matching your exact combination of filters. Try widening your price range or clearing selected filters.</p>
          <button class="btn btn-outline-primary" id="empty-reset-btn">Reset All Filters</button>
        </div>
      `;
      document.getElementById('empty-reset-btn')?.addEventListener('click', resetAllFilters);
      return;
    }

    let html = '';
    filtered.forEach(item => {
      const isWishlisted = shopState.wishlist.includes(item.id);
      html += `
        <div class="product-card">
          <div class="product-img-wrapper">
            <span class="badge badge-${item.badgeType} product-badge-tag">${item.badge}</span>
            <div class="product-action-btns">
              <button class="btn-card-action btn-wishlist-toggle ${isWishlisted ? 'active-wishlist' : ''}" 
                      data-product-id="${item.id}" 
                      onclick="shopState.toggleWishlist('${item.id}')" 
                      title="Add to Wishlist"
                      aria-label="Add to Wishlist">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </button>
              <button class="btn-card-action" onclick="openQuickView('${item.id}')" title="Quick View" aria-label="Quick View">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
            </div>
            <img src="${item.image}" alt="${item.name}" loading="lazy">
          </div>
          <div class="product-info">
            <span class="product-category">${item.category}</span>
            <h3 class="product-title"><a href="javascript:void(0)" onclick="openQuickView('${item.id}')">${item.name}</a></h3>
            <p class="product-stems-desc">${item.stems}</p>
            <div class="product-rating">
              <span class="stars">★★★★★</span>
              <span>${item.rating} (${item.reviewsCount})</span>
            </div>
            <div class="product-footer">
              <div class="product-price">
                ${item.oldPrice ? `<span class="old-price">$${item.oldPrice.toFixed(2)}</span>` : ''}
                $${item.price.toFixed(2)}
              </div>
              <button class="btn btn-add-cart" onclick="shopState.addToCart('${item.id}')">
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      `;
    });

    catalogGrid.innerHTML = html;
  }

  function resetAllFilters() {
    activeOccasion = 'all';
    activeFlower = 'all';
    activeColor = 'all';
    maxPrice = 250;
    searchQuery = '';
    activeSort = 'featured';

    if (searchInput) searchInput.value = '';
    if (priceSlider) priceSlider.value = 250;
    if (priceDisplay) priceDisplay.textContent = '$250';
    if (sortSelect) sortSelect.value = 'featured';

    occasionTabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-occasion') === 'all'));
    flowerFilters.forEach(f => f.classList.toggle('active', f.getAttribute('data-flower') === 'all'));
    colorFilters.forEach(c => c.classList.toggle('active', c.getAttribute('data-color') === 'all'));

    renderCatalog();
  }

  // Event Listeners
  occasionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      occasionTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeOccasion = tab.getAttribute('data-occasion').toLowerCase();
      renderCatalog();
    });
  });

  flowerFilters.forEach(pill => {
    pill.addEventListener('click', () => {
      flowerFilters.forEach(f => f.classList.remove('active'));
      pill.classList.add('active');
      activeFlower = pill.getAttribute('data-flower').toLowerCase();
      renderCatalog();
    });
  });

  colorFilters.forEach(pill => {
    pill.addEventListener('click', () => {
      colorFilters.forEach(c => c.classList.remove('active'));
      pill.classList.add('active');
      activeColor = pill.getAttribute('data-color').toLowerCase();
      renderCatalog();
    });
  });

  if (priceSlider && priceDisplay) {
    priceSlider.addEventListener('input', (e) => {
      maxPrice = Number(e.target.value);
      priceDisplay.textContent = `$${maxPrice}`;
      renderCatalog();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSort = e.target.value;
      renderCatalog();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', resetAllFilters);
  }

  // Initial render
  renderCatalog();
});
