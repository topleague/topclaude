# topleaguetech-clean

Rebuilt using the real assets from your ChatGPT-generated repo (actual
fonts, actual images) but properly componentized in Astro — no raw HTML
dump, no jQuery, no dark/light toggle, single bundled stylesheet.

## What changed vs. the ChatGPT version
- 1 CSS file total (Astro bundles and hashes it automatically) vs. 5
  separate stylesheet requests per page.
- 0 external JS files — the mobile menu is one small inlined script, no
  jQuery, no unused scripts.
- No dark/light toggle (removed, as requested).
- Real fonts (Mona Sans Expanded family, Circular Std Book) and real
  images, copied from the ChatGPT repo's `public/assets/`, referenced
  properly by each component instead of one giant pasted-in HTML blob.
- Desktop dropdown menus work via pure CSS (`:hover`/`:focus-within`) —
  nothing to break. Mobile hamburger is one small vanilla-JS script.

## Content
Same Markdown-based workflow as your other Astro sites:
- `src/content/posts/` — blog posts
- `src/content/services/` — service pages

Add real cover images by pointing `coverUrl:` at any file already sitting
in `public/assets/` (e.g. `/assets/Article-Writing-Services--900x400.png`)
or your own new upload.

## Before you deploy
Get a free key at https://web3forms.com and paste it into
`src/site.config.ts` (`web3formsKey`) — powers the contact form and
newsletter signup.

## Deploy
`npm run build` → `dist/`. Push to GitHub, connect to Cloudflare Pages
(build command `npm run build`, output directory `dist`).
