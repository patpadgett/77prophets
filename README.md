# 77Prophets website

A creative one-page site for 77Prophets, an EDM project with AI-driven production, original lyrics, and dark cinematic visuals.

Files
- `index.html` — landing page
- `styles.css` — layout, motion, and responsive styling
- `assets/` — streaming and video artwork pulled from public artist pages, plus the logo sigil

Asset notes
- `assets/spotify-*.jpg` came from the public Spotify artist page for 77Prophets.
- `assets/youtube-banner.jpg` and `assets/youtube-avatar.jpg` came from the public YouTube channel.
- `assets/yt-*.jpg` came from public YouTube video thumbnails.
- `assets/logo.svg` is a local brand sigil built for the site.

Research notes
- I attempted to access Instagram publicly, but Instagram returned login/response-wall blocks in this environment, so I could not verify a public 77Prophets Instagram profile directly.
- Because of that, the site uses verified public Spotify and YouTube imagery instead.
- If you send the band’s exact Instagram handle, I can swap in their Instagram visuals and update the imagery set.

Launch notes
- Buttons currently point to the public Spotify, YouTube, and Suno pages.
- The contact form is local-only and shows a success message in the browser.
- No external build step or runtime framework is required.

Suggested next pass
- Replace the contact form destination with a real inbox or booking endpoint
- Add a press kit PDF and a live show page
- Swap in direct Instagram assets if the handle is confirmed
