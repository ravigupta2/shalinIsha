# Shalin & Isha Wedding Invitation

A mobile-first, portrait invitation site for the January 2027 wedding celebrations.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Current invitation sections

- Illustrated palace cover and an opening invitation card
- A letter telling Shalin and Isha’s story, alongside their pavilion photograph
- Scratch-to-reveal save-the-date card, countdown and calendar download
- Updated wedding schedule, directions to Kesar Bagh Palace and the Bharuch reception
- The Wedding Edit wardrobe planner, with outfit ideas guests can save on their device
- Section shortcuts, guided scrolling and an optional soundtrack

## Source details

The January 26–27 schedule and wardrobe guide use Isha’s latest notes. Venue, family and reception details come from the existing wedding invitation. The palace illustration was created for this site, and the couple portrait is an illustrated treatment of their supplied photo.

The site plays “Our Forever,” an original flute and plucked-string instrumental. The reel uses the supplied wedding clip as its soundtrack. The portrait reel animates the same seven PDF cards with slow camera moves, soft crossfades, and a music fade at the end.

## Deliverables

- `output/pdf/Shalin_Isha_Wedding_Invitation.pdf` — seven-page 9:16 invitation PDF
- `output/video/Shalin_Isha_Wedding_Invitation_Reel.mp4` — 1080 × 1920, 30 fps, 30.8-second invitation reel

To re-render the reel after updating the PDF, run:

```bash
python3 scripts/render-wedding-reel.py
```
