const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const form = document.querySelector('.contact-form');
const formNote = document.querySelector('.form-note');

const updateHeaderOnScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 12);
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

document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));

if (form && formNote) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameField = form.querySelector('#name');
    formNote.textContent = `Thanks${nameField.value ? `, ${nameField.value}` : ''}! We'll reach out within one business day.`;
    form.reset();
  });
}
