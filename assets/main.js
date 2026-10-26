/* Renders assets/content.js into the page and runs the interactions.
   Content edits belong in content.js, not here. */
(function () {
  "use strict";

  var S = window.SITE || {};
  var P = S.profile || {};
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var get = function (path) {
    return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, S);
  };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- icons ---------- */
  var ICONS = {
    profile: '<circle cx="10" cy="8" r="4"/><path d="M3 20c0-3.5 3-6 7-6 1.4 0 2.6.3 3.7.8"/><path d="M15 18l2 2 4-4"/>',
    sprout: '<path d="M12 21v-9"/><path d="M12 12C12 8 9 5 4 5c0 4 3 7 8 7z"/><path d="M12 14c0-4 3-7 8-7 0 4-3 7-8 7z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    handshake: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    funnel: '<path d="M3 4h18l-7 8v6l-4 2v-8z"/>',
    kanban: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 7v6M12 7v10M16 7v4"/>',
    spark: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 7l9 6 9-6"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    arrow: '<path d="M7 17L17 7M9 7h8v8"/>'
  };
  var BRAND = {
    linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z"/>',
    github: '<path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/>',
    whatsapp: '<path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.2 21.8l5-1.3A9.8 9.8 0 1 0 12 2.2zm0 17.8c-1.5 0-3-.4-4.3-1.2l-.3-.2-2.9.8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.7-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.7.3-.2.2-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.7 3.1.6.5-.1 1.4-.6 1.7-1.1.2-.6.2-1 .1-1.1l-.4-.2z"/>'
  };
  var icon = function (name) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.spark) + "</svg>"; };
  var brand = function (name) { return '<svg class="fill" viewBox="0 0 24 24" aria-hidden="true">' + BRAND[name] + "</svg>"; };

  var waLink = "https://wa.me/" + (P.whatsapp || "");
  var mailLink = "mailto:" + (P.email || "");

  /* ---------- simple bindings ---------- */
  $$("[data-c]").forEach(function (el) {
    var v = get(el.getAttribute("data-c"));
    if (typeof v === "string" && v) el.textContent = v;
  });

  $("#heroPipeline").innerHTML = (P.subHeadline || []).map(function (s) { return "<span>" + esc(s) + "</span>"; }).join("");

  if (P.cv) $("#cvBtn").setAttribute("href", P.cv);
  else $("#cvBtn").hidden = true;
  $("#waFloat").setAttribute("href", waLink);

  var setPhoto = function (fig, src, alt) {
    if (!src || !fig) return;
    fig.innerHTML = '<img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="' + (fig.id === "heroPhoto" ? "eager" : "lazy") + '">';
  };
  setPhoto($("#heroPhoto"), P.photo, P.name);
  setPhoto($("#aboutPhoto"), P.aboutPhoto || P.photo, P.name);

  var socialsHTML =
    '<a href="' + esc(P.linkedin) + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + brand("linkedin") + "</a>" +
    '<a href="' + esc(P.github) + '" target="_blank" rel="noopener" aria-label="GitHub">' + brand("github") + "</a>" +
    '<a href="' + esc(waLink) + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + brand("whatsapp") + "</a>" +
    '<a href="' + esc(mailLink) + '" aria-label="Email">' + icon("mail") + "</a>";
  $$("[data-socials]").forEach(function (el) { el.innerHTML = socialsHTML; });

  /* ---------- marquee of companies ---------- */
  var companies = (S.experience || [])
    .filter(function (j) { return j.type !== "Contract"; })
    .map(function (j) { return { name: j.company.replace(/\s*\(.*\)\s*/, ""), initials: j.initials }; });
  var marqueeItems = companies.map(function (c) {
    return '<span class="marquee__item"><b>' + esc(c.initials) + "</b>" + esc(c.name) + "</span>";
  }).join("");
  $("#marquee").innerHTML = marqueeItems + marqueeItems.replace(/class="marquee__item"/g, 'class="marquee__item" aria-hidden="true"');

  /* ---------- stats ---------- */
  $("#stats").innerHTML = (S.stats || []).map(function (s, i) {
    var cls = "stat reveal" + (s.feature ? " stat--feature" : "") + (s.text ? " stat--text" : "");
    var num = s.text
      ? esc(s.text)
      : esc(s.prefix || "") + '<span class="count" data-to="' + s.value + '">' + (reduceMotion ? s.value : 0) + "</span>" + esc(s.suffix || "") +
        (s.unit ? "<small>" + esc(s.unit) + "</small>" : "");
    return '<div class="' + cls + '" style="--d:' + (i * 0.06) + 's"><p class="stat__num">' + num + '</p><p class="stat__label">' + esc(s.label) + "</p></div>";
  }).join("");

  /* ---------- about ---------- */
  $("#aboutText").innerHTML = (S.about || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  var tags = function (arr) { return (arr || []).map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join(""); };
  $("#platforms").innerHTML = tags(S.platforms);
  $("#markets").innerHTML = tags(S.markets);

  /* ---------- journey ---------- */
  var J = S.journey || [];
  $("#journeyList").innerHTML = J.map(function (t, i) {
    var last = i === J.length - 1;
    return '<li><span class="journey__node" style="--d:' + (0.25 + i * 0.28).toFixed(2) + 's">' + String(i + 1).padStart(2, "0") +
      '</span><span class="journey__title">' + esc(t) + "</span>" + (last ? '<span class="journey__now">Now</span>' : "") + "</li>";
  }).join("");

  /* ---------- services ---------- */
  $("#servicesGrid").innerHTML = (S.services || []).map(function (s, i) {
    return '<article class="service reveal' + (s.feature ? " service--feature" : "") + '" style="--d:' + (i % 4) * 0.07 + 's">' +
      '<span class="service__icon">' + icon(s.icon) + "</span><h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p>" +
      (s.feature ? '<a class="service__link" href="#pitch-studio">Meet Pitch-Studio ' + icon("arrow") + "</a>" : "") +
      "</article>";
  }).join("");

  /* ---------- niches ---------- */
  var SPOTS = [
    ["l", 8, 34], ["r", 6, 34], ["l", 4, 68], ["r", 10, 0], ["l", 2, 0], ["r", 0, 17],
    ["l", 14, 17], ["l", 16, 51], ["r", 14, 51], ["r", 2, 68], ["l", 12, 85], ["r", 10, 85]
  ];
  $("#nicheCloud").innerHTML = (S.niches || []).map(function (n, i) {
    var sp = SPOTS[i % SPOTS.length];
    var rot = [-4, 3, -2, 4, -3, 2][i % 6];
    return '<li class="' + sp[0] + (n.strong ? " strong" : "") + '" style="--x:' + sp[1] + "%;--y:" + (sp[2] + Math.floor(i / SPOTS.length) * 4) + "%;--r:" + rot + "deg;--ad:" + (-i * 0.7) + 's">' +
      "<i>" + (n.strong ? "★" : "✦") + "</i>" + esc(n.name) + "</li>";
  }).join("");

  /* ---------- experience ---------- */
  $("#timeline").innerHTML = (S.experience || []).map(function (j) {
    var logo = j.logo ? '<img src="' + esc(j.logo) + '" alt="' + esc(j.company) + ' logo" loading="lazy">' : esc(j.initials);
    return '<li class="job reveal"><span class="job__logo" aria-hidden="' + (j.logo ? "false" : "true") + '">' + logo + "</span>" +
      '<div class="job__card"><div class="job__top"><h3>' + esc(j.role) + '</h3><span class="job__dates">' + esc(j.dates) + "</span></div>" +
      '<p class="job__meta"><b>' + esc(j.company) + "</b><span>" + esc(j.type) + "</span></p>" +
      "<ul>" + (j.points || []).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></div></li>";
  }).join("");

  /* ---------- achievements ---------- */
  $("#achievementsGrid").innerHTML = (S.achievements || []).map(function (a, i) {
    return '<article class="ach reveal" style="--d:' + i * 0.08 + 's"><p class="ach__big">' + esc(a.big) + "</p><p>" + esc(a.text) + "</p></article>";
  }).join("");

  /* ---------- process ---------- */
  var CURLS = [
    '<svg viewBox="0 0 92 70"><path d="M2 58C20 60 30 40 40 28c8-10 22-14 26-4 3 8-8 14-12 6-3-8 10-20 34-26"/><circle cx="2" cy="58" r="3.5"/><circle cx="88" cy="4" r="3.5"/></svg>',
    '<svg viewBox="0 0 92 70"><path d="M2 14c22-6 34 6 36 18 2 14-14 18-16 8-2-10 18-14 30-6 10 7 18 20 36 26"/><circle cx="2" cy="14" r="3.5"/><circle cx="88" cy="60" r="3.5"/></svg>'
  ];
  var ROT = [-3, 2.5, -1.5, 2, -2.5, 1.5];
  var TY = [16, 0, 22, 10, 0, 18];
  $("#processGrid").innerHTML = (S.process || []).map(function (p, i) {
    var curl = i % 3 !== 2 && i !== S.process.length - 1 ? '<span class="step__curl" aria-hidden="true">' + CURLS[i % 2] + "</span>" : "";
    return '<article class="step reveal" style="--rot:' + ROT[i % 6] + "deg;--ty:" + TY[i % 6] + "px;--d:" + (i % 3) * 0.1 + 's">' +
      '<span class="step__n">' + String(i + 1).padStart(2, "0") + "</span><h3>" + esc(p.title) + "</h3><p>" + esc(p.text) + "</p>" + curl + "</article>";
  }).join("");

  /* ---------- pitch-studio ---------- */
  var PS = S.pitchStudio || {};
  if (PS.status) $("#psStatus").textContent = PS.status;
  $("#psDesc").textContent = PS.description || "";
  $("#psMission").innerHTML = "<strong>Mission:</strong> " + esc(PS.mission || "");

  /* ---------- skills ---------- */
  $("#skillsGrid").innerHTML = (S.skills || []).map(function (g, i) {
    return '<article class="skill reveal" style="--d:' + (i % 3) * 0.07 + 's"><h3>' + esc(g.group) + "<span>" + g.items.length + "</span></h3><ul>" +
      g.items.map(function (t) { return '<li class="tag">' + esc(t) + "</li>"; }).join("") + "</ul></article>";
  }).join("");

  /* ---------- education ---------- */
  $("#eduList").innerHTML = (S.education || []).map(function (e) {
    var on = /progress/i.test(e.note || "");
    return '<li class="reveal"><span class="edu__title">' + esc(e.title) + '</span><span class="edu__place">' + esc(e.place) + "</span>" +
      '<span class="edu__note' + (on ? " on" : "") + '">' + (on ? '<i class="dot"></i>' : "") + esc(e.note || "") + "</span></li>";
  }).join("");

  /* ---------- testimonials ---------- */
  var T = S.testimonials || [];
  $("#testimonialsGrid").innerHTML = T.length
    ? T.map(function (t, i) {
        var av = t.photo ? '<img src="' + esc(t.photo) + '" alt="" loading="lazy">' : '<span class="quote__av"></span>';
        return '<figure class="quote reveal" style="--d:' + (i % 3) * 0.08 + 's"><span class="quote__mark" aria-hidden="true">“</span><p>' + esc(t.quote) +
          '</p><figcaption class="quote__who">' + av + "<div><strong>" + esc(t.name) + "</strong><span>" + esc(t.role) + "</span></div></figcaption></figure>";
      }).join("")
    : [0, 1, 2].map(function (i) {
        return '<div class="quote quote--ph reveal" style="--d:' + i * 0.08 + 's"><span class="quote__mark" aria-hidden="true">“</span>' +
          '<div aria-hidden="true"><span class="sk"></span><span class="sk"></span><span class="sk"></span></div>' +
          '<p class="quote__soon">Upwork &amp; LinkedIn reviews coming soon</p></div>';
      }).join("");

  /* ---------- contact ---------- */
  var ways = [
    { ic: icon("mail"), label: "Email", value: P.email, href: mailLink },
    { ic: brand("whatsapp"), label: "Phone / WhatsApp", value: P.phone, href: waLink, ext: true },
    { ic: brand("linkedin"), label: "LinkedIn", value: (P.linkedin || "").replace(/^https?:\/\/(www\.)?/, ""), href: P.linkedin, ext: true },
    { ic: brand("github"), label: "GitHub", value: (P.github || "").replace(/^https?:\/\/(www\.)?/, ""), href: P.github, ext: true }
  ];
  if (P.calendly) ways.push({ ic: icon("calendar"), label: "Book a call", value: "Pick a time on Calendly", href: P.calendly, ext: true });
  $("#contactWays").innerHTML = ways.map(function (w) {
    return '<a class="way" href="' + esc(w.href) + '"' + (w.ext ? ' target="_blank" rel="noopener"' : "") + '><span class="way__icon">' + w.ic +
      "</span><span><small>" + esc(w.label) + "</small><strong>" + esc(w.value) + '</strong></span><span class="way__arrow">' + icon("arrow") + "</span></a>";
  }).join("");
  $("#cService").insertAdjacentHTML("beforeend", (S.services || []).map(function (s) {
    return "<option>" + esc(s.title) + "</option>";
  }).join("") + "<option>Something else</option>");

  /* ---------- forms ---------- */
  var emailOk = function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); };
  var say = function (el, msg, err) { el.textContent = msg; el.classList.toggle("err", !!err); };
  var send = function (endpoint, data) {
    return fetch(endpoint, { method: "POST", headers: { Accept: "application/json" }, body: data })
      .then(function (r) { if (!r.ok) throw new Error(r.status); });
  };

  $("#contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target, msg = $("#contactMsg"), bad = [];
    ["name", "email", "service", "message"].forEach(function (n) {
      var el = f.elements[n], v = el.value.trim();
      var invalid = !v || (n === "email" && !emailOk(v));
      el.classList.toggle("invalid", invalid);
      if (invalid) bad.push(el);
    });
    if (bad.length) { bad[0].focus(); return say(msg, "Please fill in every field with a valid email.", true); }

    var d = { name: f.name.value.trim(), email: f.email.value.trim(), service: f.service.value, message: f.message.value.trim() };
    var endpoint = (S.forms || {}).contactEndpoint;
    if (endpoint) {
      say(msg, "Sending…");
      send(endpoint, new FormData(f))
        .then(function () { f.reset(); say(msg, "Thanks! Your message is on its way — I'll reply soon."); })
        .catch(function () { say(msg, "Couldn't send right now. Please email " + P.email + " directly.", true); });
    } else {
      var body = "Name: " + d.name + "\nEmail: " + d.email + "\nService: " + d.service + "\n\n" + d.message;
      window.location.href = mailLink + "?subject=" + encodeURIComponent("Enquiry: " + d.service) + "&body=" + encodeURIComponent(body);
      say(msg, "Opening your email app…");
    }
  });

  $("#waitlistForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target, msg = $("#waitlistMsg"), v = f.email.value.trim();
    if (!emailOk(v)) { f.email.focus(); return say(msg, "Please enter a valid email.", true); }
    var endpoint = (S.forms || {}).waitlistEndpoint;
    if (endpoint) {
      var fd = new FormData(f); fd.append("_subject", "Pitch-Studio waitlist");
      say(msg, "Joining…");
      send(endpoint, fd)
        .then(function () { f.reset(); say(msg, "You're on the list. I'll email you when Pitch-Studio opens."); })
        .catch(function () { say(msg, "Couldn't join right now. Please try again later.", true); });
    } else {
      window.location.href = mailLink + "?subject=" + encodeURIComponent("Pitch-Studio waitlist") + "&body=" + encodeURIComponent("Please add me to the Pitch-Studio waitlist: " + v);
      say(msg, "Opening your email app…");
    }
  });

  /* ---------- theme ---------- */
  var root = document.documentElement;
  var meta = $('meta[name="theme-color"]');
  var applyTheme = function (t) {
    root.dataset.theme = t;
    if (meta) meta.setAttribute("content", t === "light" ? "#ffffff" : "#0a0c09");
  };
  applyTheme(root.dataset.theme || "dark");
  $("#themeToggle").addEventListener("click", function () {
    var t = root.dataset.theme === "light" ? "dark" : "light";
    applyTheme(t);
    try { localStorage.setItem("theme", t); } catch (err) {}
  });

  /* ---------- nav ---------- */
  var nav = $("#nav"), burger = $("#burger"), menu = $("#mobileMenu");
  var closeMenu = function () { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
  burger.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  $$("a", menu).forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  var navLinks = $$(".nav__links a");
  var sections = navLinks.map(function (a) { return $(a.getAttribute("href")); }).filter(Boolean);
  if ("IntersectionObserver" in window) {
    var navIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { navIO.observe(s); });
  }

  /* ---------- counters ---------- */
  var count = function (el) {
    var to = +el.getAttribute("data-to"), t0 = null, dur = 1600;
    var step = function (t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  /* ---------- typing mock ---------- */
  var typeEl = $("#mockType");
  var TYPED = "Hi Sarah, I noticed your product pages load slowly on mobile and your best sellers sit below the fold. Here's how I'd fix both in week one: a lighter theme build, a reworked collection layout, and…";
  var typing = false;
  var typeLoop = function () {
    if (typing) return;
    typing = true;
    if (reduceMotion) { typeEl.textContent = TYPED; return; }
    var i = 0;
    (function tick() {
      typeEl.textContent = TYPED.slice(0, i++);
      if (i <= TYPED.length) setTimeout(tick, 22 + Math.random() * 30);
      else setTimeout(function () { typing = false; typeLoop(); }, 3500);
    })();
  };

  /* ---------- reveal on scroll ---------- */
  var onSeen = function (el) {
    el.classList.add("in");
    $$(".count", el).forEach(function (c) { if (!reduceMotion) count(c); });
    if (el.classList.contains("ps")) typeLoop();
  };
  var watch = $$(".reveal, .journey");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { onSeen(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    watch.forEach(function (el) { io.observe(el); });
  } else {
    watch.forEach(onSeen);
  }

  /* ---------- scroll: nav state + timeline fill ---------- */
  var tw = $(".timeline-wrap"), fill = $(".timeline__fill");
  var ticking = false;
  var onScroll = function () {
    ticking = false;
    nav.classList.toggle("is-scrolled", window.scrollY > 12);
    if (tw) {
      var r = tw.getBoundingClientRect();
      var h = Math.max(0, Math.min(window.innerHeight * 0.55 - r.top, r.height - 20));
      fill.style.setProperty("--fill", h + "px");
    }
  };
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();
})();
