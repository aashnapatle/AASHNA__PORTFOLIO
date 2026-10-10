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

  // 6. CERTIFICATE PREVIEW MODAL
  window.openCertModal = function (cert) {
    const modal = document.getElementById('cert-modal');
    if (!modal || !cert) return;

    const titleEl  = document.getElementById('cert-modal-title');
    const issuerEl = document.getElementById('cert-modal-issuer');
    const dateEl   = document.getElementById('cert-modal-date');
    const bodyEl   = document.getElementById('cert-modal-body');
    const linkEl   = document.getElementById('cert-modal-link');

    if (titleEl)  titleEl.textContent  = cert.title || '';
    if (issuerEl) issuerEl.textContent = cert.issuer || '';
    if (dateEl)   dateEl.textContent   = cert.date || '';

    const targetDoc = cert.document || cert.file || cert.link || '';
    if (linkEl) {
      if (targetDoc && targetDoc !== '#') {
        linkEl.href = targetDoc;
        linkEl.style.display = 'inline-flex';
      } else {
        linkEl.style.display = 'none';
      }
    }

    if (bodyEl) {
      bodyEl.innerHTML = '';
      const isPdf = typeof targetDoc === 'string' && targetDoc.toLowerCase().endsWith('.pdf');
      if (isPdf) {
        const iframe = document.createElement('iframe');
        iframe.src = targetDoc + '#view=FitH';
        iframe.className = 'cert-modal-iframe';
        iframe.title = cert.title || 'Certificate Preview';
        bodyEl.appendChild(iframe);
      } else if (targetDoc || cert.thumbnail) {
        const img = document.createElement('img');
        img.src = targetDoc || cert.thumbnail;
        img.alt = cert.title || 'Certificate Preview';
        img.className = 'cert-modal-img';
        bodyEl.appendChild(img);
      }
    }

    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('cert-modal-close');
    if (closeBtn) closeBtn.focus();
  };

  window.closeCertModal = function () {
    const modal = document.getElementById('cert-modal');
    if (!modal) return;
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    const bodyEl = document.getElementById('cert-modal-body');
    if (bodyEl) bodyEl.innerHTML = '';
  };

  function initCertModal() {
    const modal = document.getElementById('cert-modal');
    if (!modal) return;

    const closeBtn = document.getElementById('cert-modal-close');
    const backdrop = document.getElementById('cert-modal-backdrop');

    if (closeBtn) closeBtn.addEventListener('click', window.closeCertModal);
    if (backdrop) backdrop.addEventListener('click', window.closeCertModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-active')) {
        window.closeCertModal();
      }
    });
  }

  // 7. BEYOND THE CODE (MILESTONE) CONNECTOR & NODE HIGHLIGHT
  function initMilestoneHover() {
    document.querySelectorAll('.v2-ms-card').forEach((card) => {
      if (card.dataset.msHoverAttached) return;
      card.dataset.msHoverAttached = 'true';
      const item = card.closest('.v2-ms-item');
      if (!item) return;

      card.addEventListener('mouseenter', () => item.classList.add('is-hovered'));
      card.addEventListener('mouseleave', () => item.classList.remove('is-hovered'));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initCertModal();
    initMilestoneHover();
  });

  window.addEventListener('sectionsRendered', () => {
    setTimeout(initMilestoneHover, 100);
  });

})();
