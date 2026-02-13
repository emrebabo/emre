const header = document.querySelector('.site-header');
const nav = document.querySelector('.site-nav');
const menuToggle = document.querySelector('.menu-toggle');
const overlay = document.querySelector('.nav-overlay');

const setHeader = () => header && header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', setHeader, { passive: true });
setHeader();

const closeNav = () => {
  if (!nav || !menuToggle) return;
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  overlay?.classList.remove('open');
  document.body.style.overflow = '';
};

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    overlay?.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeNav));
  overlay?.addEventListener('click', closeNav);
  window.addEventListener('resize', () => { if (window.innerWidth > 980) closeNav(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });
}

const path = window.location.pathname;
document.querySelectorAll('.site-nav a').forEach((a) => {
  const href = a.getAttribute('href');
  if (!href) return;
  if (path === href || (href !== '/' && path.startsWith(href) && href.split('/').length > 2)) {
    a.classList.add('active');
    a.setAttribute('aria-current', 'page');
  }
});

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
