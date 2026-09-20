/* ================================================================
   sections.js — All section behaviour: about, skills, projects,
   achievements, experience, certifications
   ================================================================

   ┌─────────────────────────────────────────────────────────────┐
   │  CONFIG — Edit all your real information here               │
   └─────────────────────────────────────────────────────────────┘ */

window.PORTFOLIO_CONFIG = {

  // ── LINKS ──────────────────────────────────────────────────────
  // TODO: Fill in your real URLs
  resume:   '',            // e.g. 'assets/resume.pdf' or hosted URL
  email:    '',            // e.g. 'aashna@example.com'
  linkedin: '',            // e.g. 'https://linkedin.com/in/aashna-patle'
  github:   '',            // e.g. 'https://github.com/aashnapatle'

  // ── PHOTO ──────────────────────────────────────────────────────
  photo: 'assets/photo.jpg',  // TODO: Replace with your actual photo filename

  // ── PROJECTS ───────────────────────────────────────────────────
  // Leave liveDemo / github as '' to hide the button entirely.
  projects: [
    {
      title:       'AQI Monitoring',
      shortDesc:   '',
      overview:    '',
      problem:     '',
      solution:    '',
      features:    ['', '', ''],
      techStack:   ['', ''],
      liveDemo:    '',   // TODO: Live demo URL, leave '' to hide
      github:      '',   // TODO: GitHub repo URL, leave '' to hide
      screenshot:  '',   // TODO: 'assets/aqi-screenshot.png', leave '' for placeholder
    },
    {
      title:       'MediNutri-AI',
      shortDesc:   '',
      overview:    '',
      problem:     '',
      solution:    '',
      features:    ['', '', ''],
      techStack:   ['', ''],
      liveDemo:    '',
      github:      '',
      screenshot:  '',
    },
    {
      title:       'AlertIndia — Aadhaar Data Monitoring System',
      shortDesc:   '',
      overview:    '',
      problem:     '',
      solution:    '',
      features:    ['', '', ''],
      techStack:   ['', ''],
      liveDemo:    '',
      github:      '',
      screenshot:  '',
    },
  ],

  // ── ACHIEVEMENTS ────────────────────────────────────────────────
  // Only add real, verifiable achievements.
  // Leave certificate as '' to hide the link.
  achievements: [
    {
      title: 'NASA',
      date: '',
      description: '',
      proof: '',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"/></svg>'
    },
    {
      title: 'ARCADE',
      date: '',
      description: '',
      proof: '',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="6" width="20" height="12" rx="4"/><path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"/></svg>'
    },
    {
      title: 'MICROSOFT VISIT',
      date: '',
      description: '',
      proof: '',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z"/></svg>'
    },
    {
      title: 'AICTE / IBM SKILLSBUILD INTERNSHIP',
      date: '',
      description: '',
      proof: '',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>'
    }
  ],

  // ── EXPERIENCE ──────────────────────────────────────────────────
  // Only add verified experience. Leave empty array [] if none yet.
  experience: [
    {
      role: 'Machine Learning & Applied AI Internship 2026',
      org: 'AICTE | IBM SkillsBuild',
      desc: 'BharatCares',
      date: 'Completed — 19 September 2026',
      certificate: '#',
    }
  ],

  credly: {
    visible: true,
    url: '#'
  },

  certifications: [
    { title: 'Data Science Essentials with Python', issuer: 'Edunet Foundation / IBM', date: '2026', link: '#', image: '' },
    { title: 'Find Insights with AI', issuer: 'IBM SkillsBuild', date: '2026', link: '#', image: '' },
    { title: 'Introduction to Modern AI', issuer: 'IBM SkillsBuild', date: '2026', link: '#', image: '' },
    { title: 'Data Analytics Essentials', issuer: 'Cisco', date: '2025', link: '#', image: '' },
    { title: 'C++ Essentials 1', issuer: 'Cisco', date: '2025', link: '#', image: '' },
    { title: 'IT Essentials', issuer: 'Cisco', date: '2025', link: '#', image: '' },
    { title: 'Advanced Excel', issuer: 'Microsoft', date: '2025', link: '#', image: '' },
    { title: 'MS Office', issuer: 'Microsoft', date: '2025', link: '#', image: '' },
    { title: 'Machine Learning & Applied AI Internship', issuer: 'AICTE | IBM SkillsBuild', date: '2026', link: '#', image: '' }
  ]
};

