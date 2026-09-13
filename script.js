// ====== Joud Baddawi — Portfolio ======

// Header: solid background after scrolling past the hero top
const header = document.getElementById('siteHeader');
function updateHeader() {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// Mobile navigation
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

function closeNav() {
  mainNav.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
}

navToggle.addEventListener('click', function (e) {
  e.stopPropagation();
  const isOpen = mainNav.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  document.body.classList.toggle('nav-open', isOpen);
});

// Close menu when a link is tapped
mainNav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', closeNav);
});

// Close menu when tapping outside the panel
document.addEventListener('click', function (e) {
  if (mainNav.classList.contains('open') && !mainNav.contains(e.target) && e.target !== navToggle) {
    closeNav();
  }
});

// Reveal-on-scroll animation
const revealTargets = document.querySelectorAll('.section-title, .section-label, .about-photo, .about-text, .demo-description, .demo-embed-card, .demo-video-card');
revealTargets.forEach(function (el) {
  el.classList.add('reveal');
});
const revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealTargets.forEach(function (el) {
  revealObserver.observe(el);
});

// Dynamic copyright year
document.querySelectorAll('.copyright-year').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
