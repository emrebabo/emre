const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const revealElements = document.querySelectorAll('.reveal');
const leadForm = document.querySelector('#lead-form');

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

if (leadForm) {
  const note = leadForm.querySelector('.form-note');

  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = leadForm.querySelector('#name')?.value?.trim() || '';
    const email = leadForm.querySelector('#email')?.value?.trim() || '';
    const message = leadForm.querySelector('#message')?.value?.trim() || '';

    const subject = encodeURIComponent(`New Inquiry from ${name || 'Website Visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:hello@opsalign.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    if (note) {
      note.textContent = 'Opening your mail app now. If it did not open, use the direct email button above.';
    }
  });
}
