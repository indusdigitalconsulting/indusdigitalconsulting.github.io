// ===========================
// Indus Digital — Shared Components
// No Blog · No Free Consultation nav item
// Dropdown stays open on hover (CSS-driven via li)
// ===========================

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
    <a href="index.html" class="logo">
      <img src="assets/images/indus-logo.jpg" alt="Indus Digital Consulting" width="300" height="auto">
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li class="nav-dropdown">
        <a href="#">Services</a>
        <div class="dropdown-menu">
          <div class="dropdown-menu-inner">
            <a href="website-design.html">Website Design</a>
            <a href="seo.html">Search Engine Optimization</a>
            <a href="local-seo.html">Local SEO</a>
            <a href="content-marketing.html">Content Marketing</a>
            <a href="marketing-service.html">Marketing Services</a>
          </div>
        </div>
      </li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Toggle navigation" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-nav" id="mobileNav">
    <a href="index.html">Home</a>
    <a href="website-design.html" class="mobile-sub">— Website Design</a>
    <a href="seo.html" class="mobile-sub">— Search Engine Optimization</a>
    <a href="local-seo.html" class="mobile-sub">— Local SEO</a>
    <a href="content-marketing.html" class="mobile-sub">— Content Marketing</a>
    <a href="marketing-service.html" class="mobile-sub">— Marketing Services</a>
    <a href="about.html">About Us</a>
    <a href="contact.html">Contact</a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo">
          <img src="assets/images/indus-logo.jpg" alt="Indus Digital Consulting" width="200">
        </a>
        <p class="footer-desc">We help businesses in Mississauga, Toronto, and across the GTA grow their online presence through expert web design, SEO, and digital marketing.</p>
      </div>
      <div class="footer-col">
        <h5>Services</h5>
        <ul class="footer-links">
          <li><a href="website-design.html">Website Design</a></li>
          <li><a href="seo.html">Search Engine Optimization</a></li>
          <li><a href="local-seo.html">Local SEO</a></li>
          <li><a href="content-marketing.html">Content Marketing</a></li>
          <li><a href="marketing-service.html">Marketing Services</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <ul class="footer-links">
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contact</h5>
        <div class="footer-contact-item"><span>📞</span><span><a href="tel:+16474446543">(647) 444-6543</a></span></div>
        <div class="footer-contact-item"><span>✉</span><span><a href="mailto:info@indusdigitalconsulting.com">info@indusdigitalconsulting.com</a></span></div>
        <div class="footer-contact-item"><span>📍</span><span>Mississauga, Ontario, Canada</span></div>
        <div class="footer-contact-item"><span>🕐</span><span>Mon–Fri: 9am – 6pm EST</span></div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 Indus Digital Consulting. All rights reserved.</span>
      <span>Designed &amp; built with ❤ in Mississauga</span>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', function () {
  const navEl = document.getElementById('site-nav');
  if (navEl) navEl.innerHTML = NAV_HTML;

  const footEl = document.getElementById('site-footer');
  if (footEl) footEl.innerHTML = FOOTER_HTML;

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', mobileNav.classList.contains('open'));
    });
  }

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#1a8a6e';
      setTimeout(function () {
        btn.textContent = orig;
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    });
  }
});