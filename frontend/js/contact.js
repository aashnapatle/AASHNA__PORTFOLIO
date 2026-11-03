/* ================================================================
   contact.js — Contact links + form validation + Formspree POST
   ================================================================ */

(function () {
  'use strict';

  const FORMSPREE_URL = 'https://formspree.io/f/xoeennev';

  // sections.js dispatches 'sectionsRendered' synchronously while the page
  // loads — before contact.js is even parsed (contact.js loads after it).
  // By the time we reach this code the event has already fired, so listening
  // for it here misses it every time.  The form HTML is static in index.html
  // (not injected by sections.js), so DOMContentLoaded is all we need, with
  // a small fallback in case the DOM is already ready when this script runs.
  function bootstrap() {
    const C = window.PORTFOLIO_CONFIG;
    if (C) renderContactLinks(C);
    initForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    // DOM already parsed — run immediately
    bootstrap();
  }

  // ── CONTACT LINKS ──────────────────────────────────────────────
  function renderContactLinks(C) {
    const list = document.querySelector('.contact-links-list');
    if (!list) return;

    const links = [
      { label: 'Email',    value: C.email,    href: C.email    ? 'mailto:' + C.email    : null },
      { label: 'LinkedIn', value: C.linkedin, href: C.linkedin || null },
      { label: 'GitHub',   value: C.github,   href: C.github   || null },
    ];

    list.innerHTML = links.map(l => {
      if (!l.href) {
        return `<span class="contact-link-row">
          <span class="contact-link-label">${l.label}</span>
          <span style="font-style:italic;opacity:0.4;">— not yet configured —</span>
        </span>`;
      }
      return `<a class="contact-link-row" href="${escapeHtml(l.href)}"
               ${l.label !== 'Email' ? 'target="_blank" rel="noopener noreferrer"' : ''}>
          <span class="contact-link-label">${l.label}</span>
          <span>${escapeHtml(l.value)}</span>
        </a>`;
    }).join('');
  }

  // ── FORM ───────────────────────────────────────────────────────
  function initForm() {
    const form     = document.getElementById('contact-form');
    const btn      = document.getElementById('btn-send');
    const statusEl = document.getElementById('form-status');

    if (!form || !btn || !statusEl) return;

    let submitting = false;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Prevent duplicate submissions
      if (submitting) return;

      const name    = form.elements['name'].value.trim();
      const email   = form.elements['email'].value.trim();
      const message = form.elements['message'].value.trim();

      // Client-side validation
      if (!name || !email || !message) {
        showStatus('Please fill in all fields.', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        showStatus('Please enter a valid email address.', 'error');
        return;
      }

      if (message.length < 10) {
        showStatus('Message must be at least 10 characters.', 'error');
        return;
      }

      // Loading state
      submitting = true;
      btn.disabled = true;
      btn.innerHTML = '<span class="btn-spinner" aria-hidden="true"></span>SENDING\u2026';
      showStatus('', '');

      try {
        const res = await fetch(FORMSPREE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        });

        if (res.ok) {
          showStatus('Thank you! Your message has been sent successfully.', 'success');
          form.reset();
        } else {
          const data = await res.json().catch(() => ({}));
          const errMsg = (data.errors && data.errors.map(e => e.message).join(' ')) ||
                         'Something went wrong. Please try again.';
          showStatus(errMsg, 'error');
        }
      } catch (err) {
        showStatus('Could not send your message. Please try again or email directly.', 'error');
        console.error('[Contact form]', err);
      } finally {
        submitting = false;
        btn.disabled = false;
        btn.innerHTML = 'SEND MESSAGE <span aria-hidden="true">&#x2192;</span>';
      }
    });

    function showStatus(msg, type) {
      statusEl.textContent = msg;
      statusEl.className   = 'form-status' + (type ? ' ' + type : '');
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;');
  }

})();
