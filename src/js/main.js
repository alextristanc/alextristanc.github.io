// =====================================================================
// HELPERS E ÍCONOS
// =====================================================================
const $ = (id) => document.getElementById(id);

const ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
const dev = (path) => `${ICON}/${path}`;

// Íconos de línea (estilo Feather) usados como SVG inline
const I = {
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  sliders: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
  headset: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
  terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
  server: '<rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><line x1="6" y1="7" x2="6.01" y2="7"/><line x1="6" y1="17" x2="6.01" y2="17"/>',
  network: '<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4M5 16v-4h14v4"/>',
  globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  shield: '<path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  bulb: '<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2V18h6v-1.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  refresh: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.5 9a9 9 0 0 1 14.9-3.4L23 10M1 14l4.6 4.4A9 9 0 0 0 20.5 15"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  cap: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/><line x1="22" y1="10" x2="22" y2="16"/>',
  lang: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  db: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
  chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
};

// Convierte un ícono de línea en data-URI (color de acento)
const svgIcon = (inner) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#8b9cff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`
  );
const g = (name) => svgIcon(I[name]);

const DB_ICON = g("db"); // ícono por defecto si otro no carga
const onErr = `this.onerror=null;this.src='${DB_ICON}'`;

// =====================================================================
// DATOS (contenido del CV)
// =====================================================================
const projects = [
  {
    name: "AppealForge",
    meta: "Impact Forge Hackathon 2026 · Team of 4 · August 2026",
    desc: "AI-powered clinical appeals system.",
    bullets: ["Contributed to frontend development (TypeScript/React) and to the project's technical documentation."],
    stack: ["React","TypeScript","Vite","Tailwindcss","Python","Docker","AI",],
  },
  {
    name: "PíldHora",
    meta: "Feria Mexicana de Ciencias e Ingenierías (FEMECI SLP) · Team of 5 · October 2026",
    desc: "Smart Pill Organizer.",
    bullets: ["Contributed to hardware integration and ESP32-C3 firmware development, implementing Wi-Fi communication, audible alerts, and physical-button input handling."],    
    stack: ["ESP32-C3 SuperMini", "C++", "Arduino", "Firebase", "JavaScript", "HTML5", "CSS3"],
  },
  {
    name: "StudyFitness",
    meta: "Team of 3 · May 2026",
    desc: "Educational health and exercise app.",
    bullets: [
      "Implemented role lookup in PostgreSQL/Supabase and session redirection for user and administrator profiles.",
      "Developed a maze game and answer-selection mechanics with scoring, timer and result persistence via JDBC.",
    ],
    stack: ["Java Swing", "PostgreSQL", "Supabase"],
  },
  {
    name: "Laboratory reservation web system",
    meta: "Team of 3 · May 2026",
    desc: "Web system to manage laboratory reservations.",
    bullets: [
      "Designed the MySQL database schema for user management and laboratory reservations.",
      "Developed the complete Coordination module, including its frontend and CRUD functionality for managing system records.",
      "Built the base frontend layout for the User, Teacher, and Lab Technician roles, and implemented input sanitization and Google reCAPTCHA across all four roles.",
    ],
    stack: ["PHP", "MySQL", "Bootstrap", "Google reCAPTCHA"],    
  },
];

// Tecnología usada en proyectos → ícono (si falta, se usa DB_ICON)
const techIcons = {
  TypeScript: dev("typescript/typescript-original.svg"),
  React: dev("react/react-original.svg"),
  "ESP32-C3 SuperMini": g("chip"),
  "C++": dev("cplusplus/cplusplus-original.svg"),
  Arduino: dev("arduino/arduino-original.svg"),
  JavaScript: dev("javascript/javascript-original.svg"),
  HTML5: dev("html5/html5-original.svg"),
  CSS3: dev("css3/css3-original.svg"),
  "Java Swing": dev("java/java-original.svg"),
  PostgreSQL: dev("postgresql/postgresql-original.svg"),
  Supabase: dev("supabase/supabase-original.svg"),
  PHP: dev("php/php-original.svg"),
  MySQL: dev("mysql/mysql-original.svg"),
  Bootstrap: dev("bootstrap/bootstrap-original.svg"),
  "Google reCAPTCHA": g("shield"),
  // --- Nuevos íconos para AppealForge ---
  Vite: dev("vitejs/vitejs-original.svg"),
  "Tailwindcss": dev("tailwindcss/tailwindcss-original.svg"),
  FastAPI: dev("fastapi/fastapi-original.svg"),
  Python: dev("python/python-original.svg"),
  Docker: dev("docker/docker-original.svg"),
  AI: "https://img.icons8.com/?size=100&id=POBc2SrrhhnF&format=png&color=000000",
  
};

