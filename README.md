# CharTec Industries — Personal site

This repository contains a simple static website for **CharTec Industries** (data engineering & analytics portfolio and blog). The site is intentionally static so it can be deployed as a GitHub Pages site quickly.

How to run locally:
- Open `index.html` in your browser (no build step needed).

Deploy to GitHub Pages:
1. Push to `main` (or `gh-pages`) branch.
2. Enable GitHub Pages in repository settings and choose `root` as the source.
3. Optionally add a CNAME file for a custom domain.

Files of interest:
- `index.html`, `about.html`, `blog.html`, `projects.html`, `contact.html`
- `assets/css/styles.css` (theme & layout)
- `assets/js/main.js` (minimal interactivity)
- `posts/` (sample posts)
- `assets/images/` (placeholder images — replace with screenshots)

Suggested next improvements:
- Replace placeholder images with real project screenshots
- Add more blog posts or move to a static site generator (Jekyll/Eleventy) for easier post management
- Hook the contact form to a form service or serverless function
- Add a simple GitHub Actions workflow to automatically deploy on push

If you'd like, I can add a deployment workflow and set up a basic Jekyll or Eleventy integration to make posting easier.