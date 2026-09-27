---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: index.html (the whole site, one page)

Scope: the single public page at 77prophets.patpadgett.com. Visitor mode: Persuade (play a track, then follow on the visitor's own service; bookers send a request).

Audience and job: phone-first listeners arriving from Facebook, YouTube descriptions, and Suno shares. Job: hear a track now; find him on Spotify/YouTube/Suno/Apple; optionally book or collaborate.

Proof/content: 18 verified Spotify releases (17 singles + the 10-track album Wander) with 640px art; 45 Suno published songs with style tags and hi-res art; 9 YouTube videos; the owner's 6:00 portrait claymation promo (Ketamine Krabwalk) as hero video; the gold seal; the bio verbatim with the creed.

Constraints: pseudonymous everywhere; genre-agnostic (per-track style tags); static GitHub Pages; contact form POSTs to a hosted endpoint for agroman@gmail.com; cross-origin players cannot be started from outside their iframe.

## Direction contract

THESIS: The catalog plotted as named stars beneath the engraved dome he sings about: a Gleason-style azimuthal firmament where every release is a fixed star and the play control is the zenith. It refuses the dark-band-site arrangement (name over hero photo, two buttons, a cover grid) and refuses to hide the play under decoration: the dome IS the player.

OWN-WORLD: Copperplate-engraving world on deep night (#06080f) with warm aged gold (#c9a55a) as the only line color and bone (#e6dfcf) as the only text color; hairline concentric rings, ring-set text on arcs, cross-hatched star figures, a single slate-blue (#4d6b8a) reserved for water/depth. Type: Libre Caslon Display for names and headings, Libre Caslon Text for everything else, small caps and letterspaced ring text; no sans, no mono. Components: ring buttons (a circle with a hairline ring and a gold rule label), engraved rule dividers with a center star, ring-set section titles, release "plates" (square cover in a hairline frame with an engraved caption), and one metallic seal stamp. Recognizable with every word removed by its rings and hatching alone.

STORY: In the first screen the visitor understands this is 77Prophets, sees his creed and the newest release, and can play something with one tap at the zenith; the outlet ring under the dome puts Spotify / YouTube / Suno / Apple within the same screen. Scrolling, the sky becomes the chart: every release a star with its own style tag, tinted from its own cover, each with Play (opens the Suno player in place), Spotify, and YouTube where a video exists. The promo video plays as a tipped-in portrait plate. The page closes on the seal, the outlets again, and the booking form.

FIRST VIEWPORT: Desktop 1440×900: an engraved azimuthal dome fills the viewport, its horizon ring at ~78% height; 77PROPHETS is set on the horizon ring's outer arc at ~7.5rem cap height, letterspaced; the zenith at (50%, 44%) is the play control, a 96px ring button with the gold seal at its center that opens the Suno player of the newest release directly beneath it (the player mounts inside the dome at 40% height); the creed ("The globe is a lie...") sits on the ring just above the horizon as ring-set text; the newest release's title, style tag and date sit at the zenith's right as the "star of the hour"; the outlet row (Spotify / YouTube / Suno / Apple Music) is the horizon's own rule at 82–90% height, four ring buttons in a row with a translucent night backing. Phone 390×844: the dome fills the top 70%, 77PROPHETS on the horizon arc at ~3rem, the zenith play at (50%, 52%) at 84px, the outlet row as a 2×2 grid directly beneath the horizon, all inside the first screen.

FORM: The Firmament Chart, IMPECCABLE'S PICK (my top-ranked grounded candidate; the roll assigned candidate 3, The Outlaw Broadside, which the user declined). Seed key d3806ba3. Signature interaction: the dome rotates by a few degrees as the visitor scrolls and each release-star brightens as its plate enters the viewport; the zenith play control becomes the close control (aria-expanded, label swap, "closes and stops playback"). Motion grammar: exponential ease-out, one authored reveal per section, engraving strokes draw in once; all off under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