const tech = [
  ["Java", "java/java-original.svg"],
  ["Supabase", "supabase/supabase-original.svg"],
  ["Tailwindcss", "tailwindcss/tailwindcss-original.svg"],
  ["Docker", "docker/docker-original.svg"],
  ["PostgreSQL", "postgresql/postgresql-original.svg"],    
  ["HTML5/CSS3", "html5/html5-original.svg"],
  ["JavaScript", "javascript/javascript-original.svg"],
  ["PHP", "php/php-original.svg"],  
  ["C", "c/c-original.svg"],
  ["C++","cplusplus/cplusplus-original.svg"],
  
];

const skills = [
  { title: "Web development", icon: "code", items: [
    ["Frontend & backend", g("code")], ["Full-stack web apps", g("layers")], ["Responsive web design", g("monitor")],
    ["Database design & SQL", DB_ICON], ["Git & GitHub", dev("git/git-original.svg")],
  ]},
  { title: "Support & infrastructure", icon: "server", items: [
    ["Troubleshooting", g("wrench")], ["Install & config", g("sliders")], ["On-site & remote support", g("headset")],
    ["Windows", dev("windows8/windows8-original.svg")], ["Linux", dev("linux/linux-original.svg")],
    ["SSH", g("terminal")], ["Virtualization", g("server")],
  ]},
  { title: "Networking & security", icon: "network", items: [
    ["Networking fundamentals", g("network")], ["IPv4", g("globe")], ["Connectivity", g("globe")],
    ["Network security", g("shield")], ["Vulnerability assessment", g("search")],
  ]},
  { title: "Soft skills", icon: "users", items: [
    ["Assertive communication", g("chat")], ["Problem solving", g("bulb")], ["Teamwork", g("users")],
    ["Adaptability", g("refresh")], ["Proactivity", g("zap")],
  ]},
];

const certs = [
  {
    name: "Cisco Certified Support Technician IT Support (CCST)",
    issuer: "Cisco",
    base: "linear-gradient(135deg, #e8f6fd 0%, #cdeafa 100%)",
    accent: "#049fd9",
    tint: "#055a7c",
    deco: "repeating-linear-gradient(90deg, rgba(4,159,217,.28) 0 2px, transparent 2px 14px)",
    badge: "5319e45b-7bec-4246-8a64-df3bfcb67d46",
  },
  {
    name: "Microsoft Office Specialist Excel Expert (Office 2019)",
    issuer: "Microsoft",
    base: "linear-gradient(135deg, #e9f8ef 0%, #cdeedb 100%)",
    accent: "#21a366",
    tint: "#0b5f3a",
    deco: "linear-gradient(rgba(33,163,102,.28) 1px, transparent 1px) 0 0/24px 24px, linear-gradient(90deg, rgba(33,163,102,.28) 1px, transparent 1px) 0 0/24px 24px",
    badge: "b810250b-1aa8-4b60-9539-a13c9faae5f1",
  },
  {
    name: "IT Specialist Java",
    issuer: "Certiport/Pearson VUE",
    base: "linear-gradient(135deg, #fff3df 0%, #ffe0b0 100%)",
    accent: "#f58a07",
    tint: "#7a4200",
    deco: "radial-gradient(circle at 100% 0%, rgba(245,138,7,.4), transparent 65%)",
    badge: "2dc4acce-e246-40c3-a2dd-d2926725a89f",
  },
  {
    name: "IT Specialist HTML and CSS",
    issuer: "Certiport/Pearson VUE",
    base: "linear-gradient(135deg, #eef0ff 0%, #dcdffc 100%)",
    accent: "#4f46e5",
    tint: "#312e81",
    deco: "radial-gradient(circle at 100% 0%, rgba(227,79,38,.3), transparent 55%), radial-gradient(circle at 100% 100%, rgba(38,77,228,.3), transparent 55%)",
    badge: "360e20dc-37ba-43e8-b09a-86b73d98e586",
  },
];
const langs = ["Spanish (native)", "English (intermediate)"];

