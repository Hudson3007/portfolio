# Portfolio — Hudson Kennedy C

Everything needed to host, update, and share this portfolio. No need to ask again.

**Last verified:** 2026-11-25

---

## 1. Live links

| What | Link / location |
|---|---|
| Live website | https://hudson3007.github.io/portfolio/ |
| GitHub source | https://github.com/Hudson3007/portfolio |
| Local final folder | `D:\Myself\portfolio-v4` |
| Live branch | `main` |

> **Important:** `portfolio-v4` is the version currently online.  
> `portfolio-v5` is only a local alternate theme — it is **not** connected to GitHub Pages.

---

## 2. Hosting is already done

The site is hosted with **GitHub Pages**. It is a plain static site, so there is no build step.

Files that make it work:

- `index.html`
- `styles.css`
- `script.js`
- `assets/`
- `.nojekyll` — tells GitHub Pages not to process files with Jekyll

If Pages ever needs to be set up again:

1. Open https://github.com/Hudson3007/portfolio
2. Go to **Settings → Pages**
3. **Source:** `Deploy from a branch`
4. **Branch:** `main`
5. **Folder:** `/ (root)`
6. Click **Save**
7. Wait 1–2 minutes, then open https://hudson3007.github.io/portfolio/

The repo is public, which is required for free GitHub Pages. **Do not put secrets, private client files, or confidential data in this repo.**

---

## 3. Update the live site

Work inside the folder that is actually connected to GitHub:

```powershell
cd D:\Myself\portfolio-v4
git pull
```

Make your changes to `index.html`, `styles.css`, `script.js`, or `assets/`.

Then publish:

```powershell
git add .
git commit -m "Describe what changed"
git push
```

After pushing:

- Open https://hudson3007.github.io/portfolio/
- Hard-refresh with `Ctrl + F5`
- Allow 1–2 minutes for GitHub Pages to rebuild

### If you edited `portfolio-v5` instead

`portfolio-v5` does not affect the live site. Copy the files you want into the live folder first:

```powershell
Copy-Item D:\Myself\portfolio-v5\index.html D:\Myself\portfolio-v4\index.html -Force
Copy-Item D:\Myself\portfolio-v5\script.js D:\Myself\portfolio-v4\script.js -Force
Copy-Item D:\Myself\portfolio-v5\styles.css D:\Myself\portfolio-v4\styles.css -Force
```

Then follow the `git add / commit / push` steps above.

---

## 4. Preview locally before pushing

Option A — VS Code:

- Install **Live Server**
- Right-click `index.html`
- Choose **Open with Live Server**

Option B — Python:

```powershell
cd D:\Myself\portfolio-v4
python -m http.server 8000
```

Then open http://localhost:8000

---

## 5. Share the portfolio

Send this link:

**https://hudson3007.github.io/portfolio/**

Short intro you can reuse:

> Hudson Kennedy C — Founder, Builder, Designer  
> Hardware, AI systems, and products that actually ship.  
> https://hudson3007.github.io/portfolio/

Good places to put it:

- LinkedIn → **Featured**
- Resume / CV header
- Email signature
- GitHub profile README
- DefendX pitch deck
- QR code for events

---

## 6. Optional: custom domain

To replace the `github.io` address with something like `hudsonkennedy.com`:

1. Buy the domain from any registrar
2. Add a `CNAME` file in `D:\Myself\portfolio-v4` containing only the domain, e.g.:

   ```text
   hudsonkennedy.com
   ```

3. Commit and push it
4. In GitHub repo → **Settings → Pages → Custom domain**, enter the domain and save
5. Enable **Enforce HTTPS**
6. At your DNS provider, set:

   For an apex domain like `hudsonkennedy.com`:

   ```text
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   hudson3007.github.io
   ```

   For a subdomain like `portfolio.hudsonkennedy.com`:

   ```text
   CNAME portfolio   hudson3007.github.io
   ```

DNS can take a few hours to update.

---

## 7. Troubleshooting

| Problem | Fix |
|---|---|
| Site shows old content | Wait 1–2 min, then `Ctrl + F5`; confirm the push succeeded on GitHub |
| 404 page | Check **Settings → Pages**: source must be `main` / `/ (root)` |
| Images missing | GitHub paths are case-sensitive: use `assets/Profile.png`, not `assets/profile.png` |
| Changes in `v5` not showing | `v5` is not the live folder — copy files into `portfolio-v4` |
| Local preview works but live site doesn't | Check that every referenced file was committed and pushed |
| Jekyll errors or ignored folders | Confirm `.nojekyll` exists in the repo root |

---

## 8. Quick command sheet

```powershell
# Go to the live project
cd D:\Myself\portfolio-v4

# Get latest remote changes
git pull

# Check what changed
git status

# Publish
git add .
git commit -m "Update portfolio"
git push

# Local preview
python -m http.server 8000
```

**Live site:** https://hudson3007.github.io/portfolio/
