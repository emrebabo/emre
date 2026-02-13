const langButtons = document.querySelectorAll('[data-lang-btn]');
const langSections = document.querySelectorAll('[data-lang]');
const i18nNodes = document.querySelectorAll('[data-i18n]');
const savedLang = localStorage.getItem('asmLang') || 'de';

const uiTranslations = {
  de: {
    navHome: 'Startseite', navServices: 'Leistungen', navSecurity: 'Sicherheit', navCompany: 'Unternehmen', navContact: 'Kontakt',
    footerCompany: 'Unternehmen', footerLegal: 'Rechtliches', footerContact: 'Kontakt',
    footerSeat: 'Firmensitz: Sarajevo, Bosnien und Herzegowina · B2B Operations Partner · © 2026 ASM d.o.o.',
    send: 'Senden', sending: 'Wird gesendet…', formSuccess: 'Vielen Dank. Ihre Nachricht wurde übermittelt.', formError: 'Anfrage fehlgeschlagen.'
  },
  en: {
    navHome: 'Home', navServices: 'Services', navSecurity: 'Security', navCompany: 'Company', navContact: 'Contact',
    footerCompany: 'Company', footerLegal: 'Legal', footerContact: 'Contact',
    footerSeat: 'Head office: Sarajevo, Bosnia and Herzegovina · B2B Operations Partner · © 2026 ASM d.o.o.',
    send: 'Send', sending: 'Sending…', formSuccess: 'Thank you. Your message has been sent.', formError: 'Request failed.'
  },
  bs: {
    navHome: 'Početna', navServices: 'Usluge', navSecurity: 'Sigurnost', navCompany: 'Kompanija', navContact: 'Kontakt',
    footerCompany: 'Kompanija', footerLegal: 'Pravno', footerContact: 'Kontakt',
    footerSeat: 'Sjedište: Sarajevo, Bosna i Hercegovina · B2B Operations Partner · © 2026 ASM d.o.o.',
    send: 'Pošalji', sending: 'Slanje…', formSuccess: 'Hvala. Vaša poruka je poslana.', formError: 'Zahtjev nije uspio.'
  },
};

function applyLanguage(lang) {
  const dict = uiTranslations[lang] || uiTranslations.de;
  langSections.forEach((el) => el.classList.toggle('active', el.dataset.lang === lang));
  langButtons.forEach((btn) => btn.setAttribute('aria-pressed', btn.dataset.langBtn === lang ? 'true' : 'false'));
  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });
  const sendBtn = document.querySelector('[data-i18n="send"]');
  if (sendBtn) sendBtn.textContent = dict.send;
  document.documentElement.lang = lang;
  localStorage.setItem('asmLang', lang);
}

langButtons.forEach((btn) => btn.addEventListener('click', () => applyLanguage(btn.dataset.langBtn)));
applyLanguage(savedLang);

const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('.menu');
if (menuToggle && menu) menuToggle.addEventListener('click', () => menu.classList.toggle('show'));

const form = document.querySelector('#contact-form');
if (form) {
  const status = document.querySelector('#form-status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const lang = localStorage.getItem('asmLang') || 'de';
    status.textContent = uiTranslations[lang].sending;
    status.className = 'notice';

    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || uiTranslations[lang].formError);
      status.textContent = uiTranslations[lang].formSuccess;
      status.className = 'notice ok';
      form.reset();
    } catch (err) {
      status.textContent = err.message || uiTranslations[lang].formError;
      status.className = 'notice err';
    }
  });
}