// =====================================================================
// RENDER
// =====================================================================

// ---- Core technologies ----
$("tech-grid").innerHTML = tech
  .map(
    ([name, path]) => `
  <div class="reveal group rounded-2xl bg-ink p-1.5 shadow-lg shadow-black/40">
    <div class="flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border border-line transition group-hover:border-accent group-hover:-translate-y-0.5">
      <img src="${dev(path)}" alt="" loading="lazy" onerror="${onErr}" class="h-8 w-8 sm:h-10 sm:w-10" />
      <span class="text-xs sm:text-sm">${name}</span>
    </div>
  </div>`
  )
  .join("");

// ---- Projects ----
const techChip = (name) => `
  <span class="inline-flex items-center gap-2 rounded-full border border-line bg-ink py-1.5 pl-2 pr-3.5 text-xs text-white/90 transition group-hover:border-accent/60">
    <img src="${techIcons[name] || DB_ICON}" alt="" loading="lazy" onerror="${onErr}" class="h-4 w-4 object-contain" />
    ${name}
  </span>`;

$("projects-list").innerHTML = projects
  .map((p) => {
    const tag = p.url ? "a" : "div";
    const attrs = p.url ? `href="${p.url}" target="_blank" rel="noopener"` : "";
    return `
  <${tag} ${attrs} class="reveal group block rounded-3xl border border-line bg-panel p-8 transition hover:-translate-y-1 hover:border-accent">
    <h3 class="text-2xl font-semibold">${p.name}</h3>
    <p class="mt-1 text-sm text-muted">${p.meta}</p>
    <p class="mt-4">${p.desc}</p>
    <ul class="mt-3 grid gap-2 text-muted list-disc pl-5">${p.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
    <div class="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
      ${p.stack.map(techChip).join("")}
    </div>
  </${tag}>`;
  })
  .join("");

// ---- Skills ----
const skillChip = ([name, src]) => `
  <span class="inline-flex items-center gap-2 rounded-full border border-line bg-panel py-1.5 pl-2 pr-3.5 text-sm transition hover:border-accent/60">
    <img src="${src}" alt="" loading="lazy" onerror="${onErr}" class="h-4 w-4 object-contain" />
    ${name}
  </span>`;

$("skills-list").innerHTML = skills
  .map(
    (s) => `
  <div class="reveal rounded-3xl border border-line bg-ink p-6 transition hover:border-accent/60">
    <div class="flex items-center gap-3">
      <span class="grid h-11 w-11 place-items-center rounded-xl border border-line bg-panel">
        <img src="${g(s.icon)}" alt="" class="h-6 w-6" />
      </span>
      <h3 class="text-xl font-semibold">${s.title}</h3>
    </div>
    <div class="mt-5 flex flex-wrap gap-2">${s.items.map(skillChip).join("")}</div>
  </div>`
  )
  .join("");

// ---- Education: logo de la universidad (si falta, birrete) ----
const eduImg = $("edu-icon");
eduImg.onerror = () => {
  eduImg.onerror = null;
  eduImg.src = g("cap");
  eduImg.classList.replace("object-cover", "object-contain");
  eduImg.classList.add("p-4");
};
eduImg.src = "assets/logos/upslp.png";

// ---- Certifications ----
const fade = "mask-image:linear-gradient(to left,#000,transparent 75%);-webkit-mask-image:linear-gradient(to left,#000,transparent 75%)";

