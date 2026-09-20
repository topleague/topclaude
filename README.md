# Top League Tech — cleaned Astro build

This is your ChatGPT-generated repo, kept pixel-identical (same raw HTML,
same real images, same real logo/fonts) — with the actual dead weight
removed and verified, not guessed at.

## What was removed, and how I confirmed it was safe

- `jquery.min.js` and `gtm.js` — sat in `assets/` but were never linked
  from any page. Deleted; zero risk, zero effect.
- 7 legacy WordPress menu/animation scripts (Superfish, hoverIntent,
  SVG-inline, DOMPurify, skip-links, 2 more) — before removing these, I
  checked that `Layout.astro` already has its own small vanilla-JS handler
  targeting the exact same class names (`menu-toggle`, `sub-menu-toggle`,
  `nav-primary`) present in the real markup, so removing the old scripts
  doesn't lose any menu functionality.
- Dark/light toggle — removed per your last request (button + its script,
  both gone).
- 4 separate stylesheets (`head-inline.css`, `style.css`,
  `svgs-attachment.css`, `astro-theme.css`) — merged into one
  `theme.min.css` and minified (135KB → 97KB) using safe, non-destructive
  optimization. I attempted a more aggressive "remove genuinely unused CSS
  rules" pass (PurgeCSS) but its parser choked on this stylesheet's mix of
  WordPress block-editor CSS variables — rather than risk breaking a rule
  your live design actually needs, I backed off to the safer merge+minify
  approach. If you want that deeper cut later, it's a separate, careful
  pass, not something to rush.
- The raw `.html` source files were sitting directly in `src/pages/`,
  which made Astro treat them as duplicate routes (harmless, but noisy
  build warnings and messy structure). Moved them to `src/raw-html/` and
  repointed each page's import — same content, cleaner source tree, zero
  warnings on build.

## Result, measured on the actual built output
- CSS requests per page: 5 → 2 (fonts.css + theme.min.css)
- JS requests per page: up to 9 → 0 (menu toggle is one small inlined script)
- Total `public/assets/`: down to the files actually in use

## Before you deploy
Nothing required — this builds and deploys exactly like the original.
`npm run build` → `dist/`. Connect to Cloudflare Pages, build command
`npm run build`, output directory `dist`.