/* ================================================================
   Section behaviour
   ================================================================ */

(function (C) {
  'use strict';

  // ── ABOUT EXPAND/COLLAPSE ──────────────────────────────────────
  const aboutPanel  = document.getElementById('about-panel');
  const aboutToggle = document.getElementById('about-toggle');

  if (aboutPanel && aboutToggle) {
    aboutToggle.addEventListener('click', () => {
      const expanded = aboutPanel.classList.toggle('expanded');
      aboutToggle.setAttribute('aria-expanded', String(expanded));
      aboutToggle.setAttribute('aria-expanded', String(expanded));
    });
  }

  // ── PROJECTS ──────────────────────────────────────────────────
    // PROJECTS REPLACEMENT START
  const projectsList = document.getElementById('projects-list');

  
  function safeVal(val) {
    if (!val || val.includes('')) return '';
    return escapeHtml(val);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;');
  }
  
  const techIcons = {
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    'Data Analysis': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
    'APIs': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#9C27B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
    'Machine Learning': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#8BC34A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
    'Cyber Security': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>'
  };
  
  function getTechTag(tech) {
    if (!tech || tech.trim() === "") return "";
    const icon = techIcons[tech];
    const iconImg = icon ? (icon.startsWith('<svg') ? icon : `<img src="${icon}" alt="${escapeHtml(tech)}" />`) : '';
    return `<span class="v2-proj-tech-pill">${iconImg} ${escapeHtml(tech)}</span>`;
  }

  function renderProjects() {
    const projectsList = document.getElementById('projects-list');
    if (!projectsList) return;
    
    // Float timings
    const floatDurs = ['7.5s', '6.8s', '8s'];
    const floatDelays = ['0s', '-2s', '-4s'];
    const gridCols = ['1 / 7', '7 / 13', '3 / 11']; 

    const html = C.projects.map((p, i) => {
      const num = String(i + 1).padStart(2, '0');
      const tagsHtml = p.techStack.map(t => getTechTag(t)).join('');
      const featHtml = p.features.filter(f => f && f.trim() !== "").map(f => `<li>${escapeHtml(f)}</li>`).join('');

      const liveDemoBtn = p.liveDemo
        ? `<a href="${escapeHtml(p.liveDemo)}" class="v2-btn-solid" target="_blank" rel="noopener noreferrer">View Project &nearr;</a>`
        : `<a href="#" class="v2-btn-solid" style="opacity:0.5; pointer-events:none;">View Project &nearr;</a>`;

      const githubBtn = p.github
        ? `<a href="${escapeHtml(p.github)}" class="v2-btn-outline" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="margin-right:8px;"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>Source Code</a>`
        : '';

      return `
        <div class="v2-project-card-wrapper reveal" style="--float-dur: ${floatDurs[i]}; --float-delay: ${floatDelays[i]}; grid-column: ${gridCols[i]};">
          <article class="v2-project-card">
            
            <div class="v2-project-card-header" aria-expanded="false" tabindex="0" role="button">
              
              <div class="v2-proj-top">
                <div class="v2-proj-meta">
                  <span class="v2-proj-num">${num} &mdash;</span>
                  <div class="v2-proj-tech">${tagsHtml}</div>
                </div>
                
                <div class="v2-proj-title-row">
                  <div class="v2-proj-title-col">
                    <h3 class="v2-proj-title">${escapeHtml(p.title)}</h3>
                    ${p.shortDesc ? `<p class="v2-proj-desc">${safeVal(p.shortDesc)}</p>` : ""}
                  </div>
                  <div class="v2-proj-screenshot">
                    ${p.screenshot ? `<img src="${escapeHtml(p.screenshot)}" alt="${escapeHtml(p.title)}" loading="lazy" />` : `<div class="v2-screenshot-placeholder"><span>Image Placeholder</span></div>`}
                  </div>
                </div>
              </div>

              <div class="v2-proj-actions">
                <div class="v2-proj-links">
                  ${liveDemoBtn}
                  ${githubBtn}
                </div>
                <button class="v2-proj-expand-btn" aria-hidden="true">+</button>
              </div>
            </div>

            <div class="v2-project-card-body" aria-hidden="true">
              <div class="v2-proj-body-inner">
                <div class="v2-proj-grid-body">
                  <div class="v2-proj-body-col">
                    ${p.overview ? `<h4 class="v2-proj-info-heading">Overview</h4><p class="v2-proj-info-text">${safeVal(p.overview)}</p>` : ""}
                  </div>
                  <div class="v2-proj-body-col">
                    ${p.problem ? `<h4 class="v2-proj-info-heading">Problem</h4><p class="v2-proj-info-text">${safeVal(p.problem)}</p>` : ""}
                  </div>
                  <div class="v2-proj-body-col">
                    ${p.solution ? `<h4 class="v2-proj-info-heading">Solution</h4><p class="v2-proj-info-text">${safeVal(p.solution)}</p>` : ""}
                  </div>
                  <div class="v2-proj-body-col">
                    <h4 class="v2-proj-info-heading">Features</h4>
                    <ul class="v2-proj-info-list">${featHtml}</ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      `;
    }).join('');

    projectsList.innerHTML = html;

    // Attach expand/collapse
    projectsList.querySelectorAll('.v2-project-card-header').forEach((header) => {
      function toggleProject(e) {
        if (e && e.target.closest('a')) return;
        const card = header.parentElement;
        const expanded = card.classList.toggle('expanded');
        header.setAttribute('aria-expanded', String(expanded));
        const btn = header.querySelector('.v2-proj-expand-btn');
        if (btn) btn.textContent = expanded ? '' : '+';

        const body = card.querySelector('.v2-project-card-body');
        if (expanded) {
          body.style.maxHeight = body.scrollHeight + "px";
        } else {
          body.style.maxHeight = "0";
        }
      }
      header.addEventListener('click', toggleProject);
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleProject(); }
      });
    });
  }

  function renderAchievements() {
    const v2Journey = document.getElementById('v2-journey-container');
    if (!v2Journey || !C.achievements || !C.achievements.length) return;

    const positions = ['12%', '37%', '62%', '87%']; 
    const floatDurs = ['5.4s', '6.1s', '5.8s', '6.5s'];
    const floatDels = ['0s', '-1.5s', '-3s', '-4.5s'];

    let itemsHtml = '';
    C.achievements.forEach((ach, i) => {
      const isAbove = (i % 2 === 0);
      const posClass = isAbove ? 'v2-ms-above' : 'v2-ms-below';
      const num = String(i + 1).padStart(2, '0');
      
      const proofBtn = (ach.proof && ach.proof !== '#')
        ? `<a href="${escapeHtml(ach.proof)}" class="v2-btn-outline v2-ms-btn" target="_blank" rel="noopener noreferrer">VIEW PROOF &nearr;</a>`
        : '';
      
      itemsHtml += `
      <div class="v2-ms-item ${posClass}" style="left: ${positions[i]}; transition-delay: ${i * 0.2 + 0.3}s;">
        ${isAbove ? '' : '<div class="v2-ms-node"></div><div class="v2-ms-connector"></div>'}
        
        <div class="v2-ms-card-wrapper" style="--float-dur: ${floatDurs[i]}; --float-delay: ${floatDels[i]};">
          <div class="v2-ms-card">
            <div class="v2-ms-icon">${ach.icon || ''}</div>
            <div class="v2-ms-num">${num} &mdash;</div>
            <h4 class="v2-ms-title">${escapeHtml(ach.title)}</h4>
            ${ach.date ? `<p class="v2-ms-date">${safeVal(ach.date)}</p>` : ""}
            ${ach.description ? `<p class="v2-ms-desc">${safeVal(ach.description)}</p>` : ""}
            ${proofBtn}
          </div>
        </div>

        ${isAbove ? '<div class="v2-ms-connector"></div><div class="v2-ms-node"></div>' : ''}
      </div>`;
    });

    v2Journey.innerHTML = `
      <div class="v2-ms-track"></div>
      <div class="v2-ms-items-container">
        ${itemsHtml}
      </div>
    `;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          v2Journey.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });
    observer.observe(v2Journey);
    
    setTimeout(() => {
      if (v2Journey) v2Journey.classList.add('in-view');
    }, 2500);
  }

  function renderExperience() {
    const expList = document.getElementById('experience-list');
    if (!expList || !C.experience || C.experience.length === 0) return;

    expList.innerHTML = C.experience.map(e => {
      const certBtn = e.certificate && e.certificate !== '#'
        ? `<a href="${escapeHtml(e.certificate)}" class="v2-btn-outline" target="_blank" rel="noopener noreferrer" style="margin-top: 1rem; display: inline-flex; align-items:center;">VIEW CERTIFICATE &nearr;</a>`
        : '';
      return `
      <div class="v2-exp-wrapper reveal">
        <div class="v2-exp-card">
          <h3 class="v2-exp-org">${escapeHtml(e.org)}</h3>
          <p class="v2-exp-role">${escapeHtml(e.role)}</p>
          <p class="v2-exp-desc">${safeVal(e.desc)}</p>
          <p class="v2-exp-date">${escapeHtml(e.date)}</p>
          ${certBtn}
        </div>
      </div>`;
    }).join('');
  }

  function renderCertifications() {
    const certList = document.getElementById('certifications-list');
    if (!certList || !C.certifications || C.certifications.length === 0) return;

    const certsHtml = C.certifications.map((c, i) => {
      const floatDur = (5.2 + Math.random() * 1.6).toFixed(1) + 's';
      const floatDelay = '-' + (Math.random() * 5).toFixed(1) + 's';

      const thumb = c.image
        ? `<img src="${escapeHtml(c.image)}" alt="Certificate thumbnail" class="v2-cert-thumb-img"/>`
        : `<div class="v2-cert-thumb-placeholder">CERT</div>`;

      const cardTag = (c.link && c.link !== '#') ? 'a' : 'div';
      const hrefAttr = (c.link && c.link !== '#') ? `href="${escapeHtml(c.link)}" target="_blank" rel="noopener noreferrer"` : '';

      return `
      <div class="v2-cert-wrapper" style="--float-dur: ${floatDur}; --float-delay: ${floatDelay};">
        <${cardTag} ${hrefAttr} class="v2-cert-card">
          <div class="v2-cert-thumb">${thumb}</div>
          <div class="v2-cert-body">
            <p class="v2-cert-issuer">${safeVal(c.issuer)}</p>
            <h4 class="v2-cert-title" title="${escapeHtml(c.title)}">${escapeHtml(c.title)}</h4>
            <div class="v2-cert-bottom">
              <span class="v2-cert-date">${escapeHtml(c.date)}</span>
              <span class="v2-cert-view">VIEW &nearr;</span>
            </div>
          </div>
        </${cardTag}>
      </div>`;
    }).join('');

    let credlyHtml = '';
    if (C.credly && C.credly.visible) {
      const floatDur = '6s';
      const hrefAttr = (C.credly.url && C.credly.url !== '#') ? `href="${escapeHtml(C.credly.url)}" target="_blank" rel="noopener noreferrer"` : '';
      const tag = (C.credly.url && C.credly.url !== '#') ? 'a' : 'div';
      
      credlyHtml = `
      <div class="v2-cert-wrapper v2-credly-wrapper" style="--float-dur: ${floatDur};">
        <${tag} ${hrefAttr} class="v2-cert-card v2-credly-card">
          <div class="v2-credly-content">
            <h4 class="v2-credly-title">CREDLY</h4>
            <p class="v2-credly-subtitle">Verified Badges &amp; Credentials</p>
            <div class="v2-credly-visual">
               <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: rgba(201,169,110,0.8);"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <span class="v2-credly-view">VIEW PROFILE &nearr;</span>
          </div>
        </${tag}>
      </div>`;
    }

    certList.innerHTML = certsHtml + credlyHtml;
  }

  renderProjects();
  renderAchievements();
  renderExperience();
  renderCertifications();

  window.dispatchEvent(new CustomEvent('sectionsRendered'));

})(window.PORTFOLIO_CONFIG);
