/**
 * BLOSSO BOTANICAL GAZETTE - DYNAMIC ARTICLE RENDERER
 */

document.addEventListener('DOMContentLoaded', () => {
  renderBlogDetail();
});

function renderBlogDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('id') || 'blog-01';

  const article = BLOG_ARTICLES_DATA[articleId] || BLOG_ARTICLES_DATA['blog-01'];
  if (!article) return;

  // 1. Update Page Title
  document.title = `${article.title} | Blosso Journal`;

  // 2. Update Breadcrumb Category
  const breadcrumbCat = document.getElementById('article-breadcrumb-cat');
  if (breadcrumbCat) breadcrumbCat.textContent = article.category;

  // 3. Update Category Badge
  const catBadge = document.getElementById('article-cat-badge');
  if (catBadge) {
    catBadge.textContent = article.category;
    catBadge.className = `badge ${article.categoryBadge || 'badge-rose'}`;
  }

  // 4. Update Headline
  const headlineEl = document.getElementById('article-headline');
  if (headlineEl) {
    headlineEl.innerHTML = article.title.replace(article.headlineEm, `<em>${article.headlineEm}</em>`);
  }

  // 5. Update Meta Information
  const metaAuthorImg = document.getElementById('article-meta-author-img');
  if (metaAuthorImg) {
    metaAuthorImg.src = article.author.avatar;
    metaAuthorImg.alt = article.author.name;
  }

  const metaAuthorName = document.getElementById('article-meta-author-name');
  if (metaAuthorName) metaAuthorName.textContent = article.author.name;

  const metaDate = document.getElementById('article-meta-date');
  if (metaDate) metaDate.textContent = `Published ${article.date}`;

  const metaReadTime = document.getElementById('article-meta-readtime');
  if (metaReadTime) metaReadTime.textContent = article.readTime;

  const metaGuildBadge = document.getElementById('article-meta-guild');
  if (metaGuildBadge) metaGuildBadge.textContent = article.guildBadge;

  // 6. Update Hero Image & Caption
  const heroImg = document.getElementById('article-hero-img');
  if (heroImg) {
    heroImg.src = article.heroImage;
    heroImg.alt = article.title;
  }

  const heroCaption = document.getElementById('article-hero-caption');
  if (heroCaption) heroCaption.textContent = article.heroCaption;

  // 7. Update Intro Text
  const introDropCap = document.getElementById('article-intro-dropcap');
  if (introDropCap) introDropCap.textContent = article.introDropCap;

  const introSecond = document.getElementById('article-intro-second');
  if (introSecond) introSecond.textContent = article.introSecondPara;

  // 8. Update Table of Contents
  const tocList = document.getElementById('article-toc-list');
  if (tocList && article.toc) {
    tocList.innerHTML = article.toc.map(item => `
      <li class="toc-item"><a href="#${item.id}">${item.label}</a></li>
    `).join('');
  }

  // 9. Update Pull Quote
  const quoteText = document.getElementById('article-quote-text');
  if (quoteText && article.pullQuote) quoteText.innerHTML = `&ldquo;${article.pullQuote.quote}&rdquo;`;

  const quoteAuthor = document.getElementById('article-quote-author');
  if (quoteAuthor && article.pullQuote) quoteAuthor.innerHTML = `&mdash; ${article.pullQuote.author}`;

  // 10. Update Steps Heading & Step Cards
  const stepsHeading = document.getElementById('article-steps-heading');
  if (stepsHeading) stepsHeading.textContent = article.stepsHeading;

  const stepsContainer = document.getElementById('article-steps-container');
  if (stepsContainer && article.steps) {
    stepsContainer.innerHTML = article.steps.map(step => `
      <div class="article-step-card">
        <div class="article-step-header">
          <span class="article-step-num">${step.num}</span>
          <h3 class="article-step-title">${step.title}</h3>
        </div>
        <p style="font-size:0.9rem; color:var(--color-muted); line-height:1.65; margin:0;">
          ${step.desc}
        </p>
      </div>
    `).join('');
  }

  // 11. Update Pro Tip
  const proTipTitle = document.getElementById('article-protip-title');
  if (proTipTitle && article.proTip) proTipTitle.textContent = article.proTip.title;

  const proTipDesc = document.getElementById('article-protip-desc');
  if (proTipDesc && article.proTip) proTipDesc.textContent = article.proTip.desc;

  // 12. Update Inline Split Images
  const splitImg1 = document.getElementById('article-split-img-1');
  const splitImg2 = document.getElementById('article-split-img-2');
  if (splitImg1 && article.splitImages && article.splitImages[0]) splitImg1.src = article.splitImages[0];
  if (splitImg2 && article.splitImages && article.splitImages[1]) splitImg2.src = article.splitImages[1];

  // 13. Update Extra Section & Enemies List
  const extraHeading = document.getElementById('article-extra-heading');
  if (extraHeading) extraHeading.textContent = article.extraHeading;

  const extraBody = document.getElementById('article-extra-body');
  if (extraBody) extraBody.textContent = article.extraBody;

  const enemiesHeading = document.getElementById('article-enemies-heading');
  if (enemiesHeading) enemiesHeading.textContent = article.enemiesHeading;

  const enemiesList = document.getElementById('article-enemies-list');
  if (enemiesList && article.enemiesList) {
    enemiesList.innerHTML = article.enemiesList.map(item => `<li>${item}</li>`).join('');
  }

  // 14. Update Tags List
  const tagsList = document.getElementById('article-tags-list');
  if (tagsList && article.tags) {
    tagsList.innerHTML = article.tags.map(tag => `
      <a href="blog.html" class="article-tag-item">${tag}</a>
    `).join('');
  }

  // 15. Update Author Bio Card
  const bioAvatar = document.getElementById('article-bio-avatar');
  if (bioAvatar) {
    bioAvatar.src = article.author.avatar;
    bioAvatar.alt = article.author.name;
  }

  const bioName = document.getElementById('article-bio-name');
  if (bioName) bioName.textContent = article.author.name;

  const bioRole = document.getElementById('article-bio-role');
  if (bioRole) bioRole.textContent = article.author.role;

  const bioDesc = document.getElementById('article-bio-desc');
  if (bioDesc) bioDesc.textContent = article.author.bio;

  // 16. Update Sidebar Featured Bouquets
  const sidebarProducts = document.getElementById('article-sidebar-products');
  if (sidebarProducts && article.featuredProducts && window.FLORAL_DATA) {
    const products = article.featuredProducts
      .map(id => FLORAL_DATA.products.find(p => p.id === id))
      .filter(Boolean);

    sidebarProducts.innerHTML = products.map(prod => `
      <div class="sidebar-product-card">
        <img src="${prod.image}" alt="${prod.name}" class="sidebar-product-img">
        <div class="sidebar-product-info">
          <h5>${prod.name}</h5>
          <div class="sidebar-product-price">$${prod.price.toFixed(2)}</div>
          <button class="sidebar-product-btn" onclick="shopState.addToCart('${prod.id}')">+ Add to Bag</button>
        </div>
      </div>
    `).join('');
  }

  // 17. Update Related Articles Grid (3 other unique articles)
  const relatedGrid = document.getElementById('article-related-grid');
  if (relatedGrid) {
    const otherKeys = Object.keys(BLOG_ARTICLES_DATA).filter(k => k !== articleId).slice(0, 3);
    relatedGrid.innerHTML = otherKeys.map(k => {
      const art = BLOG_ARTICLES_DATA[k];
      return `
        <article class="blog-card">
          <div class="blog-img-wrap">
            <a href="blog-detail.html?id=${art.id}">
              <img src="${art.heroImage}" alt="${art.title}">
            </a>
          </div>
          <div class="blog-card-body">
            <span class="badge ${art.categoryBadge || 'badge-sage'}" style="margin-bottom:10px; align-self:flex-start;">${art.category.split('&')[0]}</span>
            <div class="blog-meta">
              <span>${art.date}</span> &middot; <span>${art.readTime}</span>
            </div>
            <h3 class="blog-card-title"><a href="blog-detail.html?id=${art.id}">${art.title}</a></h3>
            <p class="blog-excerpt">${art.introDropCap.substring(0, 120)}...</p>
            <div style="margin-top:auto; font-size:0.82rem; font-weight:600; color:var(--color-primary);">
              <a href="blog-detail.html?id=${art.id}">Read Article &rarr;</a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }
}
