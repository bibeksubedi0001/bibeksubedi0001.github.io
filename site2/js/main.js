/* ===========================================================
   Cajal ink-on-paper — behaviour
   Theme, navigation, spike text, ink strokes, scroll reveals,
   project filtering, certificate lightbox, video modal.
   =========================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ---------- theme ---------- */
  $("#themeToggle").addEventListener("click", function () {
    var dark = root.classList.toggle("dark");
    try { localStorage.setItem("bs-theme", dark ? "dark" : "light"); } catch (e) { }
  });

  /* ---------- nav ---------- */
  var nav = $("#nav");
  var drawer = $("#navDrawer");
  var navToggle = $("#navToggle");

  window.addEventListener("scroll", function () {
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  }, { passive: true });

  navToggle.addEventListener("click", function () {
    var open = drawer.hidden;
    drawer.hidden = !open;
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.firstElementChild.firstElementChild.setAttribute("href", open ? "#i-close" : "#i-menu");
  });

  $$("#navDrawer a").forEach(function (a) {
    a.addEventListener("click", function () {
      drawer.hidden = true;
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.firstElementChild.firstElementChild.setAttribute("href", "#i-menu");
    });
  });

  // scrollspy
  var sections = $$("main section[id]");
  var navMap = {};
  $$('#navLinks a, #navDrawer a').forEach(function (a) {
    var id = a.getAttribute("href").slice(1);
    (navMap[id] = navMap[id] || []).push(a);
  });

  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var links = navMap[e.target.id];
        if (!links) return;
        if (e.isIntersecting) {
          $$(".is-active", nav).forEach(function (el) { el.classList.remove("is-active"); });
          links.forEach(function (l) { l.classList.add("is-active"); });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- spike text: an action potential runs through the letters ---------- */
  $$("[data-spike]").forEach(function (el) {
    var words = el.textContent.split(/(\s+)/);
    el.textContent = "";
    var chars = [];

    words.forEach(function (word) {
      if (/^\s+$/.test(word)) {
        el.appendChild(document.createTextNode(word));
        return;
      }
      var w = document.createElement("span");
      w.className = "st-w";
      word.split("").forEach(function (ch) {
        var c = document.createElement("span");
        c.className = "st-ch";
        c.textContent = ch;
        w.appendChild(c);
        chars.push(c);
      });
      el.appendChild(w);
    });

    if (reduced) return;

    var firing = false;
    el.addEventListener("pointerenter", function () {
      if (firing) return;
      firing = true;
      chars.forEach(function (c, i) {
        c.style.setProperty("--st-d", i * 26 + "ms");
        c.classList.remove("st-fire");
        void c.offsetWidth; // restart the animation
        c.classList.add("st-fire");
      });
      window.setTimeout(function () { firing = false; }, chars.length * 26 + 660);
    });
  });

  /* ---------- ink strokes: measure each path so it can draw itself in ---------- */
  $$(".stroke-draw").forEach(function (svg) {
    $$("path, polyline, circle", svg).forEach(function (p, i) {
      var len;
      try { len = p.getTotalLength(); } catch (e) { len = 600; }
      p.style.setProperty("--len", Math.ceil(len));
      p.style.animationDelay = i * 90 + "ms";
    });
  });

  /* ---------- scroll reveals ---------- */
  var revealTargets = $$(".fade-rise, .stroke-draw");

  if (reduced || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (el) { el.classList.add("is-inked"); });
  } else {
    var reveal = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-inked");
        obs.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });
    revealTargets.forEach(function (el) { reveal.observe(el); });
  }

  /* ---------- scroll progress ---------- */
  var bar = $("#progress");
  window.addEventListener("scroll", function () {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
  }, { passive: true });

  /* ---------- experience: gantt raster ---------- */
  // calendar runs 2021-01 to 2026-12, matching the year ticks below
  var GANTT_START = 2021 * 12;
  var GANTT_SPAN = 72;
  var ROLES = [
    ["Geo Lab research", "2025-05", null],
    ["CESS research wing", "2025-07", null],
    ["WorldLink CSR", "2025-01", null],
    ["IOE entrance mentor", "2021-01", null],
    ["MAPS vice president", "2024-12", "2025-12"],
    ["MAPS deputy secretary", "2023-12", "2024-12"],
    ["PDSC marketing", "2023-06", "2024-08"],
    ["Leo Club events", "2022-07", "2023-09"]
  ];

  var gantt = $("#gantt");
  if (gantt) {
    var pct = function (ym) {
      var p = ym.split("-");
      return ((+p[0] * 12 + (+p[1] - 1)) - GANTT_START) / GANTT_SPAN * 100;
    };
    var years = [2021, 2022, 2023, 2024, 2025, 2026];
    var ticks = years.map(function (y) { return (y * 12 - GANTT_START) / GANTT_SPAN * 100; });
    var gridlines = ticks.map(function (t) { return '<i style="left:' + t + '%"></i>'; }).join("");

    var html = '<div></div><div class="gantt-axis">' + years.map(function (y, i) {
      return '<span style="left:' + ticks[i] + '%">' + y + "</span>";
    }).join("") + "</div>";

    ROLES.forEach(function (r) {
      var on = r[2] === null;
      var left = pct(r[1]);
      var right = on ? 100 : pct(r[2]);
      html += '<span class="gantt-label' + (on ? " on" : "") + '">' + r[0] + "</span>" +
        '<div class="gantt-track">' + gridlines +
        '<div class="gantt-bar' + (on ? " on" : "") + '" style="left:' + left + "%;width:" + (right - left) + '%"></div>' +
        (on ? '<span class="gantt-cap" style="left:calc(100% - 5px)"></span>' : "") +
        "</div>";
    });

    gantt.innerHTML = html;
  }

  /* ---------- experience tabs ---------- */
  var tabs = $("#expTabs");
  if (tabs) {
    tabs.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-tab]");
      if (!btn) return;
      $$("[data-tab]", tabs).forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");

      $$(".tab-panel").forEach(function (panel) {
        panel.hidden = panel.id !== "tab-" + btn.dataset.tab;
      });
      // panels revealed after first paint still need their ink
      $$("#tab-" + btn.dataset.tab + " .fade-rise").forEach(function (el) {
        el.classList.add("is-inked");
      });
    });
  }

  /* ---------- overlay plumbing ---------- */
  var openOverlay = null;

  function showOverlay(el) {
    openOverlay = el;
    el.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function hideOverlay() {
    if (!openOverlay) return;
    openOverlay.hidden = true;
    if (openOverlay.id === "ytModal") $("#ytFrame").removeAttribute("src");
    openOverlay = null;
    document.body.style.overflow = "";
  }

  $$(".overlay").forEach(function (ov) {
    ov.addEventListener("click", function (e) {
      if (e.target === ov || e.target.closest("[data-close]")) hideOverlay();
    });
  });

  document.addEventListener("keydown", function (e) {
    if (!openOverlay) return;
    if (e.key === "Escape") { hideOverlay(); return; }
    if (openOverlay.id === "certLightbox") {
      if (e.key === "ArrowRight") stepLb(1);
      if (e.key === "ArrowLeft") stepLb(-1);
    }
  });

  /* ---------- image lightbox (certificates + figures) ---------- */
  var lbItems = [];
  var lbIndex = 0;

  function paintLb() {
    var it = lbItems[lbIndex];
    var img = $("#certImg");
    img.src = it.src;
    img.alt = it.title;
    $("#certTitle").textContent = it.title;
    $("#certOrg").textContent = it.note;
  }

  function stepLb(delta) {
    lbIndex = (lbIndex + delta + lbItems.length) % lbItems.length;
    paintLb();
  }

  function openLb(items, i) {
    lbItems = items;
    lbIndex = i;
    paintLb();
    showOverlay($("#certLightbox"));
  }

  var certItems = $$("#certGrid .cert-card").map(function (card, i) {
    card.addEventListener("click", function () { openLb(certItems, i); });
    return { src: card.dataset.src, title: card.dataset.title, note: card.dataset.org };
  });

  $("#certLightbox").querySelector("[data-prev]").addEventListener("click", function () { stepLb(-1); });
  $("#certLightbox").querySelector("[data-next]").addEventListener("click", function () { stepLb(1); });

  /* ---------- Fig. 1: microzonation walkthrough ---------- */
  var FIG = [
    ["Vs30 surface", "Borehole logs across the valley reduced to a 30 m shear-wave velocity surface."],
    ["NEHRP site class", "Classes assigned from Vs30 \u2014 C soft rock, D stiff soil, E soft soil."],
    ["Amplification", "Surface-to-bedrock ratio under Gorkha 2015, from non-linear 1D site response in OpenSees."],
    ["Surface PGA", "Peak ground acceleration at the surface, interpolated across the valley."],
    ["Predominant period", "The period at which each site responds hardest \u2014 what building height guidance turns on."]
  ];

  var fig = $("#fig1");
  if (fig) {
    var slides = $$(".fig-slide", fig);
    var rail = $("#figRail");
    var figIndex = 0;
    var figTimer = null;
    var LETTERS = "abcdefgh";

    var figItems = FIG.map(function (step, i) {
      return {
        src: slides[i].getAttribute("src") || slides[i].dataset.src,
        title: "Fig. 1" + LETTERS[i] + " \u2014 " + step[0],
        note: step[1]
      };
    });

    rail.innerHTML = FIG.map(function (step, i) {
      return '<li><button type="button" data-i="' + i + '" aria-label="Step ' + (i + 1) + ': ' + step[0] + '"></button></li>';
    }).join("");
    var railBtns = $$("button", rail);

    function loadSlide(i) {
      var s = slides[i];
      if (s && s.dataset.src) {
        s.src = s.dataset.src;
        delete s.dataset.src;
      }
    }

    function setStep(i) {
      figIndex = (i + slides.length) % slides.length;
      loadSlide(figIndex);
      loadSlide((figIndex + 1) % slides.length);   // stay one plate ahead

      slides.forEach(function (s, n) { s.classList.toggle("is-on", n === figIndex); });
      railBtns.forEach(function (b, n) { b.classList.toggle("is-on", n === figIndex); });

      $("#figNo").textContent = "Fig. 1" + LETTERS[figIndex];
      $("#figTitle").textContent = FIG[figIndex][0];
      $("#figNote").textContent = FIG[figIndex][1];
    }

    function play() {
      if (reduced || figTimer) return;
      figTimer = window.setInterval(function () { setStep(figIndex + 1); }, 4200);
    }

    function pause() {
      window.clearInterval(figTimer);
      figTimer = null;
    }

    rail.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      pause();
      setStep(+b.dataset.i);
    });

    $("#figStage").addEventListener("click", function () { openLb(figItems, figIndex); });

    fig.addEventListener("pointerenter", pause);
    fig.addEventListener("pointerleave", play);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) pause(); else play();
    });

    setStep(0);
    play();
  }

  /* ---------- video modal ---------- */
  $$("#ytGrid .yt-card").forEach(function (card) {
    card.addEventListener("click", function () {
      $("#ytFrame").src = "https://www.youtube-nocookie.com/embed/" + card.dataset.video + "?autoplay=1&rel=0";
      $("#ytTitle").textContent = card.dataset.title;
      showOverlay($("#ytModal"));
    });
  });

  /* ---------- footer year ---------- */
  $("#year").textContent = new Date().getFullYear();

  /* ---------- cursor instrument ----------
     A pointer-tracked oscilloscope: the buffer scrolls one sample
     per frame and an action potential is injected whenever the
     pointer crosses something interactive. */
  var fine = window.matchMedia("(pointer: fine)").matches;

  if (fine && !reduced) {
    var cv = $("#curCv");
    var tagEl = $("#curTag");
    var ctx = cv.getContext("2d");

    var W = 76, H = 30;
    var REST = 0.22;
    // one action potential: depolarising rise, repolarising fall, undershoot, recovery
    var AP = [0.35, 0.7, 1, 0.92, 0.62, 0.34, 0.14, 0.05, 0.08, 0.13, 0.17, 0.2, 0.22];

    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = W * dpr;
    cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var buf = new Array(W).fill(REST);
    var apAt = -1;               // index into AP while firing
    var px = 0, py = 0;          // pointer
    var cx = 0, cy = 0;          // eased instrument position
    var live = false, running = false;
    var ink = { accent: "#983c22", line: "rgba(34,28,20,.32)" };
    var inkDirty = true;

    function readInk() {
      var cs = getComputedStyle(root);
      ink.accent = cs.getPropertyValue("--accent").trim() || ink.accent;
      ink.line = cs.getPropertyValue("--line-strong").trim() || ink.line;
      inkDirty = false;
    }

    function fire() {
      if (apAt < 0) apAt = 0;
    }

    function frame() {
      if (!live) { running = false; return; }
      running = true;

      if (inkDirty) readInk();

      var v;
      if (apAt >= 0) {
        v = AP[apAt++];
        if (apAt >= AP.length) apAt = -1;
      } else {
        v = REST + (Math.random() - 0.5) * 0.02;
      }
      buf.shift();
      buf.push(v);

      cx += (px - cx) * 0.2;
      cy += (py - cy) * 0.2;
      cv.style.transform = "translate3d(" + (cx + 12) + "px," + Math.max(cy - 34, 4) + "px,0)";
      tagEl.style.transform = "translate3d(" + cx + "px," + cy + "px,0)";

      ctx.clearRect(0, 0, W, H);

      // resting baseline
      ctx.strokeStyle = ink.line;
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 3]);
      ctx.beginPath();
      var restY = Math.round(H - 2 - REST * (H - 4)) + 0.5;
      ctx.moveTo(0, restY);
      ctx.lineTo(W, restY);
      ctx.stroke();
      ctx.setLineDash([]);

      // the trace
      ctx.strokeStyle = ink.accent;
      ctx.lineWidth = 1.2;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.beginPath();
      for (var i = 0; i < W; i++) {
        var y = H - 2 - buf[i] * (H - 4);
        if (i === 0) ctx.moveTo(i, y); else ctx.lineTo(i, y);
      }
      ctx.stroke();

      // leading edge
      var headY = H - 2 - buf[W - 1] * (H - 4);
      ctx.fillStyle = ink.accent;
      ctx.beginPath();
      ctx.arc(W - 1, headY, 1.6, 0, Math.PI * 2);
      ctx.fill();

      var mv = Math.round(buf[W - 1] * 130 - 99);
      tagEl.textContent = (mv < 0 ? "\u2212" : "+") + Math.abs(mv) + " mV";

      requestAnimationFrame(frame);
    }

    function show() {
      if (live) return;
      live = true;
      root.classList.add("cursor-instrument");
      cv.classList.add("is-on");
      tagEl.classList.add("is-on");
      if (!running) requestAnimationFrame(frame);
    }

    function hide() {
      live = false;
      root.classList.remove("cursor-instrument");
      cv.classList.remove("is-on");
      tagEl.classList.remove("is-on");
    }

    document.addEventListener("pointermove", function (e) {
      if (e.pointerType !== "mouse") return;
      px = e.clientX;
      py = e.clientY;
      if (!live) { cx = px; cy = py; }
      show();
    }, { passive: true });

    document.addEventListener("pointerover", function (e) {
      if (e.target.closest && e.target.closest("a, button, .project-card, .cert-card, .yt-card, [data-spike]")) fire();
    }, { passive: true });

    document.addEventListener("pointerdown", fire, { passive: true });
    document.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);

    $("#themeToggle").addEventListener("click", function () { inkDirty = true; });
  }
})();