$("certs").innerHTML = certs
  .map(
    (c) => `
  <div class="reveal group relative overflow-hidden rounded-2xl p-6 pl-8 text-ink shadow-xl shadow-black/50 ring-1 ring-black/10 transition duration-300 hover:-translate-y-1"
       style="background:${c.base}">
    <span class="absolute inset-y-0 left-0 w-1.5" style="background:${c.accent}"></span>
    <span class="pointer-events-none absolute inset-0 opacity-80 transition duration-300 group-hover:opacity-100" style="background:${c.deco};${fade}"></span>
    <div class="relative">
      <p class="text-lg font-semibold leading-snug tracking-tight">${c.name}</p>
      <div class="mt-4 flex flex-wrap items-center gap-2">
        <span class="inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide text-white"
              style="background:${c.tint}">${c.issuer}</span>
        <a href="https://www.credly.com/badges/${c.badge}/public_url" target="_blank" rel="noopener"
           class="inline-flex items-center gap-1.5 rounded-full border border-ink/40 px-3 py-1 text-xs font-semibold text-ink transition hover:border-ink hover:bg-ink/10 focus-visible:ring-2 focus-visible:ring-ink">
          Verify on Credly <span aria-hidden="true">↗</span>
        </a>
      </div>      
    </div>
  </div>`
  )
  .join("");

// ---- Languages ----
$("langs").innerHTML = langs
  .map((l) => {
    const isEs = l.toLowerCase().includes("spanish") || l.toLowerCase().includes("español");
    const isEn = l.toLowerCase().includes("english") || l.toLowerCase().includes("inglés");

    // México: Gradiente Verde / Blanco / Rojo (Fondo claro con texto oscuro para máximo contraste)
    const esClass = "border-emerald-400 bg-gradient-to-r from-emerald-200 via-stone-100 to-rose-200 text-slate-900 font-medium shadow-sm hover:scale-105";

    // USA / UK: Gradiente Azul / Blanco / Rojo (Fondo claro con texto oscuro para máximo contraste)
    const enClass = "border-blue-400 bg-gradient-to-r from-blue-200 via-slate-100 to-rose-200 text-slate-900 font-medium shadow-sm hover:scale-105";

    const styleClass = isEs ? esClass : isEn ? enClass : "border-line bg-panel text-white";

    return `
  <span class="reveal inline-flex items-center gap-2 rounded-full border ${styleClass} px-4 py-2 transition-transform duration-200">
    ${l}
  </span>`;
  })
  .join("");

// ---- Footer ----
$("year").textContent = new Date().getFullYear();

// =====================================================================
// COMPORTAMIENTO
// =====================================================================
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---- Aparición al hacer scroll ----
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// ---- Cursor parpadeante ----
if (!reduceMotion) {
  const cursor = $("cursor");
  setInterval(() => (cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0"), 550);
}

// ---- Nav: línea que indica la sección actual ----
const navLinks = [...document.querySelectorAll(".nav-link")];
const navSections = ["home", "projects", "skills", "education", "contact"]
  .map($)
  .filter(Boolean);

function updateNav() {
  const marker = window.innerHeight * 0.35;
  let current = navSections[0];
  for (const s of navSections) {
    if (s.getBoundingClientRect().top <= marker) current = s;
  }
  navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${current.id}`));
}

window.addEventListener("scroll", updateNav, { passive: true });
window.addEventListener("resize", updateNav);
updateNav();

// ---- Copiar correo ----
const copyBtn = $("copy-email");
const copyTip = $("copy-tip");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyBtn.dataset.email);
    copyTip.textContent = "Copied!";
  } catch {
    copyTip.textContent = copyBtn.dataset.email; // el navegador bloqueó el portapapeles
  }
  copyTip.classList.add("opacity-100");
  setTimeout(() => {
    copyTip.textContent = "Email";
    copyTip.classList.remove("opacity-100");
  }, 1800);
});

// ---- Formulario de contacto (abre el cliente de correo) ----
const form = $("contact-form");
const formStatus = $("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  if (!d.name.trim() || !/^\S+@\S+\.\S+$/.test(d.email) || !d.message.trim()) {
    formStatus.textContent = "Enter your name, a valid email and a message.";
    formStatus.className = "text-sm text-red-400 min-h-5";
    return;
  }
  const subject = encodeURIComponent(`Portfolio contact - ${d.name}`);
  const body = encodeURIComponent(`${d.message}\n\nReply to: ${d.email}`);
  window.location.href = `mailto:alextristanc@gmail.com?subject=${subject}&body=${body}`;
  formStatus.textContent = "Opening your email app…";
  formStatus.className = "text-sm text-muted min-h-5";
});