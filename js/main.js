/**
 * BLOSSO FLOWER SHOP - GLOBAL JAVASCRIPT SYSTEM
 * Handles Cart, Wishlist, Quick View, Search Modal, Navigation & Toast Notifications
 */

// --- Global State Management ---
class FloralShopState {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('flora_cart')) || [];
    this.wishlist = JSON.parse(localStorage.getItem('flora_wishlist')) || [];
    this.discountPercent = 0;
    this.init();
  }

  init() {
    this.updateBadges();
    this.renderCartItems();
    this.renderWishlistItems();
  }

  saveCart() {
    localStorage.setItem('flora_cart', JSON.stringify(this.cart));
    this.updateBadges();
    this.renderCartItems();
  }

  saveWishlist() {
    localStorage.setItem('flora_wishlist', JSON.stringify(this.wishlist));
    this.updateBadges();
    this.renderWishlistItems();
  }

  addToCart(productId, quantity = 1, options = {}) {
    const product = FLORAL_DATA.products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = this.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: quantity,
        vase: options.vase || false,
        note: options.note || ''
      });
    }

    this.saveCart();
    showToast(`🌹 "${product.name}" added to your bouquet bag.`);
    openCartDrawer();
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
    showToast("Item removed from your bag.");
  }

  updateQuantity(productId, delta) {
    const item = this.cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeFromCart(productId);
    } else {
      this.saveCart();
    }
  }

  toggleWishlist(productId) {
    const product = FLORAL_DATA.products.find(p => p.id === productId);
    if (!product) return;

    const exists = this.wishlist.includes(productId);
    if (exists) {
      this.wishlist = this.wishlist.filter(id => id !== productId);
      showToast(`Removed from your wishlist.`);
    } else {
      this.wishlist.push(productId);
      showToast(`⭐ "${product.name}" saved to your wishlist.`);
    }

    this.saveWishlist();
    this.updateWishlistButtons();
  }

  applyPromo(code) {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'BLOSSO10' || cleanCode === 'FLORA10') {
      this.discountPercent = 0.10;
      this.renderCartItems();
      showToast("🎉 Promo code 'BLOSSO10' applied: 10% OFF!");
      return true;
    } else {
      showToast("Invalid promo code. Try 'BLOSSO10'");
      return false;
    }
  }

  updateBadges() {
    const totalCartCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartBadges = document.querySelectorAll('.cart-count-badge');
    cartBadges.forEach(badge => {
      badge.textContent = totalCartCount;
      badge.style.display = totalCartCount > 0 ? 'flex' : 'none';
    });

    const wishlistCount = this.wishlist.length;
    const wishlistBadges = document.querySelectorAll('.wishlist-count-badge');
    wishlistBadges.forEach(badge => {
      badge.textContent = wishlistCount;
      badge.style.display = wishlistCount > 0 ? 'flex' : 'none';
    });
  }

  updateWishlistButtons() {
    document.querySelectorAll('.btn-wishlist-toggle').forEach(btn => {
      const id = btn.getAttribute('data-product-id');
      if (this.wishlist.includes(id)) {
        btn.classList.add('active-wishlist');
      } else {
        btn.classList.remove('active-wishlist');
      }
    });
  }

  renderCartItems() {
    const cartContainer = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal-val');
    const totalEl = document.getElementById('cart-total-val');
    const discountRow = document.getElementById('cart-discount-row');
    const discountValEl = document.getElementById('cart-discount-val');
    const checkoutBtn = document.getElementById('cart-checkout-btn');

    if (!cartContainer) return;

    if (this.cart.length === 0) {
      cartContainer.innerHTML = `
        <div style="text-align:center; padding: 40px 10px; color: var(--color-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 12px;">🌿</div>
          <h4 style="font-family:var(--font-serif); font-size:1.2rem; color:var(--color-charcoal); margin-bottom:8px;">Your Bouquet Bag is Empty</h4>
          <p style="font-size: 0.88rem; margin-bottom: 20px;">Discover hand-tied seasonal collections crafted for your special moments.</p>
          <a href="products.html" class="btn btn-primary btn-sm" onclick="closeCartDrawer()">Explore Catalog</a>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = "$0.00";
      if (totalEl) totalEl.textContent = "$0.00";
      if (discountRow) discountRow.style.display = 'none';
      if (checkoutBtn) checkoutBtn.disabled = true;
      return;
    }

    if (checkoutBtn) checkoutBtn.disabled = false;

    let subtotal = 0;
    let html = '';

    this.cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      subtotal += itemTotal;
      html += `
        <div class="cart-item-card">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h5 class="cart-item-title">${item.name}</h5>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            <div class="cart-qty-ctrl">
              <button class="cart-qty-btn" onclick="shopState.updateQuantity('${item.id}', -1)" aria-label="Decrease quantity">-</button>
              <span class="cart-qty-num">${item.quantity}</span>
              <button class="cart-qty-btn" onclick="shopState.updateQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <button class="cart-remove-btn" onclick="shopState.removeFromCart('${item.id}')" title="Remove item" aria-label="Remove item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      `;
    });

    cartContainer.innerHTML = html;

    const discount = subtotal * this.discountPercent;
    const finalTotal = subtotal - discount;

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (discountRow && discountValEl) {
      if (this.discountPercent > 0) {
        discountRow.style.display = 'flex';
        discountValEl.textContent = `-$${discount.toFixed(2)}`;
      } else {
        discountRow.style.display = 'none';
      }
    }
    if (totalEl) totalEl.textContent = `$${finalTotal.toFixed(2)}`;
  }

  renderWishlistItems() {
    const wishlistContainer = document.getElementById('wishlist-items-container');
    if (!wishlistContainer) return;

    if (this.wishlist.length === 0) {
      wishlistContainer.innerHTML = `
        <div style="text-align:center; padding: 40px 10px; color: var(--color-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 12px;">⭐</div>
          <h4 style="font-family:var(--font-serif); font-size:1.2rem; color:var(--color-charcoal); margin-bottom:8px;">Your Wishlist is Empty</h4>
          <p style="font-size: 0.88rem; margin-bottom: 20px;">Save your favorite stems and bespoke arrangements for later.</p>
          <a href="products.html" class="btn btn-primary btn-sm" onclick="closeWishlistDrawer()">Discover Flowers</a>
        </div>
      `;
      return;
    }

    let html = '';
    this.wishlist.forEach(id => {
      const product = FLORAL_DATA.products.find(p => p.id === id);
      if (!product) return;
      html += `
        <div class="cart-item-card">
          <img src="${product.image}" alt="${product.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h5 class="cart-item-title">${product.name}</h5>
            <div class="cart-item-price">$${product.price.toFixed(2)}</div>
            <button class="btn btn-primary btn-sm" style="padding:4px 12px; font-size:0.78rem;" onclick="shopState.addToCart('${product.id}'); shopState.toggleWishlist('${product.id}')">Add to Cart</button>
          </div>
          <button class="cart-remove-btn" onclick="shopState.toggleWishlist('${product.id}')" title="Remove from wishlist" aria-label="Remove from wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      `;
    });

    wishlistContainer.innerHTML = html;
  }
}

