/**
 * BLOSSO FLOWER SHOP - INTERACTION COMPONENTS
 * Handles Accordions, Testimonial Carousels, Blog Filters & Contact Form
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordions
  initAccordions();

  // 2. Testimonial Carousel / Slider
  initTestimonialSlider();

  // 3. Contact Form Submission
  initContactForm();

  // 4. Blog Topic Filter
  initBlogFilter();
});

function initAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

function initTestimonialSlider() {
  const sliderContainer = document.querySelector('.testimonial-slider-track');
  const prevBtn = document.getElementById('testi-prev-btn');
  const nextBtn = document.getElementById('testi-next-btn');
  const dots = document.querySelectorAll('.testi-dot');
  if (!sliderContainer) return;

  let currentIndex = 0;
  const cards = sliderContainer.querySelectorAll('.testimonial-slide');
  const totalSlides = cards.length;

  function updateSlider(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => updateSlider(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => updateSlider(currentIndex + 1));

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      updateSlider(idx);
    });
  });

  // Auto-advance every 6 seconds
  let interval = setInterval(() => updateSlider(currentIndex + 1), 6000);
  sliderContainer.parentElement.addEventListener('mouseenter', () => clearInterval(interval));
  sliderContainer.parentElement.addEventListener('mouseleave', () => {
    interval = setInterval(() => updateSlider(currentIndex + 1), 6000);
  });
}

function initContactForm() {
  const contactForm = document.getElementById('contact-inquiry-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value || 'Guest';
    showToast(`🌸 Thank you ${name}! Your inquiry has been routed to our Master Florist team.`);
    contactForm.reset();
  });
}

function initBlogFilter() {
  const blogPills = document.querySelectorAll('.blog-topic-pill');
  const blogCards = document.querySelectorAll('.blog-item-card');
  if (!blogPills.length || !blogCards.length) return;

  blogPills.forEach(pill => {
    pill.addEventListener('click', () => {
      blogPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const selectedTopic = pill.getAttribute('data-topic').toLowerCase();
      blogCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category')?.toLowerCase() || '';
        if (selectedTopic === 'all' || cardCategory === selectedTopic) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function switchTransitTab(event, tabId) {
  const container = event.target.closest('.arrival-transit-tabs');
  if (!container) return;
  container.querySelectorAll('.transit-tab-btn').forEach(btn => btn.classList.remove('active'));
  container.querySelectorAll('.transit-tab-content').forEach(content => content.classList.remove('active'));
  event.currentTarget.classList.add('active');
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');
}
