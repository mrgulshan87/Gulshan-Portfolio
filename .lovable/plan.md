
# Gulshan Kumar Kushwaha — Portfolio Website

A single-page, dark-themed portfolio adapted from the "Unfold" reference — repositioned for a Data Analyst (not a product designer). All copy comes from the PRD and resume.

## Design system

- **Palette (dark-first, tokens in `src/styles.css`):**
  - background `#0A0A0A`, surface `#141414`, border `#1F1F1F`
  - foreground `#FFFFFF`, muted `#B3B3B3`
  - accent (primary) `#E63950` — used for the red "." signature, active nav underline, link highlights, stat numbers, CTA hover
- **Typography (loaded via `<link>` in `__root.tsx`):**
  - Headings: **Poppins** 700/800 (oversized H1 ~clamp(64px, 10vw, 140px))
  - Body: **Inter** 400/500
- **Signature motifs:** trailing red dot on wordmark ("Gulshan."), thin underline on active nav item, small hand-drawn-style wavy divider under section titles, generous whitespace, subtle fade/slide-in on scroll.

## Sections (single page, anchor nav)

1. **Nav** — sticky top: `Gulshan.` wordmark left; links Home / About / Skills / Projects / Experience / Education / Contact with underline-on-active + smooth scroll.
2. **Hero** — full-bleed dark. Oversized `Gulshan.` headline, subhead "I'm Gulshan Kumar Kushwaha, a Data Analyst turning raw data into decisions — based in Hyderabad, India", tagline `Excel • SQL • Python • Power BI • GenAI-Powered Analytics`, two CTAs: **View Projects** (accent) and **Download Resume** (outline, links to resume PDF). Grayscale/duotone portrait as background layer.
3. **About Me** — split screen: portrait left, narrative + "Download My CV" button right. Includes current program line (Imarticus PG, 2026–Present).
4. **Skills** — 4 large animated percentage counters (Excel 90, SQL 85, Python 80, Power BI 80) in accent red, with labels. Below: three tag-pill rows for Programming & ML / GenAI & Productivity / Other.
5. **Projects** — 2-column image-forward grid with hover overlay (project name + tag chips):
   - Fake Profile Detection (ML, Random Forest, NLP, PCA)
   - EV Charging Station Finder & Slot Booking (Python, Flask, MySQL, HTML/CSS/JS)
   Each card links to its GitHub (placeholder `#` if unknown — noted in copy).
6. **Experience** — vertical timeline with red node markers: Zepto (Rider Shift In-Charge), Country Delight (CSR), Leads Ark (Lead Gen Team Lead) — bullet summaries from PRD.
7. **Certifications** — badge/pill grid, 7 items from PRD.
8. **Education** — 3 stacked cards: Imarticus, VJIT B.Tech ECE, Narayana Jr College.
9. **Contact** — left: Name / Email / Message form with "Send Message" (client-side only, shows toast — no backend wired for v1 per PRD note). Right sidebar: Email, Phone, Location, LinkedIn (all with `target="_blank"` where external).
10. **Footer** — copyright + social links.

## Assets

- Generate one duotone/grayscale portrait-style hero image (placeholder man silhouette) via image generation, saved to `src/assets/hero-portrait.jpg`. Real headshot can be swapped later.
- Generate two abstract project cover images (data/ML themed and EV/map themed) for the two project cards.
- Copy the uploaded resume PDF into `public/` as `Gulshan_Kumar_Kushwaha_Resume.pdf` so Download buttons work.

## Technical notes

- All content on `src/routes/index.tsx` (single-page portfolio); replace the placeholder.
- Section components under `src/components/portfolio/` (Nav, Hero, About, Skills, Projects, Experience, Certifications, Education, Contact, Footer).
- Skill counters animate on scroll into view using IntersectionObserver + rAF count-up.
- Smooth scroll via `element.scrollIntoView({ behavior: "smooth" })` from nav; active section tracked via IntersectionObserver.
- Update `head()` on the index route with title "Gulshan Kumar Kushwaha — Data Analyst" and matching description / OG / Twitter tags.
- All colors as semantic tokens in `@theme inline` — no hardcoded hex in components.
- Fully responsive (mobile hamburger nav, single-column stacks under `md`).

## Out of scope for v1 (per PRD open items)

- Real contact-form backend (form is UI-only with success toast).
- Individual project case-study detail pages.
- Testimonials section.
- Analytics tracking.
