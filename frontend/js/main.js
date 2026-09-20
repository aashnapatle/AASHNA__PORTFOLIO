/* ================================================================
   main.js - Core UI interactions, cursor, and scroll reveal
   ================================================================ */

(function () {
  'use strict';

  // 1. CUSTOM CURSOR
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function animateCursor() {
    if (dot) {
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    }

    ringX = lerp(ringX, mouseX, 0.12);
    ringY = lerp(ringY, mouseY, 0.12);
    if (ring) {
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
    }

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  const interactiveSelectors = 'a, button, .tech-badge, .project-card-header, .skill-tag, .about-toggle, input, textarea, .proj-link';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelectors) && ring) {
      ring.classList.add('is-hovering');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelectors) && ring) {
      ring.classList.remove('is-hovering');
    }
  });

  // 2. NAVBAR SCROLL
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // 3. MOBILE MENU
  const menuToggle = document.querySelector('.navbar-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuClose = document.querySelector('.mobile-menu-close');
  const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  
  if (menuClose && mobileMenu) {
    menuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // 4. SCROLL REVEAL
  function initReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', initReveal);
  window.addEventListener('sectionsRendered', () => {
    setTimeout(initReveal, 100);
  });
  initReveal();

  // 5. ACTIVE NAV LINK HIGHLIGHTING
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-links .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // 6. PREMIUM CARD HOVER — ISOLATED PER-CARD TILT
  // Floating animation is on the WRAPPER element.
  // Transforms here are applied only to the INNER card element.
  // No card affects any other card.
  //
  // Milestone cards (.v2-ms-card) are absolutely positioned, so we
  // also toggle .is-hovered on their parent .v2-ms-item for the CSS
  // border/glow rules that need to cascade from parent.

  // Skip on touch devices
  const isTouchDevice = window.matchMedia('(hover: none)').matches;

  function attachCardTilt(card) {
    if (card.dataset.tiltAttached) return;
    card.dataset.tiltAttached = 'true';

    const isMsCard = card.classList.contains('v2-ms-card');
    const ease = 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)';

    card.addEventListener('mouseenter', () => {
      // Trigger one-time sweep animation by toggling class
      card.classList.remove('ch-swept');
      // Force reflow so animation can restart
      void card.offsetWidth;
      card.classList.add('ch-swept');

      if (isMsCard) {
        const msItem = card.closest('.v2-ms-item');
        if (msItem) msItem.classList.add('is-hovered');
      }
    });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      // Normalise to -1 … +1
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      // Max tilt: 1.5deg X, 2deg Y — very subtle
      const rx = -ny * 1.5;
      const ry =  nx * 2.0;

      card.style.transition = 'none';
      card.style.transform =
        'perspective(900px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg) translateY(-3px) scale(1.01)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = ease;
      card.style.transform = '';

      if (isMsCard) {
        const msItem = card.closest('.v2-ms-item');
        if (msItem) msItem.classList.remove('is-hovered');
      }
    });
  }

  function initCardHover() {
    if (isTouchDevice) return;

    const selectors = [
      '.v2-skill-card',
      '.v2-project-card',
      '.v2-ms-card',
      '.v2-exp-card',
      '.v2-cert-card'
    ];

    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(card => attachCardTilt(card));
    });
  }

  // Attach now (for statically rendered cards like skills)
  document.addEventListener('DOMContentLoaded', initCardHover);
  initCardHover();

  // Re-attach after sections.js renders dynamic cards
  window.addEventListener('sectionsRendered', () => {
    setTimeout(initCardHover, 150);
  });

})();
