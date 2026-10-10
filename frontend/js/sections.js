/* ================================================================
   sections.js — All section behaviour: about, skills, projects,
   achievements, experience, certifications
   ================================================================

   ┌─────────────────────────────────────────────────────────────┐
   │  CONFIG — Personal Portfolio Information                   │
   └─────────────────────────────────────────────────────────────┘ */

window.PORTFOLIO_CONFIG = {

  // ── LINKS ──────────────────────────────────────────────────────
  resume:   '',
  email:    '',
  linkedin: '',
  github:   'https://github.com/aashnapatle',

  // ── PHOTO ──────────────────────────────────────────────────────
  photo: 'assets/photo.jpg',

  // ── PROJECTS ───────────────────────────────────────────────────
  projects: [
    {
      title:       'AIRQ — Air Quality Monitoring',
      badge:       'HACKATHON WINNING PROJECT (GROUP PROJECT)',
      role:        'Frontend Developer & Website Designer',
      roleNote:    'Focused on frontend development, UI design, and responsive layout in a collaborative group hackathon.',
      shortDesc:   'An interactive air-quality monitoring platform developed for NASA Space Apps Challenge 2025, designed to turn Earth and environmental data into accessible insights for healthier communities.',
      overview:    'AIRQ aims to bring environmental and air-quality information together in an interactive, accessible platform that helps users understand pollution conditions and environmental risks.',
      problem:     [
        'Environmental data is distributed across satellite, ground-sensor, and weather sources.',
        'People often lack accessible, localised air-quality insights.',
        'Existing tools can make it difficult to turn environmental data into actionable guidance.'
      ],
      solution:    [
        'An interactive dashboard for environmental and air-quality information.',
        'Integration of NASA Earth data and weather-related information.',
        'Air-quality alerts and visual insights.',
        'A foundation for predictive environmental-risk analysis.'
      ],
      features:    [
        'Air-quality dashboard and visualisations.',
        'Environmental and weather-data integration.',
        'Alerts and notifications.',
        'User-facing information and community features.',
        'Accessible presentation of environmental insights.'
      ],
      techStack:   ['Next.js', 'React', 'Tailwind CSS', 'NASA TEMPO API', 'Python'],
      liveDemo:    'https://airq-nasa.vercel.app/',
      github:      '',
      screenshot:  'assets/projects/airq.png',
    },
    {
      title:       'MediNutri AI+',
      role:        'Full-Stack Developer & Designer',
      roleNote:    'Designed and developed the application end-to-end using Next.js, TypeScript, Tailwind CSS, and Firebase.',
      shortDesc:   'MediNutri AI+ is an AI-assisted health and nutrition web application designed to help users understand their nutritional needs, monitor daily health metrics, and access personalised wellness guidance through a unified platform.',
      overview:    'MediNutri AI+ brings healthcare awareness, daily nutrition, and wellness tracking together in one application. Users can maintain a health profile, calculate BMI, track calorie intake, monitor hydration, and access AI-assisted nutrition guidance.',
      problem:     [
        'Managing daily nutrition and personal health information across separate tools can be confusing.',
        'Users need an accessible way to understand their health metrics, organise dietary information, and maintain consistent wellness habits.'
      ],
      solution:    [
        'MediNutri AI+ combines health-profile management, BMI calculation, calorie tracking, hydration monitoring, and nutrition guidance in a unified web experience.',
        'Shared application state helps connect relevant health information across the dashboard and tracking pages.'
      ],
      features:    [
        'Personal health profile and health-goal management.',
        'BMI calculator with category information.',
        'Daily calorie and meal tracking.',
        'Water intake and hydration progress monitoring.',
        'AI nutrition chat interface.',
        'Health Journey for tracking progress over time.',
        'Cycle tracking and related wellness guidance.',
        'Wellness and dietary information.',
        'Firebase authentication and cloud-based user data management.',
        'English and Hindi language support.'
      ],
      techStack:   ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase Authentication', 'Cloud Firestore'],
      liveDemo:    '',
      github:      'https://github.com/aashnapatle/MediNutri-AI',
      screenshot:  'assets/projects/medinutri.png',
    },
    {
      title:       'AlertIndia — Aadhaar Data Monitoring System',
      shortDesc:   'High-assurance transaction monitoring and anomaly detection system for nationwide biometric verification networks.',
      overview:    'AlertIndia safeguards large-scale citizen service verification pipelines with automated telemetry inspection, identifying suspicious authentication patterns and access anomalies across distributed access points.',
      problem:     'Large public data networks require robust real-time fraud detection and anomaly surveillance capable of processing massive transaction bursts without degrading civic service delivery.',
      solution:    'Engineered an automated monitoring platform that analyzes live verification streams, identifies statistical anomalies in authentication requests, and alerts operations teams in real time.',
      features:    [
        'Real-time biometric transaction stream surveillance',
        'Statistical anomaly & abuse pattern detection',
        'Incident alerting with centralized audit logging'
      ],
      techStack:   ['Python', 'FastAPI', 'Data Analysis', 'Cyber Security'],
      liveDemo:    '',
      github:      'https://github.com/aashnapatle/AlertIndia',
      screenshot:  'assets/projects/alertindia.png',
    },
    {
      title:       'SANKET — Sign Language Interpretation System',
      shortDesc:   'Real-time Indian Sign Language (ISL) recognition system translating visual hand gestures into text and audio.',
      overview:    'SANKET is an assistive communication initiative created to foster seamless two-way dialogue between the hearing/speech impaired community and general society using real-time computer vision.',
      problem:     'A pervasive communication barrier exists in education, healthcare, and public services for individuals who communicate primarily through sign language.',
      solution:    'Implemented an end-to-end vision pipeline utilizing landmark detection and sequence modeling to translate continuous hand gestures into natural language text and synthesized audio.',
      features:    [
        'Real-time multi-point hand landmark tracking',
        'Sign gesture sequence classification',
        'Low-latency inference optimized for edge devices'
      ],
      techStack:   ['Python', 'Machine Learning', 'Data Analysis'],
      liveDemo:    '',
      github:      '',
      screenshot:  'assets/projects/sanket.png',
    },
  ],

  // ── ACHIEVEMENTS (BEYOND THE CODE) ──────────────────────────────
  achievements: [
    {
      title: 'NASA SPACE APPS CHALLENGE',
      date: 'October 2024',
      description: 'Participated in the global hackathon, designing and prototyping AIRQ — an interactive air quality monitoring and satellite telemetry platform.',
      proof: '',
      linkedin: 'https://lnkd.in/p/dC8aXjEw',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"/></svg>'
    },
    {
      title: 'GOOGLE CLOUD ARCADE',
      date: '2024',
      description: 'Completed hands-on cloud architecture and engineering skill challenges across Google Cloud Platform services.',
      proof: '',
      linkedin: 'https://lnkd.in/p/dC8aXjEw',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="6" width="20" height="12" rx="4"/><path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"/></svg>'
    },
    {
      title: 'MICROSOFT CAMPUS VISIT',
      date: '2024',
      description: 'Industry exposure immersion exploring developer ecosystems, enterprise infrastructure, and engineering workflows.',
      proof: '',
      linkedin: 'https://lnkd.in/p/dC8aXjEw',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z"/></svg>'
    },
    {
      title: 'AICTE / IBM SKILLSBUILD INTERNSHIP',
      date: 'September 2024',
      description: 'Machine Learning & Applied AI Internship with BharatCares, building applied data science models and intelligent workflows.',
      proof: '',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>'
    },
    {
      title: 'VOID HACKS() 8.0 — OPERATION ABHEDYA-CHAKRA',
      date: 'March 2025',
      description: '36-hour offline hackathon at Jabalpur Engineering College (JEC). Served as Data Engineering & Performance Owner, architecting a high-throughput columnar ingestion and query engine with Polars, DuckDB, and Apache Parquet for accelerated transaction graph inspection.',
      proof: 'assets/projects/abhedya-chakra.png',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>'
    }
  ],

  // ── EXPERIENCE ──────────────────────────────────────────────────
  experience: [
    {
      role: 'Machine Learning & Applied AI Internship',
      org: 'AICTE | IBM SkillsBuild',
      desc: 'BharatCares',
      date: 'Completed — September 2024',
      certificate: '',
    }
  ],

  // ── CREDLY ──────────────────────────────────────────────────────
  credly: {
    visible: true,
    url: 'https://www.credly.com/users/aashna-patle'
  },

  // ── CERTIFICATIONS (9 UNIQUE + ACCURATE) ────────────────────────
  certifications: [
    {
      title: 'Applied Database Systems using Oracle AI Database – English',
      issuer: 'Oracle Academy',
      date: 'April 2026',
      document: 'assets/certificates/oracle-applied-database-ai.pdf',
      thumbnail: 'assets/certificates/thumbnails/oracle-applied-database-ai.png'
    },
    {
      title: 'Apply AI: Analyze Customer Reviews',
      issuer: 'Cisco Networking Academy',
      date: 'June 2026',
      document: 'assets/certificates/cisco-apply-ai.pdf',
      thumbnail: 'assets/certificates/thumbnails/cisco-apply-ai.png'
    },
    {
      title: 'C++ Essentials 1',
      issuer: 'Cisco Networking Academy',
      date: 'December 2025',
      document: 'assets/certificates/cisco-cpp-essentials-1.pdf',
      thumbnail: 'assets/certificates/thumbnails/cisco-cpp-essentials-1.png'
    },
    {
      title: 'Data Analytics Essentials',
      issuer: 'Cisco Networking Academy',
      date: 'June 2026',
      document: 'assets/certificates/cisco-data-analytics-essentials.pdf',
      thumbnail: 'assets/certificates/thumbnails/cisco-data-analytics-essentials.png'
    },
    {
      title: 'Data Science Essentials with Python',
      issuer: 'Cisco Networking Academy',
      date: 'July 2026',
      document: 'assets/certificates/cisco-data-science-essentials-python.pdf',
      thumbnail: 'assets/certificates/thumbnails/cisco-data-science-essentials-python.png'
    },
    {
      title: 'Introduction to Modern AI',
      issuer: 'Cisco Networking Academy',
      date: 'June 2026',
      document: 'assets/certificates/cisco-intro-modern-ai.pdf',
      thumbnail: 'assets/certificates/thumbnails/cisco-intro-modern-ai.png'
    },
    {
      title: 'IT Essentials',
      issuer: 'Cisco Networking Academy',
      date: 'March 2025',
      document: 'assets/certificates/cisco-it-essentials.pdf',
      thumbnail: 'assets/certificates/thumbnails/cisco-it-essentials.png'
    },
    {
      title: 'Advanced MS Excel',
      issuer: 'Vijaylekh Skill Sharing Academy',
      date: '2024',
      document: 'assets/certificates/vijaylekh-advanced-excel.jpg',
      thumbnail: 'assets/certificates/thumbnails/vijaylekh-advanced-excel.jpg'
    },
    {
      title: 'Office Automation',
      issuer: 'Vijaylekh Skill Sharing Academy',
      date: '2024',
      document: 'assets/certificates/vijaylekh-office-automation.jpg',
      thumbnail: 'assets/certificates/thumbnails/vijaylekh-office-automation.jpg'
    }
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
    });
  }

  // ── HELPERS ────────────────────────────────────────────────────
  function safeVal(val) {
    if (!val || val.includes('<TODO')) return '';
    return escapeHtml(val);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  const techIcons = {
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
    'Firebase Authentication': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
    'Cloud Firestore': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
    'NASA TEMPO API': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
    'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    'Data Analysis': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
    'APIs': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#9C27B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
    'Machine Learning': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#8BC34A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 1 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
    'Cyber Security': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>'
  };

  function getTechTag(tech) {
    if (!tech || tech.trim() === '') return '';
    const icon = techIcons[tech];
    const iconImg = icon ? (icon.startsWith('<svg') ? icon : `<img src="${icon}" alt="${escapeHtml(tech)}" />`) : '';
    return `<span class="v2-proj-tech-pill">${iconImg} ${escapeHtml(tech)}</span>`;
  }

  // ── PROJECTS RENDER ────────────────────────────────────────────
  function renderProjects() {
    const projectsList = document.getElementById('projects-list');
    if (!projectsList) return;

    const floatDurs = ['7.5s', '6.8s', '7.2s', '6.5s'];
    const floatDelays = ['0s', '-2s', '-3.5s', '-1.5s'];
    const gridCols = ['1 / 7', '7 / 13', '1 / 7', '7 / 13'];

    function renderColContent(val) {
      if (!val) return '';
      if (Array.isArray(val)) {
        return `<ul class="v2-proj-info-list">${val.map(item => `<li style="color: #F8F5F0 !important; margin-bottom: 0.4rem; font-size: 0.86rem; line-height: 1.6;">${escapeHtml(item)}</li>`).join('')}</ul>`;
      }
      return `<p class="v2-proj-info-text" style="color: #F8F5F0 !important;">${safeVal(val)}</p>`;
    }

    const html = C.projects.map((p, i) => {
      const num = String(i + 1).padStart(2, '0');
      const tagsHtml = p.techStack.map(t => getTechTag(t)).join('');
      const featHtml = p.features.filter(f => f && f.trim() !== '').map(f => `<li style="color: #F8F5F0 !important; margin-bottom: 0.4rem; font-size: 0.86rem; line-height: 1.6;">${escapeHtml(f)}</li>`).join('');

      const badgeHtml = p.badge
        ? `<div class="v2-proj-achievement-badge"><svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" aria-hidden="true" style="flex-shrink:0;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><span>${escapeHtml(p.badge)}</span></div>`
        : '';

      const roleBannerHtml = p.role
        ? `<div class="v2-proj-role-banner"><span class="v2-proj-role-pill">${escapeHtml(p.role)}</span></div>`
        : '';

      const liveDemoBtn = (p.liveDemo && p.liveDemo !== '#')
        ? `<a href="${escapeHtml(p.liveDemo)}" class="v2-btn-solid" target="_blank" rel="noopener noreferrer">Live Demo &nearr;</a>`
        : '';

      const githubBtn = (p.github && p.github !== '#')
        ? `<a href="${escapeHtml(p.github)}" class="v2-btn-outline" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="margin-right:8px;"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>Source Code</a>`
        : '';

      const actionLinks = (liveDemoBtn || githubBtn)
        ? `<div class="v2-proj-links">${liveDemoBtn}${githubBtn}</div>`
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
                    ${badgeHtml}
                    <h3 class="v2-proj-title">${escapeHtml(p.title)}</h3>
                    ${roleBannerHtml}
                    ${p.shortDesc ? `<p class="v2-proj-desc">${safeVal(p.shortDesc)}</p>` : ''}
                  </div>
                  <div class="v2-proj-screenshot">
                    ${p.screenshot ? `<img src="${escapeHtml(p.screenshot)}" alt="${escapeHtml(p.title)}" loading="lazy" />` : '<div class="v2-screenshot-placeholder"><span>Image Preview</span></div>'}
                  </div>
                </div>
              </div>
              <div class="v2-proj-actions">
                ${actionLinks}
                <button class="v2-proj-expand-btn" aria-label="Toggle project details">+</button>
              </div>
            </div>
            <div class="v2-project-card-body" aria-hidden="true">
              <div class="v2-proj-body-inner">
                <div class="v2-proj-grid-body">
                  <div class="v2-proj-body-col">
                    ${p.overview ? `<h4 class="v2-proj-info-heading" style="color: #F3D9A4 !important;">Overview</h4><p class="v2-proj-info-text" style="color: #F8F5F0 !important;">${safeVal(p.overview)}</p>` : ''}
                  </div>
                  ${p.role ? `<div class="v2-proj-body-col">
                    <h4 class="v2-proj-info-heading" style="color: #F3D9A4 !important;">My Role</h4>
                    <p class="v2-proj-info-text" style="color: #F8F5F0 !important;"><strong>${escapeHtml(p.role)}</strong>${p.roleNote ? `<br/><span style="font-size:0.8rem; color:#D8CFC4; line-height:1.5; display:inline-block; margin-top:0.25rem;">${escapeHtml(p.roleNote)}</span>` : ''}</p>
                  </div>` : ''}
                  <div class="v2-proj-body-col">
                    ${p.problem ? `<h4 class="v2-proj-info-heading" style="color: #F3D9A4 !important;">Problem</h4>${renderColContent(p.problem)}` : ''}
                  </div>
                  <div class="v2-proj-body-col">
                    ${p.solution ? `<h4 class="v2-proj-info-heading" style="color: #F3D9A4 !important;">Solution</h4>${renderColContent(p.solution)}` : ''}
                  </div>
                  <div class="v2-proj-body-col" style="${p.role ? 'grid-column: 1 / -1;' : ''}">
                    <h4 class="v2-proj-info-heading" style="color: #F3D9A4 !important;">Features</h4>
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

    // Expand/collapse interactions
    projectsList.querySelectorAll('.v2-project-card-header').forEach((header) => {
      function toggleProject(e) {
        if (e && e.target.closest('a')) return;
        const card = header.parentElement;
        const expanded = card.classList.toggle('expanded');
        header.setAttribute('aria-expanded', String(expanded));
        const btn = header.querySelector('.v2-proj-expand-btn');
        if (btn) btn.textContent = expanded ? '−' : '+';

        const body = card.querySelector('.v2-project-card-body');
        if (expanded) {
          body.style.maxHeight = body.scrollHeight + 'px';
        } else {
          body.style.maxHeight = '0';
        }
      }
      header.addEventListener('click', toggleProject);
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleProject();
        }
      });
    });
  }

  // ── BEYOND THE CODE (MILESTONES) RENDER ─────────────────────────
  function renderAchievements() {
    const v2Journey = document.getElementById('v2-journey-container');
    if (!v2Journey || !C.achievements || !C.achievements.length) return;

    const positions = ['12%', '31%', '50%', '69%', '88%'];
    const floatDurs = ['5.4s', '6.1s', '5.8s', '6.5s', '5.7s'];
    const floatDels = ['0s', '-1.5s', '-3s', '-4.5s', '-2.2s'];

    let itemsHtml = '';
    C.achievements.forEach((ach, i) => {
      const isAbove = (i % 2 === 0);
      const posClass = isAbove ? 'v2-ms-above' : 'v2-ms-below';
      const num = String(i + 1).padStart(2, '0');

      const proofBtn = (ach.proof && ach.proof !== '#')
        ? `<a href="${escapeHtml(ach.proof)}" class="v2-btn-outline v2-ms-btn" target="_blank" rel="noopener noreferrer">VIEW PROOF &nearr;</a>`
        : '';

      const linkedinBtn = (ach.linkedin && ach.linkedin !== '#')
        ? `<a href="${escapeHtml(ach.linkedin)}" class="v2-ms-link" target="_blank" rel="noopener noreferrer" aria-label="View LinkedIn Post for ${escapeHtml(ach.title)}">
            <svg class="v2-ms-link-icon" viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <span>View LinkedIn Post &#x2197;</span>
          </a>`
        : '';

      itemsHtml += `
      <div class="v2-ms-item ${posClass}" style="left: ${positions[i]}; transition-delay: ${i * 0.15 + 0.2}s;">
        ${isAbove ? '' : '<div class="v2-ms-node"></div><div class="v2-ms-connector"></div>'}

        <div class="v2-ms-card-wrapper" style="--float-dur: ${floatDurs[i]}; --float-delay: ${floatDels[i]};">
          <div class="v2-ms-card">
            <div class="v2-ms-icon">${ach.icon || ''}</div>
            <div class="v2-ms-num">${num} &mdash;</div>
            <h4 class="v2-ms-title">${escapeHtml(ach.title)}</h4>
            ${ach.date ? `<p class="v2-ms-date">${safeVal(ach.date)}</p>` : ''}
            ${ach.description ? `<p class="v2-ms-desc">${safeVal(ach.description)}</p>` : ''}
            ${linkedinBtn}
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
    }, 2000);
  }

  // ── EXPERIENCE RENDER ──────────────────────────────────────────
  function renderExperience() {
    const expList = document.getElementById('experience-list');
    if (!expList || !C.experience || C.experience.length === 0) return;

    expList.innerHTML = C.experience.map(e => {
      const certBtn = (e.certificate && e.certificate !== '#')
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

  // ── CERTIFICATIONS RENDER ──────────────────────────────────────
  function renderCertifications() {
    const certList = document.getElementById('certifications-list');
    if (!certList || !C.certifications || C.certifications.length === 0) return;

    const certsHtml = C.certifications.map((c, i) => {
      const floatDur = (5.2 + (i % 3) * 0.7).toFixed(1) + 's';
      const floatDelay = '-' + ((i * 1.3) % 4.5).toFixed(1) + 's';

      const thumb = c.thumbnail
        ? `<img src="${escapeHtml(c.thumbnail)}" alt="${escapeHtml(c.title)} thumbnail" class="v2-cert-thumb-img" loading="lazy"/>`
        : '<div class="v2-cert-thumb-placeholder">CERT</div>';

      return `
      <div class="v2-cert-wrapper" style="--float-dur: ${floatDur}; --float-delay: ${floatDelay};">
        <div class="v2-cert-card" role="button" tabindex="0" data-cert-index="${i}" aria-label="View ${escapeHtml(c.title)} certificate">
          <div class="v2-cert-thumb">${thumb}</div>
          <div class="v2-cert-body">
            <p class="v2-cert-issuer">${safeVal(c.issuer)}</p>
            <h4 class="v2-cert-title" title="${escapeHtml(c.title)}">${escapeHtml(c.title)}</h4>
            <div class="v2-cert-bottom">
              <span class="v2-cert-date">${escapeHtml(c.date)}</span>
              <span class="v2-cert-view">VIEW &nearr;</span>
            </div>
          </div>
        </div>
      </div>`;
    }).join('');

    let credlyHtml = '';
    if (C.credly && C.credly.visible) {
      const floatDur = '6s';
      const hrefAttr = (C.credly.url && C.credly.url !== '#') ? `href="${escapeHtml(C.credly.url)}" target="_blank" rel="noopener noreferrer"` : '';
      const tag = (C.credly.url && C.credly.url !== '#') ? 'a' : 'div';

      credlyHtml = `
      <div class="v2-cert-wrapper v2-credly-wrapper" style="--float-dur: ${floatDur};">
        <${tag} ${hrefAttr} class="v2-cert-card v2-credly-card" aria-label="View Credly Profile">
          <div class="v2-credly-content">
            <h4 class="v2-credly-title">CREDLY</h4>
            <p class="v2-credly-subtitle">Verified Badges &amp; Credentials</p>
            <div class="v2-credly-visual">
               <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: rgba(201,169,110,0.8);"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <span class="v2-credly-view">VIEW CREDLY PROFILE &nearr;</span>
          </div>
        </${tag}>
      </div>`;
    }

    certList.innerHTML = certsHtml + credlyHtml;

    // Attach click and keyboard listeners to certificate cards
    certList.querySelectorAll('.v2-cert-card[data-cert-index]').forEach(card => {
      const idx = parseInt(card.getAttribute('data-cert-index'), 10);
      const certData = C.certifications[idx];
      const handleOpen = () => {
        if (typeof window.openCertModal === 'function') {
          window.openCertModal(certData);
        }
      };
      card.addEventListener('click', handleOpen);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      });
    });
  }

  // ── INITIALISE ─────────────────────────────────────────────────
  renderProjects();
  renderAchievements();
  renderExperience();
  renderCertifications();

  window.dispatchEvent(new CustomEvent('sectionsRendered'));

})(window.PORTFOLIO_CONFIG);
