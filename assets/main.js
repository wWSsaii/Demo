/* ============================================================
   王思羽 · 个人产品展示  —  渲染与交互
   数据源：data.json（运行时 fetch）
   ============================================================ */
(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // 文本转义，防止数据中的特殊字符破坏结构
  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const tagsHTML = (arr) =>
    (arr || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");

  const metricsHTML = (arr) =>
    (arr || [])
      .map(
        (m) =>
          `<div class="metric"><div class="metric__value">${esc(
            m.value
          )}</div><div class="metric__label">${esc(m.label)}</div></div>`
      )
      .join("");

  /* ---------------- 渲染：Hero / 简介 ---------------- */
  function renderHero(p) {
    const stats = (p.stats || [])
      .map(
        (s) =>
          `<div class="stat reveal" data-delay="${Math.min(
            (p.stats.indexOf(s) + 1),
            4
          )}"><div class="stat__value">${esc(s.value)}</div><div class="stat__label">${esc(
            s.label
          )}</div></div>`
      )
      .join("");

    const avatarHTML = p.avatar
      ? `<img class="avatar avatar--img reveal" src="${esc(p.avatar)}" alt="${esc(p.name)}" />`
      : `<div class="avatar reveal">${esc(p.name.charAt(0))}</div>`;
    $("#heroContent").innerHTML = `
      ${avatarHTML}
      <div class="reveal" data-delay="1">
        <h1 class="hero__name">${esc(p.name)}</h1>
        <p class="hero__title">${esc(p.title)}</p>
        <span class="badge">${esc(p.availability)}</span>
      </div>
      <p class="hero__summary reveal" data-delay="2">${esc(p.summary)}</p>
      <div class="hero__stats">${stats}</div>
    `;
  }

  /* ---------------- 渲染：项目 ---------------- */
  function mediaCover(media) {
    if (!media) return `<div class="card__media-placeholder">项目预览</div>`;
    if (media.type === "gallery") {
      const first = Array.isArray(media.src) ? media.src[0] : "";
      return `<img src="${esc(first)}" alt="项目预览" loading="lazy" />`;
    }
    if (media.type === "video") {
      return `<div class="card__media-placeholder">▶ 宣传视频</div>`;
    }
    return `<img src="${esc(media.src)}" alt="项目预览" loading="lazy" />`;
  }

  function renderProjects(projects) {
    const grid = $("#projectsGrid");
    grid.innerHTML = projects
      .map(
        (pr, i) => `
        <article class="card reveal" data-delay="${(i % 4) + 1}" data-id="${esc(
          pr.id
        )}" tabindex="0" role="button" aria-label="查看 ${esc(pr.name)}">
          <div class="card__media">
            ${mediaCover(pr.media)}
            <span class="card__period">${esc(pr.period)}</span>
            <span class="card__more">查看详情 →</span>
          </div>
          <div class="card__body">
            <h3 class="card__name">${esc(pr.name)}</h3>
            <p class="card__role">${esc(pr.role)}</p>
            <p class="card__desc">${esc(pr.description)}</p>
            <div class="card__tags">${tagsHTML(pr.tags)}</div>
            <div class="card__metrics">${metricsHTML(pr.metrics)}</div>
          </div>
        </article>`
      )
      .join("");

    // 点击 / 键盘打开灯箱
    $$(".card", grid).forEach((card) => {
      const open = () => openLightbox(projects.find((p) => p.id === card.dataset.id));
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
    });
  }

  /* ---------------- 渲染：技能 ---------------- */
  function renderSkills(skills) {
    const groups = (skills.groups || []).map(
      (g, i) => `
      <div class="skill-card reveal" data-delay="${(i % 4) + 1}">
        <div class="skill-card__head">
          <div class="skill-card__icon">${esc(g.category.charAt(0))}</div>
          <h3 class="skill-card__cat">${esc(g.category)}</h3>
        </div>
        <div class="skill-card__items">${tagsHTML(g.items)}</div>
      </div>`
    );
    $("#skillsGrid").innerHTML = groups.join("");
  }

  /* ---------------- 渲染：联系方式 ---------------- */
  function renderContact(c, profile) {
    const copyBtn = (text, label) =>
      `<button class="contact-card__copy" data-copy="${esc(text)}">复制</button>`;

    const cards = [
      {
        icon: "📱",
        label: "电话",
        value: c.phone,
        copy: c.phone,
      },
      {
        icon: "✉️",
        label: "邮箱",
        value: c.email,
        copy: c.email,
      },
      {
        icon: "🐙",
        label: "GitHub",
        value: c.github,
        copy: c.githubUrl,
        href: c.githubUrl,
      },
    ];

    const cardHTML = cards
      .map(
        (x) => `
        <div class="contact-card reveal">
          <div class="contact-card__icon">${x.icon}</div>
          <div class="contact-card__meta">
            <div class="contact-card__label">${esc(x.label)}</div>
            ${
              x.href
                ? `<a class="contact-card__value" href="${esc(
                    x.href
                  )}" target="_blank" rel="noopener">${esc(x.value)}</a>`
                : `<div class="contact-card__value">${esc(x.value)}</div>`
            }
          </div>
          <button class="contact-card__copy" data-copy="${esc(x.copy)}">复制</button>
        </div>`
      )
      .join("");

    $("#contactWrap").innerHTML = `
      <div class="contact__grid">${cardHTML}</div>
      <div class="contact__avail reveal">
        <span class="badge">${esc(c.availability)}</span>
        <span style="color:var(--muted);font-size:.92rem">期待 AI 产品 / 实习机会的合作与交流。</span>
      </div>`;

    // 复制交互
    $$(".contact-card__copy", $("#contactWrap")).forEach((btn) => {
      btn.addEventListener("click", async () => {
        const text = btn.dataset.copy;
        try {
          await navigator.clipboard.writeText(text);
        } catch (e) {
          const ta = document.createElement("textarea");
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand("copy"); } catch (_) {}
          document.body.removeChild(ta);
        }
        const old = btn.textContent;
        btn.textContent = "已复制 ✓";
        btn.classList.add("is-done");
        setTimeout(() => {
          btn.textContent = old;
          btn.classList.remove("is-done");
        }, 1600);
      });
    });
  }

  function renderFooter(text) {
    $("#footer").textContent = text || "© 2026 王思羽 · 个人产品展示";
  }

  /* ---------------- 灯箱 ---------------- */
  let lbState = { list: [], index: 0 };

  function mediaList(pr) {
    const m = pr.media;
    if (!m) return [];
    if (m.type === "gallery") {
      return (Array.isArray(m.src) ? m.src : [m.src]).map((s) => ({
        type: "image",
        src: s,
      }));
    }
    return [{ type: m.type, src: m.src }];
  }

  function renderStage() {
    const stage = $("#lightboxStage");
    const item = lbState.list[lbState.index];
    if (!item) return;
    if (item.type === "video") {
      stage.innerHTML = `<video src="${esc(item.src)}" controls autoplay playsinline></video>`;
    } else {
      stage.innerHTML = `<img src="${esc(item.src)}" alt="预览" />`;
    }

    // 画廊缩略图
    const bar = $("#lightboxBar");
    const pr = lbState.project;
    let thumbs = "";
    if (lbState.list.length > 1) {
      thumbs =
        `<div class="lightbox__thumbs">` +
        lbState.list
          .map(
            (it, i) =>
              `<button class="${
                i === lbState.index ? "is-active" : ""
              }" data-go="${i}"><img src="${esc(it.src)}" alt="缩略图" /></button>`
          )
          .join("") +
        `</div>`;
    }
    const hl = (pr.highlights || [])
      .map((h) => `<li>${esc(h)}</li>`)
      .join("");
    bar.innerHTML = `
      <h3>${esc(pr.name)}</h3>
      <p class="role">${esc(pr.role)} · ${esc(pr.period)}</p>
      <p>${esc(pr.description)}</p>
      <ul>${hl}</ul>
      ${thumbs}`;

    $$("[data-go]", bar).forEach((b) =>
      b.addEventListener("click", () => {
        lbState.index = Number(b.dataset.go);
        renderStage();
      })
    );
  }

  function openLightbox(pr) {
    lbState = { list: mediaList(pr), index: 0, project: pr };
    if (!lbState.list.length) return;
    const box = $("#lightbox");
    box.hidden = false;
    box.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    renderStage();
  }

  function closeLightbox() {
    const box = $("#lightbox");
    box.hidden = true;
    box.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    $("#lightboxStage").innerHTML = "";
  }

  function setupLightbox() {
    const box = $("#lightbox");
    $$("[data-close]", box).forEach((b) => b.addEventListener("click", closeLightbox));
    document.addEventListener("keydown", (e) => {
      if (box.hidden) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight" && lbState.list.length > 1) {
        lbState.index = (lbState.index + 1) % lbState.list.length;
        renderStage();
      }
      if (e.key === "ArrowLeft" && lbState.list.length > 1) {
        lbState.index = (lbState.index - 1 + lbState.list.length) % lbState.list.length;
        renderStage();
      }
    });
  }

  /* ---------------- 滚动渐显 ---------------- */
  function setupReveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---------------- 导航：滚动监听 / 汉堡 / 平滑滚动 ---------------- */
  function setupNav() {
    const nav = $("#nav");
    const toggle = $("#navToggle");
    const links = $("#navLinks");
    const navH = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--nav-h")
    ) || 64;

    // 滚动阴影 + 当前区块高亮
    const sections = ["hero", "projects", "skills", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const linkMap = {};
    $$("a", links).forEach((a) => {
      const id = a.getAttribute("href").slice(1);
      linkMap[id] = a;
    });

    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 10);
      let current = "";
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - navH - 20) current = sec.id;
      });
      Object.values(linkMap).forEach((a) => a.classList.remove("is-active"));
      if (linkMap[current]) linkMap[current].classList.add("is-active");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // 汉堡菜单
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // 平滑滚动（带吸顶偏移）
    $$("a[data-scroll]").forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href").slice(1);
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - navH + 1;
        window.scrollTo({ top: y, behavior: "smooth" });
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- 启动 ---------------- */
  async function init() {
    let data;
    try {
      const res = await fetch("data.json", { cache: "no-cache" });
      if (!res.ok) throw new Error("HTTP " + res.status);
      data = await res.json();
    } catch (err) {
      document.body.innerHTML =
        `<div style="max-width:640px;margin:12vh auto;padding:0 22px;font-family:sans-serif;color:#0f172a">` +
        `<h1>数据加载失败</h1>` +
        `<p>无法读取 <code>data.json</code>。请通过本地 HTTP 服务或 GitHub Pages 访问本页面，` +
        `<code>file://</code> 直接打开会被浏览器 CORS 策略拦截。</p>` +
        `<pre style="background:#f1f5f9;padding:12px;border-radius:8px;overflow:auto">${esc(
          String(err)
        )}</pre></div>`;
      return;
    }

    renderHero(data.profile);
    renderProjects(data.projects);
    renderSkills(data.skills);
    renderContact(data.contact, data.profile);
    renderFooter(data.footer);

    setupLightbox();
    setupNav();
    setupReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
