const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const revealElements = document.querySelectorAll('.reveal');

const updateHeaderOnScroll = () => {
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 12);
  }
};

window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const currentPath = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach((link) => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((section) => observer.observe(section));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}
