# 🦇 Webwing — Explore • Plan • Travel

A premium, dark-themed mobile travel app homepage. Built with **React + Vite + Tailwind CSS**, using glassmorphism cards, a bat-wing/spider-web brand mark, and a full interactive bottom-nav flow (Home, Explore, My Trips, Saved, Profile).

## Live Demo
_Add your deployed link here after following the deploy steps below._

## Tech Stack
- React 18
- Vite (build tool)
- Tailwind CSS
- lucide-react (icons)

## Project Structure
```
webwing-app/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx        # React entry point
│   ├── App.jsx          # Full Webwing homepage app
│   └── index.css        # Tailwind + fonts + custom design tokens
└── README.md
```

## Features
- Hero section with cinematic travel photography
- Live search input (state-controlled)
- 5 quick-service cards (Flights, Hotels, Trains & Buses, Explore, Maps)
- Featured destination carousel (tap arrows to cycle through 5 places)
- "Plan your trip" grid (Itinerary, Budget, Weather, Journal)
- Trending destinations with a working save/heart toggle that persists into the Saved tab
- Fully interactive bottom navigation switching real screens
- Subtle bat-silhouette and spider-web decorative marks
- Reduced-motion support and accessible focus states

---

## How to run locally (optional — only if you have Node.js on a computer)
```bash
npm install
npm run dev
```
Then open the local URL it prints (usually `http://localhost:5173`).

---

## How to push this to GitHub (from mobile, no terminal needed)

1. Unzip the project you downloaded.
2. Go to **github.com** → tap **+** → **New repository** → name it `webwing-app` → keep it empty → **Create**.
3. On the new repo page, tap **"Add file" → "Upload files"**.
4. From your Files app, select **all files and folders** from the unzipped `webwing-app` folder (including the `src` folder — you may need to upload the `src` folder's contents separately if your uploader doesn't support nested folders; GitHub's web uploader does support drag-and-drop of folders on most browsers).
5. Scroll down, add a commit message like "Initial commit: Webwing app", and tap **Commit changes**.

If GitHub's mobile upload doesn't accept the `src` folder as a folder, create it manually first:
- On the repo page, tap **"Add file" → "Create new file"**
- Type `src/App.jsx` as the filename (the `src/` prefix auto-creates the folder)
- Paste the file contents, commit
- Repeat for `src/main.jsx` and `src/index.css`

---

## How to get a live demo link (Vercel — free, works entirely from your phone browser)

1. Go to **vercel.com** → tap **Sign in with GitHub** → allow access.
2. Tap **"Add New..." → "Project"**.
3. Select your `webwing-app` repository → tap **Import**.
4. Vercel auto-detects it as a **Vite** project — leave all settings as default (Build Command: `npm run build`, Output Directory: `dist`).
5. Tap **Deploy**.
6. Wait 1–2 minutes. You'll get a live link like `webwing-app.vercel.app` showing the actual working app.

Paste that link at the top of this README (and in your GitHub repo's "About" section) so anyone opening the repo can try it immediately.

---

## Notes
- All images currently use placeholder photography from Picsum (`https://picsum.photos/seed/...`) so the app works instantly with zero setup. Swap the `IMG()` helper in `App.jsx` for your own image URLs (Unsplash, Cloudinary, your CDN) before a real launch.
- Colors, type, and spacing are defined inline via Tailwind utility classes and in `src/index.css` — search for `#A855F7` (primary purple) if you want to retheme.
