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

What was changed
- Enterprise-style redesign with deep navy palette and technical hero visual.
- No stock call-center imagery; abstract system/process visual used in hero.
- Footer rebuilt exactly in requested 3-column structure + firm seat + © 2026 line.
- About, Security, and Privacy contain multilingual DE/EN/BA content blocks.
- Career URL structures implemented in DE/EN/BA.
- Contact form remains removed (as requested).

Run locally
1) cd project
2) python3 -m http.server 4173
3) open http://localhost:4173/index.html

Quick test list
- Open all core pages and all career URLs above.
- Test mobile menu below 980px width.
- Confirm hero/section reveal animations and active navigation state.
