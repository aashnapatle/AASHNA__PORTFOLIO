/* ================================================================
   contact.js — Contact links + form validation + POST /api/contact
   ================================================================ */

(function () {
  'use strict';

  // Wait for CONFIG to be available (sections.js must load first)
  window.addEventListener('sectionsRendered', init);

  function init() {
    const C = window.PORTFOLIO_CONFIG;
    if (!C) return;

    renderContactLinks(C);
    initForm(C);
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
  // API base URL — change to deployed URL in production
  const API_BASE = 'http://127.0.0.1:8000';

  function initForm(C) {
    const form      = document.getElementById('contact-form');
    const btn       = document.getElementById('btn-send');
    const statusEl  = document.getElementById('form-status');

    if (!form || !btn || !statusEl) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

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

      // Send
      btn.disabled = true;
      btn.textContent = 'SENDING...';
      showStatus('', '');

      try {
        const res = await fetch(API_BASE + '/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        });

        if (res.ok) {
          const data = await res.json();
          showStatus('Message sent. I will get back to you soon.', 'success');
          form.reset();
        } else {
          const err = await res.json().catch(() => ({}));
          showStatus(err.detail || 'Something went wrong. Please try again.', 'error');
        }
      } catch (err) {
        showStatus('Could not reach the server. Please email directly.', 'error');
        console.error('[Contact form]', err);
      } finally {
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
