# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Existing: flat static HTML/CSS/JS in a GitHub Pages repo (`patpadgett/77prophets`, CNAME `77prophets.patpadgett.com`). No build step, no server.

## Users

Listeners who arrive from a Facebook post, a YouTube description, or a Suno share, mostly on phones. Their job: hear a 77Prophets track right now, then find him on the service they already use (Spotify, YouTube, Suno, Apple Music). Secondary audience: after-party / venue bookers and Suno collaborators, who reach the artist through the contact form.

## Product Purpose

The official home for 77Prophets: one place that plays the music, shows the whole catalog with its artwork, and links every outlet. Success = a visitor plays a track and follows/streams on their own platform; a booker sends a request.

## Positioning

77Prophets (pronounced "Sevens Prophets", a nod to Heaven's Prophets) is a former media producer and poet who returned to music after decades away. Every lyric is 100% original; the music itself is built with AI (Suno) around those lyrics. The catalog is deliberately genre-agnostic: progressive rock, nu-metal, psychedelic, industrial prog, dark country, jungle, funk, disco, rap, grunge, witch house, classical crossover. The official bio, used verbatim on Spotify and Suno and chosen by the owner for this site, ends with the artist's creed: "The globe is a lie; we live on a flat plain beneath a firmament. We are God's creation, and my music exists to honor that holy reality."

## Operating Context

Songs originate on Suno (per-song page, style tag, version, cover art, play count), then get distributed to Spotify and other stores as singles plus one album (Wander, 10 tracks). YouTube hosts music videos made with AI video tools. A Carrd page (77prophets.carrd.co) hosted a single fullscreen vertical promo video, which the owner wants moved onto this site as the hero. A Facebook page exists (facebook.com/77Prophets) and carries release chatter and live/after-party offers.

## Capabilities and Constraints

- Static hosting only. The contact form must POST to a hosted form endpoint that delivers to agroman@gmail.com (owner-supplied), with a mailto fallback; no server-side code.
- Pseudonymity is a hard constraint: no real name, no town, no employer, anywhere on the page, in metadata, alt text, or file names. "Steev" appears inside two cover artworks as a character/alter ego (the song "Steev", the "Wrath" split-face cover); it is never presented as the artist's name.
- Genre framing: never lead with one genre (the previous site said "EDM"; the catalog is not). Each track shows its own Suno style tag.
- Bio text: Spotify/Suno version verbatim, cosmology line included.
- Cross-origin players (Spotify, YouTube, Suno) cannot autoplay or be started from outside their iframe; controls must say what they do.
- Hero video is 360×640 (portrait), 6:00, H.264 + AAC, 25.9 MB source; it contains drug imagery (a line of powder) consistent with the song's subject.
- Several Spotify tracks carry the E (explicit) flag: Where U @ ?, Drained, Lyfe Is Hard, Steev, The World is in Jeopardy, The Ghost in the Machine, The Ketamine Krabwalk.
- Play counts, followers, and monthly listeners are small; never quote them as social proof.
- OPEN: Instagram and TikTok handles are listed on the Suno profile but were not recoverable; add when the owner supplies them.
- OPEN: Apple Music / Amazon / Deezer artist URLs not yet verified.

## Brand Commitments

- Name: "77Prophets" (one word, capital P) in running copy and metadata; artwork often sets it "77 PROPHETS".
- Seal: the gold circular emblem on black (77 PROPHETS, crossed swords, menorah, יהוה, "YAHWEH IS KING", "AWAKE. ARISE. RESIST THE NARRATIVE."). It is the Suno profile cover and the cover of Hold On and No Plans. It is the mark.
- Persona: bearded man in a black cowboy hat, dark sunglasses, and fur coat (Suno avatar with gold "77Prophets" logotype). May appear only through existing artwork; no new identifying material.
- Hero video: the owner-made Carrd promo (the Ketamine Krabwalk piece). AI claymation style, warm amber/brown interiors with the round 77PROPHETS porthole emblem, karaoke-style captions.
- Voice: short, declarative, prophetic-but-plain. The music and titles do the talking.

## Evidence on Hand

Harvest root: `/data/pat/websites/77prophets-source/harvest/` (source of truth; site assets are derived from it).

- `spotify/` 18 release covers at 640px, each verified against the exact album URL via Spotify oEmbed (title match). `meta/manifest-partial.json` holds album ids, track ids, durations, explicit flags.
- `suno/` 45 published-song covers (most 1024–1254px) plus profile cover, avatar, voice image, playlist art. `meta/suno-published.json` holds song URLs, style tags, durations, versions, play counts.
- `youtube/` 9 video thumbnails (maxres). `meta/youtube.json` holds ids, titles, upload dates, durations, descriptions, channel description.
- `carrd/video01.mp4` the hero video source; `carrd/frames/` sampled stills.
- Spotify artist: https://open.spotify.com/artist/5S4yAG9F49QJhHSgjmHF4N (18 releases; Wander is the only album).
- YouTube: https://www.youtube.com/@77Prophets (channel UCT0ZoqdIRvZ9l_hT7AszFcg, 9 videos; joined Jan 27, 2026).
- Suno: https://suno.com/@77prophets (64 songs, "Published Work" playlist of 45, "The Wander Album" playlist of 10, "Darkcide files" 9).
- Facebook: https://www.facebook.com/77Prophets (not scrapeable; link only).
- Absent: press quotes, show dates, testimonials, merch. Do not fabricate any.

## Product Principles

1. Play first, follow second. A track is one tap away in the first screen on every device, and every outlet is reachable from the fold and again at the close.
2. Titles and artwork carry the page; copy stays at setlist length.
3. Honest provenance, stated once: original lyrics, AI-built music, the artist's own creed in his own words.
4. Genre-agnostic catalog: each track wears its own style tag; no umbrella label.
5. Pseudonymity everywhere, including metadata and file names.

## Accessibility & Inclusion

Video never autoplays with sound; motion honors `prefers-reduced-motion`; all text, including text over artwork or video, meets 4.5:1; every player and outlet control is keyboard-reachable and labeled for what it does.
