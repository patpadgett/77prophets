# 77Prophets — official site

Live at https://77prophets.patpadgett.com/ (GitHub Pages, CNAME in this repo). Every commit to `main` deploys.

## The site

One page. The hero is an engraved celestial chart ("The Firmament Chart"): the artist's eighteen Spotify/Apple releases plotted as named stars on a dome, the carrd promo film tipped into the centre as a portrait plate, and the newest Suno single, the album, and the four main outlets in a legend column locked to the plate's edges. Below: the release chart (every release with its own Suno style tag), the Suno-only catalog, six YouTube films, the artist's own bio and seal, every streaming outlet, and a contact form.

The Job 26:7 verse on the dome band and the bio are the artist's own published words (Spotify/Suno), reproduced verbatim by his request. The project is presented as what it is: lyrics written by hand, music generated with Suno.

## Files

- `index.html` — generated; do not hand-edit. Rebuild with `python3 /data/pat/websites/77prophets-source/build.py`.
- `styles.css`, `site.js` — hand-authored.
- `assets/art/` — release covers (Spotify, 640px source → 320/640 webp)
- `assets/suno/` — Suno-only song art (160px thumbs) and the Horizon Line cover
- `assets/posters/` — YouTube thumbnails for the six films (webp, 640×360)
- `assets/seal/` — the artist's seal (Suno profile cover): page seal, header mark, favicons, OG image
- `assets/video/` — the carrd promo film re-encoded (`krabwalk-360.mp4`, 360×640, ~22 MB) plus poster
- `assets/fonts/` — Libre Caslon Display + Libre Caslon Text (woff2, self-hosted, OFL)
- `PRODUCT.md`, `.impeccable/` — design-system context (impeccable skill)

## Data flow

Source of truth is `/data/pat/websites/77prophets-source/harvest/meta/`:
- `site-data.json` — 18 releases (17 singles + the album *Wander*), each with Spotify/Apple URLs, date, tracks, Suno id + style tag, YouTube id where a film exists
- `suno-published.json` — all 64 public Suno songs
- `apple-albums.json`, `apple-copper-lookup.json` — Apple Music catalog (iTunes Search API). *The Copper and The Lead* has no Suno upload; its genre tag ("Country") comes from Apple.

`build.py` renders the page from those files, including the dome SVG. Star labels are measured with the real font (Pillow) so they never wrap; the name arc and verse arc are sized to measured text widths.

## Player

Suno's embeddable player (`https://suno.com/embed/<id>`) opens in a fixed dock at the bottom of the page. Suno does not allow autoplay from a parent page, so the dock says so: one press to open, one to play. Closing the dock removes the iframe, which stops playback. YouTube films load on press (`youtube-nocookie.com`).

## Contact form

Posts to FormSubmit (`formsubmit.co/agroman@gmail.com`) with a honeypot field; the first submission from the live domain triggers FormSubmit's one-time activation email to that inbox. If the POST fails, the page offers a `mailto:` fallback with the message pre-filled.

## Verification (2026-09-27)

Playwright, Chromium: 320 / 390 / 820 / 1280 / 1440 widths. Zero horizontal overflow, zero page errors, fonts load, dock ≈29% of a phone viewport with the Suno embed fully visible. `impeccable detect` clean (one documented ignore: the engraved verse's letter-spacing is an SVG micro-label, not body text).

## Research notes

- Spotify artist `5S4yAG9F49QJhHSgjmHF4N`: 18 releases, verified via oEmbed.
- Suno `@77prophets`: 64 public songs, two playlists; bio identical to Spotify's.
- YouTube `@77Prophets`: 9 videos, six selected as films (the rest are shorts/dated uploads).
- Apple Music artist `6771765438`, Deezer `392333441`, YouTube Music channel `UC36L3k_Vg7DIpE_0Y8oYnzw`.
- Facebook page exists (`facebook.com/77Prophets`) and is linked; nothing personal from it is used. The site stays pseudonymous by the owner's decision.
- The carrd page (`77prophets.carrd.co`) supplied the promo film; it was 25 MB at 360×640 and is re-encoded here.
- No Instagram presence found.

## Not done / could add

- Trim the film to a 60–90 s cut for weight (currently ~22 MB, `preload="none"` so it costs nothing until pressed).
- Press kit / show dates if the artist ever plays live.
