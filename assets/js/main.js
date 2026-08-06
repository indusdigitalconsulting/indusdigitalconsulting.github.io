// ===========================
// INDUS DIGITAL — main.js
// Nav, mobile menu, smooth scroll and contact form are all handled in
// components.js (which injects the nav/footer). Keeping the handlers here
// too double-binds them — notably the hamburger, which toggled open then
// shut on every tap. This file now only owns the scroll-in stat animation.
// ===========================

document.addEventListener('DOMContentLoaded', function () {

  // Animate stats on scroll
  const statNums = document.querySelectorAll('.stat-item strong, .why-num');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statNums.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(12px)';
      el.style.transition = 'opacity .5s ease, transform .5s ease';
      observer.observe(el);
    });
  }

});
