# Deploying to GitHub Pages

## Step 1 — Create the GitHub repo

1. Go to **github.com/new**
2. Name the repo exactly: `<your-github-username>.github.io`  
   *(e.g. `schmitzdonatien.github.io`)*
3. Set it to **Public**
4. Click **Create repository** (no README needed)

## Step 2 — Push the files

In your terminal, from this folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

## Step 3 — Enable GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under *Branch*, select `main` and `/ (root)`
3. Click **Save**

Your site will be live at `https://<your-username>.github.io` within ~1 minute.

---

## Customising your portfolio

### Add your publications
Open `index.html` and find the comment block:
```
<!-- TODO: paste your papers below -->
```
Duplicate a `.pub-card` block for each paper. Fill in:
- `pub-title` — paper title
- `pub-authors` — author list (wrap your name in `<strong>`)
- `pub-venue` — conference or journal
- `pub-year` — year
- Update the PDF / arXiv / Code links

### Add your CV PDF
1. Place your CV as `cv.pdf` in this folder
2. The "Download CV" button already points to `cv.pdf`

### Update social links
In the sidebar section, replace the placeholder `href="#"` values for:
- **GitHub** — your github.com profile URL
- **LinkedIn** — your linkedin.com/in/... URL

### Add a profile photo
Your UCLouvain photo is already set. To use a different one, place it in this folder (e.g. `photo.jpg`) and change:
```html
src="https://cloudlargescale-uclouvain.github.io/images/teampic/DonatienSchmitz.jpg"
```
to:
```html
src="photo.jpg"
```

### Add more CV entries
Copy any `.tl-item` block in the Education or Experience timeline and fill in the dates, title, organisation, and description.
