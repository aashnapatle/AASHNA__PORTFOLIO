/* ================================================================
   hero.js V2 — Ambient badge float + multi-layer depth parallax
   ================================================================ */

(function () {
  'use strict';

  const hero      = document.getElementById('hero');
  const badges    = document.querySelectorAll('.tech-badge');
  const heroLines = hero ? hero.querySelector('.hero-lines') : null;

  if (!hero || badges.length === 0) return;

  let heroRect = hero.getBoundingClientRect();
  window.addEventListener('resize', () => {
    heroRect = hero.getBoundingClientRect();
  }, { passive: true });

  // ── BADGE DATA ─────────────────────────────────────────────────
  // Each badge has an independent depth factor and ambient oscillation phase
  const badgeData = Array.from(badges).map((badge, i) => ({
    el:        badge,
    ox:        0,          // current x offset
    oy:        0,          // current y offset
    vx:        0,
    vy:        0,
    // Depth factor: badges appear at different distances from viewer
    depth:     0.10 + Math.random() * 0.20,
    // Ambient float — unique per badge so they feel independent
    phaseX:    Math.random() * Math.PI * 2,
    phaseY:    Math.random() * Math.PI * 2,
    ampX:      1.0 + Math.random() * 1.4,   // ±1–2.4px float amplitude
    ampY:      0.7 + Math.random() * 1.1,
    speedX:    0.00036 + Math.random() * 0.00014,
    speedY:    0.00030 + Math.random() * 0.00012,
  }));

  let mx = 0;  // mouse offset from hero center
  let my = 0;
  let time = performance.now();
  let rafId = null;
  let isRunning = false;

  // ── ANIMATION LOOP ─────────────────────────────────────────────
  function tick(now) {
    const dt = now - time;
    time = now;

    badgeData.forEach(b => {
      // 1. Mouse-based displacement — strict 5-8px limit
      const mouseX = Math.max(-8, Math.min(8, mx * b.depth * 0.04));
      const mouseY = Math.max(-8, Math.min(8, my * b.depth * 0.04));

      // 2. Ambient oscillation
      const floatX = Math.sin(now * b.speedX + b.phaseX) * b.ampX;
      const floatY = Math.cos(now * b.speedY + b.phaseY) * b.ampY;

      // 3. Spring toward combined target
      const targetX = mouseX + floatX;
      const targetY = mouseY + floatY;

      b.vx += (targetX - b.ox) * 0.08;
      b.vy += (targetY - b.oy) * 0.08;

      // Damping
      b.vx *= 0.80;
      b.vy *= 0.80;

      b.ox += b.vx;
      b.oy += b.vy;

      // 4. Subtle 3D tilt
      const tiltX = my * b.depth * 0.015;
      const tiltY = mx * b.depth * -0.015;
      
      // Proximity scale - much more subtle
      const rect = b.el.getBoundingClientRect();
      const bx = rect.left + rect.width / 2;
      const by = rect.top + rect.height / 2;
      const distToMouse = Math.sqrt(Math.pow(bx - window.lastMouseX, 2) + Math.pow(by - window.lastMouseY, 2));
      const scale = distToMouse < 100 ? 1.04 : 1.0;

      b.scale = b.scale ? b.scale + (scale - b.scale) * 0.15 : 1.0;

      b.el.style.transform =
        'translate(' + b.ox.toFixed(2) + 'px,' + b.oy.toFixed(2) + 'px)' +
        ' rotateX(' + tiltX.toFixed(2) + 'deg)' +
        ' rotateY(' + tiltY.toFixed(2) + 'deg)' +
        ' scale(' + b.scale.toFixed(3) + ')';
    });

    // 5. Hero background lines — subtle depth parallax
    if (heroLines) {
      const lx = (mx * -0.015).toFixed(2);
      const ly = (my * -0.015).toFixed(2);
      heroLines.style.transform = 'translate(' + lx + 'px,' + ly + 'px)';
    }

    rafId = requestAnimationFrame(tick);
  }

  // Start loop
  rafId = requestAnimationFrame(tick);

  // ── MOUSE TRACKING ─────────────────────────────────────────────
  window.lastMouseX = -9999;
  window.lastMouseY = -9999;
  
  hero.addEventListener('mousemove', (e) => {
    window.lastMouseX = e.clientX;
    window.lastMouseY = e.clientY;
    mx = e.clientX - heroRect.left  - heroRect.width  / 2;
    my = e.clientY - heroRect.top   - heroRect.height / 2;
  }, { passive: true });

  hero.addEventListener('mouseleave', () => {
    // Lerp back to zero — handled naturally by spring physics
    mx = 0;
    my = 0;
    window.lastMouseX = -9999;
    window.lastMouseY = -9999;
  });

  // ── SCROLL PARALLAX ────────────────────────────────────────────
  // Hero content rises and fades as user scrolls. Lines lag behind.
  const heroContent = hero.querySelector('.hero-content');
  let scrollTicking = false;

  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(() => {
        const s = window.scrollY;
        const h = heroRect.height;
        if (s <= h) {
          const p = s / h;
          if (heroContent) {
            heroContent.style.transform = 'translateY(' + (p * 44).toFixed(1) + 'px)';
            heroContent.style.opacity   = Math.max(0, 1 - p * 1.5).toFixed(3);
          }
        }
        scrollTicking = false;
      });
    }
  }, { passive: true });

  // ── RESUME BUTTON ──────────────────────────────────────────────
  window.addEventListener('sectionsRendered', () => {
    const btn = document.getElementById('resume-btn');
    if (!btn) return;
    const cfg = window.PORTFOLIO_CONFIG;
    if (cfg && cfg.resume) {
      btn.href = cfg.resume;
    } else {
      btn.style.opacity = '0.52';
      btn.setAttribute('aria-label', 'Resume (not yet uploaded)');
      btn.addEventListener('click', (e) => e.preventDefault());
    }
  });

})();
