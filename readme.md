# Resume

A fast, responsive, ATS-friendly, SEO-optimized personal resume website powered by a single JSON file.

---

## Features

- Single Page Application
- Vanilla HTML, CSS & JavaScript
- No frameworks
- Responsive
- Dark / Light mode
- ATS Friendly
- SEO Optimized
- GitHub Pages Ready
- Print Friendly
- One JSON file to maintain
- Semantic HTML5
- JSON-LD Schema
- Open Graph
- Twitter Cards
- Lighthouse 100 Target

---

## Project Structure

```
resume/
│
├── index.html
├── README.md
├── robots.txt
├── sitemap.xml
├── favicon.ico
│
├── data/
│   └── profile.json
│
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   └── print.css
│   │
│   ├── js/
│   │   ├── app.js
│   │   └── renderer.js
│   │
│   ├── images/
│   │   └── profile.jpg
│   │
│   └── icons/
│
└── resume.pdf
```

---

# Installation

Clone the repository.

```bash
git clone https://github.com/YOUR_USERNAME/resume.git
```

Open the project.

```bash
cd resume
```

Serve locally.

Python

```bash
python -m http.server
```

Node

```bash
npx serve
```

Visit

```
http://localhost:8000
```

---

# Deploy on GitHub Pages

Create a repository.

Example

```
resume
```

Push

```bash
git init

git add .

git commit -m "Initial commit"

git branch -M main

git remote add origin https://github.com/YOUR_USERNAME/resume.git

git push -u origin main
```

Open

```
Settings

↓

Pages

↓

Deploy from Branch

↓

main

↓

/
```

Your website will be available at

```
https://mnavinc.github.io/resume/
```

---

# Updating Resume

Only edit

```
data/profile.json
```

Everything else updates automatically.

---

# Profile Photo

Replace

```
assets/images/profile.jpg
```

with your latest professional photo.

---

# Resume PDF

Replace

```
resume.pdf
```

if you already have one.

Otherwise click

```
Download PDF
```

to print directly from the browser.

---

# SEO

Update

```json
site.url
```

inside

```
profile.json
```

Example

```json
"https://mnavinc.github.io/resume/"
```

---

# Customization

You can change

- Colors
- Fonts
- Layout
- Sections
- Theme

inside

```
assets/css/styles.css
```

---

# Browser Support

- Chrome
- Edge
- Firefox
- Safari
- Brave

---

# Performance Goal

| Metric | Target |
|---------|--------|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

---

# License

MIT License

Feel free to fork and customize.

---

# Author

**Naveen**

Technology Strategist

Engineering Manager

AI Enablement Leader

Hyderabad, India