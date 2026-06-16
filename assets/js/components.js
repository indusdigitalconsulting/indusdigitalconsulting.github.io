// ===========================
// Shared page components
// ===========================

// Detect if we're in the pages/ subfolder to build correct relative paths
const isSubPage = window.location.pathname.includes('/pages/');
const root = isSubPage ? '../' : '';

const NAV_HTML = `
<div class="topbar">
  <div class="container">
    <span>📍 Serving Mississauga, Toronto &amp; the GTA</span>
    <div class="topbar-right">
      <a href="tel:+16474446543">📞 (647) 444-6543</a>
      <a href="mailto:info@indusdigitalconsulting.com">✉ info@indusdigitalconsulting.com</a>
    </div>
  </div>
</div>
<nav class="navbar">
  <div class="container">
    <a href="${root}index.html" class="logo">
      <img src="${root}assets/images/indus-logo.jpg" alt="Indus Digital Consulting" width="300" height="auto">
    </a>
    <ul class="nav-links">
      <li><a href="${root}index.html">Home</a></li>
      <li class="nav-dropdown">
        <a href="#">Services</a>
        <div class="dropdown-menu">
          <a href="${root}pages/website-design.html">Website Design</a>
          <a href="${root}pages/seo.html">Search Engine Optimization</a>
          <a href="${root}pages/local-seo.html">Local SEO</a>
          <a href="${root}pages/content-marketing.html">Content Marketing</a>
          <a href="${root}pages/social-media.html">Social Media Marketing</a>
          <a href="${root}pages/google-ads.html">Google Ads / PPC</a>
        </div>
      </li>
      <li><a href="${root}pages/about.html">About Us</a></li>
      <li><a href="${root}pages/blog.html">Blog</a></li>
      <li><a href="${root}pages/contact.html">Contact</a></li>
      <li><a href="${root}pages/contact.html" class="nav-cta btn">Free Consultation</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Toggle navigation" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-nav" id="mobileNav">
    <a href="${root}index.html">Home</a>
    <a href="${root}pages/website-design.html">Website Design</a>
    <a href="${root}pages/seo.html">Search Engine Optimization</a>
    <a href="${root}pages/local-seo.html">Local SEO</a>
    <a href="${root}pages/content-marketing.html">Content Marketing</a>
    <a href="${root}pages/social-media.html">Social Media Marketing</a>
    <a href="${root}pages/google-ads.html">Google Ads / PPC</a>
    <a href="${root}pages/about.html">About Us</a>
    <a href="${root}pages/blog.html">Blog</a>
    <a href="${root}pages/contact.html">Contact</a>
    <a href="${root}pages/contact.html" style="color:#C8191E;font-weight:700">→ Free Consultation</a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="${root}index.html" class="logo">
          <img src="${root}assets/images/indus-logo.jpg" alt="Indus Digital Consulting" width="200" style="filter:brightness(0) invert(1)">
        </a>
        <p class="footer-desc">We help businesses in Mississauga, Toronto, and across the GTA grow their online presence through expert web design, SEO, and digital marketing strategies.</p>
      </div>
      <div class="footer-col">
        <h5>Services</h5>
        <ul class="footer-links">
          <li><a href="${root}pages/website-design.html">Website Design</a></li>
          <li><a href="${root}pages/seo.html">SEO</a></li>
          <li><a href="${root}pages/local-seo.html">Local SEO</a></li>
          <li><a href="${root}pages/content-marketing.html">Content Marketing</a></li>
          <li><a href="${root}pages/social-media.html">Social Media</a></li>
          <li><a href="${root}pages/google-ads.html">Google Ads</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <ul class="footer-links">
          <li><a href="${root}pages/about.html">About Us</a></li>
          <li><a href="${root}pages/blog.html">Blog</a></li>
          <li><a href="${root}pages/contact.html">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contact</h5>
        <div class="footer-contact-item"><span>📞</span><span><a href="tel:+16474446543" style="color:#aaa">(647) 444-6543</a></span></div>
        <div class="footer-contact-item"><span>✉</span><span><a href="mailto:info@indusdigitalconsulting.com" style="color:#aaa">info@indusdigitalconsulting.com</a></span></div>
        <div class="footer-contact-item"><span>📍</span><span>Mississauga, Ontario, Canada</span></div>
        <div class="footer-contact-item"><span>🕐</span><span>Mon–Fri: 9am – 6pm EST</span></div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2024 Indus Digital Consulting. All rights reserved.</span>
      <span>Designed &amp; built with ❤ in Mississauga</span>
    </div>
  </div>
</footer>`;

// Inject shared components
document.addEventListener('DOMContentLoaded', function () {
  const navEl = document.getElementById('site-nav');
  if (navEl) navEl.innerHTML = NAV_HTML;

  const footEl = document.getElementById('site-footer');
  if (footEl) footEl.innerHTML = FOOTER_HTML;
});
