ASM Services Enterprise Website

Implemented Structure
- Core pages:
  - /index.html
  - /services.html
  - /security-compliance.html
  - /about.html
  - /contact.html
  - /privacy-policy.html
  - /impressum.html
- Careers (German):
  - /karriere/
  - /karriere/stellenangebote/
  - /karriere/identity-verification-specialist/
- Careers (English):
  - /careers/
  - /careers/open-positions/
  - /careers/identity-verification-specialist/
- Careers (Bosnian):
  - /karijera/
  - /karijera/otvorene-pozicije/
  - /karijera/specijalista-za-provjeru-identiteta/

Latest Upgrade
- Added richer premium visuals with animated icon badges and refined enterprise styling.
- Reworked logo asset to better match ASM brand appearance.
- Added global language switch control (🌐 DE / EN / BA) in header.
- Added fully functional contact form that sends collected submissions to:
  info@asmservices.ba
  (via FormSubmit endpoint)
- Preserved responsive behavior for desktop, tablet, and mobile.

Run locally
1) cd project
2) python3 -m http.server 4173
3) open http://localhost:4173/index.html

Quick test list
- Open all core pages and all career URLs above.
- Test mobile menu below 980px width.
- Verify language switch appears in header.
- Test contact form submit on /contact.html.
