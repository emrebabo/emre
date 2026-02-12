const header = document.querySelector('.site-header');
const nav = document.querySelector('.site-nav');
const menuToggle = document.querySelector('.menu-toggle');

const setHeader = () => header && header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', setHeader, { passive: true });
setHeader();

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
}

const path = window.location.pathname.replace(/\/index\.html$/, '/');
document.querySelectorAll('.site-nav a').forEach((a) => {
  const href = a.getAttribute('href');
  if (!href) return;
  if (path === href || (href !== '/' && path.startsWith(href))) {
    a.classList.add('active');
    a.setAttribute('aria-current', 'page');
  }
});

const navWrap = document.querySelector('.nav-wrap');
if (navWrap && !document.querySelector('.lang-switch')) {
  const switcher = document.createElement('div');
  switcher.className = 'lang-switch';
  switcher.setAttribute('aria-label', 'Language switch');
  switcher.innerHTML = `
    <span class="globe" aria-hidden="true">🌐</span>
    <a href="/index.html?lang=de">DE</a>
    <a href="/index.html?lang=en">EN</a>
    <a href="/index.html?lang=bs">BA</a>
  `;
  navWrap.insertBefore(switcher, navWrap.querySelector('.site-nav'));

  const lang = new URLSearchParams(window.location.search).get('lang');
  if (lang) {
    switcher.querySelectorAll('a').forEach((el) => {
      if (el.getAttribute('href').endsWith(`lang=${lang}`)) el.classList.add('active');
    });
  }
}

const blocks = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  blocks.forEach((b) => io.observe(b));
} else {
  blocks.forEach((b) => b.classList.add('visible'));
}

const form = document.querySelector('#contact-form');
if (form) {
  const note = document.querySelector('.form-note');
  form.addEventListener('submit', () => {
    if (note) {
      note.textContent = 'Sending your message securely...';
    }
  });
}
