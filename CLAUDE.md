# geoffbamber.com — project context

Personal umbrella website for Geoff Bamber. Acts as a shop window for advisory and
non-executive work, hosts his writing, and generates leads. Hosted at geoffbamber.com.

Geoff edits this himself using VS Code + Claude Code. Keep changes clean, accessible,
and responsive. Prefer describing-then-editing over large rewrites.

## Current state

- Multi-page static site. No build step, no dependencies — just open in a browser.
- CSS lives in a single shared `styles.css` linked by every page (was previously inline in
  `index.html`; extracted when the site went multi-page). Edit a token once, all pages update.
- Files:
  - `index.html` — homepage
  - `writing.html` — writing index (tile layout)
  - `articles/*.html` — one page per article (link `../styles.css`, nav points back with `../`)
  - `styles.css`, `site.js` (mobile menu), `geoff_bamber_headshot.jpg`, `thanks.html` (form
    confirmation), `favicon.svg`, `og-image.jpg` (link-share image)
- Article bodies are scaffolded with a dashed `.placeholder` box + a `.prose` container.
  Real article text is NOT yet written — do not invent it under Geoff's name.

## Page structure — homepage (in order, revised 15 November 2026)

1. Sticky nav — Track record / Work / Flightpath / Bamber Index / About, a "Get in touch"
   button and a mobile menu toggle (`site.js`). Same nav on every page.
2. Hero (oxblood) — headline, supporting line, proof line, two audience buttons, B&W portrait
3. Logo strip (white, `#advisory`) — "Companies I have worked with", five one-tone logos
4. Track record (oxblood, `#track`) — ledger of roles with photos, then a contact button
5. "What I do" (bone, `#work`) — Deal Advisory, Governance, Operating mandates, Flightpath
6. Bamber Index feature (oxblood, `#index`) — wordmark, description, link to bamberindex.com
7. Writing — hidden until real articles exist
8. About (white, `#about`) — bio, two photos, credentials list
9. Contact (oxblood, `#contact`) — form (Web3Forms, redirects to `thanks.html`), footer

## Imagery (added 15 November 2026)

- Hero: solution-led headline, supporting line, `.hero-proof` line and two audience buttons
  ("For investors" → #work, "For chief executives" → flightpath.html).
- About: two photos of Geoff (`geoff_bamber_snow.jpg`, `geoff_bamber_ironman.jpg`) in
  `.about-photos`; credentials list runs full width beneath in two columns.
- Track record: each `.ledger-row` has a `.ledger-photo` in the first column. Photos show in
  black and white and return to colour on hover.
- Advisory: client names are logos in `logos/`, all converted to one tone (`--ink`). Keep new
  logos one tone and use `.client-logo-short` / `.client-logo-tall` to balance heights.
- Do not use photos that show recognisable patients, customers or members without consent.

## Brand / design tokens (defined as CSS variables in :root)

- Palette changed on 14 October 2026 from Oxford Navy and Aged Gold to oxblood and rose, to match the updated gb-design skill and to move away from the navy-and-gold look of AI-generated documents. No gold anywhere.
- `--oxblood` #5C1A1F (primary dark grounds) / `--oxblood-panel` #6B2329 / `--oxblood-line` #7D3A3F
- `--rose` #94604F (accent on light grounds; text-safe) / `--rose-soft` #B47C6E
- On oxblood grounds (nav, hero, `.section-dark`, contact) `--rose` and `--rose-soft` are re-pointed to `--rose-on-dark` #D7A399 and `--rose-on-dark-soft` #E8C1B8, so accents stay legible. Keep that override when adding dark sections.
- `--bone` #F2ECE5 / `--warm-white` #FBF9F6
- `--ink` #231A1A body / `--muted` #5E5654 secondary / `--muted-light` #C9B2AB on dark
- Type: Georgia (serif) for all display + body; system sans stack for eyebrows/labels
  (uppercase, letter-spaced). Keep this pairing.
- Signature device: the rose hairline (hero underline + strand top-borders + ledger hover).
- Respects `prefers-reduced-motion`. Keep the responsive breakpoint at 820px working.

## ACCURACY — these facts are locked, do not reintroduce errors

- Geoff did **NOT** found London Gynaecology. He was the **first CEO appointed after
  private-equity investment**. Never label him founder there.
- Digme Fitness: he was **co-founder and CEO** (confirmed by Geoff, 15 November 2026). The
  business was **investor-backed, not PE-backed**; never call it PE-backed.
- No unverified exit details (an earlier "Phoenix Equity Partners" line was removed).
- Sync Your Cycle: Geoff is **Board Adviser to the founders** (not Chair, not NED).
- Bamber Global Prestige Index: Geoff is **author and publisher**. Links go to
  https://www.bamberindex.com/ (About paragraph, credentials list, footer).
- "Verus" has been removed entirely — do not reintroduce it.
- Any biographical claim not confirmed by Geoff should be flagged, not invented.

## Open to-dos / needs Geoff's input

- [ ] London Gynaecology appears in BOTH Advisory clients and Track record (as CEO). Decide:
      keep in both, or show in one only.
- [ ] Writing: pages/tiles are built, but the three article titles are still placeholders and
      the article bodies are empty `.placeholder` scaffolds — replace with real pieces.
- [ ] Contact email is a placeholder `hello@geoffbamber.com` — set the real address.
- [ ] LinkedIn / social links are stubbed (`href="#"`) — add real URLs.
- [ ] Confirm exact credential names (HBS "AI Certification", Stanford GSB "Executive Education").
- [ ] Advisory sector tags (Gaming & interactive / Food & beverage / Private healthcare) —
      confirm or remove.

## Likely next steps

- Build inner pages reusing the same tokens: fuller About, an Advisory detail page, a Writing
  index that can hold real articles.
- Wire real links (LinkedIn, email).
- Deploy to geoffbamber.com (registrar TBD — needed before pointing the domain at a host).
