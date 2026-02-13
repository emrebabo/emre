ASM Services Multilingual Enterprise Website

Language architecture
- Root language selector: /index.html
- Full site per language:
  - English: /en/*.html
  - German: /de/*.html
  - Bosnian: /bs/*.html

Core pages in each language
- index.html
- services.html
- security-compliance.html
- about.html
- contact.html
- privacy-policy.html
- impressum.html

Careers trees (kept per language)
- /karriere/*
- /careers/*
- /karijera/*

Major updates
- Removed mixed-language blocks from same page and split into full-language website variants.
- Improved mobile navigation behavior (overlay, close on link/outside/Escape, body scroll lock).
- Expanded company page content with richer governance/development/operational sections.

Run locally
1) cd project
2) python3 -m http.server 4173
3) open http://localhost:4173/index.html