// Instantiate global state
const shopState = new FloralShopState();

// --- Toast Notification Engine (Disabled) ---
function showToast(message) {
  // Popup toast notifications disabled per design requirement
  return;
}

// --- Cart & Wishlist Drawer Controllers ---
function openCartDrawer() {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  const panel = document.getElementById('cart-drawer-panel');
  if (backdrop && panel) {
    backdrop.classList.add('open');
    panel.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  const panel = document.getElementById('cart-drawer-panel');
  if (backdrop && panel) {
    backdrop.classList.remove('open');
    panel.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function openWishlistDrawer() {
  const backdrop = document.getElementById('wishlist-drawer-backdrop');
  const panel = document.getElementById('wishlist-drawer-panel');
  if (backdrop && panel) {
    shopState.renderWishlistItems();
    backdrop.classList.add('open');
    panel.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeWishlistDrawer() {
  const backdrop = document.getElementById('wishlist-drawer-backdrop');
  const panel = document.getElementById('wishlist-drawer-panel');
  if (backdrop && panel) {
    backdrop.classList.remove('open');
    panel.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// --- Quick View Modal ---
function openQuickView(productId) {
  const product = FLORAL_DATA.products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickview-modal');
  const content = document.getElementById('quickview-modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="quickview-grid">
      <div class="quickview-gallery-main">
        <img id="qv-main-img" src="${product.image}" alt="${product.name}">
      </div>
      <div style="display:flex; flex-direction:column;">
        <span class="badge badge-${product.badgeType}" style="align-self:flex-start; margin-bottom:10px;">${product.badge}</span>
        <span class="product-category">${product.category} Collection</span>
        <h3 style="font-family:var(--font-serif); font-size:1.8rem; margin-bottom:8px;">${product.name}</h3>
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:16px; font-size:0.9rem;">
          <span style="color:#E6A23C;">★★★★★</span>
          <span style="color:var(--color-muted);">${product.rating} (${product.reviewsCount} reviews)</span>
        </div>
        <div style="font-family:var(--font-serif); font-size:1.6rem; font-weight:600; color:var(--color-charcoal); margin-bottom:16px;">
          ${product.oldPrice ? `<span style="font-size:1.1rem; color:var(--color-muted-light); text-decoration:line-through; margin-right:8px;">$${product.oldPrice.toFixed(2)}</span>` : ''}
          $${product.price.toFixed(2)}
        </div>
        <p style="font-size:0.92rem; color:var(--color-muted); line-height:1.6; margin-bottom:18px;">${product.description}</p>
        
        <div style="background:var(--color-bg-warm); padding:12px 16px; border-radius:var(--radius-sm); margin-bottom:20px; font-size:0.85rem;">
          <strong>Floral Recipe:</strong> ${product.stems}
        </div>

        <div style="margin-bottom:24px;">
          <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:8px;">Complimentary Gifting Add-ons:</label>
          <div style="display:flex; flex-direction:column; gap:8px; font-size:0.85rem;">
            <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
              <input type="checkbox" id="qv-vase-check" style="accent-color:var(--color-primary);"> Signature Ribbed Glass Vase (+$15.00)
            </label>
            <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
              <input type="checkbox" id="qv-card-check" checked style="accent-color:var(--color-primary);"> Wax-Sealed Calligraphy Gift Card (Included)
            </label>
          </div>
        </div>

        <div style="display:flex; gap:12px; margin-top:auto;">
          <div class="cart-qty-ctrl" style="height:48px;">
            <button class="cart-qty-btn" style="width:36px; height:100%;" onclick="adjustQuickViewQty(-1)">-</button>
            <span class="cart-qty-num" id="qv-qty-val" style="font-size:1rem;">1</span>
            <button class="cart-qty-btn" style="width:36px; height:100%;" onclick="adjustQuickViewQty(1)">+</button>
          </div>
          <button class="btn btn-primary" style="flex:1;" onclick="addQuickViewToCart('${product.id}')">
            Add to Bouquet Bag
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  const modal = document.getElementById('quickview-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

let qvCurrentQty = 1;
function adjustQuickViewQty(delta) {
  qvCurrentQty = Math.max(1, qvCurrentQty + delta);
  const qtyEl = document.getElementById('qv-qty-val');
  if (qtyEl) qtyEl.textContent = qvCurrentQty;
}

function addQuickViewToCart(productId) {
  const vaseCheck = document.getElementById('qv-vase-check');
  const cardCheck = document.getElementById('qv-card-check');
  shopState.addToCart(productId, qvCurrentQty, {
    vase: vaseCheck ? vaseCheck.checked : false,
    note: cardCheck ? (cardCheck.checked ? 'Calligraphy Card Included' : '') : ''
  });
  closeQuickView();
  qvCurrentQty = 1;
}

// --- Live Search Modal ---
function openSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.classList.add('open');
    const input = document.getElementById('search-modal-input');
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 100);
      handleSearchInput('');
    }
    document.body.style.overflow = 'hidden';
  }
}

function closeSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function handleSearchInput(query) {
  const resultsContainer = document.getElementById('search-modal-results');
  if (!resultsContainer) return;

  const cleanQuery = query.toLowerCase().trim();
  const filtered = FLORAL_DATA.products.filter(p => 
    p.name.toLowerCase().includes(cleanQuery) ||
    p.category.toLowerCase().includes(cleanQuery) ||
    p.stems.toLowerCase().includes(cleanQuery)
  );

  if (filtered.length === 0) {
    resultsContainer.innerHTML = `
      <div style="text-align:center; padding: 24px; color: var(--color-muted);">
        No bouquets found matching "${query}". Try searching for 'Roses', 'Birthday', or 'Peonies'.
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach(product => {
    html += `
      <div class="search-result-item" onclick="openQuickView('${product.id}'); closeSearchModal();" style="cursor:pointer;">
        <img src="${product.image}" alt="${product.name}">
        <div style="flex-grow:1;">
          <div style="font-family:var(--font-serif); font-weight:600; color:var(--color-charcoal);">${product.name}</div>
          <div style="font-size:0.78rem; color:var(--color-primary);">${product.category} · ${product.stems.substring(0, 45)}...</div>
        </div>
        <div style="font-weight:600; color:var(--color-charcoal); font-family:var(--font-serif);">$${product.price.toFixed(2)}</div>
      </div>
    `;
  });

  resultsContainer.innerHTML = html;
}

// --- Checkout Simulation Modal ---
function simulateCheckout() {
  if (shopState.cart.length === 0) return;
  const total = document.getElementById('cart-total-val').textContent;
  closeCartDrawer();
  
  const checkoutModal = document.getElementById('checkout-modal');
  if (checkoutModal) {
    document.getElementById('checkout-amount-display').textContent = total;
    checkoutModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCheckoutModal() {
  const checkoutModal = document.getElementById('checkout-modal');
  if (checkoutModal) {
    checkoutModal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function completeSimulatedOrder(e) {
  e.preventDefault();
  shopState.cart = [];
  shopState.saveCart();
  closeCheckoutModal();
  showToast("💐 Order Placed Successfully! Confirmation email has been sent.");
}

// --- Mobile Navigation Drawer ---
function toggleMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-nav-overlay');
  const btn = document.getElementById('hamburger-toggle-btn');
  
  if (drawer && overlay) {
    const isOpen = drawer.classList.toggle('open');
    overlay.classList.toggle('open', isOpen);
    if (btn) btn.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
}

function closeMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-nav-overlay');
  const btn = document.getElementById('hamburger-toggle-btn');
  
  if (drawer && overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    if (btn) btn.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// --- Theme (Dark / Light) Management ---
function initTheme() {
  const savedTheme = localStorage.getItem('blosso_theme') || 'light';
  applyTheme(savedTheme);
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelectorAll('.theme-icon-sun').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.theme-icon-moon').forEach(el => el.style.display = 'inline-flex');
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.querySelectorAll('.theme-icon-sun').forEach(el => el.style.display = 'inline-flex');
    document.querySelectorAll('.theme-icon-moon').forEach(el => el.style.display = 'none');
  }
  localStorage.setItem('blosso_theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const nextTheme = current === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  showToast(nextTheme === 'dark' ? '🌙 Dark Boutique mode enabled' : '☀️ Sunlit Light mode enabled');
}

// --- RTL (Right-To-Left) Management ---
function initRTL() {
  const savedDir = localStorage.getItem('blosso_dir') || 'ltr';
  applyRTL(savedDir);
}

function applyRTL(dir) {
  if (dir === 'rtl') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.querySelectorAll('.rtl-btn-text').forEach(el => el.textContent = 'LTR');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.querySelectorAll('.rtl-btn-text').forEach(el => el.textContent = 'RTL');
  }
  localStorage.setItem('blosso_dir', dir);
}

function toggleRTL() {
  const current = document.documentElement.getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr';
  const nextDir = current === 'rtl' ? 'ltr' : 'rtl';
  applyRTL(nextDir);
  showToast(nextDir === 'rtl' ? '🌐 RTL Direction Mode Activated' : '🌐 LTR Direction Mode Activated');
}

// --- DOM Ready Initializer ---
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Theme and RTL
  initTheme();
  initRTL();

  // Sticky Header Blur & Shrink
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Promo code apply listener
  const promoBtn = document.getElementById('apply-promo-btn');
  const promoInput = document.getElementById('cart-promo-input');
  if (promoBtn && promoInput) {
    promoBtn.addEventListener('click', () => {
      shopState.applyPromo(promoInput.value);
    });
  }

  // Newsletter Form Handler
  document.querySelectorAll('.footer-newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast("✨ Welcome to the Floral VIP Club! Check your inbox for 15% off.");
        input.value = '';
      }
    });
  });

  // Sync wishlist button states
  shopState.updateWishlistButtons();
});
