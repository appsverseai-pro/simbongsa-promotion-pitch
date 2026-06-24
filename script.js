/* Simbongsa pitch — scroll interactions */
(function () {
  'use strict';

  /* Sticky nav background on scroll */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 40) nav.classList.add('is-stuck');
    else nav.classList.remove('is-stuck');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Reveal-on-scroll with a gentle stagger between siblings */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      // Stagger items that share a parent for a cascading feel
      var siblings = Array.prototype.slice.call(el.parentNode.children)
        .filter(function (c) { return c.classList.contains('reveal'); });
      var idx = siblings.indexOf(el);
      el.style.transitionDelay = (Math.max(0, idx) * 90) + 'ms';
      el.classList.add('is-visible');
      io.unobserve(el);
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

  reveals.forEach(function (el) { io.observe(el); });
})();
