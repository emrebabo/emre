# ASM Services Website

Multi-page, trilingual (DE/EN/BS) corporate website for ASM Services, built with semantic HTML, modern CSS, and lightweight JavaScript.

## Pages
- Home
- Services
- Security & Compliance
- Company (About + Careers + job detail)
- Contact (working mail form)
- Privacy Policy
- Impressum

## Run locally
```bash
python3 -m http.server 8080
```

## Contact form
- Front-end form posts JSON to `api/contact.php`.
- On PHP-enabled hosting, configure recipient in `api/contact.php`.
- WordPress-ready: replace endpoint with `admin-ajax.php` or custom REST route and keep front-end intact.
