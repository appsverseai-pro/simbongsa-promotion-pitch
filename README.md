# Simbongsa — The Post-Practice Tradition

A single-page pitch website presenting a marketing proposal to the **owner of
Simbongsa**, a Korean street food shop located across from a busy sports park.

> This site is **not** for customers. It is a presentation deck — styled like a
> startup pitch crossed with a modern Apple-style landing page — built to be
> shown directly to the shop owner.

## Core idea

**"Simbongsa: The Post-Practice Tradition"** — becoming the place families stop
after every practice, game, and tournament.

## The narrative

1. **Hero** — From snack shop to post-practice tradition
2. **The Observation** — What we observed about the location and audience
3. **The Insight** — The real competitor is families going straight home
4. **The Opportunity** — The conversion gap (visual funnel)
5. **The Strategy** — Three pillars: Practice Day Special, Family Bundles, First-Time Favorites
6. **Instagram Pivot** — From "look at our food" to "stop by after practice"
7. **Measurement** — Likes don't equal sales; tracking codes (STORY / PRACTICE / CREATOR)
8. **Implementation Timeline** — An 8-week rollout
9. **Projected Impact** — Conservative, attributable goals
10. **Finale** — Every sports tradition starts somewhere

## Running it

It is a fully static site with no build step. Open `index.html` directly, or
serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Markup and content for all sections |
| `styles.css` | Brand-driven styling (marigold yellow, warm red, cream, charcoal) |
| `script.js` | Smooth scroll reveals, staggered animations, sticky nav |

## Design notes

- Palette inspired by the Simbongsa logo and posters: marigold **yellow**,
  warm **red**, **cream** tones, and **charcoal** accents.
- Typography: [Archivo](https://fonts.google.com/specimen/Archivo) for display,
  [Inter](https://fonts.google.com/specimen/Inter) for body.
- Animations respect `prefers-reduced-motion`.
- Fully responsive down to small mobile screens.

To swap in real photography, replace the emoji/placeholder visuals in the
observation, strategy, and Instagram-pivot sections with brand images.
