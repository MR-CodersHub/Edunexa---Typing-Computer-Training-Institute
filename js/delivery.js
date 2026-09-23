/**
 * BLOSSO FLOWER SHOP - DELIVERY & CUSTOM WORKSHOP SCRIPT
 * Handles Live Countdown, Postal Code Eligibility, Custom Bouquet Builder, and Bulk Orders
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Live Countdown Timer to Same-Day Cutoff (1:00 PM / 13:00)
  initDeliveryCountdown();

  // 2. Postal Code Checker Tool
  initPostalCodeChecker();

  // 3. Custom Bouquet Interactive Builder
  initCustomBouquetBuilder();

  // 4. Bulk Orders Form
  initBulkOrderForm();
});

function initDeliveryCountdown() {
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');

  if (!hoursEl || !minsEl || !secsEl) return;

  function updateTimer() {
    const now = new Date();
    const target = new Date();
    target.setHours(13, 0, 0, 0); // 1:00 PM cutoff

    // If already past 1:00 PM today, set target to 1:00 PM tomorrow
    if (now.getTime() > target.getTime()) {
      target.setDate(target.getDate() + 1);
    }

    const diffMs = target.getTime() - now.getTime();
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diffMs % (1000 * 60)) / 1000);

    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(mins).padStart(2, '0');
    secsEl.textContent = String(secs).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

function initPostalCodeChecker() {
  const forms = document.querySelectorAll('.postal-checker-form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.postal-input');
      const resultEl = form.querySelector('.postal-result-msg');
      if (!input || !resultEl) return;

      const code = input.value.trim().toUpperCase();
      if (!code) {
        resultEl.className = 'postal-result-msg error';
        resultEl.textContent = 'Please enter a valid postal / zip code.';
        return;
      }

      // Simulated postal code lookup
      const numCode = parseInt(code.replace(/\D/g, ''), 10);
      
      if (code.length >= 3) {
        resultEl.className = 'postal-result-msg success';
        resultEl.innerHTML = `
          🌿 <strong>Same-Day Delivery Available!</strong><br>
          Zone 1 Priority Courier · Order before 1:00 PM for doorstep arrival today between 3:00 PM - 6:00 PM.
        `;
      } else {
        resultEl.className = 'postal-result-msg error';
        resultEl.textContent = 'Postal code format not recognized. Please enter a 5-digit code.';
      }
    });
  });
}

function initCustomBouquetBuilder() {
  const budgetInput = document.getElementById('custom-budget-slider');
  const budgetDisplay = document.getElementById('custom-budget-display');
  const summaryBudget = document.getElementById('summary-budget-val');
  const summaryStems = document.getElementById('summary-stems-val');
  const summaryPalette = document.getElementById('summary-palette-val');
  const summaryOccasion = document.getElementById('summary-occasion-val');
  const customImg = document.getElementById('custom-preview-img');
  const customForm = document.getElementById('custom-bouquet-form');

  if (!customForm) return;

  // Track builder state
  const builderState = {
    budget: 120,
    occasion: 'Anniversary & Romance',
    palette: 'Pastel Blush & Peaches',
    stems: ['Garden Roses', 'French Peonies'],
    ribbon: 'Raw Edge Silk Ribbon',
    imgMap: {
      'Pastel Blush & Peaches': 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80',
      'Crisp Whites & Sage': 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=800&q=80',
      'Warm Tuscan Amber': 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80',
      'Velvet Moody Burgundy': 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80'
    }
  };

  // Budget slider
  if (budgetInput && budgetDisplay) {
    budgetInput.addEventListener('input', (e) => {
      builderState.budget = Number(e.target.value);
      budgetDisplay.textContent = `$${builderState.budget}`;
      if (summaryBudget) summaryBudget.textContent = `$${builderState.budget}.00`;
    });
  }

  // Occasion Radios
  document.querySelectorAll('input[name="custom_occasion"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      builderState.occasion = e.target.value;
      if (summaryOccasion) summaryOccasion.textContent = builderState.occasion;
      highlightSelectedCard(e.target);
    });
  });

  // Palette Radios
  document.querySelectorAll('input[name="custom_palette"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      builderState.palette = e.target.value;
      if (summaryPalette) summaryPalette.textContent = builderState.palette;
      if (customImg && builderState.imgMap[builderState.palette]) {
        customImg.src = builderState.imgMap[builderState.palette];
      }
      highlightSelectedCard(e.target);
    });
  });

  // Stem Checkboxes
  document.querySelectorAll('input[name="custom_stems"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const selected = Array.from(document.querySelectorAll('input[name="custom_stems"]:checked')).map(cb => cb.value);
      builderState.stems = selected.length > 0 ? selected : ['Florist Seasonal Choice'];
      if (summaryStems) summaryStems.textContent = builderState.stems.join(', ');
      highlightSelectedCheckbox(checkbox);
    });
  });

  function highlightSelectedCard(input) {
    const parentContainer = input.closest('.custom-options-grid');
    if (!parentContainer) return;
    parentContainer.querySelectorAll('.custom-option-card').forEach(card => card.classList.remove('selected'));
    input.closest('.custom-option-card')?.classList.add('selected');
  }

  function highlightSelectedCheckbox(input) {
    input.closest('.custom-option-card')?.classList.toggle('selected', input.checked);
  }

  // Form submit (Add custom creation to cart)
  customForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const recipientName = document.getElementById('custom-recipient-name')?.value || 'Cherished Recipient';
    const cardMessage = document.getElementById('custom-card-message')?.value || 'With warmest regards';
    const deliveryDate = document.getElementById('custom-delivery-date')?.value || 'Next Available Slot';

    const customBouquetItem = {
      id: 'custom-' + Date.now(),
      name: `Bespoke Floral Creation (${builderState.occasion})`,
      price: builderState.budget,
      category: 'Bespoke Floral',
      image: builderState.imgMap[builderState.palette] || 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80',
      stems: builderState.stems.join(', ') + ` [Palette: ${builderState.palette}]`,
      quantity: 1,
      note: `For: ${recipientName} | Date: ${deliveryDate} | Msg: "${cardMessage}"`
    };

    shopState.cart.push(customBouquetItem);
    shopState.saveCart();
    showToast("💐 Bespoke Bouquet design added to your bag!");
    openCartDrawer();
  });
}

function initBulkOrderForm() {
  const form = document.getElementById('bulk-order-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast("✨ Corporate / Bulk Inquiry submitted! Our events team will contact you within 2 business hours.");
    form.reset();
  });
}
