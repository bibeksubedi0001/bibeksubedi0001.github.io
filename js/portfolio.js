(() => {
  'use strict';

  /* ==========================================================
     PORTFOLIO.JS — Dark Civil Engineering Theme
     Structural Truss Canvas + Full Interactivity
     ========================================================== */

  // ========== THEME TOGGLE ==========
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
    // Update canvas colors
    updateCanvasTheme(next);
  });

  // ========== CURSOR GLOW ==========
  const glow = document.getElementById('cursorGlow');
  if (glow && window.matchMedia('(hover:hover)').matches) {
    document.addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  }

  // ========== NAVBAR SCROLL ==========
  const navbar = document.getElementById('navbar');
  const backTop = document.getElementById('backTop');
  const sectionsList = document.querySelectorAll('.section, .hero');
  const navLinks = document.querySelectorAll('.nav-link');

  function onScroll() {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 60);
    backTop.classList.toggle('show', y > 500);
    let current = '';
    sectionsList.forEach(s => {
      if (y >= s.offsetTop - 200) current = s.id;
    });
    navLinks.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ========== MOBILE NAV ==========
  const navToggle = document.getElementById('navToggle');
  const navLinksEl = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinksEl.classList.toggle('open');
  });
  navLinksEl.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinksEl.classList.remove('open');
    });
  });

  // ========== TYPING ANIMATION ==========
  const typedEl = document.getElementById('typed');
  const words = [
    'Civil Engineer',
    'Data Analyst',
    'Content Creator',
    'IOE Entrance Mentor',
    'GIS Specialist',
    'Hydrological Modeler'
  ];
  let wordIdx = 0, charIdx = 0, deleting = false;

  function typeLoop() {
    const word = words[wordIdx];
    if (!deleting) {
      typedEl.textContent = word.substring(0, ++charIdx);
      if (charIdx === word.length) {
        setTimeout(() => { deleting = true; typeLoop(); }, 2200);
        return;
      }
      setTimeout(typeLoop, 75 + Math.random() * 40);
    } else {
      typedEl.textContent = word.substring(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        setTimeout(typeLoop, 350);
        return;
      }
      setTimeout(typeLoop, 35);
    }
  }
  typeLoop();

  // ========== SCROLL ANIMATIONS ==========
  const animEls = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  animEls.forEach(el => observer.observe(el));

  // ========== RESUME TABS ==========
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const tabEl = document.getElementById('tab-' + target);
      tabEl.classList.add('active');
      tabEl.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    });
  });

  // ========== YOUTUBE MODAL ==========
  const ytModal = document.getElementById('ytModal');
  const ytIframe = document.getElementById('ytIframe');
  document.querySelectorAll('.yt-thumb[data-video]').forEach(thumb => {
    thumb.addEventListener('click', () => {
      ytIframe.src = 'https://www.youtube.com/embed/' + thumb.dataset.video + '?autoplay=1';
      ytModal.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });
  function closeYTModal() {
    ytModal.hidden = true;
    ytIframe.src = '';
    document.body.style.overflow = '';
  }
  ytModal.querySelector('.yt-modal-close').addEventListener('click', closeYTModal);
  ytModal.addEventListener('click', e => { if (e.target === ytModal) closeYTModal(); });

  // ========== PHOTO LIGHTBOX ==========
  const lbEl = document.getElementById('galleryLightbox');
  const lbImg = lbEl.querySelector('.lb-img');
  const lbTitle = lbEl.querySelector('.lb-title');
  const lbDesc = lbEl.querySelector('.lb-desc');
  const galleryItems = document.querySelectorAll('.gallery-item');
  let lbIdx = 0;

  function openLightbox(idx) {
    lbIdx = idx;
    const item = galleryItems[idx];
    lbImg.src = item.querySelector('img').src;
    lbImg.alt = item.querySelector('h4').textContent;
    lbTitle.textContent = item.querySelector('h4').textContent;
    lbDesc.textContent = item.dataset.desc || '';
    lbEl.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() { lbEl.hidden = true; document.body.style.overflow = ''; }
  function lbNav(dir) {
    lbIdx = (lbIdx + dir + galleryItems.length) % galleryItems.length;
    openLightbox(lbIdx);
  }
  galleryItems.forEach((item, i) => item.addEventListener('click', () => openLightbox(i)));
  lbEl.querySelector('.lb-close').addEventListener('click', closeLightbox);
  lbEl.querySelector('.lb-prev').addEventListener('click', () => lbNav(-1));
  lbEl.querySelector('.lb-next').addEventListener('click', () => lbNav(1));
  lbEl.addEventListener('click', e => { if (e.target === lbEl) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (!lbEl.hidden) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lbNav(-1);
      if (e.key === 'ArrowRight') lbNav(1);
    }
    if (!ytModal.hidden && e.key === 'Escape') closeYTModal();
    if (certLbEl && !certLbEl.hidden) {
      if (e.key === 'Escape') closeCertLb();
      if (e.key === 'ArrowLeft') certLbNav(-1);
      if (e.key === 'ArrowRight') certLbNav(1);
    }
  });

  // ========== CERTIFICATE LIGHTBOX ==========
  const certLbEl = document.getElementById('certLightbox');
  if (certLbEl) {
    const certLbImg = certLbEl.querySelector('.lb-img');
    const certLbTitle = certLbEl.querySelector('.lb-title');
    const certLbDesc = certLbEl.querySelector('.lb-desc');
    const certCards = document.querySelectorAll('.cert-card');
    let certIdx = 0;

    function openCertLb(idx) {
      certIdx = idx;
      const card = certCards[idx];
      certLbImg.src = card.querySelector('img').src;
      certLbImg.alt = card.querySelector('h4').textContent;
      certLbTitle.textContent = card.querySelector('h4').textContent;
      const org = card.querySelector('.cert-org');
      certLbDesc.textContent = org ? org.textContent : '';
      certLbEl.hidden = false;
      document.body.style.overflow = 'hidden';
    }
    window.closeCertLb = function() { certLbEl.hidden = true; document.body.style.overflow = ''; };
    window.certLbNav = function(dir) {
      certIdx = (certIdx + dir + certCards.length) % certCards.length;
      openCertLb(certIdx);
    };
    certCards.forEach((card, i) => card.addEventListener('click', () => openCertLb(i)));
    certLbEl.querySelector('.lb-close').addEventListener('click', closeCertLb);
    certLbEl.querySelector('.lb-prev').addEventListener('click', () => certLbNav(-1));
    certLbEl.querySelector('.lb-next').addEventListener('click', () => certLbNav(1));
    certLbEl.addEventListener('click', e => { if (e.target === certLbEl) closeCertLb(); });
  }

  // ========== SMOOTH SCROLL ==========
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ==========================================================
     DYNAMIC STRUCTURAL TRUSS BACKGROUND (Hero Canvas)
     Animated structural wireframe with glowing nodes,
     beams, load arrows, and mouse interaction — dark theme.
     ========================================================== */
  const heroParticles = document.getElementById('heroParticles');
  if (!heroParticles) return;

  const canvas = document.createElement('canvas');
  heroParticles.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  let W, H, nodes = [], mouse = { x: -9999, y: -9999 };
  const NODE_COUNT = 60;
  const CONNECT_DIST = 170;
  const MOUSE_RADIUS = 210;

  // Theme-aware colors
  let BEAM_COLOR = [45, 156, 219];
  let NODE_COLOR = [45, 156, 219];
  let ORANGE = [30, 143, 208];
  let GRID_COLOR = 'rgba(45, 156, 219, 0.035)';
  let SUB_GRID_COLOR = 'rgba(45, 156, 219, 0.015)';
  let GRID_LINE_W = 0.5;

  function updateCanvasTheme(theme) {
    if (theme === 'light') {
      BEAM_COLOR = [24, 118, 168];
      NODE_COLOR = [24, 118, 168];
      ORANGE = [24, 118, 168];
      GRID_COLOR = 'rgba(24, 118, 168, 0.06)';
      SUB_GRID_COLOR = 'rgba(24, 118, 168, 0.025)';
    } else {
      BEAM_COLOR = [45, 156, 219];
      NODE_COLOR = [45, 156, 219];
      ORANGE = [30, 143, 208];
      GRID_COLOR = 'rgba(45, 156, 219, 0.035)';
      SUB_GRID_COLOR = 'rgba(45, 156, 219, 0.015)';
    }
  }
  // Apply saved theme to canvas on load
  if (savedTheme) updateCanvasTheme(savedTheme);

  function resize() {
    W = heroParticles.clientWidth;
    H = heroParticles.clientHeight;
    canvas.width = W;
    canvas.height = H;
  }
  window.addEventListener('resize', resize);
  resize();

  // Node class — structural joint
  class Node {
    constructor() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.baseRadius = Math.random() * 2.5 + 1.5;
      this.radius = this.baseRadius;
      this.pulse = Math.random() * Math.PI * 2;
      // Fixed support nodes at bottom
      this.fixed = Math.random() < 0.07 && this.y > H * 0.75;
      if (this.fixed) {
        this.vy = 0;
        this.vx = 0;
        this.y = H - 25 + Math.random() * 15;
        this.baseRadius = 3;
        this.radius = 3;
      }
    }
    update(t) {
      if (this.fixed) return;
      // Subtle pulsing
      this.pulse += 0.02;
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W) this.vx *= -1;
      if (this.y < 0 || this.y > H) this.vy *= -1;
      this.x = Math.max(0, Math.min(W, this.x));
      this.y = Math.max(0, Math.min(H, this.y));

      // Mouse repel
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_RADIUS && dist > 0) {
        const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 1.0;
        this.x += (dx / dist) * force;
        this.y += (dy / dist) * force;
      }
    }
  }

  function initNodes() {
    nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) nodes.push(new Node());
  }
  initNodes();

  let time = 0;
  function animate() {
    time++;
    ctx.clearRect(0, 0, W, H);

    // Blueprint grid
    ctx.strokeStyle = GRID_COLOR;
    ctx.lineWidth = 0.5;
    const gridSize = 50;
    for (let x = 0; x < W; x += gridSize) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += gridSize) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    // Sub-grid
    ctx.strokeStyle = SUB_GRID_COLOR;
    ctx.lineWidth = 0.3;
    for (let x = 0; x < W; x += 10) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += 10) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // Update nodes
    nodes.forEach(n => n.update(time));

    // Draw beams
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          const alpha = (1 - dist / CONNECT_DIST) * 0.2;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(${BEAM_COLOR[0]},${BEAM_COLOR[1]},${BEAM_COLOR[2]},${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
    }

    // Mouse beam connections (orange glow)
    nodes.forEach(n => {
      const dx = n.x - mouse.x;
      const dy = n.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_RADIUS) {
        const alpha = (1 - dist / MOUSE_RADIUS);
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(${ORANGE[0]},${ORANGE[1]},${ORANGE[2]},${alpha * 0.35})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        n.radius = n.baseRadius + alpha * 4;
      } else {
        n.radius = n.baseRadius;
      }
    });

    // Draw nodes
    nodes.forEach(n => {
      const glowSize = n.radius + 4 + Math.sin(n.pulse) * 1.5;

      // Outer glow
      const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowSize + 6);
      if (n.fixed) {
        grad.addColorStop(0, `rgba(${ORANGE[0]},${ORANGE[1]},${ORANGE[2]},0.25)`);
        grad.addColorStop(1, 'transparent');
      } else {
        grad.addColorStop(0, `rgba(${NODE_COLOR[0]},${NODE_COLOR[1]},${NODE_COLOR[2]},0.15)`);
        grad.addColorStop(1, 'transparent');
      }
      ctx.beginPath();
      ctx.arc(n.x, n.y, glowSize + 6, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Ring
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius + 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = n.fixed
        ? `rgba(${ORANGE[0]},${ORANGE[1]},${ORANGE[2]},0.4)`
        : `rgba(${NODE_COLOR[0]},${NODE_COLOR[1]},${NODE_COLOR[2]},0.2)`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Core
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
      ctx.fillStyle = n.fixed
        ? `rgba(${ORANGE[0]},${ORANGE[1]},${ORANGE[2]},0.7)`
        : `rgba(${NODE_COLOR[0]},${NODE_COLOR[1]},${NODE_COLOR[2]},0.45)`;
      ctx.fill();

      // Fixed support triangle
      if (n.fixed) {
        ctx.beginPath();
        ctx.moveTo(n.x - 9, n.y + 6);
        ctx.lineTo(n.x + 9, n.y + 6);
        ctx.lineTo(n.x, n.y + 16);
        ctx.closePath();
        ctx.fillStyle = `rgba(${ORANGE[0]},${ORANGE[1]},${ORANGE[2]},0.2)`;
        ctx.fill();
        ctx.strokeStyle = `rgba(${ORANGE[0]},${ORANGE[1]},${ORANGE[2]},0.4)`;
        ctx.lineWidth = 1;
        ctx.stroke();
        // Hatch marks under triangle
        for (let h = -8; h <= 8; h += 4) {
          ctx.beginPath();
          ctx.moveTo(n.x + h, n.y + 17);
          ctx.lineTo(n.x + h - 3, n.y + 21);
          ctx.strokeStyle = `rgba(${ORANGE[0]},${ORANGE[1]},${ORANGE[2]},0.2)`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    });

    // Distributed load arrows at top
    const arrowCount = Math.floor(W / 80);
    for (let i = 0; i < arrowCount; i++) {
      drawLoadArrow(40 + i * (W / arrowCount), 6, 30);
    }

    // Dimension line at bottom
    drawDimensionLine(50, H - 50, W - 50, H - 50);

    requestAnimationFrame(animate);
  }

  function drawLoadArrow(x, y, len) {
    ctx.strokeStyle = `rgba(${BEAM_COLOR[0]},${BEAM_COLOR[1]},${BEAM_COLOR[2]},0.06)`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + len);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x - 4, y + len - 7);
    ctx.lineTo(x, y + len);
    ctx.lineTo(x + 4, y + len - 7);
    ctx.strokeStyle = `rgba(${ORANGE[0]},${ORANGE[1]},${ORANGE[2]},0.1)`;
    ctx.lineWidth = 1.2;
    ctx.stroke();
  }

  function drawDimensionLine(x1, y1, x2, y2) {
    ctx.strokeStyle = `rgba(${BEAM_COLOR[0]},${BEAM_COLOR[1]},${BEAM_COLOR[2]},0.04)`;
    ctx.lineWidth = 0.8;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.setLineDash([]);
    // End ticks
    [x1, x2].forEach(x => {
      ctx.beginPath();
      ctx.moveTo(x, y1 - 5);
      ctx.lineTo(x, y1 + 5);
      ctx.strokeStyle = `rgba(${BEAM_COLOR[0]},${BEAM_COLOR[1]},${BEAM_COLOR[2]},0.06)`;
      ctx.lineWidth = 1;
      ctx.stroke();
    });
  }

  // Mouse tracking on hero
  heroParticles.parentElement.addEventListener('mousemove', e => {
    const rect = heroParticles.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  heroParticles.parentElement.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  window.addEventListener('resize', () => { resize(); initNodes(); });

  animate();

})();
