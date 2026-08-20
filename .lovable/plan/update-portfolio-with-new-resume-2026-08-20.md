# Update Portfolio with New Resume

Your new resume is mostly consistent with what the site already shows. These are the actual gaps to close.

## 1. Replace the downloadable resume
Swap `public/Gulshan_Kumar_Kushwaha_Resume.pdf` with the newly uploaded PDF so the "Download Resume" / "Download My CV" buttons serve the latest version (filename and links stay the same).

## 2. Certifications
Add the missing entry, keeping the current list order otherwise:
- Introduction to Data Analysis — Alison

## 3. Skills section
Add the tool-level detail your resume now spells out, as tags in a new "Data & BI Tools" group:
- Excel (Pivot Tables, VLOOKUP, INDEX-MATCH)
- SQL (Joins, Aggregations)
- Python (Pandas, NumPy)
- Power BI / Tableau

Percentage counters (Excel, SQL, Python, Power BI) stay as they are.

## 4. About section headline copy
Refresh the About paragraphs to reflect the resume's executive summary: add that you apply Random Forest, NLP and PCA in projects, and that you use GenAI tools (ChatGPT, Copilot) to speed up analysis and reporting. Zepto metrics stay unchanged.

## 5. Projects
Add a short "Takeaway" line to each project card, drawn from the resume's recommendations:
- Fake Profile Detection: behavioral/activity features add strong predictive signal for trust-and-safety use cases.
- EV Charging Station Finder: real-time availability and route optimization are the key UX levers for location-based apps.

## Not changing
Experience (Zepto), Education, Hero tagline, contact details and LinkedIn link already match the new resume.

## Technical notes
Files touched: `public/Gulshan_Kumar_Kushwaha_Resume.pdf`, `src/components/portfolio/CertificationsEducation.tsx`, `src/components/portfolio/Skills.tsx`, `src/components/portfolio/About.tsx`, `src/components/portfolio/Projects.tsx`. Content-only edits; no layout or design-token changes.
